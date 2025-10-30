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
      <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
  {/* Navigation */}
  <nav className="relative z-30 flex justify-between items-center px-6 md:px-12 py-6">
    <div className="text-pink-600 font-bold text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
      LOVE CONNECT
    </div>
    <div className="flex gap-8 text-sm md:text-base">
      <a href="#info" className="text-pink-500 hover:text-pink-600 font-medium transition-colors">Info</a>
      <a href="#features" className="text-pink-500 hover:text-pink-600 font-medium transition-colors">Features</a>
    </div>
  </nav>

  {/* Main Content */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-8">
    <div className="relative min-h-[700px]">
      
      {/* Image - BEHIND (positioned to align with "YOUR") */}
      <div className="absolute top-24 md:top-32 right-0 md:right-8 lg:right-16 w-[400px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[550px] z-0">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/images/unsplash_fdlZBWIP0aM.png" 
            alt="Happy Couple" 
            fill 
            className="object-cover"
            priority
          />
          
          {/* Floating Badge - Top Right */}
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl z-30">
            <div className="flex items-center gap-2">
              <span className="text-3xl">💕</span>
              <div>
                <p className="text-xs text-gray-600">Success Rate</p>
                <p className="text-lg font-bold text-pink-600">98%</p>
              </div>
            </div>
          </div>

          {/* Bottom Stats Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl z-30">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-pink-600">2M+</p>
                <p className="text-xs text-gray-600">Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-600">500K</p>
                <p className="text-xs text-gray-600">Matches</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-600">98%</p>
                <p className="text-xs text-gray-600">Happy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big Typography - ON TOP */}
      <div className="relative z-10 w-full">
   <h1 
  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] text-pink-600 mb-12" 
  style={{ 
    fontFamily: "'Playfair Display', serif", 
    letterSpacing: '-0.03em',
    wordBreak: 'keep-all',
    whiteSpace: 'normal'
  }}
>
  <span className="inline-block">FIND</span>
  <span className="inline-block" style={{ marginLeft: '3rem' }}>YOUR</span><br />
  <span className="inline-block">PERFECT</span><br />
  <span className="inline-block">MATCH</span>
</h1>
        
        {/* Description */}
        <div className="space-y-4 max-w-md text-pink-600 mb-8">
          <p className="text-base leading-relaxed">
            We are a modern dating platform connecting hearts across the globe. Our mission is to help you find meaningful connections through intelligent matching and authentic interactions.
          </p>
          <p className="text-base leading-relaxed">
            We have been creating love stories for over 5 years, with millions of successful matches. Join our community and discover your perfect partner today.
          </p>
        </div>

        {/* CTA Button */}
        <button className="group bg-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
          <span>Start Matching</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
    <p className="text-xs text-pink-500 font-medium">Scroll to explore</p>
    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

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
{/* 
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
        </section> */}

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
<section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        🌸 Flower Crown Memories
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Blooming moments arranged in a beautiful floral crown
      </p>
    </div>

    {/* Flower Crown Circle */}
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Decorative flower background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[560px] h-[560px] md:w-[660px] md:h-[660px] rounded-full border-4 border-dashed border-pink-200 opacity-40"></div>
      </div>

      {/* Photo 1 - RIGHT to RIGHT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo1Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/unsplash_fdlZBWIP0aM.png" alt="Flower 1" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 text-3xl">🌸</div>
        </div>
      </div>

      {/* Photo 2 - RIGHT to RIGHT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo2Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/unsplash_jpkfc5_d-DI.png" alt="Flower 2" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 text-3xl">🌺</div>
        </div>
      </div>

      {/* Photo 3 - RIGHT to RIGHT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo3Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/unsplash_mAQZ3X_8_l0.png" alt="Flower 3" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 text-3xl">🌼</div>
        </div>
      </div>

      {/* Photo 4 - RIGHT to RIGHT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo4Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Nwe1.png" alt="Flower 4" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 text-3xl">🌻</div>
        </div>
      </div>

      {/* Photo 5 - LEFT to LEFT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo5Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/new3.png" alt="Flower 5" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 text-3xl">🌷</div>
        </div>
      </div>

      {/* Photo 6 - LEFT to LEFT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo6Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Rectangle 23841.png" alt="Flower 6" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 text-3xl">🌹</div>
        </div>
      </div>

      {/* Photo 7 - LEFT to LEFT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo7Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Rectangle 23845.png" alt="Flower 7" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -left-2 text-3xl">🏵️</div>
        </div>
      </div>

      {/* Photo 8 - LEFT to LEFT */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          animation: 'photo8Path 40s linear infinite',
          transformOrigin: 'center center',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Rectangle 23847.png" alt="Flower 8" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -left-2 text-3xl">💐</div>
        </div>
      </div>

      {/* Center text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>
          Blooming<br/>Together
        </h3>
      </div>
    </div>

    {/* Caption */}
    <div className="text-center mt-12">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        A crown of memories, each petal a moment 🌸
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