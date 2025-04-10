import React from "react";
import { Users, Building2, Globe2 } from "lucide-react";
import Missions from "./Missions";

export default function WhoWeAre() {
  return (
    <div className="relative bg-[var(--color-te-back)] py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-te-acc)]/90 to-transparent" /> */}
      </div>

      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-[var(--color-te-acc)] font-semibold mb-3">
            Who We Are
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-te-text)] mb-6 leading-tight">
            Navigating Challenges,
            <span className="block bg-gradient-to-r from-[var(--color-te-prim)] to-[var(--color-te-acc)] bg-clip-text text-transparent">
            Engineered for Excellence
            </span>
          </h1>
          <p className="text-[var(--color-te-text)]/80 text-lg leading-relaxed">
          Established in 2009, TMT Quick Service specializes in offshore, marine, and oil & gas engineering. With operations across Singapore, India, and Bangladesh, we deliver expert fabrication, project management, and switchboard manufacturing—backed by a skilled team and a reputation for quality, safety, and timely execution.
          </p>
        </div>

        {/* Stats Grid */}

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              number: "700+",
              label: "EMPLOYEES",
              description: "Expert professionals dedicated to excellence",
            },
            {
              icon: Building2,
              number: "45+",
              label: "PROJECTS",
              description: "Successfully completed major installations",
            },
            {
              icon: Globe2,
              number: "5+",
              label: "COUNTRIES",
              description: "UAE, OMAN, QATAR, KSA, INDIA",
            },
          ].map((stat, index) => (
            <div key={index} className="relative flex">
              <div className="group flex flex-col justify-between bg-[var(--color-te-sec)] rounded-2xl p-8 border border-white/10 shadow-[inset_4px_4px_8px_#c7e9d6,inset_-4px_-4px_8px_#ffffff] w-full transition-all duration-300 hover:bg-[var(--color-te-prim)]/10">
                <stat.icon className="w-12 h-12 text-[var(--color-te-prim)] group-hover:text-[var(--color-te-acc)] mb-4 transition-colors duration-300" />
                <div>
                  <div className="text-4xl font-bold text-[var(--color-te-text)] group-hover:text-[var(--color-te-acc)] mb-2 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-[var(--color-te-acc)] font-semibold group-hover:text-[var(--color-te-prim)] mb-2 transition-colors duration-300">
                    {stat.label}
                  </div>
                  <p className="text-[var(--color-te-text)]/70 group-hover:text-[var(--color-te-text)] transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Missions />
      </div>
    </div>
  );
}
