"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [screenSize, setScreenSize] = useState('desktop');

  const testimonials = [
    {
      id: 1,
      profileImage: "/Images/image.png",
      name: "James K.",
      role: "Traveler",
      rating: 5,
      text: "I never thought I'd find someone so perfect, but here we are—engaged and happier than ever!"
    },
    {
      id: 2,
      profileImage: "/Images/image (1).png",
      name: "Sarah W.",
      role: "Designer",
      rating: 5,
      text: "I was looking for friends but making it became and most of all these free! All so great!"
    },
    {
      id: 3,
      profileImage: "/Images/Rectangle 23860.png",
      name: "Mike T.",
      role: "Engineer", 
      rating: 5,
      text: "This app changed my life completely. Found my soulmate within 2 months!"
    }
  ];

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`text-sm md:text-base lg:text-lg ${
        i < rating ? 'text-yellow-400' : 'text-gray-300'
      }`}
    >
      ★
    </span>
  ));
};

const getCardPosition = (index: number) => {
  if (index === activeIndex) {
    // Main card - center (responsive)
    const dimensions = {
      mobile: { width: '280px', height: '200px' },
      tablet: { width: '450px', height: '280px' },
      desktop: { width: '650px', height: '320px' }
    };
    
    return {
      transform: 'translateX(-50%)',
      left: '50%',
      top: '0',
      zIndex: 30,
      opacity: 1,
      ...dimensions[screenSize as keyof typeof dimensions]
    };
  } else {
    const isLeft = (index + testimonials.length - activeIndex) % testimonials.length === testimonials.length - 1;
    
    const bgDimensions = {
      mobile: { width: '120px', height: '80px', offset: '10px', topOffset: '20px' },
      tablet: { width: '180px', height: '120px', offset: '20px', topOffset: '40px' },
      desktop: { width: '240px', height: '180px', offset: '50px', topOffset: '60px' }
    };
    
    const dims = bgDimensions[screenSize as keyof typeof bgDimensions];
    
    if (isLeft) {
      return {
        left: dims.offset,
        top: dims.topOffset,
        zIndex: 20,
        opacity: 0.6,
        width: dims.width,
        height: dims.height
      };
    } else {
      return {
        right: dims.offset,
        top: dims.topOffset,
        zIndex: 20,
        opacity: 0.6,
        width: dims.width,
        height: dims.height
      };
    }
  }
};

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16 text-black">
          Swipe Right to Your Happily Ever After!
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Cards Container */}
          <div className="relative h-48 md:h-80 lg:h-96 mb-6 md:mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute bg-white rounded-xl md:rounded-2xl p-3 md:p-6 transition-all duration-500 ease-in-out shadow-lg"
                style={getCardPosition(index)}
              >
                {index === activeIndex ? (
                  // Main Active Card Layout
                  <div className="flex flex-col md:flex-row items-center h-full">
                    {/* Profile Image */}
                    <div className="mb-3 md:mb-0 md:mr-6">
                      <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-200 rounded-lg md:rounded-xl overflow-hidden">
                        <Image 
                          src={testimonials[activeIndex].profileImage} 
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base mb-2 md:mb-4 leading-relaxed">
                        &ldquo;{testimonials[activeIndex].text}&rdquo;
                      </p>
                      
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start mb-2 md:mb-3">
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                      
                      {/* Name and Role */}
                      <div>
                        <h4 className="font-bold text-sm md:text-base lg:text-lg text-black">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Background Cards - Simple Layout
                  <div className="flex items-center h-full">
                    <div className="relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-md md:rounded-lg overflow-hidden mr-2 md:mr-4">
                      <Image 
                        src={testimonial.profileImage} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xs md:text-sm text-black">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-3 md:space-x-4 relative z-50">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;