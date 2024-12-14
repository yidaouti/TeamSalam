import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
          question: "What is Muay Thai?",
          answer: "Muay Thai is a traditional martial art from Thailand known as the 'Art of Eight Limbs.' It involves using fists, elbows, knees, and shins for strikes and is known for its powerful, dynamic techniques.",
          isOpen: false,
        },
        {
          question: "How can I join your Muay Thai club?",
          answer: "To join our Muay Thai club, simply visit the 'Contact Us' page on our website and fill out the registration form. You can also drop by our training center for more information.",
          isOpen: false,
        },
        {
          question: "What are the training schedules?",
          answer: "Our training sessions are held every Monday, Wednesday, and Friday from 6 PM to 8 PM. We also offer weekend workshops for beginners on Saturdays from 10 AM to 12 PM.",
          isOpen: false,
        },
        {
          question: "Do you offer beginner Muay Thai classes?",
          answer: "Yes, we offer classes for all skill levels, including beginners. Our experienced trainers will guide you through the basics, helping you build confidence and strength.",
          isOpen: false,
        },
        {
          question: "Is there a membership fee?",
          answer: "Yes, we have a membership fee that covers the cost of training sessions, access to our facilities, and special events. You can check out the 'Pricing' page on our website for more details.",
          isOpen: false,
        },
        {
          question: "Can I learn Muay Thai even if I have no previous martial arts experience?",
          answer: "Absolutely! Muay Thai is suitable for beginners, and our trainers will ensure that you progress at your own pace. Whether you have experience or not, we will support your journey every step of the way.",
          isOpen: false,
        },
      ];
      
      

  const [faqData, setFaqData] = useState(faqs);

  const toggleFaq = (index) => {
    const updatedFaqs = faqData.map((faq, idx) =>
      idx === index ? { ...faq, isOpen: !faq.isOpen } : faq
    );
    setFaqData(updatedFaqs);
  };

  return (
    <section id='faq' className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="space-y-6 max-w-6xl mx-auto px-4">
        <p className="text-red-600 relative before:absolute before:w-20 before:h-1 before:bg-red-600 before:top-[50%] before:left-0 pl-24 text-4xl font-semibold before:translate-y-[-50%] max-sm:before:w-16 max-sm:pl-20">
          FAQS
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div key={index} className={`accordion rounded-lg ${faq.isOpen ? 'bg-red-100' : 'hover:bg-red-100'} transition-all`}>
              <button
                type="button"
                className="toggle-button w-full text-base text-left py-5 px-6 text-gray-800 flex items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="mr-4">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`arrow transition-all w-3 fill-current ml-auto shrink-0 ${faq.isOpen ? 'rotate-0' : 'rotate-180'}`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className={`content px-6 ${faq.isOpen ? 'pb-5' : 'invisible max-h-0 overflow-hidden'} transition-all duration-300`}>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
