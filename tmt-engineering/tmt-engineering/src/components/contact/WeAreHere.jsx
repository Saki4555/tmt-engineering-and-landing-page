
import { motion } from "motion/react";

const WeAreHere = () => {
  return (
    <section className="bg-te-back py-20 px-4 flex flex-col items-center text-te-text">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        We Are{" "}
        <span className="text-te-prim relative after:block after:h-1 after:bg-te-prim after:w-full after:absolute after:bottom-[-6px]">
          Here
        </span>
      </motion.h2>

      <motion.div
        className="w-full max-w-6xl shadow-[10px_10px_30px_#c7ddff,_-10px_-10px_30px_#ffffff] rounded-2xl overflow-hidden transition-transform hover:scale-[1.01] bg-te-sec"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.748716941938!2d103.67740012403466!3d1.326728811651685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da05806abb981b%3A0xca655d44246d7022!2sEngineering%20Manufacturing%20Services%20(S)%20Pte.%20Ltd.!5e0!3m2!1sen!2sbd!4v1744044531417!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        />
      </motion.div>
    </section>
  );
};

export default WeAreHere;
