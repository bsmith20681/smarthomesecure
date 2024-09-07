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

const Cameras = () => {
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
        bannertitle={`ADT Smart`}
        bannertitlespan={"Security Cameras"}
        bannertitleright={""}
        bannermaxwidth={"max-w-[550px]"}
        breadcrumb1={"Home"}
        breadcrumb2={"Security Cameras"}
        breadcrumb2Link={"/cameras"}
        breadcrumb3={""}
        bannersideimagedisplay={"hidden"}
      />
      <div className="py-[25px] even:bg-[#ecf7ff] main-div">
        <FeatureHighlight
          imgSrc={c1}
          bgColor={"#fff"}
          title="Doorbell Camera"
          btnText="get a free quote"
          liLeft1="Intelligent alerts"
          liLeft2="Live HD video"
          liRight1="Talk and Listen"
          liRight2="Night vision"
          description="Keep your front door secure with the ADT Doorbell Camera. Get instant alerts, two-way audio, and HD video to see, hear, and speak to visitors from anywhere. Whether you're home or away, monitor packages and unexpected visitors with ease."
          imageDiv={0}
        />
        <FeatureHighlight
          bgColor={"#ecf7ff"}
          imgSrc={c2}
          title="Outdoor Camera"
          btnText="get a free quote"
          liLeft1="Intelligent alerts"
          liLeft2="Live HD video"
          liRight1="Talk and Listen"
          liRight2="Night vision"
          description="Protect the outside of your home with the ADT Outdoor Camera. Built for all-weather durability, this camera provides clear, HD footage day and night, with motion alerts and live viewing to keep an eye on your property 24/7."
          imageDiv={1}
        />
        <FeatureHighlight
          imgSrc={c3}
          bgColor={"#fff"}
          title="Indoor Camera"
          btnText="get a free quote"
          liLeft1="Intelligent alerts"
          liLeft2="Live HD video"
          liRight1="Talk and Listen"
          liRight2="Night vision"
          description="Stay connected with your home using the ADT Indoor Camera. With crystal-clear video and real-time notifications, you can monitor rooms inside your home, interact with family members, and receive alerts for any unexpected activity."
          imageDiv={0}
        />
      </div>
    </Layout>
  );
};

export default Cameras;
