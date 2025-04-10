import React, { useState } from "react";
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
    <div className="bg-[#F0FDF4] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16A34A] mb-4">
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
      <div key={index} className="relative group">
        <div className="h-full rounded-2xl p-6 transition-all duration-500 transform group-hover:-translate-y-2 bg-white text-[#1E293B] shadow-[8px_8px_15px_#d1d9e6,-8px_-8px_15px_#ffffff] group-hover:bg-[#16A34A] group-hover:text-white group-hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.2)]">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-xl bg-[#D1FAE5] group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
              <Icon className="w-6 h-6 text-[#16A34A] group-hover:text-white transition-colors duration-500" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[#16A34A] group-hover:text-white">
            {company.name}
          </h3>

          <div className="text-sm mb-3 text-[#0F766E] group-hover:text-white/80">
            {company.type} • {company.location}
          </div>

          <p className="text-sm text-[#1E293B] group-hover:text-white/90">
            {company.description}
          </p>

          {/* <div className="absolute bottom-6 right-6 transform transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#0F766E] group-hover:text-white">
                Learn More
              </span>
              <svg
                className="w-4 h-4 text-[#0F766E] group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
}
