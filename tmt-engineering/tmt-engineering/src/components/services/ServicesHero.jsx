
import {  ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import servicesBg from '../../assets/hero-bgs/services-bg.jpg';


export default function ServicesHero() {
  return (

    <div className="relative">
    {/* Hero Image */}
    
    <div className="relative h-[50vh] md:h-[60vh]">
    <div className="absolute inset-0 bg-te-prim/15" />
      <img
        src={servicesBg}
        className="w-full h-full object-cover object-center"
      />
      
      {/* Title Overlay */}
      <div className="absolute top-[25%] left-0 w-full">
              <div className="container mx-auto px-8">
                <div className="relative bg-white/10 backdrop-blur-sm  p-4 shadow-xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg shadow-black">
                    Our Services
                  </h1>
                  {/* Neumorphic effect layers using pseudo-elements in CSS */}
                  <div className="absolute inset-0  bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 rounded-lg shadow-inner"></div>
                </div>
              </div>
            </div>
      
      {/* Navigation Bar */}
      <div className="absolute text-te-text  rounded-tl-full bottom-0 right-0 bg-te-sec py-2 px-7  flex items-center">
        <Link 
          to='/'
          className=" hover:text-te-acc uppercase text-sm"
        >
          Home
        </Link>
        <ChevronRight className="mx-2 w-4 h-4" />
        <span className="uppercase text-sm">Services</span>
      </div>
    </div>
  </div>
  );
}