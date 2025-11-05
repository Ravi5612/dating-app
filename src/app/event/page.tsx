'use client'
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
<section className="py-20 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50 relative overflow-hidden">
  
  {/* CSS Animation */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes sway {
      0%, 100% { transform: translateX(0px); }
      50% { transform: translateX(10px); }
    }
    .balloon-float {
      animation: float 3s ease-in-out infinite;
    }
    .balloon-sway {
      animation: sway 2s ease-in-out infinite;
    }
  `}</style>

  <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      
      {/* Left Images */}
      <div className="hidden lg:flex flex-col gap-8 justify-start pt-0">
        
        {/* Image 1 - Near girls */}
        <div className="relative ml-auto balloon-float hover:scale-110 transition-all duration-300" style={{ animationDelay: '0s' }}>
          {/* Balloon */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl bg-purple-200 p-2 hover:shadow-purple-400">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src="/images/16.png" alt="Near girls" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Rope */}
          <div className="absolute top-full left-1/2 -translate-x-1/2">
  <svg width="50" height="100" viewBox="0 0 50 100" fill="none" className="balloon-sway" style={{ transformOrigin: 'top center' }}>
    <path 
      d="M25 0 Q 38 12, 25 25 Q 12 38, 25 50 Q 38 62, 25 75 Q 12 88, 25 100" 
      stroke="#10B981" 
      strokeWidth="5" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
</div>
          
          {/* Label at end of rope */}
          <div className="absolute top-[calc(100%+3rem)] left-1/2 -translate-x-1/2 bg-purple-300 px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
            <p className="text-sm font-semibold text-gray-800">💬 Near girls</p>
          </div>
          
          {/* Decorative line */}
          <div className="absolute -right-8 top-1/2 w-16 h-0.5 bg-gray-300"></div>
        </div>

        {/* Image 2 - Dance class */}
        <div className="relative mr-auto balloon-float hover:scale-110 transition-all duration-300" style={{ animationDelay: '1s' }}>
          {/* Balloon */}
          <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl bg-pink-200 p-2 hover:shadow-pink-400">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src="/images/rav2.png" alt="Dance class" className="w-full h-full object-cover" />
            </div>
          </div>
          
       <div className="absolute top-full left-1/2 -translate-x-1/2">
  <svg width="50" height="100" viewBox="0 0 50 100" fill="none" className="balloon-sway" style={{ transformOrigin: 'top center' }}>
    <path 
      d="M25 0 Q 38 12, 25 25 Q 12 38, 25 50 Q 38 62, 25 75 Q 12 88, 25 100" 
      stroke="#10B981" 
      strokeWidth="5" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
</div>
          {/* Label at end of rope */}
          <div className="absolute top-[calc(100%+3rem)] left-1/2 -translate-x-1/2 bg-pink-300 px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
            <p className="text-sm font-semibold text-gray-800">Dance class 🎵</p>
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center space-y-8 lg:col-span-1">
        <h1 className="leading-tight">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            The <span className="inline-block">🧑</span> <span className="text-pink-600">people</span>
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-pink-600 mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            platform.
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Where <span className="inline-block">🔥</span> interests
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            become <span className="inline-block">💗</span>
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            friendships.
          </span>
        </h1>
        
        <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-10 py-5 rounded-full text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-pink-300 transform hover:scale-110 border-2 border-transparent hover:border-pink-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Join Meetup ✨
        </button>
      </div>

      {/* Right Images */}
      <div className="hidden lg:flex flex-col gap-8 justify-start pt-0">
        
        {/* Image 3 - Speaking club */}
      {/* Image 3 - Speaking club */}
<div className="relative mr-auto balloon-float hover:scale-110 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
  {/* Balloon */}
  <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-2xl bg-pink-200 p-2 hover:shadow-pink-400">
    <div className="w-full h-full rounded-full overflow-hidden">
      <img src="/images/Nwe1.png" alt="Speaking club" className="w-full h-full object-cover" />
    </div>
  </div>
  
  {/* Rope */}
 {/* Extra Lamba Rope */}
<div className="absolute top-full left-1/2 -translate-x-1/2">
  <svg width="50" height="100" viewBox="0 0 50 100" fill="none" className="balloon-sway" style={{ transformOrigin: 'top center' }}>
    <path 
      d="M25 0 Q 38 12, 25 25 Q 12 38, 25 50 Q 38 62, 25 75 Q 12 88, 25 100" 
      stroke="#10B981" 
      strokeWidth="5" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
</div>
  
  {/* Label at end of rope (NICHE) */}
  <div className="absolute top-[calc(100%+3rem)] left-1/2 -translate-x-1/2 bg-pink-300 px-6 py-4 rounded-full shadow-lg whitespace-nowrap">
    <p className="text-sm font-semibold text-gray-800">Speaking club</p>
  </div>
  
  {/* Decorative arrow */}
  <div className="absolute -right-12 top-8">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-400">
      <path d="M5 35 Q 20 5, 35 25" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M32 20 L38 26 L30 28" fill="currentColor"/>
    </svg>
  </div>
</div>

        {/* Image 4 - Every Thursday */}
        <div className="relative ml-auto balloon-float hover:scale-110 transition-all duration-300" style={{ animationDelay: '1.5s' }}>
          {/* Balloon */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl bg-yellow-200 p-2 hover:shadow-yellow-400">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src="/images/new6.png" alt="Every Thursday" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Rope */}
          <div className="absolute top-full left-1/2 -translate-x-1/2">
  <svg width="50" height="100" viewBox="0 0 50 100" fill="none" className="balloon-sway" style={{ transformOrigin: 'top center' }}>
    <path 
      d="M25 0 Q 38 12, 25 25 Q 12 38, 25 50 Q 38 62, 25 75 Q 12 88, 25 100" 
      stroke="#10B981" 
      strokeWidth="5" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
</div>
          
          {/* Label at end of rope */}
          <div className="absolute top-[calc(100%+3rem)] right-4 bg-yellow-300 px-6 py-2 rounded-full shadow-lg whitespace-nowrap transform rotate-6">
            <p className="text-sm font-semibold text-gray-800">🎸 Every Thursday</p>
          </div>
          
          {/* Decorative squiggle */}
          <div className="absolute -left-8 top-1/2">
            <svg width="30" height="60" viewBox="0 0 30 60" fill="none" className="text-gray-400">
              <path d="M5 5 Q 15 20, 5 35 Q 15 50, 5 55" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
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
<section className="py-20 bg-gradient-to-br from-pink-50 to-rose-100 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Choose Your <span className="text-pink-600">Ticket</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Select the perfect pass for an unforgettable experience
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Basic Tier */}
      <div className="relative group hover:scale-105 transition-all duration-300">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-200 hover:border-pink-400">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-300 px-6 py-2 rounded-full">
            <p className="text-sm font-bold text-gray-900">BASIC</p>
          </div>
          
          <div className="mt-4 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-pink-200 to-rose-300 p-1 mb-6">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="/images/ticket-basic.jpg" alt="Basic" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-2">₹999</h3>
            <p className="text-gray-600 mb-6">Per Person</p>
            
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-pink-500 mr-3">✓</span> General Entry
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-pink-500 mr-3">✓</span> Welcome Drink
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-pink-500 mr-3">✓</span> Event Merchandise
              </li>
              <li className="flex items-center text-gray-400">
                <span className="text-gray-300 mr-3">✗</span> VIP Lounge Access
              </li>
            </ul>
            
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-full transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Premium Tier - Featured */}
      <div className="relative group hover:scale-105 transition-all duration-300 md:-mt-4">
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 shadow-2xl border-4 border-yellow-400">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-full animate-pulse">
            <p className="text-sm font-bold text-gray-900">⭐ POPULAR</p>
          </div>
          
          <div className="mt-4 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-white p-1 mb-6">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="/images/ticket-premium.jpg" alt="Premium" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-2">₹1,999</h3>
            <p className="text-pink-100 mb-6">Per Person</p>
            
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center text-white">
                <span className="text-yellow-300 mr-3">✓</span> Priority Entry
              </li>
              <li className="flex items-center text-white">
                <span className="text-yellow-300 mr-3">✓</span> Complimentary Meals
              </li>
              <li className="flex items-center text-white">
                <span className="text-yellow-300 mr-3">✓</span> VIP Lounge Access
              </li>
              <li className="flex items-center text-white">
                <span className="text-yellow-300 mr-3">✓</span> Meet & Greet
              </li>
            </ul>
            
            <button className="w-full bg-white hover:bg-gray-100 text-pink-600 font-bold py-4 rounded-full transition-all">
              Buy Now 🔥
            </button>
          </div>
        </div>
      </div>

      {/* VIP Tier */}
      <div className="relative group hover:scale-105 transition-all duration-300">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-200 hover:border-pink-400">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-400 to-purple-500 px-6 py-2 rounded-full">
            <p className="text-sm font-bold text-white">VIP</p>
          </div>
          
          <div className="mt-4 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-300 to-pink-300 p-1 mb-6">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="/images/ticket-vip.jpg" alt="VIP" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-2">₹4,999</h3>
            <p className="text-gray-600 mb-6">Per Person</p>
            
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-pink-500 mr-3">✓</span> All Premium Benefits
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-pink-500 mr-3">✓</span> Backstage Access
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-pink-500 mr-3">✓</span> Photo Opportunities
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-pink-500 mr-3">✓</span> Exclusive Gift Hamper
              </li>
            </ul>
            
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 rounded-full transition-all">
              Buy Now 👑
            </button>
          </div>
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
                      src="/images/nwe1.png"
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
<section className="py-20 bg-gradient-to-b from-white to-pink-50 relative">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        <span className="text-gray-900">Our Beautiful</span> <span className="text-pink-600">Celebrations</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Moments that made our hearts full 💕
      </p>
    </div>

    {/* Masonry Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      
      {/* Large Image 1 */}
      <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/wedding1.jpg" alt="Wedding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">The Big Day 💍</h3>
            <p className="text-sm">December 15, 2024</p>
          </div>
        </div>
      </div>

      {/* Small Image 1 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party1.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Sangeet Night 🎵</p>
        </div>
      </div>

      {/* Small Image 2 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party2.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Mehendi Ceremony 🌿</p>
        </div>
      </div>

      {/* Small Image 3 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party3.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Haldi Fun 💛</p>
        </div>
      </div>

      {/* Small Image 4 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party4.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Reception 🎉</p>
        </div>
      </div>

      {/* Large Image 2 */}
      <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/wedding2.jpg" alt="Wedding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Forever Together 💕</h3>
            <p className="text-sm">Candid Moments</p>
          </div>
        </div>
      </div>

    </div>

    {/* View All Button */}
    <div className="text-center mt-12">
      <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-12 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-pink-300 transform hover:scale-105">
        View Full Gallery 📸
      </button>
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 relative">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-gray-900">Connect &</span> <span className="text-pink-600">Network</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Meet like-minded people and grow your circle! 🤝
      </p>
    </div>

    {/* Networking Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      
      {/* Card 1 - Speed Networking */}
      <div className="relative group">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-300 transition-all">
          <div className="relative h-64">
            <img src="/images/networking1.jpg" alt="Speed Networking" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold mb-2">Speed Networking</h3>
              <p className="text-pink-100">3:00 PM - 5:00 PM</p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">⚡ Fast-paced</span>
              <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">👥 50+ People</span>
            </div>
            <p className="text-gray-600 mb-6">
              Meet 20+ professionals in 2 hours! Quick 5-minute conversations to expand your network rapidly.
            </p>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full transition-all">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 - Panel Discussion */}
      <div className="relative group">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-300 transition-all">
          <div className="relative h-64">
            <img src="/images/networking2.jpg" alt="Panel Discussion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold mb-2">Panel Discussion</h3>
              <p className="text-purple-100">5:30 PM - 7:00 PM</p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">🎤 Expert Talks</span>
              <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">💡 Insights</span>
            </div>
            <p className="text-gray-600 mb-6">
              Learn from industry leaders. Q&A session included with networking cocktails after the panel.
            </p>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-full transition-all">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Attendees Showcase */}
    <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-12 shadow-2xl text-center">
      <h3 className="text-4xl font-bold text-white mb-6">Who's Coming?</h3>
      
      {/* Avatar Stack */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg transform hover:scale-110 hover:z-10 transition-all">
              <img src={`/images/attendee-${i}.jpg`} alt="Attendee" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <span className="ml-4 bg-white text-pink-600 font-bold px-6 py-3 rounded-full text-lg">
          +250 More!
        </span>
      </div>

      <p className="text-pink-100 text-xl mb-6">
        Join 250+ entrepreneurs, designers, developers, and creators
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-4xl font-bold text-white">89</p>
          <p className="text-pink-100">Startups</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-4xl font-bold text-white">45</p>
          <p className="text-pink-100">Investors</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-4xl font-bold text-white">120</p>
          <p className="text-pink-100">Tech Pros</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-4xl font-bold text-white">56</p>
          <p className="text-pink-100">Creatives</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-gradient-to-br from-pink-200 via-purple-200 to-rose-200 relative overflow-hidden">
  
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 text-6xl animate-bounce">🎊</div>
    <div className="absolute top-40 right-20 text-5xl animate-pulse">🎉</div>
    <div className="absolute bottom-20 left-1/4 text-7xl animate-spin" style={{ animationDuration: '10s' }}>🎪</div>
    <div className="absolute bottom-40 right-1/3 text-6xl animate-bounce" style={{ animationDelay: '1s' }}>🎭</div>
  </div>

  <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-6xl md:text-7xl font-extrabold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
          Festival Celebrations
        </span>
      </h2>
      <p className="text-2xl text-gray-800 max-w-2xl mx-auto font-semibold">
        Join the biggest celebration of the year! 🎊
      </p>
    </div>

    {/* Festival Highlights */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      
      {/* Left - Main Festival Image */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
          <img src="/images/festival-main.jpg" alt="Festival" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-4xl font-bold text-white mb-2">Holi Festival 2025</h3>
            <p className="text-pink-200 text-lg">March 25-27, 2025</p>
          </div>
        </div>
      </div>

      {/* Right - Festival Details */}
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-start space-x-4">
            <div className="text-5xl">🎵</div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Live Music & DJ</h4>
              <p className="text-gray-600">Non-stop entertainment with top artists and DJs</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-start space-x-4">
            <div className="text-5xl">🍔</div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Food Festival</h4>
              <p className="text-gray-600">50+ food stalls with delicious varieties</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-start space-x-4">
            <div className="text-5xl">🎨</div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Art & Culture</h4>
              <p className="text-gray-600">Traditional performances and exhibitions</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Festival Activities Carousel */}
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <h3 className="text-3xl font-bold text-center mb-8">
        <span className="text-gray-900">Featured</span> <span className="text-pink-600">Activities</span>
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: '🎪', title: 'Magic Shows', time: '11 AM' },
          { icon: '🎭', title: 'Dance Battles', time: '2 PM' },
          { icon: '🎤', title: 'Concerts', time: '6 PM' },
          { icon: '🎆', title: 'Fireworks', time: '9 PM' }
        ].map((activity, i) => (
          <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 hover:from-pink-100 hover:to-rose-200 transition-all cursor-pointer transform hover:scale-105">
            <div className="text-6xl mb-4">{activity.icon}</div>
            <h4 className="font-bold text-gray-900 text-lg mb-2">{activity.title}</h4>
            <p className="text-pink-600 font-semibold">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-16 py-6 rounded-full text-xl transition-all shadow-2xl hover:shadow-pink-400 transform hover:scale-110">
        Get Festival Pass 🎉
      </button>
    </div>
  </div>
</section>

<section className="py-20 bg-white relative overflow-hidden">
  
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle, #ec4899 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-gray-900">Our Amazing</span> <span className="text-pink-600">Sponsors</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Thank you for making this event possible! 🙏
      </p>
    </div>

    {/* Sponsor Tiers */}
    
    {/* Title Sponsors */}
    <div className="mb-16">
      <div className="text-center mb-8">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg">
          👑 TITLE SPONSORS
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[1, 2].map((i) => (
          <div key={i} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-105 border-4 border-pink-200">
            <div className="bg-white rounded-2xl p-8 h-40 flex items-center justify-center">
              <img src={`/images/sponsor-title-${i}.png`} alt="Title Sponsor" className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Gold Sponsors */}
    <div className="mb-16">
      <div className="text-center mb-8">
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-full font-bold">
          🥇 GOLD SPONSORS
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-pink-200 transition-all duration-300 hover:scale-105 border-2 border-pink-100">
            <div className="h-32 flex items-center justify-center">
              <img src={`/images/sponsor-gold-${i}.png`} alt="Gold Sponsor" className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Silver Sponsors */}
    <div>
      <div className="text-center mb-8">
        <span className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-8 py-3 rounded-full font-bold">
          🥈 SILVER SPONSORS
        </span>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-105">
            <div className="h-20 flex items-center justify-center">
              <img src={`/images/sponsor-silver-${i}.png`} alt="Silver Sponsor" className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Become Sponsor CTA */}
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl p-12 shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Want to Sponsor Our Event? 🤝
        </h3>
        <p className="text-pink-100 text-lg mb-6">
          Join these amazing brands and get incredible visibility!
        </p>
        <button className="bg-white hover:bg-gray-100 text-pink-600 font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
          Become a Sponsor
        </button>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-br from-pink-100 to-rose-50 relative overflow-hidden">
  
  {/* Decorative Elements */}
  <div className="absolute top-10 right-10 text-6xl opacity-20">✈️</div>
  <div className="absolute bottom-10 left-10 text-6xl opacity-20">🗺️</div>

  <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-gray-900">Explore</span> <span className="text-pink-600">Amazing Places</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Pack your bags for the adventure of a lifetime! 🌍
      </p>
    </div>

    {/* Destinations Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {[
        { 
          img: '/images/goa.jpg', 
          title: 'Goa Beach Paradise', 
          desc: 'Sun, sand & sea', 
          days: '3 Days', 
          price: '₹12,999',
          badge: '🏖️'
        },
        { 
          img: '/images/manali.jpg', 
          title: 'Manali Mountains', 
          desc: 'Snow & adventure', 
          days: '4 Days', 
          price: '₹15,999',
          badge: '⛰️'
        },
        { 
          img: '/images/jaipur.jpg', 
          title: 'Jaipur Heritage', 
          desc: 'Royal palaces', 
          days: '2 Days', 
          price: '₹9,999',
          badge: '🏰'
        },
        { 
          img: '/images/kerala.jpg', 
          title: 'Kerala Backwaters', 
          desc: 'Serene houseboats', 
          days: '5 Days', 
          price: '₹18,999',
          badge: '🚤'
        },
        { 
          img: '/images/ladakh.jpg', 
          title: 'Ladakh Adventure', 
          desc: 'Himalayan roads', 
          days: '7 Days', 
          price: '₹25,999',
          badge: '🏍️'
        },
        { 
          img: '/images/udaipur.jpg', 
          title: 'Udaipur Lakes', 
          desc: 'City of romance', 
          days: '3 Days', 
          price: '₹13,999',
          badge: '🛶'
        }
      ].map((destination, index) => (
        <div key={index} className="relative group cursor-pointer">
          
          {/* Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img src={destination.img} alt={destination.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 text-4xl animate-bounce">
                {destination.badge}
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">🗓️ {destination.days}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.title}</h3>
              <p className="text-gray-600 mb-4">{destination.desc}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-pink-600">{destination.price}</span>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full transition-all transform group-hover:scale-110">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Floating Pin Effect */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
        </div>
      ))}

    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-b from-white to-pink-50 relative">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        <span className="text-gray-900">Our Beautiful</span> <span className="text-pink-600">Celebrations</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Moments that made our hearts full 💕
      </p>
    </div>

    {/* Masonry Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      
      {/* Large Image 1 */}
      <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/wedding1.jpg" alt="Wedding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">The Big Day 💍</h3>
            <p className="text-sm">December 15, 2024</p>
          </div>
        </div>
      </div>

      {/* Small Image 1 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party1.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Sangeet Night 🎵</p>
        </div>
      </div>

      {/* Small Image 2 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party2.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Mehendi Ceremony 🌿</p>
        </div>
      </div>

      {/* Small Image 3 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party3.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Haldi Fun 💛</p>
        </div>
      </div>

      {/* Small Image 4 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/party4.jpg" alt="Party" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-bold text-lg">Reception 🎉</p>
        </div>
      </div>

      {/* Large Image 2 */}
      <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-xl">
        <img src="/images/wedding2.jpg" alt="Wedding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Forever Together 💕</h3>
            <p className="text-sm">Candid Moments</p>
          </div>
        </div>
      </div>

    </div>

    {/* View All Button */}
    <div className="text-center mt-12">
      <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-12 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-pink-300 transform hover:scale-105">
        View Full Gallery 📸
      </button>
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