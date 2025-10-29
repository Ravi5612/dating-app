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
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
  {/* Background Image with Pink Overlay */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/images/ambassodars.png" 
      alt="Wedding Background" 
      fill 
      className="object-cover brightness-90"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 via-rose-400/60 to-purple-500/70"></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
      
      {/* Left Side - Text Content */}
      <div className="text-white space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Start with the Blueprint AI Builder
        </h1>
        <p className="text-lg md:text-xl text-pink-50 max-w-xl leading-relaxed drop-shadow">
          Create a unique and professional website in minutes. Get expert design guidance, premium starter content, and curated styling options that match your needs and personality.
        </p>
        
        {/* CTA Button - Pink Theme */}
        <button className="group bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-pink-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-pink-200">
          <span className="text-2xl">💕</span>
          <span>BUILD SITE</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Right Side - Floating Cards */}
      <div className="relative h-[500px] hidden lg:block">
        
        {/* Card 1 - Top Left - Heading Card */}
      <div 
  className="absolute top-0 left-0 bg-white rounded-xl shadow-2xl overflow-hidden w-48 border-t-4 border-pink-400 animate-float"
  style={{ 
    animation: 'floatCard1 6s ease-in-out infinite',
    animationDelay: '0s'
  }}
>
  {/* Image Section */}
  <div className="relative h-32 w-full bg-gradient-to-br from-pink-100 to-rose-100">
    <Image 
      src="/images/15.png" 
      alt="Card Image" 
      fill 
      className="object-cover"
    />
  </div>
  
  {/* Text Content */}
  <div 
  className="absolute top-12 left-1/3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-2xl overflow-hidden w-44 border-l-4 border-rose-400 animate-float"
  style={{ 
    animation: 'floatCard2 7s ease-in-out infinite',
    animationDelay: '0.5s'
  }}
>
  {/* Image Section */}
  <div className="relative h-28 w-full bg-gradient-to-br from-pink-100 to-rose-100">
    <Image 
      src="/images/Rectangle 23841.png
  " 
          alt="Card Image" 
      fill 
      className="object-cover"
    />
  </div>
  
  {/* Text Content */}
  <div className="p-4">
    <h3 className="text-sm font-bold text-rose-600 mb-2">Heading</h3>
    <p className="text-xs text-gray-600">This is an example</p>
    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded"></div>
  </div>
</div>
  </div>

        {/* Card 2 - Top Center - Another Heading */}
        <div 
          className="absolute top-12 left-1/3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-2xl p-6 w-44 border-l-4 border-rose-400 animate-float"
          style={{ 
            animation: 'floatCard2 7s ease-in-out infinite',
            animationDelay: '0.5s'
          }}
        >
          <h3 className="text-sm font-bold text-rose-600 mb-2">Heading</h3>
          <p className="text-xs text-gray-600">This is an example</p>
        </div>

        {/* Card 3 - Center - Image Card */}
        <div 
          className="absolute top-24 right-0 bg-white rounded-2xl shadow-2xl overflow-hidden w-56 border-4 border-pink-200 animate-float"
          style={{ 
            animation: 'floatCard3 8s ease-in-out infinite',
            animationDelay: '1s'
          }}
        >
          <div className="relative h-40 bg-gradient-to-br from-pink-200 to-rose-200">
            <Image 
              src="/images/ambassodars.png" 
              alt="Wedding Detail" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-gradient-to-br from-pink-50 to-white">
            <h3 className="text-sm font-bold text-pink-600 mb-1">More about our brand</h3>
            <p className="text-xs text-gray-600 mb-3">Discover our story</p>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded"></div>
          </div>
        </div>

        {/* Card 4 - Bottom Center - Color Palette (Pink Theme) */}
        <div 
          className="absolute bottom-20 left-1/4 bg-white rounded-xl shadow-2xl p-5 w-40 border-2 border-pink-300 animate-float"
          style={{ 
            animation: 'floatCard4 7.5s ease-in-out infinite',
            animationDelay: '1.5s'
          }}
        >
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="w-full h-8 bg-pink-500 rounded shadow-inner"></div>
              <div className="w-full h-8 bg-rose-400 rounded shadow-inner"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-full h-8 bg-pink-300 rounded shadow-inner"></div>
              <div className="w-full h-8 bg-purple-400 rounded shadow-inner"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-full h-8 bg-pink-200 rounded shadow-inner"></div>
              <div className="w-full h-8 bg-rose-300 rounded shadow-inner"></div>
            </div>
          </div>
        </div>

        {/* Card 5 - Bottom Right - Mockup Device */}
        <div 
          className="absolute bottom-0 right-8 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl shadow-2xl p-1 w-48 border-2 border-pink-300 animate-float"
          style={{ 
            animation: 'floatCard5 6.5s ease-in-out infinite',
            animationDelay: '2s'
          }}
        >
          <div className="bg-white rounded-xl p-4 space-y-3">
            <div className="h-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded w-3/4"></div>
            <div className="h-2 bg-pink-100 rounded w-full"></div>
            <div className="h-2 bg-pink-100 rounded w-5/6"></div>
            <div className="h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded"></div>
            <div className="h-2 bg-pink-100 rounded w-full"></div>
            <div className="h-2 bg-pink-100 rounded w-4/5"></div>
          </div>
        </div>

        {/* Decorative Floating Hearts */}
        <div className="absolute top-10 right-20 text-4xl animate-pulse opacity-30">💕</div>
        <div className="absolute bottom-32 left-12 text-3xl animate-pulse opacity-20" style={{ animationDelay: '1s' }}>💖</div>
        <div className="absolute top-1/2 right-32 text-2xl animate-pulse opacity-25" style={{ animationDelay: '2s' }}>💗</div>
      </div>
    </div>
  </div>

  {/* Bottom Decorative Wave */}
  <div className="absolute bottom-0 left-0 right-0 z-5">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-32">
      <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="url(#gradient)" fillOpacity="0.5"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>
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
                        src="/images/unsplash_fdlZBWIP0aM.png" 
                        alt="Couple having meaningful conversation" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Small images - Bottom Row */}
                  <div className="relative w-full h-32 md:h-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/unsplash_jpkfc5_d-DI.png" 
                      alt="Friends connecting over coffee" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="relative w-full h-32 md:h-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/unsplash_mAQZ3X_8_l0.png" 
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
                    src="/images/Nwe1.png"
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
                  src="/images/new3.png"
                  alt="Happy couple having meaningful conversation outdoors" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
          </div>
        </section>
{/* SECTION 1 - 🩷 Bestie Grid (3×3 Instagram Style) */}


{/* SECTION 2 - 💞 Heart Collage */}
<section className="py-12 bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50 relative overflow-hidden">
  {/* Full width container for bouncing images */}
  <div className="w-full px-4 md:px-8 relative">
  
    {/* Full Width Heart Shape Container with Bouncing Images - MOVED BEFORE HEADER */}
    <div className="relative w-full h-[1100px] md:h-[1200px] flex items-center justify-center">
      
      {/* Center Heart Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="text-pink-300 text-[500px] md:text-[600px] leading-none opacity-25 animate-pulse" style={{ animationDuration: '4s' }}>
          ❤️
        </div>
      </div>

      {/* Bouncing Image 1 - LARGER */}
      <div 
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce1 12s linear infinite, colorChange 3s linear infinite',
        }}
      >
        <Image src="/images/unsplash_fdlZBWIP0aM.png" alt="Love 1" fill className="object-cover" />
      </div>

      {/* Bouncing Image 2 - LARGER */}
      <div 
        className="absolute w-52 h-52 md:w-68 md:h-68 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce2 14s linear infinite, colorChange 3.5s linear infinite',
          animationDelay: '0.5s'
        }}
      >
        <Image src="/images/unsplash_jpkfc5_d-DI.png" alt="Love 2" fill className="object-cover" />
      </div>

      {/* Bouncing Image 3 - LARGER */}
      <div 
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce3 13s linear infinite, colorChange 4s linear infinite',
          animationDelay: '1s'
        }}
      >
        <Image src="/images/unsplash_mAQZ3X_8_l0.png" alt="Love 3" fill className="object-cover" />
      </div>

      {/* Bouncing Image 4 - LARGER */}
      <div 
        className="absolute w-52 h-52 md:w-68 md:h-68 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce4 15s linear infinite, colorChange 3.2s linear infinite',
          animationDelay: '1.5s'
        }}
      >
        <Image src="/images/Nwe1.png" alt="Love 4" fill className="object-cover" />
      </div>

      {/* Bouncing Image 5 - LARGER */}
      <div 
        className="absolute w-52 h-52 md:w-68 md:h-68 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce5 13.5s linear infinite, colorChange 3.8s linear infinite',
          animationDelay: '2s'
        }}
      >
        <Image src="/images/Rectangle 23841.png" alt="Love 5" fill className="object-cover" />
      </div>

      {/* Bouncing Image 6 - LARGER */}
      <div 
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce6 14.5s linear infinite, colorChange 4.2s linear infinite',
          animationDelay: '2.5s'
        }}
      >
        <Image src="/images/Rectangle 23845.png" alt="Love 6" fill className="object-cover" />
      </div>

      {/* Bouncing Image 7 - LARGER */}
      <div 
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce7 12.5s linear infinite, colorChange 3.6s linear infinite',
          animationDelay: '3s'
        }}
      >
        <Image src="/images/Rectangle 23847.png" alt="Love 7" fill className="object-cover" />
      </div>

      {/* Bouncing Image 8 - LARGER */}
      <div 
        className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-125 hover:z-50 z-10"
        style={{ 
          animation: 'bounce8 16s linear infinite, colorChange 4.5s linear infinite',
          animationDelay: '3.5s'
        }}
      >
        <Image src="/images/Group 1597884004.png" alt="Love 8" fill className="object-cover" />
      </div>

      {/* Header - NOW INSIDE THE CONTAINER */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-20 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          💞 Love in Every Frame
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Where hearts meet and beautiful connections are made
        </p>
      </div>

      {/* Caption - ALSO INSIDE THE CONTAINER */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20 max-w-6xl mx-auto">
        <p className="text-2xl text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>
          Love is composed of a single soul inhabiting two bodies 💕
        </p>
      </div>
    </div>
  </div>
</section>


{/* SECTION 4 - 📸 Polaroid Wall */}
<section className="py-20 bg-gradient-to-b from-purple-50 to-amber-50 relative">
  
  {/* Cork Board Texture */}
  <div className="absolute inset-0 opacity-10" style={{
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23d4a574" width="100" height="100"/%3E%3C/svg%3E")',
    backgroundSize: '50px 50px'
  }}></div>

  <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        📸 Memory Wall
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Pinned moments that make us smile every single day
      </p>
    </div>

    {/* Polaroid Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
      
      {[
        { img: '/images/unsplash_fdlZBWIP0aM.png', caption: 'Best Day Ever!', rotation: '-rotate-6', tape: 'bg-red-400' },
        { img: '/images/unsplash_jpkfc5_d-DI.png', caption: 'Coffee & Laughs', rotation: 'rotate-3', tape: 'bg-blue-400' },
        { img: '/images/unsplash_mAQZ3X_8_l0.png', caption: 'Squad Goals', rotation: '-rotate-2', tape: 'bg-yellow-400' },
        { img: '/images/Nwe1.png', caption: 'Forever Vibes', rotation: 'rotate-4', tape: 'bg-green-400' },
        { img: '/images/new3.png', caption: 'Happy Place', rotation: '-rotate-3', tape: 'bg-purple-400' },
        { img: '/images/Rectangle 23841.png', caption: 'Good Times', rotation: 'rotate-2', tape: 'bg-pink-400' },
        { img: '/images/Rectangle 23845.png', caption: 'Sweet Memories', rotation: '-rotate-4', tape: 'bg-orange-400' },
        { img: '/images/Rectangle 23847.png', caption: 'Pure Joy', rotation: 'rotate-5', tape: 'bg-cyan-400' }
      ].map((item, index) => (
        <div 
          key={index}
          className={`relative transform ${item.rotation} hover:rotate-0 hover:scale-110 transition-all duration-300 hover:z-20`}
        >
          {/* Polaroid */}
          <div className="bg-white p-4 pb-16 shadow-2xl">
            
            {/* Tape */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 ${item.tape} opacity-60 rounded-sm transform -rotate-12 shadow-md`}></div>

            {/* Photo */}
            <div className="relative w-full h-48 md:h-56 bg-gray-200 overflow-hidden">
              <Image src={item.img} alt={item.caption} fill className="object-cover" />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-sm md:text-base font-handwriting text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
                {item.caption}
              </p>
            </div>
          </div>

          {/* Push Pin */}
          <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 ${item.tape} rounded-full shadow-lg`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Caption */}
    <div className="text-center mt-16">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        Every polaroid holds a piece of our hearts 💝
      </p>
    </div>
  </div>
</section>

{/* SECTION 5 - 💗 Filmstrip Collage */}
<section className="py-20 bg-gradient-to-b from-amber-50 to-gray-100">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        💗 Our Love Story Reel
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Frame by frame, moment by moment, building beautiful memories together
      </p>
    </div>

    {/* Filmstrip Container */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl">
      
      {/* Film holes top */}
      <div className="flex justify-around mb-4">
        {[1,2,3,4,5,6,7,8,9,10].map((i) => (
          <div key={i} className="w-4 h-4 bg-gray-800 rounded-sm"></div>
        ))}
      </div>

      {/* Photos Strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          '/images/unsplash_fdlZBWIP0aM.png',
          '/images/unsplash_jpkfc5_d-DI.png',
          '/images/unsplash_mAQZ3X_8_l0.png',
          '/images/Nwe1.png',
          '/images/new3.png'
        ].map((img, index) => (
          <div 
            key={index}
            className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden border-4 border-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <Image src={img} alt={`Frame ${index + 1}`} fill className="object-cover" />
            {/* Frame number */}
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Film holes bottom */}
      <div className="flex justify-around mt-4">
        {[1,2,3,4,5,6,7,8,9,10].map((i) => (
          <div key={i} className="w-4 h-4 bg-gray-800 rounded-sm"></div>
        ))}
      </div>
    </div>

    {/* Caption */}
    <div className="text-center mt-8">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        Life is like a movie, and you are my favorite scene 🎬
      </p>
    </div>
  </div>
</section>






<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`}</style>



        <FAQSection faqs={faqs} />

        <CallToAction />
     
      </main>

      <Footer />
    </div>
  );
}