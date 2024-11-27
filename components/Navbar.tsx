"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // For section navigation
import Link from "next/link"; // For page navigation
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";

interface NavItem {
  label: string;
  href?: string; // For page navigation
  section?: string; // For section navigation (id)
  subItems?: Array<NavItem>;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  { label: "Team", href: "team" },
  { label: "FAQ", href: "faq" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track the open dropdown

  // Toggle the dropdown visibility
  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label)); // Close if the same is clicked again
  };

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-black shadow-lg shadow-white/20">
      <div className="justify-between md:items-center md:flex">
        {/* Logo */}
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="container flex items-center space-x-2">
                <img src="/logo.svg" alt="WhiteBox Logo" className="w-10 h-10" />
                <span
                  className="text-white font-bold"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  WhiteBoxMedia.
                </span>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onClick={() => item.subItems && handleDropdownToggle(item.label)}
              >
                {item.section ? (
                  // Section navigation (scroll to the section)
                  <ScrollLink
                    to={item.section}
                    className="block lg:inline-block text-white hover:text-gray-300 cursor-pointer"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : item.href ? (
                  // Page navigation (link to other pages)
                  <Link
                    href={item.href}
                    className="block lg:inline-block text-white hover:text-gray-300 relative"
                    onClick={() => setNavbar(false)}
                  >
                    {item.label}
                    {item.subItems && (
                      <IoMdArrowDropdown
                        className={`inline ml-1 transition-transform text-white ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                ) : null}

                {/* Dropdown Menu for SubItems */}
                {item.subItems && openDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg z-10">
                    {item.subItems.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href || "#"} // Ensure href is defined or fallback to #
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setNavbar(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
