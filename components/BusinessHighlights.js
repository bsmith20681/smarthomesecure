import { BuildingOffice2Icon, CalendarDaysIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";

const BusinessHighlights = () => {
  return (
    <section className="bg-adt-blue-dark text-white py-8 md:py-10">
      <div className="container grid-cols-3 grid">
        <div className="flex">
          <p>149 years in business</p>
        </div>
        <div>
          <CalendarDaysIcon className="h-6 w-6" aria-hidden="true" />6 monitoring stations
        </div>
        <div>
          <DevicePhoneMobileIcon className="h-6 w-6" aria-hidden="true" />
          Remote Access
        </div>
      </div>
    </section>
  );
};

export default BusinessHighlights;
