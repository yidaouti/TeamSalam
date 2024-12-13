import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../assets/images/img3.jpg';

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <section className="pt-16 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img
            src={img}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            About <span className="text-[#C8102E]">Our Club</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Welcome to our Muay Thai club, where passion meets discipline. We offer world-class training, expert coaches, 
            and a vibrant community that helps you reach your potential.
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Whether you're a beginner or an experienced fighter, you'll find your place here.
            Let's train, grow, and achieve together.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-8 px-6 py-3 bg-[#C8102E] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
