import Image from "next/image";
import { Plane, Globe, Hotel } from "lucide-react";
import { SectionContainer } from "./SectionContainer";

export default function TravelSection() {
  return (
    <section className="min-h-screen text-slate-100  py-16 lg:py-20">
      <SectionContainer>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Column - Content */}
        <div className="lg:pr-6">
          <div className="relative bg-slate-950/80 backdrop-blur-md border border-gray-800 rounded-2xl px-6 py-8 shadow-xl">
            <div className="absolute left-0 top-6 h-14 w-1 bg-gradient-to-b from-blue-600 via-red-600 to-sky-500 rounded-r"></div>

            <div className="space-y-5 pl-4">
              <p className="uppercase text-sm text-teal-400 tracking-wide font-semibold">
                Explore the World
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Travel Experiences
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-prose">
                Discover the world with us. Our travel division offers unforgettable experiences across global destinations.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-pink-500/20 rounded-md shadow-md">
                    <Globe className="text-pink-500 w-6 h-6" />
                  </div>
                  <p>Custom Travel Itineraries and Luxury Packages</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-md shadow-md">
                    <Plane className="text-blue-500 w-6 h-6" />
                  </div>
                  <p>Global Destinations with Guided Tours</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-500/20 rounded-md shadow-md">
                    <Hotel className="text-red-500 w-6 h-6" />
                  </div>
                  <p>Visa, Flights, and Accommodation Services</p>
                </div>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-500 cursor-pointer text-white font-semibold shadow-lg transition">
                Explore Travel →
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative hover:scale-105 transform  transition-transform duration-500 w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=870&q=80"
            alt="Travel"
            fill
            className="object-cover"
          />
        </div>
      </div></SectionContainer>
    </section>
  );
}
