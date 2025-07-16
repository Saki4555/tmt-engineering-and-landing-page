import React from 'react';
import { PenLine, Target, Code } from 'lucide-react';

export default function Missions() {
  const items = [
    {
      icon: PenLine,
      title: "OUR MISSION",
      description: "Raising the standard of operations and profitability of the industry",
    },
    {
      icon: Target,
      title: "CORE VALUES",
      description: "Raising the standard of operations and profitability of the industry",
    },
    {
      icon: Code,
      title: "OUR VISION",
      description: "A regional company with Singapore its home base",
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-te-sec  p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient circle */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom right, var(--color-te-prim), var(--color-te-acc))'
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className="inline-flex items-center justify-center p-3 rounded-lg text-white shadow-lg"
                    style={{
                      backgroundImage: 'linear-gradient(to right, var(--color-te-prim), var(--color-te-acc))'
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="relative z-10 text-xl font-bold mb-3 tracking-wider bg-clip-text text-transparent group-hover:text-transparent transition-all duration-300"
                  style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-te-prim), var(--color-te-acc))'
                  }}
                >
                  {item.title}
                </h3>

                {/* Underline */}
                <div
                  className="relative z-10 w-12 h-1 mb-5 rounded-full group-hover:w-20 transition-all duration-300"
                  style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-te-prim), var(--color-te-acc))'
                  }}
                />

                {/* Description */}
                <p className="relative z-10 text-te-text/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
