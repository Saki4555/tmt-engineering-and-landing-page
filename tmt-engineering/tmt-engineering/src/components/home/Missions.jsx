import React from 'react';
import { PenLine, Target, Code } from 'lucide-react';

export default function Missions() {
  const items = [
    {
      icon: PenLine,
      title: "OUR MISSION",
      description: "Raising the standard of operations and profitability of the industry",
      accent: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "CORE VALUES",
      description: "Raising the standard of operations and profitability of the industry",
      accent: "from-purple-500 to-pink-600"
    },
    {
      icon: Code,
      title: "OUR VISION",
      description: "A regional company with Singapore its home base",
      accent: "from-teal-500 to-emerald-600"
    }
  ];

  return (
    // <div className="py-20  bg-transparent">
    //   <div className="max-w-6xl mx-auto">
    //     <div className="grid md:grid-cols-3 gap-10">
    //       {items.map((item, index) => {
    //         const Icon = item.icon;
    //         return (
    //           <div 
    //             key={index}
    //             className="group relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:translate-y-[-8px] overflow-hidden"
    //           >
    //             {/* Background gradient circle */}
    //             <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.accent} rounded-full opacity-10 translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
                
    //             {/* Icon with gradient background */}
    //             <div className="relative z-10 mb-6">
    //               <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${item.accent} text-white shadow-lg`}>
    //                 <Icon className="w-7 h-7" />
    //               </div>
    //             </div>
                
    //             {/* Content */}
    //             <h3 className="relative z-10 text-xl font-bold mb-3 tracking-wider group-hover:text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300 ease-in-out ${item.accent}">{item.title}</h3>
    //             <div className="relative z-10 w-12 h-1 mb-5 bg-gradient-to-r ${item.accent} rounded-full group-hover:w-20 transition-all duration-300"></div>
    //             <p className="relative z-10 text-gray-600 leading-relaxed">{item.description}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div className="py-20 ">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div 
            key={index}
            className="group relative bg-[var(--color-te-sec)] rounded-3xl p-8 shadow-xl transition-all duration-500 hover:translate-y-[-8px] overflow-hidden"
          >
            {/* Background gradient circle */}
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--color-te-prim)] to-[var(--color-te-acc)] rounded-full opacity-10 translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
            
            {/* Icon with gradient background */}
            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-[var(--color-te-prim)] to-[var(--color-te-acc)] text-white shadow-lg">
                <Icon className="w-7 h-7" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="relative z-10 text-xl font-bold mb-3 tracking-wider group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-te-prim)] to-[var(--color-te-acc)] transition-all duration-300 ease-in-out">
              {item.title}
            </h3>
            <div className="relative z-10 w-12 h-1 mb-5 bg-gradient-to-r from-[var(--color-te-prim)] to-[var(--color-te-acc)] rounded-full group-hover:w-20 transition-all duration-300"></div>
            <p className="relative z-10 text-[var(--color-te-text)]/80 leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
}