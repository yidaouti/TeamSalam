import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/images/img5.png';

const Hero = () => {
  return (
    <section id='home' className="min-h-screen flex items-center justify-center relative py-32 lg:py-36 bg-white">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Decorative Elements */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.95, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-[#C8102E] blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"
          ></motion.span>
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 text-start"
          >
            Muay Thai{' '}
            <span className="text-transparent  bg-clip-text bg-gradient-to-br from-[#C8102E] via-[#FF6F61] to-[#FF3A36]">
              Martial Arts
            </span>{' '}
            at Its Best.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 text-gray-700 text-xl text-start leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Unleash your power and discipline. Join our Muay Thai training programs and take your skills to the next
            level.
          </motion.p>

        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"
        >
          <img
            src={img}
            alt="Hero image"
            width="2350"
            height="2359"
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            style={{
              objectPosition: 'center',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
