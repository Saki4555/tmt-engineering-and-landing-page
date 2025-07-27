import { useState } from "react";
import {  Menu as FiMenu, X as FiX } from "lucide-react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-[999] sticky top-0">
      {/* Main Navbar */}
      <nav className="bg-te-sec/80 backdrop-blur-xl shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-te-text hover:text-te-prim"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={logo} className="w-6 md:w-10" alt="TMT Logo" />
              <p className="text-xl md:text-3xl font-extrabold text-te-acc">TMT</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-te-text font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/policy", label: "Policy" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact Us" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-te-prim border-b-2 border-te-prim pb-1"
                      : "hover:text-te-prim transition-colors duration-200"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-te-back backdrop-blur-xl shadow-[inset_4px_4px_8px_#c7d2fe,inset_-4px_-4px_8px_#ffffff] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-te-prim">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-3">
              <img src={logo} className="w-8" alt="TMT Logo" />
              <p className="text-xl font-bold text-te-acc tracking-wide">TMT</p>
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-te-text hover:text-te-prim transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4 px-6 text-te-text font-medium text-lg">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/policy", label: "Policy" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact Us" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-te-sec text-te-prim border-l-4 border-te-prim"
                      : "hover:bg-te-sec hover:text-te-acc"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
