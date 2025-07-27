
import ImageSlider from "./ImageSlider";
import work1 from "../../assets/works/work-1.jpg";
import work2 from "../../assets/works/work-2.jpg";
import work3 from "../../assets/works/work-3.jpg";
import { motion } from "motion/react";

export default function OurWorks() {
  const images = [
    work1, work2, work3,
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl text-center md:text-5xl font-bold text-[var(--color-te-text)] mb-2">
          Some of Our Works
        </h1>
        <div className="w-24 h-1 mx-auto bg-te-prim mb-4"></div>
      </motion.div>

      <ImageSlider images={images} />
    </div>
  );
}
