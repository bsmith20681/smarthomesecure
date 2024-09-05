import { useState } from "react";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

import Logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "#" },
  { name: "Plans and Pricing", href: "/pricing" },
  { name: "Service Areas", href: "/locations" },
  { name: "Contact Us", href: "/contact-us" },
];

const equipmentNavigation = [
  { name: "Cameras", href: "/cameras" },
  { name: "Security Equipment", href: "/home-security" },
  { name: "Smart Home Automation", href: "/home-automation" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="z-50 sticky top-0 bg-white">
      <nav className="container flex flex-wrap items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Secure 24 Authorized Dealer for ADT</span>
            <Image className="h-12 w-auto" src={Logo} alt="company logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) =>
            item.name === "Equipment" ? (
              <PopoverGroup key={`popoverGroup-${index}`} className="hidden lg:flex lg:gap-x-12">
                <Popover key={`popover-${index}`} className="relative">
                  <PopoverButton key={`popoverButton-${index}`} className="flex items-center gap-x-1 text-base md:text-lg text-gray-900 hover:text-slate-600">
                    Equipment
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </PopoverButton>

                  <Transition enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                    <PopoverPanel key={`popoverPanel-${index}`} className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-sm bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {equipmentNavigation.map((equipmentItem, equipmentIndex) => (
                          <div key={`equipment-${equipmentIndex}`} className="group relative flex rounded-lg p-4 text-sm leading-6">
                            <div className="flex-auto">
                              <Link href={equipmentItem.href} className="block text-base md:text-lg text-gray-900 hover:text-slate-600 transition delay-75">
                                {equipmentItem.name}
                                <span className="absolute inset-0" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Transition>
                </Popover>
              </PopoverGroup>
            ) : (
              <Link key={`link-${item.name}`} href={item.href} className="text-base md:text-lg hover:text-slate-600 transition delay-75">
                {item.name}
              </Link>
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="bg-adt-orange hover:bg-adt-orange-600 delay-75 flex gap-3 font-bold transition text-base md:text-lg text-white px-4 py-3">
            <PhoneIcon className="h-6 w-6" aria-hidden="true" /> Call Now! (833) 224-7221
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Secure 24 Authorized Dealer for ADT</span>
              <Image className="h-12 w-auto" src={Logo} alt="company logo" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) =>
                  item.name === "Equipment" ? (
                    <Disclosure key={"dis" + index} as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Equipment
                            <ChevronDownIcon className={`${open ? "rotate-180" : ""} h-5 w-5 flex-none`} aria-hidden="true" />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {equipmentNavigation.map((item, index) => (
                              <DisclosureButton key={"equip" + index} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link key={"nav" + item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-bas">
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <div className="py-6">
                <a href="tel:18332247221" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Call Now! (833) 224-7221
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
