import React, { useState ,useEffect} from 'react';
import logo from '../assets/images/logo.png'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="shadow-md font-sans tracking-wide w-full z-50 fixed">
      <section className=" thai-border bg-[#C8102E] text-white text-right ">
        <div className='thai-border-white'>
          <p className="text-sm py-3 px-12 flex justify-end gap-4 ">
            <div><i class="fa-solid fa-location-dot"></i> Tayert Sofla (colombia)</div>
            <div><i class="fa-solid fa-phone"></i> +212 6 369 605 14</div>
          </p>
        </div>
      </section>

      {/* Background overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleMenu} // Close menu when background is clicked
        />
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
        <a href="javascript:void(0)">
          <img src={logo} alt="logo" className="w-14" />
        </a>

        <div
          id="collapseMenu"
          className={`lg:block ${menuOpen ? 'block' : 'hidden'} lg:flex flex-wrap gap-x-5 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 transition-all duration-300`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            onClick={toggleMenu}
          >
             <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
      <li className="mb-6 hidden max-lg:block">
        <a href="javascript:void(0)" className="flex items-center justify-center gap-2 text-bold">
          <img src={logo} alt="logo" className="w-14" />
          <p>Team Salam</p>
        </a>
      </li>
      <li className="max-lg:border-b max-lg:py-3 px-3">
        <a href="#home" className={`hover:text-[#C8102E] block font-bold text-[15px] ${activeSection === "home" ? "text-[#C8102E]" : "text-[#333]"}`}>
          Home
        </a>
      </li>
      <li className="max-lg:border-b max-lg:py-3 px-3">
        <a href="#services" className={`hover:text-[#C8102E] block font-bold text-[15px] ${activeSection === "services" ? "text-[#C8102E]" : "text-[#333]"}`}>
          Service
        </a>
      </li>
      <li className="max-lg:border-b max-lg:py-3 px-3">
        <a href="#about" className={`hover:text-[#C8102E] block font-bold text-[15px] ${activeSection === "about" ? "text-[#C8102E]" : "text-[#333]"}`}>
          About
        </a>
      </li>
      <li className="max-lg:border-b max-lg:py-3 px-3">
        <a href="#schedule" className={`hover:text-[#C8102E] block font-bold text-[15px] ${activeSection === "schedule" ? "text-[#C8102E]" : "text-[#333]"}`}>
          Training Schedule
        </a>
      </li>
      <li className="max-lg:border-b max-lg:py-3 px-3">
        <a href="#faq" className={`hover:text-[#C8102E] block font-bold text-[15px] ${activeSection === "faq" ? "text-[#C8102E]" : "text-[#333]"}`}>
          FAQ
        </a>
      </li>
      <li className="max-lg:border-b max-lg:py-3 px-3">
        <a href="#contact" className={`hover:text-[#C8102E] block font-bold text-[15px] ${activeSection === "contact" ? "text-[#C8102E]" : "text-[#333]"}`}>
          Contact
        </a>
      </li>
    </ul>
        </div>

        <div className="flex max-lg:ml-auto">
          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            <svg className="w-7 h-7 fill-current text-black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
