import { PhoneIcon } from "@heroicons/react/24/solid";

const CallButton = () => {
  return (
    <div className="lg:flex lg:flex-1">
      <a href="#" className="bg-adt-orange hover:bg-adt-orange-600 delay-75 flex gap-3 font-bold transition text-base md:text-lg text-white px-4 py-3">
        <PhoneIcon className="h-6 w-6" aria-hidden="true" /> Call Now! (833) 224-7221
      </a>
    </div>
  );
};

export default CallButton;
