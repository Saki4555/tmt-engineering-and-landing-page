import { Calendar, Smile, Award, Truck } from "lucide-react";
import Missions from "./Missions";
import { motion } from "motion/react";

export default function WhoWeAre() {
  return (
    <div className="relative bg-te-back py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>

      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-te-acc font-semibold mb-3">Who We Are</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-te-text mb-6 leading-tight">
            Navigating Challenges,
            <span className="block bg-gradient-to-r from-te-prim/80 to-te-acc bg-clip-text text-transparent">
              Engineered for Excellence
            </span>
          </h1>
          <p className="text-te-text/80 text-lg leading-relaxed">
            Established in 2009, TMT Quick Service specializes in offshore,
            marine, and oil & gas engineering. With operations across Singapore,
            India, and Bangladesh, we deliver expert fabrication, project
            management, and switchboard manufacturing—backed by a skilled team
            and a reputation for quality, safety, and timely execution.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Calendar,
              number: "17",
              label: "YEARS",
              description: "Years of Experience",
            },
            {
              icon: Smile,
              number: "65+",
              label: "CLIENTS",
              description: "Happy Clients",
            },
            {
              icon: Award,
              number: "5300+",
              label: "AWARDS",
              description: "Quality of Work",
            },
            {
              icon: Truck,
              number: "270+",
              label: "DELIVERIES",
              description: "Projects Delivered",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            >
              <div className="group relative overflow-hidden border border-te-acc/30">
                <div className="relative bg-gradient-to-br from-te-sec via-te-sec to-te-sec/90 p-6 rounded-none border border-white/20 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-te-prim/30">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-te-prim/0 via-te-prim/5 to-te-acc/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Floating orb effect */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-te-prim/20 to-te-acc/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-te-prim/10 to-te-acc/10 border border-te-prim/20 mb-4 group-hover:border-te-acc/40 transition-all duration-300">
                      <stat.icon className="w-7 h-7 text-te-prim group-hover:text-te-acc transition-colors duration-300" />
                    </div>

                    <div className="text-3xl font-bold text-te-text group-hover:text-te-acc mb-2 transition-colors duration-300 tracking-tight">
                      {stat.number}
                    </div>

                    <div className="text-te-acc font-semibold text-sm tracking-wider mb-2 group-hover:text-te-prim transition-colors duration-300">
                      {stat.label}
                    </div>

                    <p className="text-te-text/70 text-sm group-hover:text-te-text transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-te-prim/0 via-te-prim to-te-acc/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Missions section */}
        <Missions />
      </div>
    </div>
  );
}
