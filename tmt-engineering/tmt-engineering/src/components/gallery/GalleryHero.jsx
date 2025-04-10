// import React from 'react';
// import {  ChevronRight } from 'lucide-react';
// import { Link } from 'react-router';


// export default function GalleryHero() {
//   return (

//     <div className="relative">
//     {/* Hero Image */}
    
//     <div className="relative h-[50vh] md:h-[60vh]">
//     <div className="absolute inset-0 bg-te-prim/15" />
//       <img
//         src="https://plus.unsplash.com/premium_photo-1710363128278-c698c412deeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxManQ3LWNYRjNmOHx8ZW58MHx8fHx8"
//         className="w-full h-full object-cover object-center"
//       />
      
//       {/* Title Overlay */}
//       <div className="absolute top-[25%] left-0 w-full">
//         <div className="container mx-auto px-8">
//           <h1 className="text-5xl md:text-6xl font-bold text-white">
//             Gallery
//           </h1>
//         </div>
//       </div>
      
//       {/* Navigation Bar */}
//       <div className="absolute text-te-text  rounded-tl-full bottom-0 right-0 bg-te-sec py-2 px-7  flex items-center">
//         <Link 
//           to='/'
//           className=" hover:text-te-acc uppercase text-sm"
//         >
//           Home
//         </Link>
//         <ChevronRight className="mx-2 w-4 h-4" />
//         <span className="uppercase text-sm">Gallery</span>
//       </div>
//     </div>
//   </div>
//   );
// }


import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export default function GalleryHero() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-te-prim/15" />
        <img
          src="https://plus.unsplash.com/premium_photo-1710363128278-c698c412deeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxManQ3LWNYRjNmOHx8ZW58MHx8fHx8"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Title Overlay with Neumorphism using Tailwind */}
        <div className="absolute top-[25%] left-0 w-full">
          <div className="container mx-auto px-8">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg shadow-black">
                Gallery
              </h1>
              {/* Neumorphic effect layers using pseudo-elements in CSS */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
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
          <span className="uppercase text-sm font-medium relative z-10">Gallery</span>
        </div>
      </div>
    </div>
  );
}