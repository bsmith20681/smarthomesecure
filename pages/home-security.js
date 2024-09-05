import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BannerRight from "@/public/images/home-security-banner.png";
import FeatureHighlight from "@/components/FeatureHighlight";
import Head from "next/head";
import Logo from "../public/images/logo.png";
import CameraApp from "../public/images/cameraPageBG.png";

import c1 from "@/public/images/24-7-monitoring.png";
import c2 from "@/public/images/touch-screen-keypad.png";
import c3 from "@/public/images/24-7-monitoring-1.png";

const HomeSecurity = () => {
  return (
    <Layout>
      <Head>
        <title>Home Security | ADT Security</title>
        <meta
          name="description"
          content="Explore ADT Home Security. Safeguard your home with our advanced security systems featuring real-time alerts, professional monitoring, and smart home integration. Trust ADT for comprehensive protection and peace of mind."
        />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.smarthomesecure.com/home-security/",
              name: "Home Security | ADT Security",
              description: "Explore ADT Home Security. Safeguard your home with our advanced security systems featuring real-time alerts, professional monitoring, and smart home integration. Trust ADT for comprehensive protection and peace of mind.",
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
        bannertitle={`ADT Home Security`}
        bannertitlespan={"Home Security"}
        bannertitleright={""}
        bannermaxwidth={"max-w-[550px]"}
        breadcrumb1={"Home"}
        breadcrumb2={"Security Equipment"}
        breadcrumb2Link={"/security-equipment"}
        breadcrumb3={""}
        bannersideimagedisplay={"hidden"}
      />
      <div className="py-[25px] even:bg-[#ecf7ff] main-div">
        <FeatureHighlight
          imgSrc={c1}
          bgColor={"#fff"}
          title="24/7 Monitoring"
          btnText="get a free quote"
          liLeft1="6 monitoring stations"
          liLeft2="Instant emergency alerts"
          liRight1="Professional response team"
          liRight2="Continuous protection"
          description="Stay protected around the clock with ADT’s 24/7 monitoring services. Trained professionals respond instantly to alarms, ensuring rapid assistance for emergencies like break-ins, fires, and medical crises. Rest easy knowing help is always just a call away."
          imageDiv={0}
        />
        <FeatureHighlight
          bgColor={"#ecf7ff"}
          imgSrc={c2}
          title="Touch Screen Keypad"
          btnText="get a free quote"
          liLeft1="Sleek design"
          liLeft2="Easy arming/disarming"
          liRight1="Live camera access"
          liRight2="Smart home integration"
          description="Control your security system effortlessly with the ADT Touch Screen Keypad. Its sleek, user-friendly interface allows you to arm and disarm your system, view live camera feeds, and manage smart home devices—all at the touch of a button."
          imageDiv={1}
        />
        <FeatureHighlight
          imgSrc={c3}
          bgColor={"#fff"}
          title="Wireless Sensors"
          btnText="get a free quote"
          liLeft1="No wires"
          liLeft2="Door/window monitoring"
          liRight1="Instant alerts"
          liRight2="Easy to move"
          description="ADT’s Wireless Sensors keep your home secure without the hassle of wires. Easily installed on doors and windows, these sensors trigger alerts for unauthorized entry, giving you peace of mind knowing your home is protected from potential intruders."
          imageDiv={0}
        />
      </div>
    </Layout>
  );
};

export default HomeSecurity;
