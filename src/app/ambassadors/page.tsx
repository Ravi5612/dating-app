"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from 'react';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import CallToAction from "@/app/Components/CallToAction"
const ambassadors = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
 const images = [
    {
      src: "/Images/Rectangle 94.png",
      alt: "Ambassador event 1"
    },
    {
      src: "/Images/image (1).png", 
      alt: "Ambassador event 2"
    },
    {
      src: "/Images/Rectangle 94.png",
      alt: "Ambassador event 3"
    },
    {
      src: "/Images/image (1).png",
      alt: "Ambassador event 4"
    },
    {
      src: "/Images/Rectangle 94.png",
      alt: "Ambassador event 5"
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <Header />
      
      <main>
        {/* Hero Section */}
    
<section className="py-16 md:py-20 bg-gradient-to-br from-pink-100 to-pink-200">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Headings & Hearts */}
      <div className="space-y-12 relative">
        
        {/* Main Heading */}
        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Make Meaningful Moves
          </h1>
          
          {/* Decorative Hearts */}
          <div className="absolute -right-8 top-8 text-red-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="absolute -right-4 top-16 text-pink-500">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="absolute -right-12 top-24 text-red-500">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Secondary Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            What Makes Us Different?
          </h2>
        </div>
        
      </div>
      
      {/* Right Column - Content */}
      <div className="space-y-8">
        
        {/* First Paragraph */}
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our ambassadors help foster genuine connections within their communities. Join our 
            mission to build a safe, engaging, and respectful dating experience where relationships thrive with 
            trust, mutual values, and real connections. Lead the way in shaping a new era of dating through 
            events, social impact, and real engagement.
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <button className="border-2 border-pink-400 text-pink-400 px-6 py-2 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors duration-300">
              APPLY NOW
            </button>
          </div>
        </div>
        
        {/* Second Paragraph */}
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Unlike traditional dating platforms, we focus on quality over quantity. Our AI-powered system 
            ensures authentic profiles, admin-approved matches, and shared interest-based 
            connections. We challenge outdated dating norms and create a space where genuine 
            relationships flourish.
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <button className="border-2 border-pink-400 text-pink-400 px-6 py-2 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors duration-300">
              DOWNLOAD APP
            </button>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</section>


  <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            How Our Ambassadors Create Connections
          </h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / images.length)}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          
          {/* Previous Arrow */}
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Dots Indicators */}
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Next Arrow */}
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors duration-300">
            JOIN NOW
          </button>
          
          <button className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors duration-300">
            LEARN MORE
          </button>
        </div>
        
      </div>
    </section>

    
  <TestimonialCarousel />

  <section className="py-4 bg-teal-400 overflow-hidden">
  <div className="whitespace-nowrap">
    <div 
      className="inline-block"
      style={{
        animation: 'marquee 15s linear infinite'
      }}
    >
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-black mx-8">
        Start Something Real!
      </span>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-black mx-8">
        Start Something Real!
      </span>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-black mx-8">
        Start Something Real!
      </span>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-black mx-8">
        Start Something Real!
      </span>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-black mx-8">
        Start Something Real!
      </span>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-black mx-8">
        Start Something Real!
      </span>
    </div>
  </div>
  
  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
  `}</style>
</section>
<section className="py-16 md:py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Heading */}
      <div className="order-1 lg:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Find Your Match, Join the Journey
        </h1>
      </div>
      
      {/* Right Column - Content */}
      <div className="order-2 lg:order-2 text-center lg:text-left">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Take the first step toward finding meaningful connections. Our platform is 
          designed to help you meet like-minded people in a safe and exciting way. 
          Whether you're looking for deep conversations, shared interests, or just 
          someone to explore life with, we make it easy to start. Join now and make your 
          move!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors duration-300">
            APPLY NOW
          </button>
          
          <button className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors duration-300">
            FAQ
          </button>
        </div>
      </div>
      
    </div>
  </div>
</section>

<section className="py-8 md:py-12 bg-pink-100">
  <div className="max-w-full overflow-hidden">
    
    {/* Image Strip */}
    <div className="flex space-x-0">
      
      {/* Image 1 */}
      <div className="w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
        <img 
          src="/Images/Rectangle 94.png" 
          alt="Friends laughing together" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Image 2 */}
      <div className="w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
        <img 
          src="/Images/image (1).png" 
          alt="Couple enjoying sunset" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Image 3 */}
      <div className="w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
        <img 
          src="/Images/Rectangle 94.png" 
          alt="Group having fun" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Image 4 */}
      <div className="w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
        <img 
          src="/Images/image (1).png" 
          alt="Happy community" 
          className="w-full h-full object-cover"
        />
      </div>
      
    </div>
    
  </div>
</section>

<CallToAction />
     
      </main>

      <Footer />
    </div>
  );
};

export default ambassadors;
