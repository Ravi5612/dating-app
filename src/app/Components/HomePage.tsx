"use client";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import TestimonialCarousel from './TestimonialCarousel';
import CallToAction from "@/app/Components/CallToAction";
import FAQSection from '../Components/FAQSection';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="relative w-full h-[32rem] md:h-[40rem] lg:h-[48rem]">
            <Image 
              src="/Images/Group 1597883995.png" 
              alt="Dating App" 
              fill
              className="object-cover object-[center_10%]"
            />
          </div>
          {/* Gray Shadow Below */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-gray-400/30 to-transparent"></div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-pink-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-black">
                  Raise Your Standards<br />
                  Date With Confidence<br />
                  Because You Deserve<br />
                  Better.
                </h2>

                <div className="flex items-start space-x-3 mb-6">
                  {/* Chat Bubble Icon */}
                  <div className="w-8 h-8 mt-1 flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      {/* Chat bubble shape */}
                      <path 
                        d="M12 2C6.48 2 2 5.64 2 10c0 2.8 1.68 5.28 4.32 6.8L5 20l3.2-1.32C9.28 19.36 10.6 19.6 12 19.6c5.52 0 10-3.64 10-8.1S17.52 2 12 2z" 
                        fill="#e5e7eb" 
                        stroke="#d1d5db" 
                        strokeWidth="0.5"
                      />
                      
                      {/* Three dots */}
                      <circle cx="9" cy="10" r="1.2" fill="#6b7280"/>
                      <circle cx="12" cy="10" r="1.2" fill="#6b7280"/>
                      <circle cx="15" cy="10" r="1.2" fill="#6b7280"/>
                      
                      {/* Highlight/shadow for 3D effect */}
                      <ellipse cx="12" cy="8" rx="6" ry="2" fill="white" opacity="0.3"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    No fake profiles, no random messages just meaningful connections with verified people. Discover a smarter way to meet like-minded singles today!
                  </p>
                </div>
                <button className="bg-red-500 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition text-sm md:text-base">
                  DISCOVER MORE
                </button>
              </div>
              
              {/* Right Content - Image */}
              <div className="order-1 lg:order-2">
                <div className="relative max-w-lg mx-auto">
                  <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-2xl overflow-hidden">
                    <Image 
                      src="/Images/Rectangle 94 (2).png" 
                      alt="Dating App" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Than Just Matches */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            {/* Left Aligned Heading */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">More Than Just Matches</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {/* Card 1 - Find Love with */}
              <div className="text-center">
                <div className="relative w-full h-48 md:h-56 lg:h-64 bg-blue-200 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-blue-200 flex items-center justify-center text-gray-600 text-sm">
                    <div className="text-center">
                         <Image 
                          src="/Images/Rectangle 23855.png" 
                          alt="Dating App" 
                          fill
                          className="object-cover"
                        />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-black">Find Love with</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Connect with like-minded people and build meaningful relationships. No fake profiles, only real connections.
                </p>
              </div>
              {/* Card 2 - Meet New Friends */}
              <div className="text-center">
                <div className="relative w-full h-48 md:h-56 lg:h-64 bg-orange-200 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-orange-200 flex items-center justify-center text-gray-600 text-sm">
                    <div className="text-center">
                     <Image 
                        src="/Images/Rectangle 23855 (1).png" 
                        alt="Dating App" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-black">Meet New Friends</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Looking for friends? Match with people who share your interests and make friendships that last.
                </p>
              </div>
              {/* Card 3 - Network & Grow */}
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="relative w-full h-48 md:h-56 lg:h-64 bg-green-200 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-green-200 flex items-center justify-center text-gray-600 text-sm">
                    <div className="text-center">
                     <Image 
                        src="/Images/Rectangle 23855 (2).png" 
                        alt="Dating App" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-black">Network & Grow</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Expand your circle, find mentors, and connect with professionals in your industry
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Section */}
         <section className="py-12 md:py-16 lg:py-20 bg-pink-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="relative w-full h-48 md:h-56 lg:h-64 bg-blue-300 rounded-2xl flex items-center justify-center text-gray-600">
                    <div className="text-center text-sm">
                   <Image 
                      src="/Images/Rectangle 23860.png"
                      alt="Dating App" 
                      fill
                      className="object-cover"
                    />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Text */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-black">
                  Raise Your Standards.<br />
                  Date With Confidence.
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                  Find meaningful connections with real, verified profiles. No random DMs, just real relationships
                </p>
                
                <button className="bg-red-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-red-600 transition">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-black">How Velvet Works</h2>
            
            <div className="relative">
              {/* Connecting Dotted Lines - Only on Large Screens */}
              <div className="hidden xl:block absolute top-1/2 left-0 w-full h-24 transform -translate-y-12">
                <svg className="w-full h-full" viewBox="0 0 1200 100">
                  <path 
                    d="M 300 50 Q 450 20 600 50 Q 750 80 900 50" 
                    stroke="#cccccc" 
                    strokeWidth="2" 
                    strokeDasharray="6,6" 
                    fill="none"
                  />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 relative z-10">
                {[
                  { 
                    title: "Create An Account", 
                    desc: "Sign up with face verification & admin approval to ensure real users"
                  },
                  { 
                    title: "Find Matches Based On Interests", 
                    desc: "Like profiles and see your shared interest percentage before connecting"
                  },
                  { 
                    title: "Connect & Build Real Bonds", 
                    desc: "No random DMs! Only mutual matches can interact for a safer experience"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center md:col-span-2 lg:col-span-1">
                    {/* Asymmetric Curved Background */}
                    <div className="relative mb-8">
                      {/* Custom SVG Asymmetric Shape - Responsive */}
                      <svg 
                        className="w-72 h-96 md:w-80 md:h-104 lg:w-80 lg:h-105" 
                        viewBox="0 0 320 420"
                      >
                        <path 
                          d="M 0 40 
                             Q 0 0 40 0 
                             L 200 0 
                             Q 240 0 260 20
                             Q 320 50 320 120
                             L 320 280
                             Q 320 320 300 350
                             Q 280 380 240 400
                             Q 200 420 160 410
                             Q 120 400 80 410
                             Q 40 420 20 400
                             Q 0 380 0 340
                             Z" 
                          fill="#f87171" 
                        />
                      </svg>
                      
                      {/* Phone Mockup - Responsive */}
                      <div className="absolute top-8 md:top-12 left-6 md:left-8 z-10">
                        <div className="w-44 md:w-48 lg:w-52 h-80 md:h-88 lg:h-96 bg-black rounded-3xl p-2 shadow-2xl">
                          <div className="w-full h-full bg-white rounded-3xl overflow-hidden">
                            {/* Mock app UI content here */}
                            <div className="p-4 text-center">
                              <div className="text-xs text-gray-500">Step {index + 1}</div>
                              <div className="mt-2 text-sm font-medium">{item.title}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-xl md:text-2xl mb-4 text-black">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TestimonialCarousel />

        <section className="py-12 md:py-16 bg-teal-400 my-8 md:my-12 lg:my-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight animate-bounce">
                Your Next Great Match is Closer Than You Think
              </h1>
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