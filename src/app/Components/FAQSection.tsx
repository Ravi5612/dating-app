// components/FAQSection.js
import { useState } from 'react';

const FAQSection = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-400 rounded-full opacity-80"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-teal-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-300 transition-colors"
              >
                <span className="font-semibold text-lg text-black pr-4">{item.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-400">
                  <span className="text-black font-bold text-lg">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
