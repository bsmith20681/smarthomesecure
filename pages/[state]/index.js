import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import CameraApp from "@/public/images/cameraPageBG.png";
import StateList from "@/public/states.json";
import Logo from "@/public/images/logo.png";

const StatePage = () => {
  const router = useRouter();
  const { state } = router.query;
  const [loading, setLoading] = useState(true);
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    if (StateList.length > 0) {
      const filteredData = StateList.filter((item) => item.stateName === state);
      setStateData(filteredData);
      setLoading(false);
    }
  }, [state]);

  if (loading) {
    return (
      <Layout>
        <Head>
          <title>ADT Security in {state} | (833) 224-7221</title>
          <meta name="description" content={`Secure your ${state} home with ADT Home Security. Benefit from state-wide coverage, 24/7 monitoring, and advanced security solutions designed to keep your property and loved ones safe.`} />
          <script
            type="application/ld+json"
            id="geo-pages-json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                url: `https://www.smarthomesecure.com/${state}/`,
                name: "ADT Security",
                description: `Secure your ${state} home with ADT Home Security. Benefit from state-wide coverage, 24/7 monitoring, and advanced security solutions designed to keep your property and loved ones safe.`,
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        id: `https://www.smarthomesecure.com/${state}/`,
                        name: state,
                      },
                    },
                  ],
                },
                mainEntity: {
                  "@type": "LocalBusiness",
                  image: CameraApp,
                  "@id": `https://www.smarthomesecure.com/${state}/`,
                  name: `ADT Security in ${state}"`,
                  url: `https://www.smarthomesecure.com/${state}/`,
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
          <h1 className="md:text-4xl text-2xl font-bold my-10">Loading...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>ADT Home Security | (833) 224-7221</title>
        <meta name="description" content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store for expert advice." />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.vivint.com/locations/kansas/spring-hill",
              name: "ADT Security",
              description: "Home Security Systems for Spring Hill, Kansas",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      id: "https://www.vivint.com/locations",
                      name: "Locations",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      id: "https://www.vivint.com/locations/kansas",
                      name: "Kansas",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      id: "https://www.vivint.com/locations/kansas/spring-hill",
                      name: "Spring Hill",
                    },
                  },
                ],
              },
              mainEntity: {
                "@type": "LocalBusiness",
                image: "https://www.vivint.com/sites/default/files/image/2019-12/service-area-default.jpg",
                "@id": "https://www.vivint.com/locations/kansas/spring-hill",
                name: "Vivint Spring Hill, Kansas",
                url: "https://www.vivint.com/locations/kansas/spring-hill",
                parentOrganization: {
                  "@type": "Organization",
                  brand: {
                    "@type": "Brand",
                    logo: "https://images.vivintcdn.com/global/vivint.com/global/logos/vivint/2020/vivint-logo-full-black.svg",
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
        <h1 className="md:text-4xl text-2xl font-bold my-10">{state}</h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-6 md:my-12">
          {stateData[0]?.cities.map((item, index) => (
            <Link key={index} className="text-adt-blue text-xl hover:text-adt-blue-dark transition delay-75" href={`${state}/${item}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StatePage;
