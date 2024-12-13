import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/images/img4.jpg';

const Hero = () => {
  return (
    <section className="min-h-[90vh] items-center justify-center relative py-32 lg:py-36 bg-white">
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
            className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900"
          >
            Muay Thai{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#C8102E] via-[#FF6F61] to-[#FF3A36]">
              Martial Arts
            </span>{' '}
            at Its Best.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 text-gray-700 text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Unleash your power and discipline. Join our Muay Thai training programs and take your skills to the next
            level.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mt-10 w-full flex max-w-md mx-auto lg:mx-0"
          >
            <form
              action="#"
              className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20 border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white focus-within:border-[#C8102E]"
            >
              <span className="min-w-max pr-2 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
              </span>
              <input
                type="email"
                name=""
                id=""
                placeholder="johndoe@gmail.com"
                className="w-full py-3 outline-none bg-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#C8102E] hover:after:opacity-100 hover:after:scale-[2.5] bg-[#C8102E] border-transparent hover:border-[#C8102E]"
              >
                <span className="hidden sm:flex relative z-[5]">Get Started</span>
                <span className="flex sm:hidden relative z-[5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
              </motion.button>
            </form>
          </motion.div>
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
