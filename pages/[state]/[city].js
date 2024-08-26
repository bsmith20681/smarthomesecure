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

const CityPage = ({ citiesDB, nearbyCitiesDB }) => {
  const router = useRouter();
  const { state, city } = router.query;

  const capitalize = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  return (
    <Layout>
      <Head>
        <title>
          ADT Security in {city}, {state} | (833) 224-7221
        </title>
        <meta name="description" content={`Protect your home in ${city}, ${state} with ADT Home Security. Enjoy comprehensive security solutions, including 24/7 monitoring and smart home integration, tailored to keep your home safe and secure.`} />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: `https://www.smarthomesecure.com/${state}/${city}`,
              name: "ADT Security",
              description: `Protect your home in ${city}, ${state} with ADT Home Security. Enjoy comprehensive security solutions, including 24/7 monitoring and smart home integration, tailored to keep your home safe and secure.`,
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
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      id: `https://www.smarthomesecure.com/${state}/${city}`,
                      name: city,
                    },
                  },
                ],
              },
              mainEntity: {
                "@type": "LocalBusiness",
                image: CameraApp,
                "@id": `https://www.smarthomesecure.com/${state}/${city}`,
                name: `ADT Security ${city}, ${state}"`,
                url: `https://www.smarthomesecure.com/${state}/${city}`,
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
      {console.log(nearbyCitiesDB)}
      <Hero
        rightimage={BannerRight}
        paddingtop={"pt-0"}
        paddingtopscreen={"lg:pt-0"}
        paddingbottom={"pb-0"}
        paddingbottomscreen={"lg:pb-0"}
        bldisplay={"hidden"}
        beadcrumbdisplay={"flex"}
        bannertitle={`ADT Home Security in`}
        bannertitlespan={`${capitalize(city)}, ${capitalize(state)}`}
        bannertitleright={""}
        bannermaxwidth={""}
        breadcrumb1={"Locations"}
        breadcrumb2={`${capitalize(state)}`}
        breadcrumb3={`${capitalize(city)}`}
        bannersideimagedisplay={"block"}
      />
      <BlueBar />
      <ServiceArea nearbyCities={nearbyCitiesDB} city={capitalize(city)} state={capitalize(state)} />
      <PricingChart bgprice={"bg-[#ecf7ff]"} />
      <CityBio city={capitalize(city)} state={capitalize(state)} />
      <HowToOrder margintoporder={"mt-0"} paddingtoporder={"pt-[60px]"} paddingbottomorder={"pb-[40px]"} margintoplistorder={"mb-0"} />
      <Testimonials paddingtoptest={"pt-[90px]"} paddingtoptestscreen={"lg:pt-[90px]"} />
    </Layout>
  );
};

export default CityPage;

export async function getServerSideProps(context) {
  const { city, state } = context.query;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all-cities`);
  const citiesDB = await res.json();

  const nearbyCitiesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/nearby-cities?cityName=${city}&state=${state}`);
  const nearbyCitiesDB = await nearbyCitiesRes.json();

  return {
    props: {
      citiesDB,
      nearbyCitiesDB,
    },
  };
}
