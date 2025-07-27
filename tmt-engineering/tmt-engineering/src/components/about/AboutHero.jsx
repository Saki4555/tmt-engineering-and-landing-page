import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import aboutBg from '../../assets/hero-bgs/about-bg.jpg';
import { motion } from 'motion/react';

export default function AboutHero() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-te-prim/15" />
        <img
          src={aboutBg}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute top-[25%] left-0 w-full"
        >
          <div className="container mx-auto px-8">
            <div className="relative bg-white/10 backdrop-blur-sm p-4 shadow-xl">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg shadow-black"
              >
                About
              </motion.h1>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
              <div className="absolute inset-0 rounded-lg shadow-inner"></div>
            </div>
          </div>
        </motion.div>

        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="absolute text-te-text rounded-tl-full bottom-0 right-0 bg-te-sec py-3 px-8 flex items-center shadow-lg"
        >
          <div className="absolute inset-0 rounded-tl-full bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>

          <Link
            to="/"
            className="hover:text-te-acc uppercase text-sm font-medium relative z-10 transition-colors duration-300"
          >
            Home
          </Link>
          <ChevronRight className="mx-2 w-4 h-4 relative z-10" />
          <span className="uppercase text-sm font-medium relative z-10">About</span>
        </motion.div>
      </div>
    </div>
  );
}
