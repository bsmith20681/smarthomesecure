import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BannerRight from "@/public/images/cameraPageBG.png";
import FeatureHighlight from "@/components/FeatureHighlight";
import Head from "next/head";
import Logo from "../public/images/logo.png";
import CameraApp from "../public/images/cameraPageBG.png";

import c1 from "@/public/images/c1.png";
import c2 from "@/public/images/c2.png";
import c3 from "@/public/images/c3.png";

const HomeSecurity = () => {
  return (
    <Layout>
      <Head>
        <title>Cameras | ADT Security</title>
        <meta
          name="description"
          content="Explore ADT Home Security Cameras. Keep an eye on your home with our advanced indoor and outdoor cameras featuring HD video, night vision, and real-time alerts. Enhance your security with ADT's reliable surveillance solutions."
        />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.smarthomesecure.com/",
              name: "Cameras | ADT Security",
              description: "Explore ADT Home Security Cameras. Keep an eye on your home with our advanced indoor and outdoor cameras featuring HD video, night vision, and real-time alerts. Enhance your security with ADT's reliable surveillance solutions.",
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
      <Hero
        rightimage={BannerRight}
        paddingtop={"pt-0"}
        paddingtopscreen={"lg:pt-0"}
        paddingbottom={"pb-0"}
        paddingbottomscreen={"lg:pb-0"}
        bldisplay={"hidden"}
        beadcrumbdisplay={"flex"}
        bannertitle={`ADT Smart Security Cameras`}
        bannertitlespan={""}
        bannertitleright={""}
        bannermaxwidth={"max-w-[550px]"}
        breadcrumb1={"Home"}
        breadcrumb2={"Products"}
        breadcrumb3={"Security Cameras"}
        bannersideimagedisplay={"hidden"}
      />
      <div className="py-[25px] even:bg-[#ecf7ff] main-div">
        <FeatureHighlight
          imgSrc={c1}
          bgColor={"#fff"}
          title="Doorbell Camera"
          btnText="get a free quote"
          liLeft1="Intelligent alerts"
          liLeft2="Live HD video with HDR"
          liRight1="Talk and Listen"
          liRight2="Night vision"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
          imageDiv={0}
        />
        <FeatureHighlight
          bgColor={"#ecf7ff"}
          imgSrc={c2}
          title="Outdoor Camera"
          btnText="get a free quote"
          liLeft1="Intelligent alerts"
          liLeft2="Live HD video with HDR"
          liRight1="Talk and Listen"
          liRight2="Night vision"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
          imageDiv={1}
        />
        <FeatureHighlight
          imgSrc={c3}
          bgColor={"#fff"}
          title="Indoor Camera"
          btnText="get a free quote"
          liLeft1="Intelligent alerts"
          liLeft2="Live HD video with HDR"
          liRight1="Talk and Listen"
          liRight2="Night vision"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
          imageDiv={0}
        />
      </div>
    </Layout>
  );
};

export default HomeSecurity;
