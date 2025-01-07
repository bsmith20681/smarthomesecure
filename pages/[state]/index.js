import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import CameraApp from "@/public/images/cameraPageBG.png";
import prisma from "@/lib/prisma";

import Logo from "@/public/images/logo.png";
import { capitalize } from "@/helper/helperFunctions";

const StatePage = ({ stateName, allCities }) => {
  return (
    <Layout>
      <Head>
        <title>ADT Security in {stateName} | (833) 224-7221</title>
        <meta name="description" content={`Protect your home in${stateName} with ADT Home Security. Enjoy comprehensive security solutions, including 24/7 monitoring and smart home integration, tailored to keep your home safe and secure.`} />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: `https://www.smarthomesecure.com/${stateName}/`,
              name: "ADT Security",
              description: `Protect your home in ${stateName} with ADT Home Security. Enjoy comprehensive security solutions, including 24/7 monitoring and smart home integration, tailored to keep your home safe and secure.`,
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      id: `https://www.smarthomesecure.com/${stateName}/`,
                      name: stateName,
                    },
                  },
                ],
              },
              mainEntity: {
                "@type": "LocalBusiness",
                image: CameraApp,
                "@id": `https://www.smarthomesecure.com/${stateName}/`,
                name: `ADT Security in ${stateName}"`,
                url: `https://www.smarthomesecure.com/${stateName}/`,
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
        <h1 className="md:text-4xl text-2xl font-bold my-10">{stateName}</h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-6 md:my-12">
          {allCities.map((item, index) => (
            <Link key={index} className="text-adt-blue text-xl hover:text-adt-blue-dark transition delay-75" href={`${stateName.toLowerCase().replace(/\s+/g, "-")}/${item.city.replace(/\s+/g, "-").toLowerCase()}`}>
              {item.city}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StatePage;

export async function getStaticPaths() {
  try {
    const states = await prisma.new_cities.findMany({
      where: {
        state_name: {
          not: null
        }
      },
      select: {
        state_name: true
      },
      distinct: ['state_name']
    });

    const paths = states.map((stateData) => ({
      params: {
        state: stateData.state_name.toLowerCase().replace(/\s+/g, "-")
      }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error("Error in state getStaticPaths:", error);
    return {
      paths: [],
      fallback: false
    };
  }
}
export async function getStaticProps(context) {
  const { state } = context.params;

  // Replace hyphens with spaces for proper state formatting
  const formattedState = state.replace(/-/g, " ");

  try {
    // Make the Prisma query to get cities by state
    const allCities = await prisma.new_cities.findMany({
      where: {
        state_name: {
          equals: formattedState,
          mode: "insensitive", // Makes the query case-insensitive
        },
      },
      select: {
        city: true,
      },
    });

    // Capitalize the state name
    const stateName = capitalize(formattedState);

    // Return the props to the component
    return {
      props: {
        stateName,
        allCities,
      },
    };
  } catch (error) {
    // Log the error for debugging
    console.error("Error in getStaticProps:", error.message);
    console.error(error);

    // Optionally, you could return a 404 page if an error occurs
    return {
      notFound: true, // This will show the 404 page
    };
  }
}

/*

export async function getServerSideProps(context) {
  const { state } = context.query;

  //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/states.json`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all-cities-by-state?stateName=${state}`);
  const allCities = await res.json();

  const stateName = state;

  return {
    props: {
      stateName,
      allCities,
    },
  };
}

*/
