// scripts/generate-sitemap.ts
import fs from 'fs'
import path from 'path'
import prisma from "../lib/prisma.js"

async function generateSitemap() {
    const baseUrl = "https://www.smarthousesecure.com"

  // Get cities from database
  const citiesDB = await prisma.new_cities.findMany({
    where: {
      AND: [
        { state_name: { not: null } },
        { city: { not: null } },
        { lat: { not: null } },
        { lng: { not: null } }
      ]
    },
    select: {
      city: true,
      state_name: true,
    },
    distinct: ['city', 'state_name'],
    orderBy: [
      { state_name: 'asc' },
      { city: 'asc' }
    ],
  })

  // Static states array
  const states = [
    "alabama", "alaska", "arizona", "arkansas", "california", "colorado",
    "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho",
    "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana",
    "maine", "maryland", "massachusetts", "michigan", "minnesota",
    "mississippi", "missouri", "montana", "nebraska", "nevada",
    "new-hampshire", "new-jersey", "new-mexico", "new-york",
    "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon",
    "pennsylvania", "rhode-island", "south-carolina", "south-dakota",
    "tennessee", "texas", "utah", "vermont", "virginia", "washington",
    "west-virginia", "wisconsin", "wyoming"
  ]

  // Generate all URLs with their metadata
  const urls = [
    // Static pages
    { url: `${baseUrl}`, changefreq: 'daily', priority: 1.0 },
    { url: `${baseUrl}/cameras`, changefreq: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/home-security`, changefreq: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/home-automation`, changefreq: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, changefreq: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/locations`, changefreq: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`, changefreq: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, changefreq: 'monthly', priority: 0.6 },
    
    // State pages
    ...states.map(state => ({
      url: `${baseUrl}/${state}`,
      changefreq: 'weekly',
      priority: 0.7
    })),
    
    // City pages
    ...citiesDB.map(({ state_name, city }) => ({
      url: `${baseUrl}/${state_name.toLowerCase().replace(/\s+/g, "-")}/${city.toLowerCase().replace(/\s+/g, "-")}`,
      changefreq: 'weekly',
      priority: 0.6
    }))
  ]

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(({ url, changefreq, priority }) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
    `).join('')}
  </urlset>`

  // Write directly to the out directory
  const outDir = path.join(process.cwd(), 'out')
  
  // Check if out directory exists
  if (!fs.existsSync(outDir)) {
    console.error('Error: "out" directory not found. Please ensure your Next.js export has completed.')
    process.exit(1)
  }

  // Write the sitemap file to the out directory
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully in out directory!')

  // Optionally generate robots.txt if it doesn't exist
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`
  
  fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt)
  console.log('robots.txt generated successfully!')
}

generateSitemap()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })