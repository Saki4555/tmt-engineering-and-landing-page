import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Ship, Anchor, Truck, Droplet, Wrench, Sprout } from 'lucide-react';

const OurTrackRecordSection = () => {
  // Array of services for mapping
  const services = [
    { title: ['RESCUER & SUPPLY', 'PASSENGER SHIP', 'RO-PAX FERRY', 'FPSO, LPG'], icon: <Ship className="w-10 h-10 md:w-12 md:h-12 text-te-prim" /> },
    { title: ['LNG CARRIER', 'TANKER'], icon: <Anchor className="w-10 h-10 md:w-12 md:h-12 text-te-prim" /> },
    { title: ['CONTAINER CARRIER', 'CARGO CARRIER', 'JACK-UP RIG', 'FSO, LNG'], icon: <Truck className="w-10 h-10 md:w-12 md:h-12 text-te-prim" /> },
    { title: ['OIL TANKER', 'DREDGER SHIP', 'CABLE LAYING SHIP'], icon: <Droplet className="w-10 h-10 md:w-12 md:h-12 text-te-prim" /> },
    { title: ['OIL TANKER', 'DRILLING SHIP', 'PIPE LAYING BARGE'], icon: <Wrench className="w-10 h-10 md:w-12 md:h-12 text-te-prim" /> },
    { title: ['RESEARCH VESSEL', 'EXPLORATION SHIP'], icon: <Sprout className="w-10 h-10 md:w-12 md:h-12 text-te-prim" /> },
  ];

  // Animation variants for the container and child items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-24 bg-te-back text-te-text relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-te-prim/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-te-acc/10 rounded-full blur-3xl"></div>
      </div>
    
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading with animation */}
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-te-text mb-4">
            Our <span className="bg-gradient-to-r from-te-prim to-te-acc bg-clip-text text-transparent">Track Record</span>
          </h2>
          <p className="text-lg md:text-xl text-te-text/70 mb-8">2009 to 2025</p>
        </motion.div>

        {/* Main Content Grid with responsive layout and animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* First row - 2 items */}
          <motion.div
            className="flex flex-col items-center text-center group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-te-sec border-4 border-te-prim mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-te-acc group-hover:bg-te-prim/10">
              {services[0].icon}
            </div>
            <div className="font-semibold text-lg md:text-xl text-te-text transition-colors duration-300 group-hover:text-te-acc">
              {services[0].title.map((line, i) => (
                <p key={i} className="leading-tight">{line}</p>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center text-center group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-te-sec border-4 border-te-prim mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-te-acc group-hover:bg-te-prim/10">
              {services[1].icon}
            </div>
            <div className="font-semibold text-lg md:text-xl text-te-text transition-colors duration-300 group-hover:text-te-acc">
              {services[1].title.map((line, i) => (
                <p key={i} className="leading-tight">{line}</p>
              ))}
            </div>
          </motion.div>
          
          {/* Second row - center item (total) for large screens */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-te-prim to-te-acc rounded-full w-full max-w-sm aspect-square mx-auto text-center p-8 lg:p-12 shadow-2xl border-4 border-white/20 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-te-sec text-4xl md:text-5xl font-bold leading-tight mb-2">Total</span>
            <CountUp
              start={0}
              end={1395}
              duration={2.75}
              separator=","
              className="text-te-sec text-6xl md:text-8xl font-bold leading-none"
              enableScrollSpy={true}
              scrollSpyOnce={true}

            />
          </motion.div>
          
          {/* Third row - 2 items */}
          <motion.div
            className="flex flex-col items-center text-center group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-te-sec border-4 border-te-prim mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-te-acc group-hover:bg-te-prim/10">
              {services[2].icon}
            </div>
            <div className="font-semibold text-lg md:text-xl text-te-text transition-colors duration-300 group-hover:text-te-acc">
              {services[2].title.map((line, i) => (
                <p key={i} className="leading-tight">{line}</p>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center text-center group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-te-sec border-4 border-te-prim mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-te-acc group-hover:bg-te-prim/10">
              {services[3].icon}
            </div>
            <div className="font-semibold text-lg md:text-xl text-te-text transition-colors duration-300 group-hover:text-te-acc">
              {services[3].title.map((line, i) => (
                <p key={i} className="leading-tight">{line}</p>
              ))}
            </div>
          </motion.div>
          
          {/* Central circle for mobile/tablet screens */}
          <motion.div
            className="flex lg:hidden flex-col items-center justify-center bg-gradient-to-br from-te-prim to-te-acc rounded-full w-48 h-48 sm:w-64 sm:h-64 mx-auto text-center p-8 shadow-2xl border-4 border-white/20 backdrop-blur-sm mt-8 col-span-full"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-te-sec text-3xl font-bold leading-tight mb-2">Total</span>
            <CountUp
              start={0}
              end={1395}
              duration={2.75}
              separator=","
              className="text-te-sec text-5xl font-bold leading-none"
              enableScrollSpy={true}
            />
          </motion.div>
          
          {/* Fourth row - 2 items */}
          <motion.div
            className="flex flex-col items-center text-center group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-te-sec border-4 border-te-prim mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-te-acc group-hover:bg-te-prim/10">
              {services[4].icon}
            </div>
            <div className="font-semibold text-lg md:text-xl text-te-text transition-colors duration-300 group-hover:text-te-acc">
              {services[4].title.map((line, i) => (
                <p key={i} className="leading-tight">{line}</p>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center text-center group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-te-sec border-4 border-te-prim mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-te-acc group-hover:bg-te-prim/10">
              {services[5].icon}
            </div>
            <div className="font-semibold text-lg md:text-xl text-te-text transition-colors duration-300 group-hover:text-te-acc">
              {services[5].title.map((line, i) => (
                <p key={i} className="leading-tight">{line}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTrackRecordSection;
