"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from 'react';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import CallToAction from "@/app/Components/CallToAction";
import Image from 'next/image';

const Ambassadors = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
 const images = [
    {
      src: "/images/new5.png",
      alt: "Ambassador event 1"
    },
    {
      src: "/images/new7.png",
      alt: "Ambassador event 2"
    },
    {
     src: "/images/new6.png",
      alt: "Ambassador event 3"
    },
    {
      src: "/images/new5.png",
      alt: "Ambassador event 4"
    },
    {
      src: "/images/unsplash_jpkfc5_d-DI.png",
      alt: "Ambassador event 5"
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
 const goToSlide = (index: number) => {
  setCurrentSlide(index);
};

  return (
    <div>
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative w-full h-[28rem] md:h-[34rem] lg:h-[40rem]">
          <Image 
            src="/images/ambassodars.png" 
            alt="Happy couple" 
            fill
            className="object-cover"
          />
        </div>

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
<section className="py-20 bg-gradient-to-b from-red-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        🧩 Mini Collage Grids
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Multiple memories in one beautiful frame
      </p>
    </div>

    {/* Collage Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Collage 1 */}
      <div className="bg-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Best Day Ever ✨
        </h3>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 row-span-2 relative h-80 rounded-2xl overflow-hidden border-4 border-pink-200">
            <Image src="/images/unsplash_fdlZBWIP0aM.png" alt="Main" fill className="object-cover" />
          </div>
          <div className="relative h-[155px] rounded-2xl overflow-hidden border-4 border-pink-200">
            <Image src="/images/unsplash_jpkfc5_d-DI.png" alt="Side 1" fill className="object-cover" />
          </div>
          <div className="relative h-[155px] rounded-2xl overflow-hidden border-4 border-pink-200">
            <Image src="/images/unsplash_mAQZ3X_8_l0.png" alt="Side 2" fill className="object-cover" />
          </div>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Three moments, one perfect day
        </p>
      </div>

      {/* Collage 2 */}
      <div className="bg-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Squad Goals 💕
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-40 rounded-2xl overflow-hidden border-4 border-purple-200">
            <Image src="/images/Nwe1.png" alt="Photo 1" fill className="object-cover" />
          </div>
          <div className="relative h-40 rounded-2xl overflow-hidden border-4 border-purple-200">
            <Image src="/images/new3.png" alt="Photo 2" fill className="object-cover" />
          </div>
          <div className="col-span-2 relative h-48 rounded-2xl overflow-hidden border-4 border-purple-200">
            <Image src="/images/Rectangle 23841.png" alt="Photo 3" fill className="object-cover" />
          </div>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Making memories together
        </p>
      </div>

      {/* Collage 3 */}
      <div className="bg-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Adventure Time 🌟
        </h3>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="relative h-[250px] rounded-2xl overflow-hidden border-4 border-blue-200">
            <Image src="/images/Rectangle 23845.png" alt="Photo 1" fill className="object-cover" />
          </div>
          <div className="col-span-2 relative h-[250px] rounded-2xl overflow-hidden border-4 border-blue-200">
            <Image src="/images/Rectangle 23847.png" alt="Photo 2" fill className="object-cover" />
          </div>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Life is an adventure
        </p>
      </div>

      {/* Collage 4 */}
      <div className="bg-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Happy Moments 🎉
        </h3>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3 relative h-48 rounded-2xl overflow-hidden border-4 border-green-200">
            <Image src="/images/Group 1597884004.png" alt="Wide" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-2xl overflow-hidden border-4 border-green-200">
            <Image src="/images/unsplash_fdlZBWIP0aM.png" alt="Small 1" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-2xl overflow-hidden border-4 border-green-200">
            <Image src="/images/unsplash_jpkfc5_d-DI.png" alt="Small 2" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-2xl overflow-hidden border-4 border-green-200">
            <Image src="/images/unsplash_mAQZ3X_8_l0.png" alt="Small 3" fill className="object-cover" />
          </div>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Collecting moments, not things
        </p>
      </div>
    </div>

    {/* Caption */}
    <div className="text-center mt-12">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        Every grid tells a unique story 🧩
      </p>
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
                        <div className="relative w-full h-48 md:h-56">
                          <Image 
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
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
                  Whether you&apos;re looking for deep conversations, shared interests, or just 
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
              <div className="relative w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
                <Image 
                   src="/images/Rectangle 23855 (1).png"
                  alt="Friends laughing together" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Image 2 */}
              <div className="relative w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
                <Image 
                  src="/images/image (1).png" 
                  alt="Couple enjoying sunset" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Image 3 */}
              <div className="relative w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
                <Image 
                  src="/images/unsplash_fdlZBWIP0aM.png"
                  alt="Group having fun" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Image 4 */}
              <div className="relative w-1/4 h-48 md:h-64 lg:h-72 flex-shrink-0">
                <Image 
                  src="/images/image (1).png" 
                  alt="Happy community" 
                  fill
                  className="object-cover"
                />
              </div>
              
            </div>
            
          </div>
        </section>
<section className="py-20 bg-gradient-to-b from-cyan-50 via-yellow-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        ☀️ Sunbeam Gallery
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Radiant memories shining bright like sunshine
      </p>
    </div>

    {/* Sunbeam Container - INCREASED */}
    <div className="relative w-full h-[900px] md:h-[1000px] flex items-center justify-center">
      
      {/* Sun rays background - LONGER */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 bg-gradient-to-t from-transparent via-yellow-200 to-transparent opacity-30"
            style={{
              height: '500px',
              transform: `rotate(${i * 30}deg)`,
              transformOrigin: 'bottom center'
            }}
          ></div>
        ))}
      </div>

      {/* Center Sun - BIGGER */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-2xl z-20 flex items-center justify-center">
        <span className="text-7xl md:text-8xl">☀️</span>
      </div>

      {/* Ray 1 - Top - BIGGER */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-yellow-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/unsplash_fdlZBWIP0aM.png" alt="Ray 1" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Ray 2 - Top Right - BIGGER */}
      <div className="absolute top-[12%] right-[15%]">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-orange-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/unsplash_jpkfc5_d-DI.png" alt="Ray 2" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Ray 3 - Right - BIGGER */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%]">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-yellow-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/unsplash_mAQZ3X_8_l0.png" alt="Ray 3" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Ray 4 - Bottom Right - BIGGER */}
      <div className="absolute bottom-[12%] right-[15%]">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-orange-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/Nwe1.png" alt="Ray 4" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Ray 5 - Bottom - BIGGER */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-yellow-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/new3.png" alt="Ray 5" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Ray 6 - Bottom Left - BIGGER */}
      <div className="absolute bottom-[12%] left-[15%]">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-orange-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/Rectangle 23841.png" alt="Ray 6" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Ray 7 - Left - BIGGER */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-yellow-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/Rectangle 23845.png" alt="Ray 7" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Ray 8 - Top Left - BIGGER */}
      <div className="absolute top-[12%] left-[15%]">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-orange-300 shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/images/Rectangle 23847.png" alt="Ray 8" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>

    {/* Caption */}
    <div className="text-center mt-12">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        You are my sunshine, my only sunshine ☀️✨
      </p>
    </div>
  </div>
</section>
        <CallToAction />
     
      </main>

      <Footer />
    </div>
  );
};

export default Ambassadors;