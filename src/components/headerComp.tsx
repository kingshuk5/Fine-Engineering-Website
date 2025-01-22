"use client";
import {
    Bars3Icon,
    ArrowLeftIcon,
    ArrowUpCircleIcon,
    ArrowDownCircleIcon,
    ChevronUpIcon,
    ArrowRightIcon,
    ChevronDownIcon,
  } from "@heroicons/react/24/solid";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";

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
      { label: "Web Development", path: "/services/web" },
      { label: "Mobile Development", path: "/services/mobile" },
      { label: "Cloud Solutions", path: "/services/cloud" },
      { label: "UI/UX Design", path: "/services/design" },
      { label: "DevOps", path: "/services/devops" }
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
      <div className="flex flex-wrap gap-11  items-center p-5  whitespace-nowrap text-sky-950 max-md:gap-8 max-md:p-4 max-sm:gap-5 max-sm:justify-between max-sm:p-3">
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
                <div className="text-2xl leading-none max-md:text-xl max-sm:text-lg">
                  {item.label}
                </div>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                    />
                {/* <i className="ti ti-chevron-down text-sm text-sky-950" /> */}
                {openDropdown === item.label && (
                  <div className="absolute flex flex-col top-full left-0 mt-2 bg-white rounded shadow-lg py-2 min-w-[200px] z-50">
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
        <button
          className="ti ti-menu-2 hidden max-sm:block max-sm:text-2xl"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="flex top-full w-screen left-0 right-0 bg-white shadow-lg z-50 sm:hidden">
          {navigationItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              {item.dropdownItems ? (
                <div
                  className="px-4 py-3"
                  onClick={() => handleDropdownToggle(item.label)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{item.label}</span>
                    <i className="ti ti-chevron-down" />
                  </div>
                  {openDropdown === item.label && (
                    <div className="mt-2 ml-4">
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.path}
                          href={dropItem.path}
                          className="block py-2 text-base hover:text-sky-700 transition-colors duration-200"
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
                  className="block px-4 py-3 text-lg hover:text-sky-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}