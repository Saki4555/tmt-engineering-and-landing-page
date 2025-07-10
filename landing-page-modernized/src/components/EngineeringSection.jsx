

import Image from "next/image";
import { Wrench, Pipette, Flame } from "lucide-react";
import { SectionContainer } from "./SectionContainer";

export default function EngineeringSection() {
  return (
    <section className="min-h-screen relative text-slate-100 px-4 py-16 lg:py-24">
      <SectionContainer>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Column - Image */}
        <div className="relative hover:scale-105 transform  transition-transform duration-500 w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Engineering"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:pl-6">
          <div className="relative bg-slate-950/80 backdrop-blur-md border border-gray-800 rounded-2xl px-6 py-8 shadow-xl">
            <div className="absolute left-0 top-6 h-14 w-1 bg-gradient-to-b from-blue-600 via-red-600 to-sky-500 rounded-r"></div>

            <div className="space-y-5 pl-4">
              <p className="uppercase text-sm text-green-500 tracking-wide font-semibold">
                What We Do
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Engineering Excellence
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-prose">
                Our engineering division delivers precision and performance across industries:
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-pink-500/20 rounded-md shadow-md">
                    <Wrench className="text-pink-500 w-6 h-6" />
                  </div>
                  <p>Fabrication & Installation of Electrical Instrumentation</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-md shadow-md">
                    <Pipette className="text-blue-500 w-6 h-6" />
                  </div>
                  <p>Tubing & Piping Work for the Marine Sector</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-500/20 rounded-md shadow-md">
                    <Flame className="text-red-500 w-6 h-6" />
                  </div>
                  <p>Power Generation & Oil/Petrochemical Support (Singapore & Baku)</p>
                </div>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 hover:bg-green-600 cursor-pointer text-white font-semibold shadow-lg transition">
                Explore Engineering →
              </button>
            </div>
          </div>
        </div>
      </div></SectionContainer>
    </section>
  );
}
