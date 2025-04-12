import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import logo from "../assets/logo/tmt.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Engineering", href: "engineering" },
    { name: "Travel", href: "travel" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/60 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500}>
          {" "}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={logo} alt="TMT" className="w-14" />
            <span className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-red-600 via-blue-500 to-teal-400 text-transparent bg-clip-text tracking-wide">
              TMT Group
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to={link.href}
                smooth={true}
                spy={true}
                duration={500}
                className="text-white cursor-pointer font-medium px-4 py-2 rounded-full hover:text-cyan-400 hover:bg-white/10 transition duration-300"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Animated mobile nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        className="md:hidden "
      >
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
          className="bg-slate-900 px-6 py-4 space-y-4 border-t border-white/10"
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              smooth={true}
              spy={true}
              duration={500}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: isOpen ? 0.1 + index * 0.1 : 0 }}
            >
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
