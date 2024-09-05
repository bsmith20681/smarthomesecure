import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { useRouter } from "next/router";
import StateList from "@/public/states.json";
import Logo from "../public/images/logo.png";
import CameraApp from "../public/images/cameraPageBG.png";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const stateAbbreviations = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

const Locations = () => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Service Areas | ADT Security</title>
        <meta name="description" content="Discover ADT Home Security service areas. Check if ADT services are available in your region and enjoy tailored security solutions. Protect your home with ADT's trusted and reliable security systems." />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.smarthomesecure.com/",
              name: "Cameras | ADT Security",
              description: "Discover ADT Home Security service areas. Check if ADT services are available in your region and enjoy tailored security solutions. Protect your home with ADT's trusted and reliable security systems.",
              mainEntity: {
                "@type": "LocalBusiness",
                image: CameraApp,
                "@id": "https://www.smarthomesecure.com/",
                url: "https://www.smarthomesecure.com/",
                parentOrganization: {
                  "@type": "Organization",
                  brand: {
                    "@type": "Brand",
                    logo: Logo,
                  },
                },
                additionalType: ["http://www.productontology.org/id/Home_security", "http://www.productontology.org/id/Home_automation"],
                telephone: "(833) 224-7221",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
                    opens: "09:00",
                    closes: "19:00",
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <div className="container">
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const stateName = geo.properties.name;
                const abbreviation = stateAbbreviations[stateName];

                return (
                  <g key={geo.rsmKey}>
                    <Geography
                      onClick={() => {
                        const stateName = geo.properties.name;
                        return router.push(stateName.toLowerCase());
                      }}
                      style={{ default: { fill: "#0061aa" }, hover: { fill: "#00233D", cursor: "pointer" } }}
                      stroke="white"
                      key={geo.rsmKey}
                      geography={geo}
                    />
                    {abbreviation && (
                      <Marker coordinates={centroid}>
                        <text textAnchor="middle" style={{ fontFamily: "Cabin", fill: "white", fontSize: 10 }}>
                          {abbreviation}
                        </text>
                      </Marker>
                    )}
                  </g>
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="container my-6 md:my-12">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
          {StateList.map((state, index) => {
            return (
              <Link key={"state" + index} className="text-adt-blue text-xl hover:text-adt-blue-dark transition delay-75" href={state.stateName.toLowerCase()}>
                {state.stateName}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Locations;
