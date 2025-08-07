import { motion } from "motion/react";

import {
  Anchor,
  Cable,
  ClipboardCheck,
  Construction,
  Fan,
  Gauge,
  Hammer,
  Shield,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: 1,
    title: "MARINE",
    description:
      "We provide qualified marine services with industry-leading expertise and cutting-edge technology.",
    icon: Anchor,
  },
  {
    number: 2,
    title: "ELECTRICAL",
    description:
      "All kind of repair conversion, FPSO, Rig-jack up, drilling ship building, dragger ship building, oil & gas tanker ship building, cable installation.",
    icon: Cable,
  },
  {
    number: 3,
    title: "INSPECTION",
    description:
      "Installation, pre-commissioning & testing of Alarm Monitoring system for monitoring critical alarms for main engine, CPP, Shaft Generators.",
    icon: ClipboardCheck,
  },
  {
    number: 4,
    title: "MECHANICAL/PIPING",
    description:
      "All kind of motor generator repair, overhaul and rewinding job with state-of-the-art facilities.",
    icon: Hammer,
  },
  {
    number: 5,
    title: "VENTILATION",
    description:
      "Design and Build Air-conditioning and Mechanical Ventilation System with advanced climate control.",
    icon: Fan,
  },
  {
    number: 6,
    title: "INSTRUMENTATION",
    description:
      "All kind of instrument repair, calibration, pre-commissioning & testing job with precision equipment.",
    icon: Gauge,
  },
  {
    number: 7,
    title: "CONSTRUCTION",
    description:
      "Ship oriented construction services delivering excellence in maritime infrastructure.",
    icon: Construction,
  },
  {
    number: 8,
    title: "FIRE PROTECTION",
    description:
      "Modern fire prevention and protection system with comprehensive safety measures.",
    icon: Shield,
  },
  {
    number: 9,
    title: "MAINTENANCE",
    description:
      "Non-Comprehensive & Comprehensive Maintenance of Mechanical and Electrical Systems.",
    icon: Wrench,
  },
];

export default function OurServices() {
  return (
    <section className="min-h-screen bg-[var(--color-te-back)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-te-text)] mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-te-text)]/70 max-w-2xl mx-auto">
            Comprehensive maritime and industrial solutions delivered with
            excellence and precision.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="group relative flex flex-col justify-between h-full rounded-xl border border-te-prim/10 bg-white/50 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.015] hover:border-te-prim/30 overflow-hidden">
                {/* Grid pattern background */}
                <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] before:bg-[size:20px_20px] pointer-events-none z-0" />
                

                {/* Optional animated border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-te-acc transition-all duration-500 pointer-events-none z-10" />

                {/* Icon */}
                <div className="w-12 h-12 bg-te-prim/10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 z-20">
                  <service.icon className="w-6 h-6 text-te-prim" />
                </div>

                {/* Content */}
                <h3 className="text-[20px] font-semibold text-te-text mb-2 group-hover:text-te-acc transition-colors duration-300 z-20">
                  {service.title}
                </h3>

                <p className="text-[15px] text-te-text/70 leading-[1.7] mb-6 z-20">
                  {service.description}
                </p>

                {/* Footer: number or action */}
                <div className="text-sm text-te-acc font-medium tracking-wider z-20">
                  #{service.number.toString().padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
