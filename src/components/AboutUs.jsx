import React, { useState } from 'react';
import img from '../assets/images/img3.jpg';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="about" className="pt-16 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <div className="flex-1">
          <img
            src={img}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-start lg:text-left">
          <p className="text-red-600 relative before:absolute before:w-20 before:h-1 before:bg-red-600 before:top-[50%] before:left-0 pl-24 text-4xl font-semibold before:translate-y-[-50%] max-sm:before:w-16 max-sm:pl-20">
            About our club
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Welcome to our Muay Thai club, where passion meets discipline. We offer world-class training, expert coaches,
            and a vibrant community that helps you reach your potential.
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Whether you're a beginner or an experienced fighter, you'll find your place here.
            Let's train, grow, and achieve together.
          </p>
          <button
            className="mt-8 px-6 py-3 flex items-center justify-center gap-1 bg-red-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition duration-300"
            onClick={handleModalToggle}
          >
            <svg viewBox="0 0 512 512" width="20px" height="20px"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>about</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="about-white" width="16px" height="16px" fill="#fff" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z" id="Shape"> </path> </g> </g> </g></svg>
            Learn More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={handleModalToggle}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-red-600 mb-4">More About Our Club</h2>
            <p className="text-gray-600 mb-4">
              Our club offers a unique combination of traditional Muay Thai techniques and modern training practices.
              From beginners seeking fitness to advanced fighters aiming to compete, we cater to all levels.
            </p>
            <p className="text-gray-600">
              Join us for exciting training sessions, workshops, and community events to grow both mentally and physically.
            </p>
            <div className="mt-6 text-center">
              <button
                className="px-6 py-3 bg-red-600 text-white rounded-md shadow-lg hover:shadow-xl transition duration-300"
                onClick={handleModalToggle}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
