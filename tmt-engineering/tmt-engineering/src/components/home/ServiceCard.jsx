import React from 'react';
import { Anchor, Zap, Eye, Wrench, Wind, Gauge, Building, ShieldCheck, Settings } from 'lucide-react';

// Map service titles to Lucide icons
const iconMap = {
  MARINE: Anchor,
  ELECTRICAL: Zap,
  INSPECTION: Eye,
  MECHANICAL: Wrench,
  VENTILATION: Wind,
  INSTRUMENTATION: Gauge,
  CONSTRUCTION: Building,
  FIRE: ShieldCheck,
  MAINTENANCE: Settings,
};

export default function ServiceCard({ title, description, isLarge = false }) {
  const Icon = iconMap[title] || Anchor;

  return (
    <div className={`
      group relative overflow-hidden rounded-none
      ${isLarge ? 'col-span-2 row-span-2 p-8' : 'p-6 h-[250px] min-h-[250px]'} 
      bg-blue-50  border border-[var(--color-te-prim)]/20
      backdrop-blur-xl
      hover:border-[var(--color-te-acc)]/40 transition-all duration-700 ease-out
      hover:shadow-2xl hover:shadow-te-sec/20
      cursor-pointer transform hover:scale-[1.02]
    `}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-te-prim/50 to-te-acc opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-te-prim)]/20 to-[var(--color-te-acc)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon container */}
        <div className={`
          ${isLarge ? 'mb-6' : 'mb-4'}
          flex items-center justify-center
          ${isLarge ? 'w-20 h-20' : 'w-14 h-14'}
          rounded-lg bg-gradient-to-br from-[var(--color-te-prim)]/10 to-[var(--color-te-acc)]/10
          border border-[var(--color-te-prim)]/30 group-hover:border-[var(--color-te-prim)]/50
          transition-all duration-500
          group-hover:scale-110 group-hover:rotate-3
        `}>
          <Icon 
            className={`
              ${isLarge ? 'w-10 h-10' : 'w-7 h-7'}
              text-[var(--color-te-prim)] group-hover:text-white
              transition-all duration-500
              group-hover:drop-shadow-lg
            `}
          />
        </div>

        {/* Title */}
        <h3 className={`
          ${isLarge ? 'text-3xl mb-4' : 'text-xl mb-3'}
          font-bold text-te-prim
          group-hover:text-white transition-colors duration-500
          tracking-wide
        `}>
          {title}
        </h3>

        {/* Description */}
        <p className={`
          ${isLarge ? 'text-lg leading-relaxed' : 'text-sm leading-relaxed'}
          text-[var(--color-te-text)] group-hover:text-white
          transition-colors duration-500
          flex-1 overflow-hidden 
        `}>
          {description}
        </p>

      </div>

      {/* Animated dots pattern */}
      <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-80 transition-opacity duration-700">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-[var(--color-te-prim)] group-hover:bg-white  animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}