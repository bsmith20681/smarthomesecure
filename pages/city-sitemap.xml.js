import Head from "next/head";
import Link from "next/link";

const prisma = require("../lib/prisma");

export const getStaticProps = async () => {
  // Generate the date once at build time, ensuring it stays the same on both server and client
  const currentDate = new Date().toISOString().slice(0, 19).replace("T", " ") + " +00:00";

  try {
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
        id: true,
        city: true,
        state_id: true,
        state_name: true,
      },
    });

    // Map cities to paths

    return {
      props: {
        currentDate,
        citiesDB,
      },
    };
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error in getStaticPaths:", error.message);
  }
};

const CitySiteMap = ({ currentDate, citiesDB }) => {
  return (
    <>
      <Head>
        <title>City HTML Sitemap - SmartHomeSecure</title>
      </Head>

      <style jsx>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #f4f4f9;
        }
        h1 {
          font-size: 24px;
          color: #333;
        }
        p {
          font-size: 14px;
          color: #555;
        }
        a {
          color: #05809e;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th,
        td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #4275f4;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #f7f7f7;
        }

        .container {
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          padding-right: 0.75rem;
          padding-left: 0.75rem;
        }
      `}</style>

      <div className="container" style={{ marginTop: "30px" }}>
        <p>
          This HTML Sitemap Index file contains <strong>3</strong> sitemaps:
        </p>
        <Link href="/sitemap.xml">Go back to sitemap</Link>

        <table>
          <thead>
            <tr>
              <th>Sitemap</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {citiesDB.map((data, index) => (
              <tr key={index}>
                <td>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_URL}${data.state_name.toLowerCase().replace(/\s+/g, "-")}/${data.city.toLowerCase().replace(/\s+/g, "-")}`}>{`${process.env.NEXT_PUBLIC_BASE_URL}${data.state_name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${data.city.toLowerCase().replace(/\s+/g, "-")}`}</a>
                </td>
                <td>{currentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CitySiteMap;
