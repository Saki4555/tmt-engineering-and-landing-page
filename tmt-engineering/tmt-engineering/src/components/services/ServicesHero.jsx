import React from 'react';
import { ArrowRight, Award, Briefcase, Users, Globe2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';


export default function ServicesHero() {
  return (

    <div className="relative">
    {/* Hero Image */}
    
    <div className="relative h-[50vh] md:h-[60vh]">
    <div className="absolute inset-0 bg-te-prim/15" />
      <img
        src="https://plus.unsplash.com/premium_photo-1710363128278-c698c412deeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxManQ3LWNYRjNmOHx8ZW58MHx8fHx8"
        className="w-full h-full object-cover object-center"
      />
      
      {/* Title Overlay */}
      <div className="absolute top-[25%] left-0 w-full">
        <div className="container mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            OurServices
          </h1>
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