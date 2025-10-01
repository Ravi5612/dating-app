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

        <CallToAction />
     
      </main>

      <Footer />
    </div>
  );
};

export default EventPage;