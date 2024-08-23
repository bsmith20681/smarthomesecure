const prisma = require("../../lib/prisma");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { cityName, state } = req.query;

  if (!cityName || !state) {
    return res.status(400).json({ message: "City name and state are required" });
  }

  try {
    // Find the target city along with its ZIP code and state
    const targetCity = await prisma.new_cities.findFirst({
      where: {
        city: {
          equals: cityName,
          mode: "insensitive",
        },
        state_name: {
          equals: state,
          mode: "insensitive",
        },
      },
      select: {
        lat: true,
        lng: true,
        zip: true,
        state_name: true,
      },
    });

    if (!targetCity) {
      return res.status(404).json({ message: `City ${cityName}, ${state} not found` });
    }

    const pointGeometry = `POINT(${targetCity.lng} ${targetCity.lat})`;

    const nearbyCities = await prisma.$queryRaw`
      SELECT 
          city,
          state_name,  
          lat,
          lng,
          zip,
          round(
            (ST_Distance(
                geog_point,
                ST_GeogFromText(${pointGeometry})
            ) / 1609.344)::numeric, 2
          ) AS miles_from_dt
      FROM 
          "new_cities"
      WHERE 
          ST_DWithin(
              geog_point,
              ST_GeogFromText(${pointGeometry}),
              30 * 1609.34  -- 30 miles converted to meters
          )
           AND NOT (lat = ${targetCity.lat} AND lng = ${targetCity.lng})  -- Exclude the target city itself
      ORDER BY 
          miles_from_dt ASC;
    `;

    // Return the target city's ZIP code, state, and nearby cities
    return res.status(200).json({
      targetCityZipCode: targetCity.zip,
      targetCityState: targetCity.state_name,
      nearbyCities,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
