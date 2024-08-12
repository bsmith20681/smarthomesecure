import Layout from "@/components/Layout";
import PricingChart from "@/components/PricingChart";
import Logo from "../public/images/logo.png";
import CameraApp from "../public/images/cameraPageBG.png";
import Head from "next/head";

const Pricing = () => {
  return (
    <Layout>
      <Head>
        <title>Pricing & Plans | ADT Security</title>
        <meta name="description" content="Discover ADT Home Security's affordable pricing plans. Choose the perfect package to fit your needs and budget, with flexible options for 24/7 monitoring, smart home integration, and advanced security features." />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.smarthomesecure.com/",
              name: "Pricing & Plans | ADT Security",
              description: "Discover ADT Home Security's affordable pricing plans. Choose the perfect package to fit your needs and budget, with flexible options for 24/7 monitoring, smart home integration, and advanced security features.",
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
      <PricingChart />
    </Layout>
  );
};

export default Pricing;
