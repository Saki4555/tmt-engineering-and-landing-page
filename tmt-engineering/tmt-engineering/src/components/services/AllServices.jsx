"use client";

import {
  Anchor,
  ArrowRight,
  Briefcase,
  Building,
  Cpu,
  Database,
  Gauge,
  HardHat,
  Lightbulb,
  Shield,
  PenToolIcon as Tool,
  Wrench,
  ChevronUp,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function AllServices() {
 const services = [
  {
    title: "Marine Services",
    icon: <Anchor className="w-8 h-8 text-blue-500" />,
    description:
      "Comprehensive marine solutions for vessels of all sizes, including repair, maintenance, and specialized marine engineering services.",
    items: [],
  },
  {
    title: "Electrical Services",
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    description:
      "All kind of repair, conversion, EPRS, Rig jack up, drilling ship building, dredger ship building, oil & gas tanker ship building, cable laying ship building, passenger ship building, rescue & supply vessel, cargo container ship building plus laying cargo & New ship building project electrical installation, pre-commissioning & testing job.",
    items: [
      "Top Side Modules, E-houses and Skid Packages",
      "Main Propulsion Modules",
      "Living Quarters, Accommodation Modules in DNV 2.7-1/EN 12079",
      "Design, Manufacture and Installation of Electrical Switchgear & Control Systems",
      "Service & Repairs of Air Conditioning & Refrigeration System",
    ],
  },
  {
    title: "Electrical Inspection Services & Commissioning",
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    description:
      "Installation, pre-commissioning & testing of Alarm Monitoring system for monitoring critical alarms for main engine, CPP, Shaft Generators, thrusters, steering gear system. Installation, pre-commissioning & testing of Main lighting system.",
    items: [
      "Installation, pre-commissioning & testing of machinery space Heaters",
      "Installation, pre-commissioning & testing of Fire/Discharge system",
      "Installation, pre-commissioning & testing of CCTV system",
      "Installation, pre-commissioning & testing of Normal lighting & Emergency Lighting system",
      "Installation, pre-commissioning & testing of sound power telephone",
      "Installation, pre-commissioning & testing of PA system",
      "Installation, pre-commissioning & testing of fire detection system",
      "Installation, pre-commissioning & testing of impressed current system",
    ],
  },
  {
    title: "Mechanical Piping Services",
    icon: <Gauge className="w-8 h-8 text-green-600" />,
    description:
      "Expert mechanical and piping solutions for industrial and marine applications.",
    items: [
      "All kind of motor, generator repair, overhaul and re-winding job",
      "Service & Overhauling of Main Engine, Generator, Motor & pumps",
      "Steel Piping Machining Works",
      "Service & Repairs of all types of Cranes & Winches",
    ],
  },
  {
    title: "Instrumentation Services",
    icon: <Database className="w-8 h-8 text-cyan-600" />,
    description:
      "All kind of instrument repair, calibration, pre-commissioning & testing job.",
    items: [],
  },
  {
    title: "Construction Services",
    icon: <Building className="w-8 h-8 text-gray-700" />,
    description:
      "Comprehensive construction solutions for industrial, commercial, and residential projects.",
    items: [],
  },
  {
    title: "Air Conditioning & Mechanical Ventilation",
    icon: <Wrench className="w-8 h-8 text-teal-500" />,
    description: "Complete HVAC solutions for all environments.",
    items: [
      "Design and Build Air conditioning and Mechanical ventilation System",
      "Central Chilled Water Air conditioning System for Office Buildings, HOTELS, Retail, Industrial Buildings and Industrial Plants",
      "Thermal Energy Storage System",
      "DX Air conditioning System for Office Buildings, Residential and Industrial Plants",
      "Air conditioning and Mechanical Ventilation System for Bio-medical complex, Hospitals and Chemical",
      "Complex Clean room System",
      "Air conditioning and Mechanical Ventilation System for Civil Defense Shelter",
      "Air conditioning and Mechanical Ventilation System for LUNS BUNKERS/PORTS incorporating Heat Recovery System",
      "Smoke Control System",
      "Energy Efficient Air conditioning System",
    ],
  },
  {
    title: "Fire Prevention & Protection System",
    icon: <Shield className="w-8 h-8 text-red-600" />,
    description:
      "Comprehensive fire safety solutions to protect your assets and personnel.",
    items: [
      "Design and Build of system system complying to the local Fire and Insurance Standards",
      "Sprinkler System for High Rise Offices, Hotels, Retail, Industrial Buildings and Industrial Plants",
      "Wet/Dry riser System for High Rise Offices, Hotels, Retail, Industrial Buildings and Industrial Plants",
      "Fire Alarm System",
      "Design and Build Fire Alarm System complying to the local Fire code",
      "Installation of Fire Alarm System for High Rise Offices, HOTELS, Retail, Industrial Buildings and Industrial Plants",
      "Design and Build Fire Suppression System using various gas for Chemical, Corporate and Industrial Environment",
    ],
  },
  {
    title: "Maintenance",
    icon: <Tool className="w-8 h-8 text-indigo-500" />,
    description:
      "Regular maintenance services to ensure optimal performance of your systems.",
    items: [
      "Comprehensive Maintenance of Mechanical and Electrical System",
      "Comprehensive Maintenance of Mechanical and Electrical System",
    ],
  },
  {
    title: "Offshore & Workshop",
    icon: <HardHat className="w-8 h-8 text-yellow-600" />,
    description:
      "Specialized offshore services and workshop capabilities for industrial needs.",
    items: [],
  },
  {
    title: "Factory & Industry",
    icon: <Briefcase className="w-8 h-8 text-gray-800" />,
    description:
      "Tailored solutions for manufacturing and industrial facilities.",
    items: [],
  },
];


  const [expandedItems, setExpandedItems] = useState({});

  const toggleItems = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariant = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,

      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-[var(--color-te-back)] text-[var(--color-te-text)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={headingVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-sm uppercase tracking-wider mb-2 text-[var(--color-te-acc)]">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-te-prim)]">
            Our Services
          </h2>
          <div className="w-24 h-1 mx-auto bg-[var(--color-te-prim)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-none p-8 transition-all duration-500 group relative overflow-hidden bg-[var(--color-te-sec)] shadow-[8px_8px_16px_#C7DDFE,-8px_-8px_16px_#FFFFFF]"
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              custom={index}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-te-back)] via-[var(--color-te-sec)] to-[var(--color-te-back)] opacity-70"></div>
              <div className="absolute inset-0 rounded-none shadow-[inset_4px_4px_8px_#C7DDFE,inset_-4px_-4px_8px_#FFFFFF] opacity-30"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-full mr-4 transition-all duration-500 group-hover:scale-110 bg-[var(--color-te-sec)] text-[var(--color-te-prim)] shadow-[4px_4px_8px_#C7DDFE,-4px_-4px_8px_#FFFFFF]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold transition-all duration-300 group-hover:translate-x-2 text-[var(--color-te-prim)]">
                    {service.title}
                  </h3>
                </div>

                <p className="mb-6 text-[var(--color-te-text)]">
                  {service.description}
                </p>

                {service.items.length > 0 && (
                  <div>
                    
                    <ul className="space-y-3">
                      {(expandedItems[index]
                        ? service.items
                        : service.items.slice(0, 3)
                      ).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0 text-[var(--color-te-prim)] mt-1"
                            strokeWidth={2}
                          />
                          <span className="text-[var(--color-te-text)]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {service.items.length > 3 && (
                      <button
                        onClick={() => toggleItems(index)}
                        className="flex items-center text-sm mt-4 transition-all duration-300 hover:translate-x-1 text-[var(--color-te-acc)] pl-6"
                      >
                        <span className="mr-1 cursor-pointer">
                          {expandedItems[index]
                            ? "Show less"
                            : "View all services"}
                        </span>
                        {expandedItems[index] ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
