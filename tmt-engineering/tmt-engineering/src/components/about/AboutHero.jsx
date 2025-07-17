
import {  ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import aboutBg from '../../assets/hero-bgs/about-bg.jpg';


export default function AboutHero() {
  return (

     <div className="relative">
          {/* Hero Image */}
          <div className="relative h-[50vh] md:h-[60vh]">
            <div className="absolute inset-0 bg-te-prim/15" />
            <img
              src={aboutBg}
              loading='lazy'
              className="w-full h-full object-cover object-center"
            />
            
            {/* Title Overlay with Neumorphism using Tailwind */}
            <div className="absolute top-[25%] left-0 w-full">
              <div className="container mx-auto px-8">
                <div className="relative bg-white/10 backdrop-blur-sm  p-4 shadow-xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg shadow-black">
                    About
                  </h1>
                  {/* Neumorphic effect layers using pseudo-elements in CSS */}
                  <div className="absolute inset-0  bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 rounded-lg shadow-inner"></div>
                </div>
              </div>
            </div>
            
            {/* Navigation Bar with Neumorphism using Tailwind */}
            <div className="absolute text-te-text rounded-tl-full bottom-0 right-0 bg-te-sec py-3 px-8 flex items-center shadow-lg">
              {/* Inner highlight for neumorphic effect */}
              <div className="absolute inset-0 rounded-tl-full bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
              
              <Link 
                to='/'
                className="hover:text-te-acc uppercase text-sm font-medium relative z-10 transition-colors duration-300"
              >
                Home
              </Link>
              <ChevronRight className="mx-2 w-4 h-4 relative z-10" />
              <span className="uppercase text-sm font-medium relative z-10">About</span>
            </div>
          </div>
        </div>
  );
}