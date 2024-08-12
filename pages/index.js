import Head from "next/head";
import Layout from "../components/Layout";
import WhyADT from "@/components/WhyADT";
import Hero from "@/components/Hero";
import BlueBar from "@/components/BlueBar";
import Testimonials from "@/components/Testimonials";
import EquipmentSlider from "@/components/EquipmentSlider";
import HowToOrder from "@/components/HowToOrder";
import PricingChart from "@/components/PricingChart";
import BannerRight from "@/public/images/banner-right.png";
import Logo from "../public/images/logo.png";
import CameraApp from "../public/images/cameraPageBG.png";
import SpinText from "@/components/SpinText";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ADT Home Security | (833) 224-7221</title>
        <meta name="description" content="Secure your home with ADT Home Security. Enjoy 24/7 monitoring, smart home integration, and reliable protection against intrusions, fires, and more. Trust ADT for peace of mind and unparalleled safety." />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.smarthomesecure.com/",
              name: "ADT Security",
              description: "Secure your home with ADT Home Security. Enjoy 24/7 monitoring, smart home integration, and reliable protection against intrusions, fires, and more. Trust ADT for peace of mind and unparalleled safety.",
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
      <main>
        <Hero
          rightimage={BannerRight}
          paddingbottom={"pb-[70px]"}
          paddingbottomscreen={"lg:pb-[25px]"}
          paddingtop={"pt-[70px]"}
          paddingtopscreen={"lg:pt-[30px]"}
          bldisplay={"block"}
          beadcrumbdisplay={"hidden"}
          bannertitle={"ADT"}
          bannertitlespan={"Home Security System"}
          bannertitleright={"For You and Your Family"}
          bannermaxwidth={""}
          breadcrumb1={""}
          breadcrumb2={""}
          breadcrumb3={""}
          bannersideimagedisplay={"hidden"}
        />
        <BlueBar />
        <PricingChart bgprice={"bg-transparent"} />
        <WhyADT />
        <EquipmentSlider />
        <HowToOrder margintoporder={"mt-[-280px]"} paddingtoporder={"pt-[369px]"} paddingbottomorder={"pb-[30px]"} margintoplistorder={"mb-[-270px]"} />
        <Testimonials paddingtoptest={"pt-[320px]"} paddingtoptestscreen={"lg:pt-[440px]"} />
      </main>
    </Layout>
  );
}
