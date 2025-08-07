"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Building2,
  Factory,
  Wrench,
  Cpu,
  Briefcase,
} from "lucide-react";

const companies = [
  {
    name: "TMT Quick Vietnam",
    type: "Regional Headquarters",
    location: "Vietnam",
    icon: Building2,
    description:
      "Leading operations across Southeast Asia with innovative service solutions.",
  },
  {
    name: "TMT Quick Service, LLC",
    type: "Regional Branch",
    location: "Azerbaijan",
    icon: Globe2,
    description:
      "Strategic presence in Central Asia delivering premium quick service solutions.",
  },
  {
    name: "TMT Quick Service Engineering",
    type: "Technical Division",
    location: "Global",
    icon: Wrench,
    description:
      "Specialized engineering and automation solutions for industry leaders.",
  },
  {
    name: "TMT Quick Building & Industry",
    type: "Infrastructure Division",
    location: "Singapore",
    icon: Factory,
    description:
      "Comprehensive building and industrial services for modern infrastructure.",
  },
  {
    name: "TMT Quick Service Indonesia",
    type: "Regional Branch",
    location: "Indonesia",
    icon: Cpu,
    description:
      "Advanced automation and engineering solutions for the Indonesian market.",
  },
  {
    name: "TMT Quick Service Holdings",
    type: "Parent Company",
    location: "Global",
    icon: Briefcase,
    description:
      "Global leader in quick service solutions and industrial automation.",
  },
];

export default function TMTCompanies() {
  return (
    <div className="bg-te-back min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-4">
            Global Presence, Local Excellence
          </h2>
          <p className="text-[#1E293B] text-lg max-w-2xl mx-auto">
            Delivering innovative solutions across continents through our
            network of specialized companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="relative group transition-transform duration-300 hover:scale-105">
                  <div className="h-full rounded-none border border-[#CBD5E1] p-6 bg-white text-[#1E293B] shadow-[4px_4px_12px_#d1d9e6,-4px_-4px_12px_#ffffff] group-hover:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_rgba(255,255,255,0.15)] group-hover:bg-te-acc/80 group-hover:text-white transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-[#DBEAFE]  group-hover:bg-white/20 shadow-inner transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#2563EB] group-hover:text-white line-clamp-2 transition-all duration-300">
                        {company.name}
                      </h3>
                    </div>

                    <div className="text-sm font-medium mb-2 text-[#1E40AF] group-hover:text-white/80">
                      {company.type} • {company.location}
                    </div>

                    <p className="text-sm leading-relaxed text-[#1E293B] group-hover:text-white/90">
                      {company.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
