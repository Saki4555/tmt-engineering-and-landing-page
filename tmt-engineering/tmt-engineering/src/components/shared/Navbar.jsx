




import { useState } from "react";
import { Phone, Mail, Menu as FiMenu, X as FiX } from "lucide-react"; // Lucide icons
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // fixed top-0 left-0 w-full z-50
  return (
    <header className="z-[999] sticky top-0">
      {/* Main navbar */}
      <nav className="bg-[#e7f8ec]/80 backdrop-blur-xl shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Mobile Menu Toggle (Outlined Icon) */}
          <button
            className="md:hidden text-te-ext text-2xl hover:text-te-prim"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="cursor-pointer" />
          </button>
          {/* Logo */}

          <Link to="/">
            <div className="flex items-center space-x-2">
              {" "}
              <img src={logo} className="w-6 md:w-10" alt="TMT" />
              <p className="text-lg md:text-2xl  font-bold text-rose-700">
                TMT
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-black space-x-6 text-[#1E293B]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-te-prim border-te-prim border-b-2" : ""
                }
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-te-prim border-te-prim border-b-2" : ""
                }
              >
                {" "}
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-te-prim border-te-prim border-b-2" : ""
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/policy"
                className={({ isActive }) =>
                  isActive ? "text-te-prim border-te-prim border-b-2" : ""
                }
              >
                Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "text-te-prim border-te-prim border-b-2" : ""
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-te-prim border-te-prim border-b-2" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
         
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/20  z-40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

<div
  className={`fixed top-0 left-0 h-full w-72 bg-[#F0FDF4] backdrop-blur-3xl shadow-[inset_4px_4px_8px_#d2e3d5,inset_-4px_-4px_8px_#f7fff9] rounded-r-3xl z-50 transform transition-transform duration-300 ease-in-out ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="flex justify-between items-center p-4 border-b border-[#16A34A]">
    <Link to="/">
      <div className="flex flex-row items-center gap-3">
        <img src={logo} className="w-8" alt="TMT" />
        <p className="text-xl font-bold text-rose-700 tracking-wide">TMT</p>
      </div>
    </Link>
    <button
      onClick={() => setMenuOpen(false)}
      className="text-[#1E293B] text-2xl cursor-pointer hover:text-[#16A34A] transition-colors"
    >
      <FiX />
    </button>
  </div>

  <ul className="mt-6 space-y-4 px-6 text-[#1E293B] font-medium text-lg">
    {[
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Services" },
      { to: "/policy", label: "Policy" },
      { to: "/gallery", label: "Gallery" },
      { to: "/contact", label: "Contact Us" },
    ].map((item) => (
      <li key={item.to} onClick={() => setMenuOpen(false)}>
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-xl shadow-inner ${
              isActive
                ? "text-[#16A34A] border-l-4 border-[#16A34A] bg-[#D1FAE5]"
                : "hover:bg-[#D1FAE5] hover:text-[#0F766E] transition-all"
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
