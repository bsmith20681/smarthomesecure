import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import BannerRight from "@/public/images/shopPageBanner.png";
import CityBio from "@/components/CityBio";
import Hero from "@/components/Hero";
import ServiceArea from "@/components/ServiceArea";
import BlueBar from "@/components/BlueBar";
import PricingChart from "@/components/PricingChart";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import Logo from "@/public/images/logo.png";
import CameraApp from "@/public/images/cameraPageBG.png";
import { capitalize } from "@/helper/helperFunctions";

const prisma = require("../../lib/prisma");

const CityPage = ({ citiesDB, cityName, stateName, nearbyCities, targetCityZipCode, targetCityState }) => {
  //removes hypen from city name if it exists
  const formattedState = stateName.replace(/-/g, " ");
  const formattedCity = cityName.replace(/-/g, " ");


  const capitalize = (word) => {
    if (!word) return "";

    return word
      .split(" ") // Split the string into an array of words
      .map((word) => (word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : "")) // Capitalize each word
      .join(" "); // Join the words back into a single string
  };

  return (
    <Layout>
      <Head>
        <title>
          ADT Security in {capitalize(formattedCity)}, {formattedState} | (833) 224-7221
        </title>
        <meta
          name="description"
          content={`Protect your home in ${capitalize(formattedCity)}, ${formattedState} with ADT Home Security. Enjoy comprehensive security solutions, including 24/7 monitoring and smart home integration, tailored to keep your home safe and secure.`}
        />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: `https://www.smarthomesecure.com/${stateName}/${cityName}`,
              name: "ADT Security",
              description: `Protect your home in ${capitalize(formattedCity)}, ${formattedState} with ADT Home Security. Enjoy comprehensive security solutions, including 24/7 monitoring and smart home integration, tailored to keep your home safe and secure.`,
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      id: `https://www.smarthomesecure.com/${stateName}/`,
                      name: formattedState,
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      id: `https://www.smarthomesecure.com/${stateName}/${cityName}`,
                      name: cityName,
                    },
                  },
                ],
              },
              mainEntity: {
                "@type": "LocalBusiness",
                image: CameraApp,
                "@id": `https://www.smarthomesecure.com/${stateName}/${cityName}`,
                name: `ADT Security ${formattedCity}, ${formattedState}"`,
                url: `https://www.smarthomesecure.com/${stateName}/${cityName}`,
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

      <Hero
        rightimage={`/images/state-home-images/${capitalize(formattedState)}.jpg`}
        paddingtop={"pt-0"}
        paddingtopscreen={"lg:pt-0"}
        paddingbottom={"pb-0"}
        paddingbottomscreen={"lg:pb-0"}
        bldisplay={"hidden"}
        beadcrumbdisplay={"flex"}
        bannertitle={`ADT Home Security in`}
        bannertitlespan={`${capitalize(formattedCity)}, ${capitalize(formattedState)}`}
        bannertitleright={""}
        bannermaxwidth={""}
        breadcrumb1={"Locations"}
        breadcrumb2={`${capitalize(formattedState)}`}
        breadcrumb2Link={`/${stateName.toLowerCase().replace(/\s+/g, "-")}`}
        breadcrumb3={`${capitalize(formattedCity)}`}
        bannersideimagedisplay={"block"}
      />
      <ServiceArea nearbyCities={nearbyCities} targetCityZipCode={targetCityZipCode} targetCityState={targetCityState} city={capitalize(formattedCity)} state={capitalize(formattedState)} />
      <PricingChart bgprice={"bg-[#ecf7ff]"} />
      <CityBio city={capitalize(formattedCity)} state={capitalize(formattedState)} />
      <HowToOrder margintoporder={"mt-0"} paddingtoporder={"pt-[60px]"} paddingbottomorder={"pb-[40px]"} margintoplistorder={"mb-0"} />
      <Testimonials paddingtoptest={"pt-[90px]"} paddingtoptestscreen={"lg:pt-[90px]"} />
    </Layout>
  );
};

export default CityPage;

export async function getStaticPaths() {
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
        zip: true,
        lat: true,
        lng: true,
        city: true,
        state_id: true,
        state_name: true,
      },
    });
    
    const paths = citiesDB.slice(0, 10000).map((cityData) => ({
      params: {
        state: cityData.state_name.toLowerCase().replace(/\s+/g, "-"),
        city: cityData.city.toLowerCase().replace(/\s+/g, "-"),
      },
    }));


    // Return paths with fallback behavior
    return { paths, fallback: false};
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error in getStaticPaths:", error.message);

    // Return an empty path to prevent build errors, or handle the error as you see fit
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps(context) {
  console.log("Starting getStaticPaths");
  const { city, state } = context.params;
  console.log(city,state, "params")

  // Replace hyphens with spaces for proper city formatting
  const formattedState = state.replace(/-/g, " ");
  const formattedCity = city.replace(/-/g, " ");
  console.log(formattedCity, "params")

  try {
    // Find the target city along with its latitude, longitude, ZIP code, and state
    const targetCity = await prisma.new_cities.findFirst({
      where: {
        city: {
          equals: formattedCity,
          mode: "insensitive", // Case-insensitive match for city name
        },
        state_name: {
          equals: formattedState,
          mode: "insensitive", // Case-insensitive match for state name
        },
      },
      select: {
        lat: true,
        lng: true,
        zip: true,
        state_name: true,
      },
    });

    console.log(targetCity)


    // If the city is not found, return a 404
    if (!targetCity) {
      return {
        notFound: true,
      };
    }

    // Prepare the point geometry for the geospatial query
    const pointGeometry = `POINT(${targetCity.lng} ${targetCity.lat})`;

    // Query for nearby cities within a 30-mile radius, excluding the target city
    const nearbyCitiesFromDB = await prisma.$queryRaw`
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

    // Convert Decimal fields (like lat, lng, miles_from_dt) to numbers
    const nearbyCities = nearbyCitiesFromDB.map((city) => ({
      ...city,
      lat: city.lat.toNumber(),
      lng: city.lng.toNumber(),
      miles_from_dt: city.miles_from_dt.toNumber(),
    }));


    // Capitalize the state name if needed (assuming you have a capitalize function)
    const stateName = capitalize(state);
    const cityName = city;

    const targetCityZipCode = targetCity.zip;
    const targetCityState = targetCity.state_name;

    // Return the city details and nearby cities as props
    return {
      props: {
        stateName,
        cityName,
        nearbyCities,
        targetCityZipCode,
        targetCityState,
      },
    };
  } catch (error) {
    // Log the error for debugging
    console.error("Error in getStaticProps:", error.message);

    // Return a 500 error or handle the error accordingly
    return {
      notFound: true, // Optionally, show a 404 page if an error occurs
    };
  }
}

