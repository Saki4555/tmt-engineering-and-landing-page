"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/tmt.png";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { title: "Engineering", link: "#engineering" },
  { title: "Travel", link: "#travel" },
  { title: "Contact", link: "#contact" },
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
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[999] h-16 shadow-md transition-colors duration-300",
        isScrolled ? "bg-slate-950/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/30 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowNavbar(false)}
          />
        )}
      </AnimatePresence>

      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* Logo */}
<motion.a
  href="#"
  className="flex relative overflow-hidden items-center gap-3"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <Image src={logo} className="w-9 h-9" alt="logo" />
  </motion.div>

  <motion.span
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="self-center text-xl font-extrabold whitespace-nowrap bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 bg-clip-text text-transparent md:text-2xl"
  >
    TMT Group
  </motion.span>
</motion.a>


        {/* Hamburger */}
        <button className="z-50 md:hidden" onClick={handleShowNavbar}>
          {showNavbar ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>

        {/* Nav Links */}
        <AnimatePresence>
          {showNavbar && (
            <motion.div
              key="mobile-drawer"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 z-40 h-screen w-64 bg-gray-950 text-white md:hidden"
            >
              <ul className="mt-16 flex flex-col space-y-8 px-6 py-6">
                {navLinks.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setShowNavbar(false)}
                    className="group"
                  >
                    <a
                      href={item.link}
                      className="relative p-2 text-lg font-medium text-white transition-all hover:text-blue-400"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 via-red-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="flex space-x-8"
          >
            {navLinks.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group"
              >
                <a
                  href={item.link}
                  className="relative p-2 text-base font-medium text-white transition-all hover:text-blue-400"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 via-red-500 to-sky-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
