// import React from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin } from "lucide-react";
// import {  Element } from "react-scroll";
// const ContactSection = () => {
//   return (
//     <Element name="contact">
//       {" "}
//       <section
//         id="contact"
//         className="relative min-h-screen bg-slate-900  flex items-center justify-center px-4 overflow-hidden"
//       >
//         {/* 🎯 Glow Elements (smaller & positioned) */}
//         <div className="absolute top-0 left-0 w-32 h-32 md:w-44 md:h-44 bg-red-500/10 blur-3xl rounded-full" />
//         <div className="absolute top-0 right-0 w-28 h-28 md:w-36 md:h-36 bg-cyan-400/10 blur-3xl rounded-full" />
//         <div className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 bg-teal-300/10 blur-3xl rounded-full" />
//         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-44 md:h-44 bg-sky-300/10 blur-3xl rounded-full" />
//         <div className="absolute top-1/2 left-1/2 w-56 h-56 md:w-72 md:h-72 bg-indigo-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

//         {/* 🧊 Glass Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{once: true}}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 max-w-3xl w-full bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl border border-white/10 text-white"
//         >
//           <h2 className="text-4xl font-bold mb-6 text-center uppercase tracking-widest">
//             Contact
//           </h2>

//           <p className="text-lg mb-8 text-center text-gray-100">
//             Reach out to us anytime. We’re here to help.
//           </p>

//           <div className="space-y-6 text-white text-base md:text-lg">
//             <div className="flex items-center gap-4">
//               <Phone size={22} className="text-cyan-300" />
//               <a href="tel:+8801234567890" className="hover:underline">
//                 +880 1234 567890
//               </a>
//             </div>

//             <div className="flex items-center gap-4">
//               <Mail size={22} className="text-indigo-300" />
//               <a href="mailto:contact@tmtgroup.com" className="hover:underline">
//                 contact@tmtgroup.com
//               </a>
//             </div>

//             <div className="flex items-center gap-4">
//               <MapPin size={22} className="text-red-300" />
//               <span>
//                 60 Benoi Road, EMS Building, Unit #02-01, Singapore 629906
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//     </Element>
//   );
// };

// export default ContactSection;

import React from "react";
import { motion } from "framer-motion";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";
import { Element } from "react-scroll";

const ContactSection = () => {
  return (
    <Element name="contact">
      <section
        id="contact"
        className="relative min-h-screen bg-slate-900 flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Glow Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-44 md:h-44 bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-28 h-28 md:w-36 md:h-36 bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 bg-teal-300/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-44 md:h-44 bg-sky-300/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 md:w-72 md:h-72 bg-indigo-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl w-full bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl border border-white/10 text-white"
        >
          <h2 className="text-4xl font-bold mb-8 text-center uppercase tracking-widest">
            CONTACT US
          </h2>
       
          <div className="flex flex-col justify-between lg:flex-row gap-6 md:gap-16">
            {/* Travel Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Travel</h3>

              <div className="flex items-center gap-4">
                <Phone size={22} className="text-cyan-300" />
                <a href="tel:+6562916621" className="hover:underline">
                  (+65) 62916621
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Smartphone size={22} className="text-indigo-300" />
                <a href="tel:+6587865630" className="hover:underline">
                  (+65) 87865630
                </a>
              </div>

              <div className="flex items-center gap-4 align-top">
                <Mail size={22} className="text-red-300 mt-1" />
                <div>
                  <a
                    href="mailto:tmtquicktravel.tours@gmail.com"
                    className="hover:underline block"
                  >
                    tmtquicktravel.tours@gmail.com
                  </a>
                  <a
                    href="mailto:tmtquickservice@yahoo.com.sg"
                    className="hover:underline block"
                  >
                    tmtquickservice@yahoo.com.sg
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 align-top">
                <MapPin size={22} className="text-green-300 mt-1" />
                <span>
                  60 Benoi Road (EMS Building), Unit #02-01, Singapore 629906
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-white/20 mx-4"></div>
            <div className="lg:hidden h-px bg-white/20 my-4"></div>

            {/* Engineering Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                Engineering
              </h3>

              <div className="flex items-center gap-4">
                <Phone size={22} className="text-cyan-300" />
                <a href="tel:+6562521461" className="hover:underline">
                  +65 62521461
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Smartphone size={22} className="text-indigo-300" />
                <a href="tel:+6590403566" className="hover:underline">
                  +65 90403566
                </a>
              </div>

              <div className="flex items-center gap-4 align-top">
                <Mail size={22} className="text-red-300 mt-1" />
                <div>
                  <a
                    href="mailto:tmtquickservice@yahoo.com.sg"
                    className="hover:underline block"
                  >
                    tmtquickservice@yahoo.com.sg
                  </a>
                  <a
                    href="mailto:tmtquick@tmtquickservice.com"
                    className="hover:underline block"
                  >
                    tmtquick@tmtquickservice.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 align-top">
                <MapPin size={22} className="text-green-300 mt-1" />
                <span>
                  60 Benoi Road (EMS Building), Unit #02-01, Singapore 629906
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default ContactSection;
