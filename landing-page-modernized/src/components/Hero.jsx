// "use client";

// import { motion } from "motion/react";

// export function HeroSectionOne() {
//   return (
//     <div className="relative mx-auto pt-16  flex max-w-7xl flex-col  items-center justify-center">
//       <div className="absolute inset-y-0  left-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-red-600 to-sky-500">
//         {/* <div className="absolute top-16 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" /> */}
//       </div>
//       <div className="absolute inset-y-0 right-0 h-full w-[2px]  bg-gradient-to-b from-blue-600 via-red-600 to-sky-500">
//         {/* <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" /> */}
//       </div>
//       <div className="absolute inset-x-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-pink-400 via-blue-600 to-red-500">
//         {/* <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" /> */}
//       </div>
//       <div className="px-4 py-10 md:py-20">
//         <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-300 md:text-4xl lg:text-7xl">
//           {"Welcome to TMT Group"
//             .split(" ")
//             .map((word, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//                 animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: index * 0.1,
//                   ease: "easeInOut",
//                 }}
//                 className="mr-2 inline-block"
//               >
//                 {word}
//               </motion.span>
//             ))}
//         </h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 0.8 }}
//           className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-400"
//         >
//          TMT Group of Companies delivers engineering excellence and world-class travel experiences — all in one platform.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 1 }}
//           className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
//         >
//           <button className="w-60 transform rounded-lg bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200">
//             Explore Engineering
//           </button>
//           <button className="w-60 transform rounded-lg border border-gray-700 bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900">
//              Explore Travel
//           </button>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 1.2 }}
//           className="relative z-10 mt-20 rounded-3xl border border-neutral-800 bg-neutral-900 p-4 shadow-md"
//         >
//           <div className="w-full overflow-hidden rounded-xl border border-gray-700">
//             <img
//               src="https://assets.aceternity.com/pro/aceternity-landing.webp"
//               alt="Landing page preview"
//               className="aspect-[16/9] h-full object-cover"
//               height={1000}
//               width={1000}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto pt-16 flex max-w-7xl flex-col items-center justify-center">
      {/* Decorative Borders */}
      <div className="absolute inset-y-0 left-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-red-600 to-sky-500"></div>
      <div className="absolute inset-y-0 right-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-red-600 to-sky-500"></div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-pink-400 via-blue-600 to-red-500"></div>

      {/* Content */}
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-300 md:text-4xl lg:text-7xl">
          {"Welcome to TMT Group"
            .split(" ")
            .map((word, index) => (
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
          TMT Group of Companies delivers engineering excellence and world-class travel experiences — all in one platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700">
            Explore Engineering
          </button>
          <button className="w-60 transform rounded-lg bg-teal-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700">
            Explore Travel
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-md"
        >
          {/* Engineering Stats */}
          <div className="p-6 rounded-2xl border border-green-800 bg-green-900/10">
            <h3 className="text-xl font-semibold text-green-400 mb-6">Engineering</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-baseline justify-between border-b border-green-700 pb-2">
                <span>Years of Experience</span>
                <span className="text-2xl font-bold">15</span>
              </li>
              <li className="flex items-baseline justify-between border-b border-green-700 pb-2">
                <span>Happy Clients</span>
                <span className="text-2xl font-bold">45</span>
              </li>
              <li className="flex items-baseline justify-between border-b border-green-700 pb-2">
                <span>Quality of Work</span>
                <span className="text-2xl font-bold">5000</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span>Projects Delivered</span>
                <span className="text-2xl font-bold">250</span>
              </li>
            </ul>
          </div>

          {/* Travel Stats */}
          <div className="p-6 rounded-2xl border border-teal-800 bg-teal-900/10 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-teal-400 mb-6">Travel</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-baseline justify-between border-b border-teal-700 pb-2">
                <span>Global Destinations</span>
                <span className="text-2xl font-bold">30+</span>
              </li>
              <li className="flex items-baseline justify-between border-b border-teal-700 pb-2">
                <span>Tailored Itineraries</span>
                <span className="text-2xl font-bold">100%</span>
              </li>
              <li className="flex items-baseline justify-between border-b border-teal-700 pb-2">
                <span>Visa & Flight Assistance</span>
                <span className="text-2xl font-bold">Guaranteed</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span>Travel Experts</span>
                <span className="text-2xl font-bold">10+</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
