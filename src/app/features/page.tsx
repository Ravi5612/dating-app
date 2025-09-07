"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CallToAction from "@/app/Components/CallToAction"
import FAQSection from '../Components/FAQSection';
import Image from 'next/image';

export default function About() {
    const faqs = [
  {
    question: "What is UX design?", 
    answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user."
  },
  {
    question: "What are the key principles of UX design?", 
    answer: "Key principles include usability, accessibility, user-centered design, consistency, and creating meaningful experiences."
  },
  {
    question: "What is the difference between UX and UI design?", 
    answer: "UX focuses on the overall user experience and journey, while UI focuses on the visual interface and interactive elements."
  },
  {
    question: "What is a wireframe?", 
    answer: "A wireframe is a basic structural blueprint that shows the layout and functionality of a page or screen without detailed design elements."
  }
];

  return (
    <div>
      <Header />
      
      <main>
        <section className="py-16 md:py-20 bg-pink-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Decorative Dots */}
            <div className="absolute top-8 right-1/4 w-3 h-3 bg-pink-500 rounded-full"></div>
            <div className="absolute top-12 left-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 bg-green-500 rounded-full"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1 space-y-8">
                
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Make Meaningful Connections, One-on-One
                </h1>
                
                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg">
                  Tired of endless swiping? Meet 1 to 1 is designed to help you connect 
                  in a more personal and authentic way. Whether you&apos;re looking for 
                  friendship, networking, or something more, we make one-on-one 
                  meetings effortless.
                </p>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
                    DOWNLOAD VELVET
                  </button>
                </div>
                
              </div>
              
              {/* Right Column - Image Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Large Image - Top */}
                  <div className="col-span-2">
                    <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image 
                        src="/Images/unsplash_fdlZBWIP0aM.png" 
                        alt="Couple having meaningful conversation" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Small Images - Bottom Row */}
                  <div className="relative w-full h-32 md:h-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                      src="/Images/unsplash_jpkfc5_d-DI.png" 
                      alt="Friends connecting over coffee" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="relative w-full h-32 md:h-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                      src="/Images/unsplash_mAQZ3X_8_l0.png" 
                      alt="People networking and chatting" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Image */}
              <div className="order-1 lg:order-1">
                <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/Images/Nwe1.png"
                    alt="Couple having meaningful conversation over coffee" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="order-2 lg:order-2 space-y-8">
                
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Simple, Safe & Intentional
                </h1>
                
                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We match you based on shared interests and values. No distractions, 
                  just a direct and meaningful conversation with someone who truly 
                  matches your vibe.
                </p>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
                    DOWNLOAD VELVET
                  </button>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-pink-100">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Header Content */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6 whitespace-nowrap">
                Your Next Connection is One Click Away
              </h1>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                It&apos;s time to move beyond small talk. Schedule a one-on-one meeting and start building real 
                relationships today.
              </p>
            </div>
            
            {/* Featured Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/Images/new3.png"
                  alt="Happy couple having meaningful conversation outdoors" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <CallToAction />
     
      </main>

      <Footer />
    </div>
  );
}