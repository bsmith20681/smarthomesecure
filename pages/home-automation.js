import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BannerRight from "@/public/images/cameraPageBG.png";
import FeatureHighlight from "@/components/FeatureHighlight";
import Head from "next/head";
import Logo from "../public/images/logo.png";
import CameraApp from "../public/images/cameraPageBG.png";

import c1 from "@/public/images/mobile-app-page.png";
import c2 from "@/public/images/front-door.png";
import c3 from "@/public/images/hallway.png";

const HomeAutomation = () => {
  return (
    <Layout>
      <Head>
        <title>Home Automation | ADT Security</title>
        <meta
          name="description"
          content="Discover ADT Home Automation. Simplify your life with our smart home solutions, offering seamless control of lighting, thermostats, locks, and more from anywhere. Experience convenience and enhanced security with ADT’s innovative home automation systems."
        />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.smarthomesecure.com/home-automation/",
              name: "Home Automation | ADT Security",
              description:
                "Discover ADT Home Automation. Simplify your life with our smart home solutions, offering seamless control of lighting, thermostats, locks, and more from anywhere. Experience convenience and enhanced security with ADT’s innovative home automation systems.",
              mainEntity: {
                "@type": "LocalBusiness",
                image: CameraApp,
                "@id": "https://www.smarthomesecure.com/home-automation/",
                url: "https://www.smarthomesecure.com/home-automation/",
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
        bannertitle={`ADT `}
        bannertitlespan={"Home Automation"}
        bannertitleright={""}
        breadcrumb1={"Home"}
        breadcrumb2={"Home Automation"}
        breadcrumb2Link={"/home-automation"}
        breadcrumb3={""}
        bannermaxwidth={"max-w-[550px]"}
        bannersideimagedisplay={"hidden"}
      />
      <div className="py-[25px] even:bg-[#ecf7ff] main-div">
        <FeatureHighlight
          imgSrc={c1}
          bgColor={"#fff"}
          title="Mobile App"
          btnText="get a free quote"
          liLeft1="Remote system control"
          liLeft2="Real-time notifications"
          liRight1="Live video streaming"
          liRight2="Smart home device integration"
          description="Stay connected to your home with the ADT Mobile App. Monitor your security system, view live camera feeds, and control smart devices, all from your phone—anytime, anywhere."
          imageDiv={0}
        />
        <FeatureHighlight
          bgColor={"#ecf7ff"}
          imgSrc={c2}
          title="Automatic Doorlocks"
          btnText="get a free quote"
          liLeft1="Remote locking/unlocking"
          liLeft2="Custom access codes"
          liRight1="Entry alerts"
          liRight2="Smartphone control"
          description="Secure your home with ADT’s Automatic Door Locks. Lock and unlock doors remotely, monitor entry, and grant access from your smartphone for seamless security."
          imageDiv={1}
        />
        <FeatureHighlight
          imgSrc={c3}
          bgColor={"#fff"}
          title="Smart Thermostats"
          btnText="get a free quote"
          liLeft1="Remote temperature control"
          liLeft2="Custom schedules"
          liRight1="Energy-saving features"
          liRight2="Sleek Design"
          description="Save energy and stay comfortable with ADT Smart Thermostats. Adjust the temperature remotely and create schedules to maximize energy efficiency in your home."
          imageDiv={0}
        />
      </div>
    </Layout>
  );
};

export default HomeAutomation;
