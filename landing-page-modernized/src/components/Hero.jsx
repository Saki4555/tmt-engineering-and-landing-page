"use client";

import { motion } from "framer-motion";

export function HeroSectionOne() {
  return (
    <div className="relative  mx-auto pt-16 flex max-w-7xl flex-col items-center justify-center">
      {/* Decorative Borders */}
      <div className="absolute inset-y-0  left-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-red-600 to-sky-500"></div>
      <div className="absolute inset-y-0 right-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-red-600 to-sky-500"></div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-pink-400 via-blue-600 to-red-500"></div>

      {/* Content */}
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl  text-center text-2xl font-bold text-slate-300 md:text-4xl lg:text-7xl">
          {"Welcome to TMT Group".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-400"
        >
          TMT Group of Companies delivers engineering excellence and world-class
          travel experiences — all in one platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="https://tmt-engineering.vercel.app/" target="_blank" className="w-60 transform rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700">
            Explore Engineering
          </a>
          <a href="http://tmttravelandtours.com/" target="_blank" className="w-60 transform rounded-lg bg-teal-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700">
            Explore Travel
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 grid grid-cols-1 gap-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-4 md:grid-cols-2 md:p-6 shadow-md"
        >
          {/* Engineering Stats */}
          <div className="p-4 md:p-6 rounded-2xl border border-green-800 bg-green-900/10">
            <h3 className="text-lg md:text-xl font-semibold text-green-400 mb-4 md:mb-6">
              Engineering
            </h3>
            <ul className="space-y-3 md:space-y-4 text-white text-sm sm:text-base md:text-lg">
              {[
                ["Years of Experience", "15"],
                ["Happy Clients", "45"],
                ["Quality of Work", "5000"],
                ["Projects Delivered", "250"],
              ].map(([label, value], i) => (
                <li
                  key={i}
                  className={`flex flex-wrap items-center  justify-between md:gap-10 ${
                    i < 3 ? "border-b pb-2" : ""
                  } border-green-700`}
                >
                  <span className="whitespace-pre-wrap">{label}</span>
                  <span className="text-lg sm:text-xl  font-bold">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Stats */}
          <div className="p-4 md:p-6 rounded-2xl border border-teal-800 bg-teal-900/10 backdrop-blur-md">
            <h3 className="text-lg md:text-xl font-semibold text-teal-400 mb-4 md:mb-6">
              Travel
            </h3>
            <ul className="space-y-3 md:space-y-4 text-white text-sm sm:text-base md:text-lg">
              {[
                ["Global Destinations", "30+"],
                ["Tailored Itineraries", "100%"],
                ["Visa & Flight Assistance", "Guaranteed"],
                ["Travel Experts", "10+"],
              ].map(([label, value], i) => (
                <li
                  key={i}
                  className={`flex  items-center justify-between gap-2 md:gap-10 ${
                    i < 3 ? "border-b pb-2" : ""
                  } border-teal-700`}
                >
                  <span className="whitespace-pre-wrap">{label}</span>
                  <span className="text-lg sm:text-xl font-bold">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
