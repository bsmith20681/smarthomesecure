const prisma = require("../../lib/prisma");

export default async function handler(req, res) {
  const { stateName } = req.query; // Assuming the state name is passed in the query string

  try {
    const citiesDB = await prisma.new_cities.findMany({
      where: {
        state_name: {
          equals: stateName,
          mode: "insensitive", // Makes the query case-insensitive
        },
      },
      select: {
        city: true,
      },
    });

    res.status(200).json(citiesDB);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "An error occurred while fetching cities" });
  }
}
