import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const HeroSection = () => {
  return (
    <Element name="hero">
      <section className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center px-4">
        {/* Aurora Background */}
        <div className="absolute inset-0">
          <div className="absolute w-[60vw] h-[60vw] bg-gradient-to-br from-red-500 via-indigo-500 to-cyan-400 rounded-full blur-[120px] opacity-30 top-[-20%] left-[-20%]" />
          <div className="absolute w-[50vw] h-[50vw] bg-gradient-to-tr from-teal-300 via-sky-300 to-blue-500 rounded-full blur-[100px] opacity-20 bottom-[-20%] right-[-20%]" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center text-white max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow">
            Welcome to TMT Group
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            TMT Group of Companies delivers engineering excellence and
            world-class travel experiences — all in one platform.
          </p>
          <div className="flex pb-10 sm:pb-4 md:pb-0 flex-wrap justify-center gap-2 sm:gap-4">
            <a
              href="https://tmt-engineering.vercel.app"
              target="_blank"
              className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Engineering
            </a>
            <a
              href="#"
              className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Travel
            </a>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default HeroSection;
