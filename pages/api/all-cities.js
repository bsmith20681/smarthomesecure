const prisma = require("../../lib/prisma");

export default async function handler(req, res) {
  try {
    const citiesDB = await prisma.new_cities.findMany({
      select: {
        id: true,
        zip: true,
        lat: true,
        lng: true,
        city: true,
        state_id: true,
        state_name: true,
      },
    });
    res.status(200).json(citiesDB);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "An error occurred while fetching cities" });
  }
}
