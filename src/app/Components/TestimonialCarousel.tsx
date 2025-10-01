"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [mouseX, setMouseX] = useState(0);
console.log(mouseX)
  const testimonials = [
    {
      id: 1,
      profileImage: "/images/image.png",
      name: "James K.",
      age: "28",
      location: "New York",
      rating: 5,
      text: "Met my soulmate here! We bonded over travel and now planning our dream vacation together."
    },
    {
      id: 2,
      profileImage: "/images/image (1).png",
      name: "Sarah W.",
      age: "25",
      location: "Los Angeles",
      rating: 5,
      text: "Found amazing friends who turned into my dating circle. Genuine connections here!"
    },
    {
      id: 3,
      profileImage: "/images/Rectangle 23860.png",
      name: "Mike T.",
      age: "30",
      location: "Chicago",
      rating: 5,
      text: "Best decision! From casual meetups to finding the one - this platform made it possible."
    }
  ];

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouseX(e.clientX);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardStyle = (index: number) => {
    const position = (index - activeIndex + testimonials.length) % testimonials.length;
    
    if (position === 0) {
      // Center active card
      return {
        transform: `translateX(-50%) scale(1.2) rotateY(0deg) translateZ(100px)`,
        left: '50%',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)'
      };
    } else if (position === 1 || position === testimonials.length - 1) {
      // Side cards
      const isRight = position === 1;
      return {
        transform: `translateX(${isRight ? '60%' : '-160%'}) scale(0.85) rotateY(${isRight ? '-45deg' : '45deg'}) translateZ(-50px)`,
        left: '50%',
        zIndex: 20,
        opacity: 0.6,
        filter: 'brightness(0.7)'
      };
    } else {
      // Hidden cards
      return {
        transform: `translateX(${position > testimonials.length / 2 ? '200%' : '-300%'}) scale(0.5) rotateY(0deg)`,
        left: '50%',
        zIndex: 10,
        opacity: 0,
        filter: 'brightness(0.5)'
      };
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ));
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100 relative overflow-hidden">
        {/* Background reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Real Stories, Real Love
            </h2>
            <p className="text-gray-600 text-lg md:text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Swipe through success stories
            </p>
          </div>

          {/* 3D Coverflow Container */}
          <div 
            className="relative h-96 md:h-[32rem] lg:h-[36rem] mb-12"
            style={{ 
              perspective: '2000px',
              perspectiveOrigin: 'center center'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute w-80 md:w-96 lg:w-[28rem] transition-all duration-700 ease-out cursor-pointer"
                style={{
                  ...getCardStyle(index),
                  transformStyle: 'preserve-3d',
                  top: '50%',
                  marginTop: '-200px'
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative h-96 md:h-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Card reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-10"></div>
                  
                  {/* Profile Image Section */}
                  <div className="relative h-56 md:h-64 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                        <Image 
                          src={testimonial.profileImage} 
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Verified Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl">✓</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    {/* Name & Info */}
                    <div className="text-center mb-4">
                      <h3 
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-medium">
                        {testimonial.age} • {testimonial.location}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed">
  &ldquo;{testimonial.text}&rdquo;
</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8">
            <button
              onClick={prevTestimonial}
              className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 border border-gray-200"
            >
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' 
                      : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 border border-gray-200"
            >
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialCarousel;