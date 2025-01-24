"use client";
import {
    Bars3Icon,
    ChevronDownIcon,
  } from "@heroicons/react/24/solid";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface DropdownItem {
  label: string;
  path: string;
}

interface NavigationItem {
  label: string;
  path: string;
  dropdownItems?: DropdownItem[];
}

const navigationItems: NavigationItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    dropdownItems: [
      { label: "Building Works", path: "/services/1" },
      { label: "Road Works", path: "/services/2" },
      { label: "Specialized Engineering Solutions", path: "/services/3" },
      { label: "Construction Projects", path: "/services/4" },
    ]
  },
  {
    label: "Pages",
    path: "/pages",
    dropdownItems: [
      { label: "Home", path: "/" }, 
      { label: "About Us", path: "/aboutus" },
      { label: "Our Services", path: "/services" },
      { label: "Portfolio", path: "/portfolio" },
      { label: "Single Project", path: "/singleproject" },
      { label: "Single Service", path: "/singlesevices" },
      { label: "Contact Us", path: "/contactus" }
    ]
  },
  {
    label: "News",
    path: "/news",
    dropdownItems: [
      { label: "Latest Updates", path: "/news/latest" },
      { label: "Press Releases", path: "/news/press" },
      { label: "Blog", path: "/news/blog" },
      { label: "Events", path: "/news/events" },
      { label: "Newsletter", path: "/news/newsletter" }
    ]
  },
  { label: "Contacts", path: "/contactus" }
];

export default function MainNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [toggle, setToggle]=useState(false);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleKeyPress = (e: React.KeyboardEvent, label: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(label);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative">
      <div 
        className="hidden sm:flex sm:flex-wrap gap-11  items-center p-5 animate-fade-left whitespace-nowrap text-sky-950 max-md:gap-8 max-md:p-4 max-sm:gap-5 max-sm:justify-between max-sm:p-3">
        {navigationItems.map((item) => (
          <div key={item.label} className="relative ">
            {item.dropdownItems ? (
              <div
                className="flex gap-1.5 items-center cursor-pointer"
                onClick={() => handleDropdownToggle(item.label)}
                onKeyPress={(e) => handleKeyPress(e, item.label)}
                tabIndex={0}
                role="button"
                aria-expanded={openDropdown === item.label}
                aria-haspopup="true"
              >
                <div className="text-2xl leading-none max-md:text-xl max-sm:text-lg hover:text-emerald-600">
                  {item.label}
                </div>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                    />
                {/* <i className="ti ti-chevron-down text-sm text-sky-950" /> */}
                {openDropdown === item.label && (
                  <div className="absolute flex flex-col top-full left-0 mt-2 bg-white rounded-2xl shadow-lg py-2 min-w-[200px] z-50">
                    {item.dropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        href={dropItem.path}
                        className="block px-4 py-2 hover:bg-emerald-500 hover:text-white text-lg  transition-colors duration-200"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.path}
                className="gap-1.5 text-2xl leading-none cursor-pointer max-md:text-xl max-sm:text-lg hover:text-sky-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <button
          className="ti ti-menu-2 hidden max-sm:block max-sm:text-2xl"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
        />
      </div>
      
      
      <div className='sm:hidden flex flex-1 items-baseline gap-7  '>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a2f900b9f7d744d4eef1b85ad9116de550cd39cfddcf85f18f7c161f1640fd7?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            alt=""
            className="object-contain self-stretch animate-flip-up my-auto aspect-[0.93] w-[45px]"
          />
          <p className="font-semibold  text-emerald-500 text-xl animate-fade-down font-mono">Fine Engineering</p>
            {toggle ? (
              <XMarkIcon className="w-[28px] h-[28px]" onClick={() => setToggle(!toggle)} />
            ) : (
              <Bars3Icon className="w-[28px] h-[28px]" onClick={() => setToggle(!toggle)} />
            )}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute bg-teal-100 animate-flip-down top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>

            {navigationItems.map((item) => (
          <div key={item.label} className="relative ">
            {item.dropdownItems ? (
              <div
                className="flex gap-1.5 items-center cursor-pointer"
                onClick={() => handleDropdownToggle(item.label)}
                onKeyPress={(e) => handleKeyPress(e, item.label)}
                tabIndex={0}
                role="button"
                aria-expanded={openDropdown === item.label}
                aria-haspopup="true"
              >
                <div className="text-2xl leading-none max-md:text-xl max-sm:text-lg hover:text-emerald-600">
                  {item.label}
                </div>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                    />
                {/* <i className="ti ti-chevron-down text-sm text-sky-950" /> */}
                {openDropdown === item.label && (
                  <div className="absolute flex flex-col top-full right-0 mt-2 animate-ease-in bg-emerald-100 rounded-2xl shadow-lg py-2 min-w-[200px] z-50">
                    {item.dropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        href={dropItem.path}
                        className="block px-4 py-2 hover:bg-gray-100 text-lg transition-colors duration-200"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.path}
                className="gap-1.5 text-2xl leading-none cursor-pointer max-md:text-xl max-sm:text-lg hover:text-sky-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
              
              {/* {navigationItems.map((link)=>(
                <li
                  key={link.path}
                  className={`${
                    active == link.label 
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={()=> {
                    setActive(link.label);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.path}`}>{link.label}</a>
                </li>
              ))} */}
            </ul>
          </div>

        </div>
    </nav>
  );
}