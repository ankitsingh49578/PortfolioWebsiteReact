import { useState } from "react";
import "../theme/theme.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar2({ darkMode, setDarkMode }) {
  const [activeIndex, setActiveIndex] = useState(); // ✅ State to track active nav item

  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    setDarkMode(!darkMode);
  };

  return (
    <Disclosure as="nav" className="mb-16 md:mb-4">
      <div className="">
        <div className="fixed px-6 dark-theme top-0 w-full z-50 flex h-16 items-center justify-between bg-blue-500 text-white">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-600 dark:hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setActiveIndex(index)} // ✅ Update active on click
                    className={classNames(
                      index === activeIndex
                        ? "dark:bg-[#03c0c6] bg-blue-600 dark:text-gray-900"
                        : "dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-blue-600 dark:hover:text-white",
                      "rounded-md px-3 py-2 text-md font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* <button onClick={() => setDarkMode(!darkMode)} className='dark:hover:bg-gray-800 hover:bg-blue-400 rounded-full'>{darkMode ? <img src='./light.png' alt="dark" className='w-10 h-10'/> : <img src='./dark.png' alt="light" className='w-10 h-10'/>}</button> */}
          <button
            className={`btn ${isChecked ? "btn--checked" : "bg-gray-500"}`}
            onClick={handleToggle}
          >
            <div className="ripple ripple--dark"></div>
            <div className="ripple ripple--light"></div>

            <div className="toggle toggle--dark"></div>
            <div className="toggle toggle--light"></div>
          </button>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden fixed top-14 left-0 w-full dark-theme bg-slate-200 bg-white/60 backdrop-blur-md text-black shadow-md z-50">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navItems.map((item, index) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => setActiveIndex(index)} // ✅ Also handle in mobile
              className={classNames(
                index === activeIndex
                  ? "dark:bg-[#03c0c6] bg-blue-500 text-white dark:text-gray-900"
                  : "dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-blue-500 hover:text-white dark:hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
