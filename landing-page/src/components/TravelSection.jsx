



import React from "react";
import { motion } from "motion/react"; // Fixed import
import { Plane, Map, Compass, ArrowRight } from "lucide-react";
import { Element } from "react-scroll";

const TravelSection = () => {
  return (
    <Element name="travel">
      {" "}
      <section
        id="travel"
        className="relative min-h-screen bg-slate-900 flex items-center justify-center px-4 overflow-hidden"
      >
        {/* 🔆 Glow Effects (static, subtle, responsive) */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-44 md:h-44 bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-28 h-28 md:w-36 md:h-36 bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 bg-teal-300/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-44 md:h-44 bg-sky-300/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 md:w-72 md:h-72 bg-indigo-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* 📍 Travel Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl w-full bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl border border-white/10 text-white"
        >
          <h2 className="text-4xl font-bold mb-6 text-center uppercase tracking-widest">
            TRAVEL
          </h2>

          <p className="text-lg mb-6 text-gray-100 text-center">
            Discover the world with us. Our travel division offers unforgettable
            experiences across global destinations.
          </p>

          <ul className="space-y-4 text-left font-medium mb-10">
            <li className="flex items-center gap-3">
              <Plane size={20} className="text-cyan-300" />
              Custom Travel Itineraries and Luxury Packages
            </li>
            <li className="flex items-center gap-3">
              <Map size={20} className="text-blue-300" />
              Global Destinations with Guided Tours
            </li>
            <li className="flex items-center gap-3">
              <Compass size={20} className="text-sky-300" />
              Visa, Flights, and Accommodation Services
            </li>
          </ul>

          {/* TMT Glow Button */}
          <div className="flex justify-center mt-6">
            <a href="https://tmttravel.vercel.app/" target='_blank' className="group relative cursor-pointer px-6 py-3 rounded-lg bg-slate-800 text-white font-bold text-lg flex items-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-px">
              {/* Button content */}
              <span className="relative z-10">Explore Travel Packages</span>
              <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              
              {/* Glowing borders */}
              <span className="absolute inset-0 border-2 border-red-600 rounded-lg opacity-70 group-hover:opacity-100 z-0"></span>
              
              <span className="absolute -inset-0.5 border-2 border-cyan-400 rounded-lg blur-sm opacity-40 group-hover:opacity-70 z-0"></span>
              
              <span className="absolute -inset-1 border-2 border-purple-500 rounded-lg blur-md opacity-30 group-hover:opacity-60 z-0"></span>
              
              {/* Background glow effects that appear on hover */}
              <span className="absolute -inset-px bg-gradient-to-r from-red-600 via-purple-500 to-cyan-400 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-30 z-0"></span>
              
              {/* Extra large outer glow that intensifies on hover */}
              <span className="absolute -inset-6 bg-gradient-to-r from-red-600/20 via-purple-500/20 to-cyan-400/20 rounded-full blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0"></span>
            </a>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default TravelSection;