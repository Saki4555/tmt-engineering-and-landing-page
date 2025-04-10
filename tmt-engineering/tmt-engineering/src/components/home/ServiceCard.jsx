import React from 'react';

import { Anchor, Zap, Eye, Wrench, Wind, Gauge, Building, ShieldCheck, Settings } from "lucide-react";

const iconMap = {
  "MARINE": Anchor,
  "ELECTRICAL": Zap,
  "INSPECTION": Eye,
  "MECHANICAL/PIPING": Wrench,
  "VENTILATION": Wind,
  "INSTRUMENTATION": Gauge,
  "CONSTRUCTION": Building,
  "FIRE PROTECTION": ShieldCheck,
  "MAINTENANCE": Settings
};

export default function ServiceCard({ title, description, isLarge = false }) {
  const Icon = iconMap[title] || Anchor;
  
  return (
    <div
    className={`group relative bg-[var(--color-te-sec)] rounded-2xl p-6 hover:bg-gradient-to-br hover:from-[var(--color-te-sec)] hover:via-white hover:to-[var(--color-te-back)] transition-all duration-500 ${
      isLarge ? 'md:col-span-2 md:row-span-2' : ''
    }`}
  >
    <div className={`flex flex-col h-full ${isLarge ? 'justify-between' : ''}`}>
      <div>
        <div className="h-10 w-10 rounded-xl bg-[var(--color-te-prim)]/10 flex items-center justify-center text-[var(--color-te-prim)] group-hover:scale-125 transition-all duration-500">
          <Icon className="h-5 w-5" />
        </div>
  
        <h3 className="mt-4 text-sm font-semibold text-[var(--color-te-text)] group-hover:text-[var(--color-te-acc)] transition-colors">
          {title}
        </h3>
  
        <p
          className={`mt-2 text-xs text-[var(--color-te-text)]/70 group-hover:text-[var(--color-te-text)] ${
            isLarge ? 'line-clamp-4' : 'line-clamp-2'
          }`}
        >
          {description}
        </p>
      </div>
  
      {/* Explore Link (if re-enabled later) */}
      
      {/* <div className="mt-4 inline-flex items-center text-[var(--color-te-acc)] text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        Explore
        <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div> */}
     
    </div>
  </div>
  
  );
}