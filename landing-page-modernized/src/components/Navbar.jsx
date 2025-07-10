"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from '../assets/tmt.png';
import Image from "next/image";
console.log(logo);

const navLinks = [
  { title: "Tools", link: "#" },
  { title: "Blog", link: "#" },
  { title: "Contact", link: "#" },
  { title: "About", link: "#" },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn('fixed top-0 left-0 w-full backdrop-blur-3xl  z-[999] h-16  shadow-md', )}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* logo */}
        <a
          href="#"
          className="flex relative overflow-hidden items-center gap-3"
        >
          <Image
            src={logo}
            className="w-9 h-9"
            alt="logo"
            
          />
          <span className="self-center text-xl font-bold whitespace-nowrap text-white md:text-2xl">
            TMT Group
          </span>
        </a>
        <button className="menu-icon z-50 md:hidden" onClick={handleShowNavbar}>
          {showNavbar ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
        <div
          className={`nav-elements fixed top-0 right-0 z-40 h-screen w-64 transform bg-[#0B2715] text-white transition-transform duration-300 ease-in-out md:relative md:top-auto md:right-auto md:h-auto md:w-auto md:translate-x-0 md:bg-transparent ${
            showNavbar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="mt-16 flex flex-col space-y-8 px-6 py-6 md:mt-0 md:flex-row md:space-y-0 md:space-x-8 md:px-0">
            {navLinks.map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.link}
                  className="relative p-2 text-lg font-medium text-white transition-all duration-300 ease-in-out hover:text-blue-400 md:text-base"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
