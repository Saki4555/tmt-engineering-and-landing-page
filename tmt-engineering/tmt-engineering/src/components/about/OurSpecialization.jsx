


import React from "react";
import { useNavigate } from "react-router";

export const OurSpecialization = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full overflow-hidden bg-te-back">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-te-prim/10"></div>
          <img
            src="https://plus.unsplash.com/premium_photo-1710363128278-c698c412deeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxManQ3LWNYRjNmOHx8ZW58MHx8fHx8"
            alt="Industrial shipyard"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 text-te-text">
          <div className="bg-te-back/70   border border-te-acc/40 rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl backdrop-blur-3xl">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-2 md:mb-4 text-shadow-lg relative text-te-text">
              WE ARE{" "}
              <span className="text-te-prim font-extrabold italic relative">
                SPECIALIZED
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-te-sec/70 animate-pulse"></span>
              </span>{" "}
              IN WHAT WE DO!
            </h2>
            
            <p className="max-w-full md:max-w-2xl text-center text-sm sm:text-base md:text-lg my-2 md:my-4 leading-relaxed bg-te-prim/30 p-2 sm:p-3 md:p-4 rounded-lg border-l-2 border-r-2 border-te-acc/50 text-black">
              We provide quality services to all our clients. Our quality of job
              and timely completion of project is our biggest strength.
            </p>
            
            <p className="text-center text-sm sm:text-base md:text-lg font-medium my-2 md:my-4 tracking-wide bg-gradient-to-r from-te-text to-te-prim bg-clip-text text-transparent">
              We are qualified and certified!
            </p>
            
            <div className="mt-3 md:mt-6 flex justify-center">
              <button onClick={() => navigate('/')} className="relative overflow-hidden rounded-lg group bg-te-prim px-4 sm:px-6 md:px-8 py-2 md:py-3 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-te-back transition-all duration-500 hover:bg-te-sec hover:text-te-text active:bg-te-sec cursor-pointer">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-te-acc/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  SEE ALL OUR SERVICES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};