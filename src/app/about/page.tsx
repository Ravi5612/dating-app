"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CallToAction from "@/app/Components/CallToAction";
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
 const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  

  const aboutCards = [
    {
      id: 1,
      title: "Why Velvet Matters",
      image: "/images/Rectangle 23841.png",
      description: "We believe in creating meaningful connections that last. Our platform goes beyond superficial matches to help you find someone who truly understands you.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "How Velvet Works",
      image: "/images/Rectangle 23845.png",
      description: "Smart matching algorithms combined with verified profiles ensure you meet genuine people. Our advanced filters help you find exactly what you're looking for.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      id: 3,
      title: "What Velvet Values",
      image: "/images/Rectangle 23847.png",
      description: "Safety, authenticity, and respect are our core values. We create a trusted environment where real relationships can flourish naturally.",
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  const features = [
    { icon: "🔒", text: "Verified Profiles" },
    { icon: "💝", text: "Smart Matching" },
    { icon: "🎯", text: "Interest-Based Search" },
    { icon: "🛡️", text: "Safe & Secure" }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Velvet was founded with a simple mission: make dating safe and meaningful for everyone.",
      icon: "🚀"
    },
    {
      year: "2021",
      title: "10K Users",
      description: "Reached our first 10,000 active users who found genuine connections through our platform.",
      icon: "👥"
    },
    {
      year: "2022",
      title: "AI Matching",
      description: "Launched advanced AI-powered matching algorithm for better compatibility.",
      icon: "🤖"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 15+ countries, helping people find love across borders.",
      icon: "🌍"
    },
    {
      year: "2024",
      title: "50K+ Couples",
      description: "Celebrated 50,000+ successful relationships formed on Velvet.",
      icon: "💑"
    }
  ];

  const values = [
    {
      icon: "🔐",
      title: "Privacy First",
      description: "Your data is encrypted and never shared. Complete control over your information.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: "✨",
      title: "Authenticity",
      description: "Real profiles, real people. Every user is verified to ensure genuine connections.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: "🤝",
      title: "Respect",
      description: "Zero tolerance for harassment. Safe space for everyone to find love.",
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: "💖",
      title: "Inclusivity",
      description: "Love knows no boundaries. Welcome to everyone, regardless of background.",
      color: "from-rose-600 to-pink-700"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      quote: "Love should be accessible to everyone",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      quote: "Technology that brings hearts together",
      gradient: "from-rose-400 to-pink-500"
    },
    {
      name: "Priya Sharma",
      role: "Head of Safety",
      quote: "Your safety is our priority",
      gradient: "from-pink-500 to-rose-500"
    }
  ];
 const polaroidGallery = [
    {
      id: 1,
      image: "/images/Rectangle 23841.png",
      caption: "Authentic Moments",
      rotation: '-rotate-6',
      tapeColor: 'bg-red-400',
      position: 'lg:translate-y-8'
    },
    {
      id: 2,
      image: "/images/Rectangle 23845.png",
      caption: "Real Connections",
      rotation: 'rotate-3',
      tapeColor: 'bg-blue-400',
      position: 'lg:-translate-y-4'
    },
    {
      id: 3,
      image: "/images/Rectangle 23847.png",
      caption: "Genuine Love",
      rotation: '-rotate-2',
      tapeColor: 'bg-yellow-400',
      position: 'lg:translate-y-12'
    },
    {
      id: 4,
      image: "/images/Group 1597884004.png",
      caption: "Pure Joy",
      rotation: 'rotate-4',
      tapeColor: 'bg-green-400',
      position: 'lg:-translate-y-8'
    },
    {
      id: 5,
      image: "/images/Rectangle 94 (1).png",
      caption: "Happy Together",
      rotation: '-rotate-5',
      tapeColor: 'bg-purple-400',
      position: 'lg:translate-y-6'
    },
    {
      id: 6,
      image: "/images/about.png",
      caption: "Forever Love",
      rotation: 'rotate-2',
      tapeColor: 'bg-pink-400',
      position: 'lg:-translate-y-10'
    }
  ];
  const achievements = [
    { number: "50K+", label: "Happy Couples", icon: "💑" },
    { number: "100K+", label: "Active Users", icon: "👥" },
    { number: "95%", label: "Success Rate", icon: "⭐" },
    { number: "15+", label: "Countries", icon: "🌍" },
    { number: "4.8/5", label: "User Rating", icon: "❤️" },
    { number: "24/7", label: "Support", icon: "🛟" }
  ];

  return (
    <div>
      <Header />
      
   <main>
  {/* Hero Section - CONSISTENT PINK THEME */}
<section className="relative min-h-screen overflow-hidden">
  
  {/* Background Image with Light Pink Overlay */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/images/19.png" 
      alt="Background" 
      fill 
      className="object-cover brightness-110"
      priority
    />
    {/* Light Pink Gradient Overlay - Image visible */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-rose-100/50 to-purple-100/60"></div>
    
    {/* Additional Soft Pink Tint */}
    <div className="absolute inset-0 bg-pink-200/20"></div>
  </div>

  {/* Main Content */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side - Text Content with Pink Theme */}
      <div className="space-y-8 z-10">
        
        {/* Main Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-700 leading-tight drop-shadow-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Find your love
          </h2>
          
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-pink-800 leading-tight drop-shadow-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Delete all
            </h1>
            {/* Underline Decoration - Pink */}
            <div className="absolute -bottom-2 left-0 right-0">
              <svg viewBox="0 0 300 20" className="w-full h-4 drop-shadow-lg">
                <path d="M5,15 Q150,5 295,15" stroke="#be185d" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-pink-800 leading-tight drop-shadow-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Dating apps
          </h1>
        </div>

        {/* Description Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border-2 border-pink-300">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">
            We designed a platform to find your love the most <span className="font-black text-pink-700">genuine way</span>, no more regret for <span className="font-black text-pink-700">no matches</span>
          </p>
        </div>

        {/* CTA Button with Arrow - Pink Theme */}
        <div className="relative inline-block">
          <button className="bg-gradient-to-r from-pink-700 via-rose-700 to-purple-700 hover:from-pink-800 hover:via-rose-800 hover:to-purple-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-600/60 transition-all transform hover:scale-105 uppercase tracking-wide flex items-center gap-3 shadow-xl">
            <span className="text-2xl">💕</span>
            <span>Find Your Love</span>
          </button>
          
          {/* Hand-drawn Arrow - Darker Pink */}
          <div className="absolute -right-12 top-8 hidden lg:block">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="transform rotate-12 drop-shadow-lg">
              <path d="M10,40 Q40,20 70,35 T110,45" stroke="#be185d" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M105,40 L115,45 L108,50" stroke="#be185d" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Features Row - Pink Theme */}
        <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl">
          
          {/* Feature 1 - Pink */}
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl">
              <span className="text-2xl">👥</span>
            </div>
            <h4 className="text-base font-black text-pink-700 mb-1 drop-shadow-lg">10k+</h4>
            <h4 className="text-sm font-bold text-pink-700 mb-2 drop-shadow-lg">Members</h4>
            <p className="text-xs text-gray-800 leading-relaxed drop-shadow font-semibold">Over thousands of people are using Velvet</p>
          </div>

          {/* Feature 2 - Pink */}
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="text-sm font-bold text-pink-700 mb-2 drop-shadow-lg">Smart AI</h4>
            <p className="text-xs text-gray-800 leading-relaxed drop-shadow font-semibold">Best match based on intelligent algorithm</p>
          </div>

          {/* Feature 3 - Pink */}
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl">
              <span className="text-2xl">💕</span>
            </div>
            <h4 className="text-sm font-bold text-pink-700 mb-1 drop-shadow-lg">Perfect</h4>
            <h4 className="text-sm font-bold text-pink-700 mb-2 drop-shadow-lg">Match</h4>
            <p className="text-xs text-gray-800 leading-relaxed drop-shadow font-semibold">10k+ people are happy using Velvet</p>
          </div>

        </div>
      </div>

      {/* Right Side - Phone Mockups with Pink Theme */}
      <div className="relative h-[600px] hidden lg:block">
        
        {/* Phone 1 - Pink Gradient Border (Left, Tilted) */}
        <div 
          className="absolute top-0 left-0 w-72 h-[520px] transform -rotate-12 hover:rotate-0 transition-all duration-500 z-20"
          style={{
            animation: 'floatPhone1 6s ease-in-out infinite'
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-pink-600 via-rose-600 to-purple-600 rounded-[3rem] p-1.5 shadow-2xl">
            <div className="relative w-full h-full bg-white rounded-[2.7rem] overflow-hidden">
              {/* Phone Screen Content */}
              <div className="relative w-full h-full bg-gradient-to-br from-pink-100 to-rose-100">
                <Image 
                  src="/images/15.png" 
                  alt="Profile 1" 
                  fill 
                  className="object-cover"
                />
                {/* Overlay Text - Pink */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-700/95 to-transparent p-6">
                  <p className="text-white text-2xl font-bold italic drop-shadow-lg">Find your love</p>
                </div>
              </div>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
            </div>
          </div>
        </div>

        {/* Phone 2 - Pink/Rose Gradient Border (Center, Tilted) */}
        <div 
          className="absolute top-12 left-32 w-72 h-[520px] transform rotate-6 hover:rotate-0 transition-all duration-500 z-30"
          style={{
            animation: 'floatPhone2 7s ease-in-out infinite',
            animationDelay: '0.5s'
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 rounded-[3rem] p-1.5 shadow-2xl">
            <div className="relative w-full h-full bg-white rounded-[2.7rem] overflow-hidden">
              {/* Phone Screen Content */}
              <div className="relative w-full h-full bg-gradient-to-br from-rose-100 to-pink-100">
                <Image 
                  src="/images/Rectangle 23845.png" 
                  alt="Profile 2" 
                  fill 
                  className="object-cover"
                />
                {/* Overlay Text - Pink */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rose-700/95 to-transparent p-6">
                  <p className="text-white text-2xl font-bold italic drop-shadow-lg">Meet People</p>
                </div>
              </div>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
            </div>
          </div>
        </div>

        {/* Phone 3 - Rose/Purple Gradient Border (Right, Tilted) */}
        <div 
          className="absolute top-24 right-0 w-72 h-[520px] transform rotate-12 hover:rotate-0 transition-all duration-500 z-20"
          style={{
            animation: 'floatPhone3 6.5s ease-in-out infinite',
            animationDelay: '1s'
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-rose-600 via-pink-600 to-purple-700 rounded-[3rem] p-1.5 shadow-2xl">
            <div className="relative w-full h-full bg-white rounded-[2.7rem] overflow-hidden">
              {/* Phone Screen Content */}
              <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-pink-100">
                <Image 
                  src="/images/Rectangle 23847.png" 
                  alt="Profile 3" 
                  fill 
                  className="object-cover"
                />
                {/* Overlay Text - Pink/Purple */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-700/95 to-transparent p-6">
                  <p className="text-white text-2xl font-bold italic drop-shadow-lg">Made with love</p>
                </div>
              </div>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
            </div>
          </div>
        </div>

        {/* Floating Hearts Decoration - Pink */}
        <div className="absolute top-32 right-20 text-6xl text-pink-500 opacity-60 animate-pulse drop-shadow-xl">💕</div>
        <div className="absolute bottom-32 left-20 text-7xl text-rose-500 opacity-55 animate-pulse drop-shadow-xl" style={{animationDelay: '1s'}}>💖</div>
        <div className="absolute top-1/2 left-1/2 text-5xl text-pink-400 opacity-50 animate-pulse drop-shadow-xl" style={{animationDelay: '1.5s'}}>❤️</div>

      </div>

    </div>
  </div>

  {/* Background Decorative Circles - Lighter for Image Visibility */}
  <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
  <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-500 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400 rounded-full blur-3xl opacity-15 -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>

</section>

  {/* Moments Gallery Section - PINK THEME */}
<section className="relative py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50 overflow-hidden">
  
  {/* Decorative Background Pattern */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 rounded-full blur-3xl opacity-50"></div>
  </div>

  {/* Floating Decorative Hearts */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-1/4 text-5xl text-pink-300 opacity-20 animate-float">💕</div>
    <div className="absolute top-40 right-1/3 text-6xl text-rose-300 opacity-15 animate-float" style={{animationDelay: '1s'}}>💖</div>
    <div className="absolute bottom-32 left-1/3 text-7xl text-pink-200 opacity-20 animate-float" style={{animationDelay: '2s'}}>❤️</div>
    <div className="absolute bottom-20 right-1/4 text-5xl text-rose-200 opacity-25 animate-float" style={{animationDelay: '1.5s'}}>💗</div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
    
    {/* Enhanced Section Header */}
    <div className="text-center mb-16">
      
      {/* Decorative Top Element */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-pink-400 rounded-full"></div>
        <span className="text-4xl">📸</span>
        <div className="w-12 h-1 bg-gradient-to-l from-transparent to-pink-400 rounded-full"></div>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Moments Gallery
      </h2>
      
      {/* Enhanced Underline with Gradient */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-1.5 bg-pink-300 rounded-full"></div>
        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-full"></div>
        <div className="w-8 h-1.5 bg-pink-300 rounded-full"></div>
      </div>

      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Capturing authentic moments of love and connection 💕
      </p>

      {/* Stats Bar */}
      <div className="flex items-center justify-center gap-8 mt-6 flex-wrap">
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-200">
          <span className="text-2xl">📷</span>
          <span className="text-pink-600 font-bold">1000+ Photos</span>
        </div>
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-rose-200">
          <span className="text-2xl">💑</span>
          <span className="text-rose-600 font-bold">500+ Couples</span>
        </div>
      </div>
    </div>

    {/* Enhanced Polaroid Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20">
      {polaroidGallery.map((photo) => (
        <div 
          key={photo.id}
          className={`flex justify-center ${photo.position}`}
          onMouseEnter={() => setHoveredCard(photo.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={`
            group relative bg-white p-4 pb-16 shadow-2xl rounded-sm
            transform transition-all duration-500
            ${hoveredCard === photo.id ? 'scale-110 rotate-0 z-30 shadow-pink-300' : `scale-100 ${photo.rotation}`}
          `}>
            
            {/* Enhanced Tape with Texture */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 ${photo.tapeColor} opacity-80 rounded-sm transform rotate-6 shadow-lg`}>
              <div className="absolute inset-0 bg-white/20 rounded-sm"></div>
            </div>
            
            {/* Photo Container with Border */}
            <div className="relative w-72 h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden rounded-sm border-4 border-gray-100">
              <Image 
                src={photo.image} 
                alt={photo.caption} 
                fill
                className={`object-cover transition-all duration-700 ${hoveredCard === photo.id ? 'scale-110 brightness-110' : 'scale-100'}`}
              />
              
              {/* Overlay Gradient on Hover */}
              {hoveredCard === photo.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
              )}
            </div>
            
            {/* Enhanced Caption */}
            <div className="mt-4 text-center relative">
              <p className="text-xl md:text-2xl font-bold text-pink-600" style={{ fontFamily: "'Caveat', cursive" }}>
                {photo.caption}
              </p>
              
              {/* Decorative Underline */}
              {hoveredCard === photo.id && (
                <div className="w-16 h-0.5 bg-pink-400 mx-auto mt-1 rounded-full"></div>
              )}
            </div>

            {/* Floating Heart on Hover */}
            {hoveredCard === photo.id && (
              <div className="absolute -top-6 -right-6 text-5xl animate-bounce z-40">
                💕
              </div>
            )}

            {/* Corner Pin Effect */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-gray-400 rounded-full shadow-md opacity-60"></div>
            <div className="absolute top-2 left-2 w-3 h-3 bg-gray-400 rounded-full shadow-md opacity-60"></div>

            {/* Hover Glow Effect */}
            {hoveredCard === photo.id && (
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-sm -z-10 blur-xl"></div>
            )}

            {/* Photo Number Badge */}
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-pink-200">
              <span className="text-xs font-bold text-pink-600">{photo.id}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA Section */}
    <div className="mt-20 text-center">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200 max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Want to be featured here? 💕
        </h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Share your love story with us and inspire thousands of couples on their journey to find true love.
        </p>
        
        <button className="group bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-700 hover:via-rose-700 hover:to-purple-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
          <span className="text-2xl">📸</span>
          <span>Share Your Story</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-pink-300 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-rose-300 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-purple-300 rounded-full border-2 border-white"></div>
          </div>
          <span className="font-semibold">Join 500+ couples who shared their moments</span>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="relative py-20 bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 overflow-hidden">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
  </div>

  {/* Floating Hearts Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-32 left-20 text-6xl text-pink-300 opacity-20 animate-float">💕</div>
    <div className="absolute top-1/3 right-32 text-5xl text-rose-300 opacity-15 animate-float" style={{animationDelay: '1s'}}>💖</div>
    <div className="absolute bottom-40 left-1/4 text-7xl text-pink-200 opacity-20 animate-float" style={{animationDelay: '2s'}}>❤️</div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side - Enhanced Image Collage */}
      <div className="relative h-[600px] lg:h-[700px]">
        
        {/* Image 1 - Top Left (Tall) - Pink Border */}
        <div className="absolute top-0 left-0 w-32 md:w-40 h-64 md:h-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 border-4 border-pink-200">
          <Image 
            src="/images/Rectangle 23841.png" 
            alt="User 1" 
            fill
            className="object-cover"
          />
          {/* Pink Badge with Pulse */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-xl animate-pulse">
            <span className="text-2xl">💕</span>
          </div>
        </div>

        {/* Image 2 - Center Left (Medium with pink bg) */}
        <div className="absolute top-20 left-28 md:left-36 w-48 md:w-56 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 rounded-3xl shadow-2xl p-2 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20">
          <div className="relative w-full h-72 md:h-80 bg-white rounded-2xl overflow-hidden">
            <Image 
              src="/images/Rectangle 23845.png" 
              alt="User 2" 
              fill
              className="object-cover"
            />
          </div>
          {/* Label - Pink Theme */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
            <span className="text-sm font-bold text-pink-600">💖 Love Stories</span>
          </div>
          {/* Navigation Dots & Arrows - Enhanced Pink */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-100 transition shadow-lg hover:scale-110">
              <span className="text-pink-600 font-bold">←</span>
            </button>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-pink-600 rounded-full shadow-inner"></div>
              <div className="w-2.5 h-2.5 bg-pink-300 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-pink-300 rounded-full"></div>
            </div>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-100 transition shadow-lg hover:scale-110">
              <span className="text-pink-600 font-bold">→</span>
            </button>
          </div>
        </div>

        {/* Image 3 - Top Right (Small) - Pink Check */}
        <div className="absolute top-8 right-0 w-36 md:w-44 h-48 md:h-56 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-15 border-4 border-rose-200">
          <Image 
            src="/images/Rectangle 23847.png" 
            alt="User 3" 
            fill
            className="object-cover"
          />
          {/* Pink Check Badge */}
          <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-2xl text-white">✓</span>
          </div>
        </div>

        {/* Image 4 - Right Middle (Tall) */}
        <div className="absolute top-48 right-12 md:right-20 w-36 md:w-44 h-72 md:h-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-25 border-4 border-pink-300">
          <Image 
            src="/images/Group 1597884004.png" 
            alt="User 4" 
            fill
            className="object-cover"
          />
          {/* Corner Star */}
          <div className="absolute top-2 right-2 text-2xl">⭐</div>
        </div>

        {/* Image 5 - Bottom Left (Medium with label) - Pink */}
        <div className="absolute bottom-0 left-8 w-52 md:w-60 h-64 md:h-72 bg-gradient-to-br from-pink-300 via-rose-300 to-purple-400 rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 z-30 p-2">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image 
              src="/images/Rectangle 94 (1).png" 
              alt="User 5" 
              fill
              className="object-cover"
            />
          </div>
          {/* Name Label - Pink Theme */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-200">
            <span className="text-pink-600 font-bold text-sm">💑 Happy Couple</span>
          </div>
        </div>

        {/* Image 6 - Bottom Right (Small) */}
        <div className="absolute bottom-12 right-0 w-40 md:w-48 h-52 md:h-60 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 border-4 border-rose-200">
          <Image 
            src="/images/about.png" 
            alt="User 6" 
            fill
            className="object-cover"
          />
          {/* Heart Badge */}
          <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl animate-pulse">
            <span className="text-2xl">❤️</span>
          </div>
        </div>

        {/* Enhanced Decorative circles - Pink Theme with Glow */}
        <div className="absolute top-12 right-32 w-12 h-12 bg-pink-400 rounded-full shadow-xl blur-sm opacity-70 animate-pulse"></div>
        <div className="absolute bottom-32 left-0 w-10 h-10 bg-rose-400 rounded-full shadow-lg blur-sm opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-0 right-24 w-8 h-8 bg-pink-300 rounded-full shadow-lg blur-sm opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Right Side - Enhanced Content */}
      <div className="lg:pl-8 relative">
        
        {/* Decorative Quote Mark */}
        <div className="absolute -top-8 -left-4 text-9xl text-pink-200 opacity-20 font-serif"></div>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Be the first to know
          {/* Decorative Underline */}
          <div className="w-24 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mt-3"></div>
        </h2>
        
        {/* Enhanced Content Cards */}
        <div className="space-y-6 mb-8">
          
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">💌</div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Velvet has led to <span className="font-bold text-pink-600">millions of relationships, marriages, and friendships</span> around the world. Want to see what we are building next? Sign up to get our latest updates and feature drops—straight to your inbox.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">✨</div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Whether it is <span className="font-bold text-pink-600">tips from our dating experts</span>, how we are using <span className="font-bold text-pink-600">AI to power better matchmaking</span>, or feature updates like <span className="font-bold text-pink-600">ID Verification</span> that improve members safety, you will be the first to discover how we are putting love at the heart of dating.
              </p>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              🤖 AI Matching
            </span>
            <span className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              🔒 Verified Profiles
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              💬 Expert Tips
            </span>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <button className="group bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-700 hover:via-rose-700 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-pink-500/50 flex items-center gap-3">
          <span className="text-2xl">💕</span>
          <span>Sign up now</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Trust Indicators */}
        <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-semibold">4.8/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💑</span>
            <span className="font-semibold">50K+ Couples</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  {/* Real Connections Section - CONSISTENT PINK */}
 <section className="relative py-16 md:py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-white overflow-hidden">
  
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <div className="absolute top-20 right-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-300 rounded-full blur-3xl"></div>
  </div>

  {/* Floating Hearts */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-32 right-1/4 text-6xl text-pink-200 opacity-20 animate-float">💕</div>
    <div className="absolute bottom-40 left-1/4 text-5xl text-rose-200 opacity-25 animate-float" style={{animationDelay: '1s'}}>💖</div>
  </div>

  <div className="relative max-w-6xl mx-auto px-6 md:px-12 z-10">
    
    {/* Enhanced Header */}
    <div className="text-center mb-12">
      
      {/* Top Decorative Element */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-10 h-1 bg-gradient-to-r from-transparent to-pink-400 rounded-full"></div>
        <span className="text-3xl">✨</span>
        <div className="w-10 h-1 bg-gradient-to-l from-transparent to-pink-400 rounded-full"></div>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-pink-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Real Connections, Real You!
      </h2>
      
      {/* Enhanced Underline */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-1.5 bg-pink-300 rounded-full"></div>
        <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
        <div className="w-6 h-1.5 bg-pink-300 rounded-full"></div>
      </div>
    </div>
    
    {/* Enhanced Subtext */}
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto shadow-lg border-2 border-pink-100">
      <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
        We believe dating should be <span className="font-bold text-pink-600">fun, safe, and meaningful</span>. 
        Our app is designed for <span className="font-bold text-pink-600">real connections</span> with features that matter:
      </p>
    </div>
    
    {/* Enhanced Features Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group relative bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 text-center border-2 border-pink-100 hover:border-pink-400 overflow-hidden"
        >
          {/* Gradient Background on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          {/* Icon with Animation */}
          <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
            {feature.icon}
          </div>
          
          {/* Text */}
          <p className="text-sm md:text-base font-bold text-pink-600 group-hover:text-pink-700 transition-colors relative z-10">
            {feature.text}
          </p>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-pink-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      ))}
    </div>
    
    {/* Enhanced Main Image Section */}
    <div className="relative max-w-4xl mx-auto">
      
      {/* Decorative Quote */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center z-20">
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border-2 border-pink-200">
          <p className="text-pink-600 font-bold text-sm md:text-base flex items-center gap-2">
            <span className="text-xl">💑</span>
            <span>Love starts here</span>
            <span className="text-xl">💕</span>
          </p>
        </div>
      </div>

      {/* Image Container with Enhanced Border */}
      <div className="relative bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 rounded-3xl p-1.5 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
        <div className="bg-white rounded-3xl overflow-hidden p-2">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image 
              src="/images/Rectangle 94 (1).png"
              alt="Couple in garden" 
              fill
              className="object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent"></div>

            {/* Floating Stats on Image */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border border-pink-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Success Rate</p>
                  <p className="text-xl font-black text-pink-600">95%</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border border-pink-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💕</span>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Happy Couples</p>
                  <p className="text-xl font-black text-pink-600">50K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full shadow-lg animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <button className="group bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-700 hover:via-rose-700 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-pink-500/50 flex items-center gap-3 mx-auto">
          <span className="text-2xl">🚀</span>
          <span>Start Your Journey</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-500 text-xl">✓</span>
            <span className="font-semibold">100% Verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-500 text-xl">✓</span>
            <span className="font-semibold">AI Powered</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-500 text-xl">✓</span>
            <span className="font-semibold">Safe & Secure</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

       
{/* Bumble Style Collage Section */}

        {/* Achievements Section */}
       {/* Achievements Section - CONSISTENT PINK THEME */}
<section className="py-16 md:py-20 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    
    {/* Consistent Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Our Achievements
      </h2>
      <div className="w-32 h-1.5 bg-white/50 mx-auto rounded-full mb-4"></div>
      <p className="text-white/90 text-lg max-w-2xl mx-auto">
        Numbers that tell our success story
      </p>
    </div>

    {/* Stats Grid - Glassmorphism Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {achievements.map((achievement, index) => (
        <div 
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-300 hover:bg-white/20 border border-white/20 shadow-xl"
        >
          <div className="text-4xl mb-3">{achievement.icon}</div>
          <div className="text-3xl md:text-4xl font-black text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {achievement.number}
          </div>
          <div className="text-sm text-white/90 font-semibold">{achievement.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Our Values Section - CONSISTENT PINK THEME */}
<section className="py-16 md:py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    
    {/* Consistent Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-pink-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Our Core Values
      </h2>
      <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        The principles that guide everything we do
      </p>
    </div>

    {/* Values Grid - Pink Theme Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <div 
          key={index}
          className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-pink-100 hover:border-pink-300"
        >
          {/* Gradient Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
          
          {/* Icon with Pink Gradient Background */}
          <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            {value.icon}
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-bold text-pink-600 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {value.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {value.description}
          </p>

          {/* Decorative Corner Dot */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* What Makes Us Different Section - CONSISTENT PINK THEME */}
<section className="py-16 md:py-20 bg-gradient-to-b from-white via-pink-50 to-rose-50">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    
    {/* Consistent Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-pink-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
        What Makes Us Different
      </h2>
      <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Discover why thousands choose Velvet for their love journey
      </p>
    </div>
    
    {/* Cards Grid - Pink Theme */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      
      {aboutCards.map((card) => (
        <div 
          key={card.id}
          className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-pink-100 hover:border-pink-300"
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Gradient Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}></div>
          
          {/* Image */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden">
            <Image 
              src={card.image} 
              alt={card.title} 
              fill
              className={`object-cover transition-transform duration-700 ${hoveredCard === card.id ? 'scale-110' : 'scale-100'}`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Icon on Hover */}
            {hoveredCard === card.id && (
              <div className="absolute top-4 right-4 text-5xl animate-bounce">
                💕
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="relative p-6">
            <h3 className={`text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {card.description}
            </p>

            {/* Read More Link - Appears on Hover */}
            <div className={`mt-4 flex items-center gap-2 text-pink-600 font-semibold transition-all duration-300 ${hoveredCard === card.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Decorative Corner - Pink Theme */}
          <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.gradient} opacity-10 rounded-bl-full`}></div>
          
          {/* Bottom Decorative Line */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
        </div>
      ))}

    </div>
  </div>
</section>

        <CallToAction />
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}