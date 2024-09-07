import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  // Generate the date once at build time, ensuring it stays the same on both server and client
  const currentDate = new Date().toISOString().slice(0, 19).replace("T", " ") + " +00:00";

  const states = [
    "alabama",
    "alaska",
    "arizona",
    "arkansas",
    "california",
    "colorado",
    "connecticut",
    "delaware",
    "florida",
    "georgia",
    "hawaii",
    "idaho",
    "illinois",
    "indiana",
    "iowa",
    "kansas",
    "kentucky",
    "louisiana",
    "maine",
    "maryland",
    "massachusetts",
    "michigan",
    "minnesota",
    "mississippi",
    "missouri",
    "montana",
    "nebraska",
    "nevada",
    "new-hampshire",
    "new-jersey",
    "new-mexico",
    "new-york",
    "north-carolina",
    "north-dakota",
    "ohio",
    "oklahoma",
    "oregon",
    "pennsylvania",
    "rhode-island",
    "south-carolina",
    "south-dakota",
    "tennessee",
    "texas",
    "utah",
    "vermont",
    "virginia",
    "washington",
    "west-virginia",
    "wisconsin",
    "wyoming",
  ];

  return {
    props: {
      currentDate,
      states,
    },
  };
};

const StateSiteMap = ({ currentDate, states }) => {
  return (
    <>
      <Head>
        <title>State HTML Sitemap - SmartHomeSecure</title>
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
            {states.map((state, index) => (
              <tr key={index}>
                <td>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_URL}${state}`}>{`${process.env.NEXT_PUBLIC_BASE_URL}${state}`}</a>
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

export default StateSiteMap;
