"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
  subItems?: Array<NavItem>;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "Services", page: "about" },
  { label: "Work", page: "work" },
  {
    label: "About",
    page: "about2",
  },
  { label: "Contact", page: "contact" },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-black shadow-lg shadow-white/20">
      <div className="justify-between md:items-center md:flex">
        {/* Logo */}
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <img src="/logo.svg" alt="WhiteBox Logo" className="w-10 h-10" />
                <span className="text-white font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>WhiteBoxMedia.</span>
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
              <div key={idx} className="relative group">
                <Link
                  to={item.page}
                  className="block lg:inline-block text-white hover:text-gray-300 cursor-pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    if (!item.subItems) {
                      setNavbar(!navbar);
                    }
                  }}
                >
                  {item.label}
                  {item.subItems && <IoMdArrowDropdown className="inline ml-1" />}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg z-10 hidden group-hover:block group-hover:md:block">
                    {item.subItems.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.page}
                        className="block px-4 py-2 hover:bg-gray-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
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
