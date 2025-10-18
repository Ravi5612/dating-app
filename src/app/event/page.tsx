import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CallToAction from "@/app/Components/CallToAction";
import Image from 'next/image';

const EventPage = () => {
  return (
    <div>
      <Header />
      
     <main className="bg-white">
        {/* Hero Section */}
    
        <section className="py-16 md:py-20 bg-pink-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Image */}
              <div className="order-1 lg:order-1">
                <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/7.png"
                    alt="Happy couple embracing" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Right Content with Background */}
              <div className="order-2 lg:order-2 flex items-center">
                <div className="bg-pink-50 p-8 md:p-10 lg:p-12 rounded-2xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    Swipe less, connect more—love starts here.
                  </h2>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Header with Green Dot */}
            <div className="text-center mb-12 md:mb-16 relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
                Meet & Connect in Person!
              </h2>
              {/* Green Dot */}
              <div className="absolute top-0 right-1/4 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            
            {/* Content Paragraphs */}
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Some connections are just meant to happen in real life. A look, a smile, a shared laugh—sometimes, 
                you just know when the vibe is right. No endless swiping, no waiting for the perfect message. Just 
                real moments, real chemistry, and real connections that start naturally. Meet, talk, and let the magic 
                happen.
              </p>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Meet amazing people around you at our exclusive in-person events. Whether it&apos;s a coffee date, a fun 
                activity, or just great conversations over dinner, real connections start face-to-face. Find your kind 
                of vibe, meet like-minded people, and make moments that matter!
              </p>
            </div>
            
            {/* Tilted images */}
            <div className="flex justify-center items-center space-x-4 md:space-x-8">
              
              {/* Left Image - Tilted Left */}
              <div className="transform -rotate-12 w-64 md:w-72 lg:w-80">
                <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
                  <div className="relative w-full h-48 md:h-56 lg:h-64 bg-gray-200 rounded-md overflow-hidden">
                    <Image 
                      src="/images/unsplash_jpkfc5_d-DI.png"
                      alt="Couple having coffee together" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Right Image - Tilted Right */}
              <div className="transform rotate-12 w-64 md:w-72 lg:w-80">
                <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
                  <div className="relative w-full h-48 md:h-56 lg:h-64 bg-gray-200 rounded-md overflow-hidden">
                    <Image 
                      src="/images/image (1).png" 
                      alt="Happy couple at restaurant" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </section>

        <section className="py-16 md:py-20 bg-pink-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Header */}
           <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 text-left">
                Discover Events Nearby!
              </h2>
              
              {/* Filter Dropdowns */}
             <div className="flex flex-col md:flex-row gap-4 justify-start items-center max-w-5xl mr-auto">
              <div className="w-full md:w-96">
                <select className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-pink-500">
                  <option>All Cities</option>
                  <option>New York, NY</option>
                  <option>Aspen, CO</option>
                  <option>Los Angeles, CA</option>
                </select>
              </div>
              
              <div className="w-full md:w-96">
                <select className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-pink-500">
                  <option>All Modes</option>
                  <option>In-Person</option>
                  <option>Virtual</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            </div>

            
            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              
              {/* Card 1 - Love Chalet */}
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-h-[28rem]">
                <div className="relative">
                  <div className="relative w-full h-48 md:h-56">
                    <Image 
                      src="/images/17.png" 
                      alt="Love Chalet Aspen Pop Up" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-2">
                      Aspen
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4">
                    Love Chalet - Aspen Pop Up
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">📅</span>
                      <span>Dec 31 - Mar 23</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">📍</span>
                      <span>Aspen, CO</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Trivia Night */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="relative w-full h-48 md:h-56">
                    <Image 
                      src="/images/16.png" 
                      alt="Trivia Night in NYC" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-2">
                      velvet dating
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New York City
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4">
                    Trivia Night in NYC
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">📅</span>
                      <span>March 19, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">📍</span>
                      <span>New York, NY</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Velvet x Reference.Point */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="relative w-full h-48 md:h-56">
                    <Image 
                       src="/images/15.png" 
                       alt="Velvet x Reference.Point" 
                       fill
                       className="object-cover"
                    />
                  </div>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-2">
                      Aspen
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4">
                    Velvet x Reference.Point
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">📅</span>
                      <span>Dec 31 - Mar 23</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">📍</span>
                      <span>Aspen, CO</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Show More Button */}
            <div className="text-center">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300">
                Show me more
              </button>
            </div>
            
          </div>
        </section>

        <section className="py-12 md:py-16 bg-teal-400 my-8 md:my-12 lg:my-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight animate-bounce">
                Your Next Great Match is Closer Than You Think
              </h1>
            </div>
          </div>
        </section>

<section className="py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    
  

    {/* Wave Frames Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      
      {/* Wave 1 - Horizontal Waves (PINK) */}
      <div className="flex justify-center">
        <div className="relative w-80 h-80">
          {/* Wavy top border - PINK */}
          <svg className="absolute -top-8 left-0 w-full h-16" viewBox="0 0 300 50" preserveAspectRatio="none">
            <path d="M0,25 Q75,0 150,25 T300,25 L300,50 L0,50 Z" fill="#ec4899" opacity="0.8"/>
          </svg>
          
          {/* Main frame with wave pattern - PINK */}
          <div className="relative w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Wave pattern overlay - PINK */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 300" preserveAspectRatio="none">
              <path d="M0,50 Q75,25 150,50 T300,50" stroke="#ec4899" strokeWidth="3" fill="none"/>
              <path d="M0,100 Q75,75 150,100 T300,100" stroke="#ec4899" strokeWidth="3" fill="none"/>
              <path d="M0,150 Q75,125 150,150 T300,150" stroke="#ec4899" strokeWidth="3" fill="none"/>
              <path d="M0,200 Q75,175 150,200 T300,200" stroke="#ec4899" strokeWidth="3" fill="none"/>
              <path d="M0,250 Q75,225 150,250 T300,250" stroke="#ec4899" strokeWidth="3" fill="none"/>
            </svg>

            {/* Photo container */}
            <div className="absolute inset-8 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/images/unsplash_fdlZBWIP0aM.png" 
                alt="Wave 1" 
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Wavy bottom border - PINK */}
          <svg className="absolute -bottom-8 left-0 w-full h-16" viewBox="0 0 300 50" preserveAspectRatio="none">
            <path d="M0,0 L300,0 L300,25 Q225,50 150,25 T0,25 Z" fill="#ec4899" opacity="0.8"/>
          </svg>
        </div>
      </div>

      {/* Wave 2 - Circular Waves (PINK) */}
      <div className="flex justify-center">
        <div className="relative w-80 h-80 bg-gradient-to-br from-pink-200 to-rose-400 rounded-full shadow-2xl p-6">
          
          {/* Concentric wave circles - PINK */}
          <div className="absolute inset-0 rounded-full">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full border-2 border-pink-400 opacity-30"
                style={{
                  inset: `${i * 10}%`,
                  animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Photo container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-lg z-10">
            <Image 
              src="/images/unsplash_jpkfc5_d-DI.png" 
              alt="Wave 2" 
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Wave emoji decorations - PINK HEARTS */}
          <div className="absolute -top-4 left-1/4 text-4xl">💕</div>
          <div className="absolute -bottom-4 right-1/4 text-4xl">💖</div>
        </div>
      </div>

      {/* Wave 3 - Flowing Edge (PINK) */}
      <div className="flex justify-center">
        <div className="relative">
          <div 
            className="relative w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-400 shadow-2xl"
            style={{
              clipPath: 'polygon(0% 15%, 10% 10%, 20% 15%, 30% 10%, 40% 15%, 50% 10%, 60% 15%, 70% 10%, 80% 15%, 90% 10%, 100% 15%, 100% 85%, 90% 90%, 80% 85%, 70% 90%, 60% 85%, 50% 90%, 40% 85%, 30% 90%, 20% 85%, 10% 90%, 0% 85%)'
            }}
          >
            {/* Photo container */}
            <div className="absolute inset-8 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/images/unsplash_mAQZ3X_8_l0.png" 
                alt="Wave 3" 
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave 4 - Soft Pink Waves */}
      <div className="flex justify-center">
        <div className="relative w-80 h-80">
          {/* Wavy border all around */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#fbcfe8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f9a8d4', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M10,50 Q50,30 90,50 T170,50 T250,50 Q270,50 290,70 L290,230 Q270,250 250,250 T170,250 T90,250 Q50,250 30,230 L30,70 Q30,50 10,50 Z" 
              fill="url(#pinkGradient)" 
              stroke="#ec4899" 
              strokeWidth="4"/>
          </svg>
          
          {/* Photo container */}
          <div className="absolute inset-12 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
            <Image 
              src="/images/Nwe1.png" 
              alt="Wave 4" 
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Wave 5 - Pink Ripple */}
      <div className="flex justify-center">
        <div className="relative w-80 h-80">
          {/* Multiple pink wave circles */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 shadow-2xl">
            {[...Array(6)].map((_, i) => (
              <svg 
                key={i}
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 300 300" 
                preserveAspectRatio="xMidYMid meet"
                style={{
                  opacity: 0.2,
                  transform: `scale(${1 - i * 0.15})`,
                  animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              >
                <circle cx="150" cy="150" r="140" fill="none" stroke="#ec4899" strokeWidth="3"/>
              </svg>
            ))}
          </div>

          {/* Photo container */}
          <div className="absolute inset-8 rounded-full overflow-hidden border-8 border-white shadow-lg z-10">
            <Image 
              src="/images/new3.png" 
              alt="Wave 5" 
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Wave 6 - Layered Pink Waves */}
      <div className="flex justify-center">
        <div className="relative w-80 h-80 bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Layered wave background */}
          <svg className="absolute bottom-0 left-0 w-full h-full opacity-30" viewBox="0 0 300 300" preserveAspectRatio="none">
            <path d="M0,100 Q75,80 150,100 T300,100 L300,300 L0,300 Z" fill="#f9a8d4"/>
            <path d="M0,150 Q75,130 150,150 T300,150 L300,300 L0,300 Z" fill="#fbcfe8"/>
            <path d="M0,200 Q75,180 150,200 T300,200 L300,300 L0,300 Z" fill="#fce7f3"/>
          </svg>

          {/* Photo container */}
          <div className="absolute inset-8 rounded-2xl overflow-hidden border-4 border-white shadow-lg z-10">
            <Image 
              src="/images/Rectangle 23841.png" 
              alt="Wave 6" 
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

    </div>

    {/* Caption */}
    <div className="text-center mt-12">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        Ride the pink waves of love and memories 💕🌊
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

export default EventPage;