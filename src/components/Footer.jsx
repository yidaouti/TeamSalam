import React from 'react';
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer class="bg-gray-100 py-6 px-8 font-sans tracking-wide">
      <div class="flex max-lg:flex-col items-center justify-between gap-x-6 gap-y-8">

        <ul class="flex flex-wrap justify-center gap-6">
          <img
            src={logo}
            alt="Team Salam"
            width="50px"
            height="50px"
            className=""
            style={{
              objectPosition: 'center',
            }}
          />
        </ul>

        <p class='text-base text-center text-gray-800  max-lg:order-1'>© Team Salam. All rights reserved.</p>
        <div class="flex justify-center gap-x-6 gap-y-2 flex-wrap">
          <a href="tel:+212636960514" target="_blank">
            <i class="fa-brands fa-whatsapp fa-2xl  hover:text-[#25D366] transition-colors"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063529926213" target="_blank">
            <i class="fa-brands fa-facebook fa-2xl hover:text-[#3b5998] transition-colors"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
