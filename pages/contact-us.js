import Layout from "@/components/Layout";
import Head from "next/head";
import { BuildingOfficeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Logo from "../public/images/logo.png";
import CameraApp from "../public/images/cameraPageBG.png";

const ContactUs = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us ADT Home Security | (833) 224-7221</title>
        <meta name="description" content="Get in touch with ADT Home Security. Our friendly support team is ready to assist you with inquiries, support, and more. Contact us today for personalized security solutions and exceptional customer service." />
        <script
          type="application/ld+json"
          id="geo-pages-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.smarthomesecure.com/",
              name: "Contact Us ADT Home Security | (833) 224-7221",
              description: "Get in touch with ADT Home Security. Our friendly support team is ready to assist you with inquiries, support, and more. Contact us today for personalized security solutions and exceptional customer service.",
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
      <div className="bg-white">
        <h1 className="md:text-4xl text-2xl font-bold text-center mt-10">Contact Us</h1>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  If you need to book an installation appointment, reschedule an existing one, or have any questions about your new ADT-monitored security system, we’re here to help. Feel free to call us at 833-224-7221. Our office hours are Monday to
                  Thursday, 9:00 AM to 7:00 PM, and Saturday to Sunday, 9:00 AM to 5:00 PM.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-900">
                    <p>1 (833) 224-7221</p>
                    <p className="mt-1">Mon-Thu 9AM to 7pm and Sat-Sun 9AM to 5PM</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <BuildingOfficeIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-900">
                    <p>11646 Lakeside Crossing Ct St. Louis, MO 63146</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
