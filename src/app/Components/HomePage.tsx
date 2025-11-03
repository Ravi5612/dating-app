

"use client";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import TestimonialCarousel from './TestimonialCarousel';
import CallToAction from "@/app/Components/CallToAction";
import FAQSection from '../Components/FAQSection';
import Image from 'next/image';

export default function Home() {
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  console.log(mousePosition)
   const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);
  const steps = [
    { 
      title: "Create An Account", 
      desc: "Sign up with face verification & admin approval to ensure real users",
      color: "from-pink-400 to-rose-500"
    },
    { 
      title: "Find Matches Based On Interests", 
      desc: "Like profiles and see your shared interest percentage before connecting",
      color: "from-purple-400 to-indigo-500"
    },
    { 
      title: "Connect & Build Real Bonds", 
      desc: "No random DMs! Only mutual matches can interact for a safer experience",
      color: "from-blue-400 to-cyan-500"
    }
  ];
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      
      // Mouse up/down detection for content visibility
      if (e.clientY < window.innerHeight * 0.3) {
        setIsVisible(false); // Mouse up - hide content
      } else {
        setIsVisible(true); // Mouse down - show content
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


    useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


    const cardData = [
    {
      id: 1,
      title: "Find Your Soulmate",
      description: "Connect with verified singles through our advanced AI matching system. Experience deeper conversations and build relationships that truly matter.",
      image: "/images/Rectangle 23855.png",
      gradient: "from-pink-400 via-rose-500 to-purple-600",
      shadowColor: "rgba(236, 72, 153, 0.4)",
      icon: "💕",
      stats: "2.5M+ Matches"
    },
    {
      id: 2,
      title: "Build Lasting Friendships",
      description: "Discover your tribe! Match with like-minded individuals who share your passions and create friendships that support your journey.",
      image: "/images/Rectangle 23855 (1).png",
      gradient: "from-orange-400 via-amber-500 to-yellow-600",
      shadowColor: "rgba(245, 158, 11, 0.4)",
      icon: "🤝",
      stats: "1.8M+ Friends"
    },
    {
      id: 3,
      title: "Professional Network",
      description: "Elevate your career through strategic connections. Meet industry leaders and collaborate with professionals who accelerate your success.",
      image: "/images/Rectangle 23855 (2).png",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      shadowColor: "rgba(16, 185, 129, 0.4)",
      icon: "🚀",
      stats: "500K+ Professionals"
    }
  ];
    console.log(scrollPos,toggleFaq)
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
        <div className="relative w-full h-[32rem] md:h-[40rem] lg:h-[48rem]">
          <Image 
            src="/images/Group 1597883995.png" 
            alt="Dating App" 
            fill
            className="object-cover object-[center_10%]"
          />
          {/* 3D Floating Love Elements */}
          <div className="absolute inset-0 pointer-events-none">
          
          
           
         
          
          </div>
        </div>
        {/* Enhanced Gray Shadow Below */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-gray-400/30 to-transparent"></div>
      </section>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          25% {
            transform: translateY(-20px) rotateZ(2deg);
          }
          50% {
            transform: translateY(-15px) rotateZ(-1deg);
          }
          75% {
            transform: translateY(-25px) rotateZ(1deg);
          }
        }
      `}</style>

        {/* Features Section */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Dancing+Script:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes float3D {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            transform: translateY(-20px) rotateX(3deg) rotateY(2deg) rotateZ(1deg);
          }
          50% {
            transform: translateY(-15px) rotateX(-2deg) rotateY(-1deg) rotateZ(-0.5deg);
          }
          75% {
            transform: translateY(-25px) rotateX(1deg) rotateY(3deg) rotateZ(1.5deg);
          }
        }
        
        @keyframes holographic {
          0%, 100% {
            background: linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #3742fa);
            background-size: 400% 400%;
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shimmerGlow {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(255, 107, 157, 0.5),
              0 0 20px rgba(196, 69, 105, 0.3),
              0 0 30px rgba(248, 181, 0, 0.2);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(255, 107, 157, 0.8),
              0 0 40px rgba(196, 69, 105, 0.6),
              0 0 60px rgba(248, 181, 0, 0.4);
          }
        }
        
        @keyframes morphing3D {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotateX(5deg) rotateY(10deg) rotateZ(2deg);
          }
          50% {
            border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
            transform: rotateX(-3deg) rotateY(-5deg) rotateZ(-1deg);
          }
          75% {
            border-radius: 40% 70% 60% 30% / 70% 40% 30% 60%;
            transform: rotateX(8deg) rotateY(-8deg) rotateZ(3deg);
          }
        }
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Dancing+Script:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes float3D {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            transform: translateY(-20px) rotateX(3deg) rotateY(2deg) rotateZ(1deg);
          }
          50% {
            transform: translateY(-15px) rotateX(-2deg) rotateY(-1deg) rotateZ(-0.5deg);
          }
          75% {
            transform: translateY(-25px) rotateX(1deg) rotateY(3deg) rotateZ(1.5deg);
          }
        }
        
        @keyframes holographic {
          0%, 100% {
            background: linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #3742fa);
            background-size: 400% 400%;
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shimmerGlow {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(255, 107, 157, 0.5),
              0 0 20px rgba(196, 69, 105, 0.3),
              0 0 30px rgba(248, 181, 0, 0.2);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(255, 107, 157, 0.8),
              0 0 40px rgba(196, 69, 105, 0.6),
              0 0 60px rgba(248, 181, 0, 0.4);
          }
        }
        
        @keyframes morphing3D {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotateX(5deg) rotateY(10deg) rotateZ(2deg);
          }
          50% {
            border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
            transform: rotateX(-3deg) rotateY(-5deg) rotateZ(-1deg);
          }
          75% {
            border-radius: 40% 70% 60% 30% / 70% 40% 30% 60%;
            transform: rotateX(8deg) rotateY(-8deg) rotateZ(3deg);
          }
        }
      `}</style>
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-pink-100 to-purple-100 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Holographic Orbs */}
          <div 
            className="absolute w-96 h-96 opacity-30 blur-3xl"
            style={{
              top: '15%',
              left: `${5 + mouseX * 0.02}%`,
              background: 'linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #3742fa)',
              backgroundSize: '400% 400%',
              animation: 'holographic 8s ease-in-out infinite, morphing3D 12s ease-in-out infinite',
              transform: `translateY(${scrollPos * -0.1}px) rotateZ(${mouseX * 0.01}deg)`
            }}
          />
          <div 
            className="absolute w-80 h-80 opacity-25 blur-2xl"
            style={{
              bottom: '20%',
              right: `${10 + mouseX * -0.015}%`,
              background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c)',
              backgroundSize: '300% 300%',
              animation: 'holographic 10s ease-in-out infinite 2s, morphing3D 15s ease-in-out infinite 3s',
              transform: `translateY(${scrollPos * 0.08}px) rotateZ(${mouseX * -0.01}deg)`
            }}
          />
          
          {/* Premium Floating Elements */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                fontSize: `${1 + Math.random() * 1.5}rem`,
                color: ['#ff6b9d', '#c44569', '#f8b500', '#3742fa', '#667eea'][Math.floor(Math.random() * 5)],
                transform: `translate(${mouseX * (0.01 + Math.random() * 0.02)}px, ${mouseY * (0.005 + Math.random() * 0.015)}px)`,
                animation: `float3D ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 3}s`
              }}
            >
              {['💖', '✨', '💫'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content - Compact Premium Typography */}
            <div 
              className="order-2 lg:order-1 space-y-6"
              style={{
                transform: `translateX(${mouseX * 0.01}px) translateY(${mouseY * 0.005}px)`
              }}
            >
              {/* Compact Premium Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                <span 
                  className="text-purple-700 font-bold tracking-wider uppercase text-xs"
                  style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
                >
                  ✨ Premium Dating
                </span>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              {/* Compact Multi-Font Typography */}
              <div className="space-y-4">
                <h1 className="relative group">
                  {/* Main Headline - Reduced Size */}
                  <span 
                    className="block text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700 mb-2"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      animation: 'textGlow 3s ease-in-out infinite'
                    }}
                  >
                    Raise Your
                  </span>
                  
                  {/* Accent Word - Reduced Size */}
                  <span 
                    className="block text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 mb-2 relative"
                    style={{ 
                      fontFamily: "'Dancing Script', cursive",
                      transform: `rotateZ(${mouseX * 0.005}deg)`,
                      animation: 'float3D 6s ease-in-out infinite'
                    }}
                  >
                    Standards
                    <div className="absolute -top-1 -right-6 text-2xl animate-spin-slow">✨</div>
                  </span>
                  
                  {/* Sub-headline - Reduced Size */}
                  <span 
                    className="block text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Date With 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 ml-2">
                      Confidence
                    </span>
                  </span>
                  
                  {/* Tagline - Reduced Size */}
                  <span 
                    className="block text-xl md:text-2xl lg:text-3xl font-light text-gray-700 relative"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Because You Deserve
                    <span 
                      className="block text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 mt-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Better.
                    </span>
                  </span>
                  
                  {/* Animated Underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:w-full transition-all duration-2000 rounded-full"></div>
                </h1>
              </div>
              {/* Compact Description with 3D Icon */}
              <div className="flex items-start gap-4 group">
                {/* Smaller 3D Chat Icon */}
                <div 
                  className="w-12 h-12 mt-1 flex-shrink-0 relative"
                  style={{ 
                    transform: `rotateY(${mouseX * 0.1}deg) rotateX(${mouseY * 0.05}deg)`,
                    animation: 'float3D 4s ease-in-out infinite'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-pink-500 via-purple-600 to-blue-700 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white filter drop-shadow-lg">
                      <defs>
                        <linearGradient id="chatGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#f0f0f0" />
                          <stop offset="100%" stopColor="#e0e0e0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M12 2C6.48 2 2 5.64 2 10c0 2.8 1.68 5.28 4.32 6.8L5 20l3.2-1.32C9.28 19.36 10.6 19.6 12 19.6c5.52 0 10-3.64 10-8.1S17.52 2 12 2z" 
                        fill="url(#chatGradient3D)"
                      />
                      <circle cx="9" cy="10" r="1.2" fill="#ff6b9d">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="12" cy="10" r="1.2" fill="#c44569">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                      </circle>
                      <circle cx="15" cy="10" r="1.2" fill="#f8b500">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1s"/>
                      </circle>
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <p 
                    className="text-gray-700 leading-relaxed text-base md:text-lg font-medium group-hover:text-gray-900 transition-colors duration-300"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    No fake profiles, no random messages. Connect with 
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"> verified singles </span>
                    who value real relationships.
                  </p>
                  
                  {/* Compact Premium Features */}
                  <ul className="space-y-2">
                    {[
                      { text: '99% Verified Profiles', font: "'Montserrat', sans-serif" },
                      { text: 'AI-Powered Matching', font: "'Raleway', sans-serif" },
                      { text: 'Zero Fake Accounts', font: "'Playfair Display', serif" }
                    ].map((item, i) => (
                      <li 
                        key={i}
                        className="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2 hover:text-purple-700"
                        style={{ fontFamily: item.font }}
                      >
                        <span className="text-green-500 text-lg animate-bounce" style={{animationDelay: `${i * 0.2}s`}}>
                          ✓
                        </span>
                        <span className="font-semibold text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Compact Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group relative bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                  <span 
                    className="relative z-10 flex items-center justify-center gap-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    🚀 GET STARTED
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                      style={{ animation: 'shimmerGlow 2s infinite' }}
                    />
                  </div>
                </button>
                
                <button 
                  className="group border-2 border-purple-500 text-purple-700 px-6 py-4 rounded-xl font-bold text-base transform transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📖 LEARN MORE
                  </span>
                  <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
            
            {/* Right Content - Ultra 3D Image */}
            <div 
              className="order-1 lg:order-2"
              style={{
                transform: `translateX(${mouseX * -0.02}px) translateY(${mouseY * -0.01}px)`
              }}
            >
              <div className="relative max-w-lg mx-auto group">
                {/* Multiple 3D Shadow Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-purple-600/40 rounded-[3rem] transform translate-x-8 translate-y-12 blur-3xl group-hover:blur-2xl transition-all duration-500" style={{animation: 'morphing3D 8s ease-in-out infinite'}}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/50 to-indigo-600/50 rounded-[3rem] transform translate-x-4 translate-y-6 blur-2xl group-hover:blur-xl transition-all duration-500" style={{animation: 'morphing3D 10s ease-in-out infinite 1s'}}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-600/30 rounded-[3rem] transform translate-x-2 translate-y-3 blur-xl group-hover:blur-lg transition-all duration-500" style={{animation: 'morphing3D 12s ease-in-out infinite 2s'}}></div>
                
                {/* Main Image Container with Advanced 3D */}
                <div 
                  className="relative w-full h-80 md:h-96 lg:h-[28rem] rounded-[3rem] overflow-hidden transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    transform: `
                      translateX(${mouseX * 0.04}px) 
                      translateY(${mouseY * 0.03}px)
                      rotateY(${mouseX * 0.03}deg)
                      rotateX(${mouseY * -0.015}deg)
                      rotateZ(${(mouseX + mouseY) * 0.005}deg)
                    `,
                    animation: 'float3D 6s ease-in-out infinite',
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Holographic Border */}
                  <div className="absolute inset-0 p-2 rounded-[3rem]" style={{
                    background: 'linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #3742fa, #667eea)',
                    backgroundSize: '400% 400%',
                    animation: 'holographic 6s ease-in-out infinite'
                  }}>
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      <Image 
                        src="/images/Rectangle 94 (2).png" 
                        alt="Premium Dating Experience" 
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-125"
                      />
                      
                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-pink-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div 
                          className="text-white font-black text-xl backdrop-blur-sm bg-white/20 px-6 py-3 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-500 border border-white/30"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          👑 PREMIUM
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Compact Premium Floating Badges */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-xl animate-bounce transform group-hover:scale-110 transition-transform duration-300">
                    👑 VERIFIED
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-lg font-bold text-xs shadow-lg animate-pulse">
                    ✨ 99% SUCCESS
                  </div>
                  
                  {/* Compact 3D Floating Elements */}
                  <div 
                    className="absolute -top-4 -left-4 text-3xl animate-spin-slow"
                    style={{ animation: 'float3D 4s ease-in-out infinite' }}
                  >
                    💎
                  </div>
                  <div 
                    className="absolute -bottom-4 -right-4 text-2xl"
                    style={{ animation: 'float3D 5s ease-in-out infinite 1s' }}
                  >
                    👑
                  </div>
                  <div 
                    className="absolute top-1/2 -right-6 text-xl"
                    style={{ animation: 'float3D 6s ease-in-out infinite 2s' }}
                  >
                    ✨
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* More Than Just Matches */}
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .card-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .card-inner {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .card-3d:hover .card-inner {
          transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          25% {
            transform: translateY(-15px) rotateZ(1deg);
          }
          50% {
            transform: translateY(-10px) rotateZ(-0.5deg);
          }
          75% {
            transform: translateY(-20px) rotateZ(0.5deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 
              0 10px 40px rgba(0,0,0,0.1),
              0 0 20px var(--glow-color, rgba(236, 72, 153, 0.2));
          }
          50% {
            box-shadow: 
              0 20px 60px rgba(0,0,0,0.15),
              0 0 40px var(--glow-color, rgba(236, 72, 153, 0.4));
          }
        }
      `}</style>
     <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 relative overflow-hidden">
  {/* Dynamic Background - Dark Pink */}
  <div className="absolute inset-0">
    <div 
      className="absolute w-96 h-106 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
      style={{
        top: '10%',
        left: `${10 + mouseX * 0.01}%`,
        animation: 'float 8s ease-in-out infinite'
      }}
    />
    <div 
      className="absolute w-72 h-102 bg-gradient-to-r from-rose-500/40 to-pink-500/40 rounded-full blur-2xl animate-bounce"
      style={{
        bottom: '20%',
        right: `${15 + mouseX * -0.008}%`,
        animation: 'float 12s ease-in-out infinite 2s'
      }}
    />
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    {/* Enhanced Heading - Mixed Pink/Black */}
    <div className="mb-12 md:mb-16 text-center">
      <div className="inline-flex items-center gap-3 mb-4">
       
       
      </div>
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span className="text-gray-900">More Than Just</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-rose-700 to-purple-700">Matches</span>
      </h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto">
        <span className="text-gray-900">Experience the future of connecting with our</span>{' '}
        <span className="text-pink-700 font-semibold">premium features</span>{' '}
        <span className="text-gray-900">designed for meaningful relationships</span>
      </p>
    </div>

    {/* 3D Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {cardData.map((card, index) => (
        <div 
          key={card.id}
          className="card-3d group"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="card-inner relative">
            {/* Card Container with 3D Effects */}
           <div 
  className="relative bg-white rounded-2xl overflow-hidden transform transition-all duration-700 group-hover:scale-105"
  style={{
    '--glow-color': card.shadowColor,
    animation: 'pulse-glow 4s ease-in-out infinite',
    animationDelay: `${index * 1}s`,
    boxShadow: `
      0 20px 40px rgba(0,0,0,0.1),
      0 0 0 1px rgba(255,255,255,0.1),
      0 0 15px ${card.shadowColor}
    `,
    transform: `
      translateX(${mouseX * (0.01 + index * 0.002)}px) 
      translateY(${mouseY * (0.005 + index * 0.001)}px)
      rotateY(${mouseX * (0.01 + index * 0.002)}deg)
    `
  } as React.CSSProperties}
>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ animation: 'shimmer 2s infinite' }}
                />
              </div>

              {/* Image Section */}
              <div className="relative h-60 md:h-64 lg:h-72 overflow-hidden">
                {/* Gradient Overlay Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                {/* Main Image */}
                <div className="relative w-full h-full">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                
                {/* Floating Icon */}
                <div 
                  className="absolute top-5 right-5 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                  style={{ animation: 'float 4s ease-in-out infinite' }}
                >
                  {card.icon}
                </div>
                
                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-5 py-2.5 rounded-xl text-base font-semibold">
                  {card.stats}
                </div>
                
                {/* Glowing Border on Image */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500" />
              </div>

              {/* Content Section */}
              <div className="p-3 relative">
                {/* Decorative Element */}
                <div className={`w-8 h-1 bg-gradient-to-r ${card.gradient} rounded-full mb-2 transform group-hover:scale-x-150 transition-transform duration-500`} />
                
                {/* Title - Mixed Pink/Black */}
                <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-rose-700 transition-all duration-500">
                  <span className="text-pink-700">{card.title.split(' ')[0]}</span>{' '}
                  <span className="text-gray-900">{card.title.split(' ').slice(1).join(' ')}</span>
                </h3>
                
                {/* Description - Black Text */}
                <p className="text-gray-900 text-xs md:text-sm leading-relaxed mb-2 transition-colors duration-300">
                  {card.description}
                </p>
                
                {/* Action Button */}
                <button 
                  className={`w-full bg-gradient-to-r ${card.gradient} text-white py-1.5 px-3 rounded-xl font-semibold text-xs transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group/btn`}
                >
                  <span className="relative z-10">Explore Now</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>

              {/* 3D Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500" />
              
              {/* Additional Floating Elements */}
              <div 
                className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              />
              <div 
                className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animation: 'float 4s ease-in-out infinite 1s' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA - Dark Pink */}
    <div className="text-center mt-12">
      <button className="group bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-base transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
        <span className="relative z-10 flex items-center justify-center gap-2">
          ✨ Experience All Features
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-rose-600 to-pink-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      </button>
    </div>
  </div>
</section>

        {/* Standards Section */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float3D {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg); 
          }
          25% { 
            transform: translateY(-15px) rotateX(2deg) rotateY(1deg); 
          }
          50% { 
            transform: translateY(-10px) rotateX(-1deg) rotateY(-0.5deg); 
          }
          75% { 
            transform: translateY(-20px) rotateX(1deg) rotateY(1deg); 
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.3),
              0 0 60px rgba(147, 51, 234, 0.2),
              0 25px 50px rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 
              0 0 50px rgba(59, 130, 246, 0.5),
              0 0 100px rgba(147, 51, 234, 0.4),
              0 35px 70px rgba(0, 0, 0, 0.15);
          }
        }
        
        @keyframes pulse3D {
          0%, 100% {
            transform: scale(1) rotateZ(0deg);
          }
          50% {
            transform: scale(1.05) rotateZ(1deg);
          }
        }
      `}</style>
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Gradient Orbs */}
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"
            style={{
              top: '10%',
              left: `${10 + mouseX * 0.02}%`,
              transform: `translateY(${mouseY * -0.05}px)`,
              animation: 'float3D 8s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-80 h-80 bg-gradient-to-r from-blue-300/25 to-indigo-300/25 rounded-full blur-2xl"
            style={{
              bottom: '15%',
              right: `${15 + mouseX * -0.015}%`,
              transform: `translateY(${mouseY * 0.03}px)`,
              animation: 'float3D 10s ease-in-out infinite 2s'
            }}
          />
          
        
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - Enhanced 3D Image */}
            <div 
              className={`order-2 lg:order-1 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'
              }`}
              style={{
                animation: isVisible ? 'slideUp 0.8s ease-out' : 'slideDown 0.8s ease-out'
              }}
            >
              <div className="relative max-w-lg mx-auto lg:mx-0 group">
                {/* Multiple 3D Shadow Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-3xl transform translate-x-6 translate-y-8 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-rose-500/40 rounded-3xl transform translate-x-3 translate-y-4 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Main Image Container */}
                <div 
                  className="relative w-full h-56 md:h-64 lg:h-72 rounded-3xl overflow-hidden transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  style={{
                    transform: `
                      translateX(${mouseX * 0.03}px) 
                      translateY(${mouseY * 0.02}px)
                      rotateY(${mouseX * 0.02}deg)
                      rotateX(${mouseY * -0.01}deg)
                    `,
                    animation: 'glow 4s ease-in-out infinite, pulse3D 6s ease-in-out infinite'
                  }}
                >
                  {/* 3D Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1">
                    <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
                      <Image 
                        src="/images/Rectangle 23860.png"
                        alt="Premium Dating Experience" 
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-125"
                      />
                      
                   
                    </div>
                  </div>
                  
                
                </div>
              </div>
            </div>
            
            {/* Right Content - Enhanced Typography & Animations */}
            <div 
              className={`order-1 lg:order-2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-10'
              }`}
              style={{
                transform: `translateX(${mouseX * -0.01}px) translateY(${mouseY * 0.005}px)`,
                animation: isVisible ? 'slideDown 0.8s ease-out' : 'slideUp 0.8s ease-out'
              }}
            >
              {/* Enhanced Title with Beautiful Typography */}
              <h2 
                className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight relative group"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 drop-shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-500">
                  Raise Your Standards.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 mt-3 drop-shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-500">
                  Date With Confidence.
                </span>
                
                {/* Floating Decoration */}
                <div className="absolute -top-6 -right-6 text-5xl animate-spin-slow opacity-70">
                  ✨
                </div>
                
                {/* Animated Underline */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-1000"></div>
              </h2>
              {/* Enhanced Description */}
              <div className="mb-8 relative">
                <div className="flex items-start gap-4 group">
                  {/* 3D Premium Icon */}
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                    style={{ 
                      animation: 'float3D 4s ease-in-out infinite',
                      transform: `rotateY(${mouseX * 0.05}deg) rotateX(${mouseY * 0.02}deg)`
                    }}
                  >
                    💕
                  </div>
               
                </div>
              </div>
              
              {/* Enhanced Buttons */}
             
              {/* Stats Section */}
            
            </div>
          </div>
        </div>
      </section>

        {/* How it Works */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate3D {
          0%, 100% { transform: rotateY(-5deg) rotateX(2deg); }
          50% { transform: rotateY(5deg) rotateX(-2deg); }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 
              0 0 30px rgba(236, 72, 153, 0.3),
              0 20px 60px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 
              0 0 50px rgba(236, 72, 153, 0.5),
              0 30px 80px rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>
 <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-pink-200 via-rose-200 to-purple-200 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"
            style={{
              top: '10%',
              left: `${10 + mouseX * 0.01}%`,
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
            style={{
              bottom: '20%',
              right: `${10 + mouseX * -0.008}%`,
              animation: 'float 10s ease-in-out infinite 2s'
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          
          {/* Title */}
          <div className="text-center mb-16 md:mb-20">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              How Velvet Works
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Three simple steps to find your perfect match
            </p>
          </div>
          {/* Steps Grid */}
          <div className="relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-32 left-0 w-full">
              <svg className="w-full h-24" viewBox="0 0 1200 100">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 250 50 Q 450 30 600 50 Q 750 70 950 50" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="3" 
                  strokeDasharray="8,8" 
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center group"
                  style={{
                    animation: `float ${5 + index}s ease-in-out infinite ${index * 0.5}s`
                  }}
                >
                  {/* 3D Phone Container */}
                  <div 
                    className="relative mb-8"
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Glow Background */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-[4rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                      style={{
                        transform: 'translateZ(-50px) scale(1.1)',
                        animation: 'glow 3s ease-in-out infinite'
                      }}
                    />
                    {/* 3D Phone Mockup */}
                    <div 
                      className="relative w-64 h-[32rem] bg-black rounded-[3rem] p-3 shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                      style={{
                        transform: `
                          rotateY(${mouseX * 0.01 - 5}deg) 
                          rotateX(${mouseY * -0.008 + 2}deg)
                          translateZ(30px)
                        `,
                        animation: 'rotate3D 6s ease-in-out infinite',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Phone Screen */}
                    {/* Phone Screen - Replace complete phone screen section */}
<div className={`w-full h-full bg-gradient-to-br ${step.color} rounded-[2.5rem] overflow-hidden relative`}>
  {/* Notch - Smaller */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-[1.2rem] z-30 flex items-center justify-center">
    <div className="w-14 h-3 bg-gray-900 rounded-full"></div>
  </div>
  
  {/* Screen Content */}
  <div className="relative w-full h-full bg-white">
    {/* iPhone Status Bar */}
    <div className="absolute top-0 left-0 right-0 h-11 bg-white px-6 pt-2 flex justify-between items-start text-xs font-semibold z-20">
      <span className="text-black">9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal Bars (Tower) */}
        <div className="flex gap-[2px] items-end">
          <div className="w-[3px] h-2 bg-black rounded-full"></div>
          <div className="w-[3px] h-3 bg-black rounded-full"></div>
          <div className="w-[3px] h-4 bg-black rounded-full"></div>
          <div className="w-[3px] h-5 bg-black rounded-full"></div>
        </div>
        {/* 5G Text */}
        <span className="text-[10px] text-black font-semibold">5G</span>
        {/* WiFi */}
        <svg className="w-4 h-3.5" fill="black" viewBox="0 0 20 20">
          <path d="M2.5 8.5a9.5 9.5 0 0115 0M5 11a6 6 0 0110 0M8 13.5a3 3 0 014 0M10 16a1 1 0 100-2 1 1 0 000 2z"/>
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-[1px]">
          <div className="w-6 h-2.5 border-[1.5px] border-black rounded-[3px] relative">
            <div className="absolute inset-[1.5px] bg-black rounded-[1px]"></div>
          </div>
          <div className="w-[2px] h-1.5 bg-black rounded-r-sm"></div>
        </div>
      </div>
    </div>

    {/* App Content - Different for each step */}
    <div className="pt-12 px-6 h-full">
      
      {/* STEP 1 - Signup Form */}
      {index === 0 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-500 text-sm">Join Velvet today</p>
          </div>
          
          <div className="space-y-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl text-sm text-gray-900 placeholder-gray-400"
                readOnly
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl text-sm text-gray-900 placeholder-gray-400"
                readOnly
              />
            </div>
            <div className="relative">
              <input 
                type="password" 
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl text-sm text-gray-900 placeholder-gray-400"
                readOnly
              />
            </div>
          </div>

          <div className="space-y-3 mt-8">
            <button className={`w-full py-4 bg-gradient-to-r ${step.color} text-white rounded-xl font-semibold text-sm shadow-lg`}>
              Continue
            </button>
            <p className="text-center text-xs text-gray-500">
              Already have an account? <span className="text-pink-500 font-semibold">Sign In</span>
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 100 20 10 10 0 000-20z"/>
              </svg>
            </div>
            <p className="text-xs text-gray-600 max-w-[180px]">Face verification required for safety</p>
          </div>
        </div>
      )}

      {/* STEP 2 - Match Finding */}
      {index === 1 && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Find Your Match</h1>
            <p className="text-gray-500 text-sm">Based on your interests</p>
          </div>

          {/* Profile Card */}
          <div className="relative h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-black/10">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
  <Image 
    src="/images/Rectangle 23845.png"
    alt="Profile"
    fill
    className="object-cover"
  />
   </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="text-xl font-bold mb-1">Sarah, 25</h3>
              <p className="text-sm mb-2">2.5 km away</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">Travel</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">Music</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">Art</span>
              </div>
            </div>
          </div>

          {/* Match Percentage */}
          <div className="flex items-center justify-center gap-2 py-3 bg-purple-100 rounded-2xl">
            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span className="text-purple-900 font-bold text-sm">85% Match</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mt-6">
            <button className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">✕</span>
            </button>
            <button className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
              <span className="text-2xl">❤️</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 - Chat/Connection */}
      {index === 2 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
            <div>
              <h3 className="font-bold text-gray-900">Mike Thompson</h3>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Active now
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-3 py-4">
            <div className="flex justify-start">
              <div className="max-w-[70%] bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                <p className="text-sm text-gray-800">Hey! How are you? 👋</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className={`max-w-[70%] bg-gradient-to-r ${step.color} rounded-2xl rounded-tr-sm px-4 py-3`}>
                <p className="text-sm text-white">Great! Thanks for asking 😊</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[70%] bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                <p className="text-sm text-gray-800">Want to grab coffee? ☕</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex gap-2 items-center bg-gray-100 rounded-full px-4 py-3">
              <span className="text-gray-400 text-xl">😊</span>
              <input 
                type="text" 
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                readOnly
              />
              <button className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

    {/* iPhone Home Indicator */}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-40"></div>
  </div>
</div>
                      {/* Phone Buttons */}
                      <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
                      <div className="absolute right-0 top-40 w-1 h-16 bg-gray-800 rounded-l-sm"></div>
                      <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r-sm"></div>
                    </div>
                    {/* Floating Elements */}
                    <div 
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <span className="text-white text-xl">✓</span>
                    </div>
                  </div>
                  {/* Step Info */}
                  <div className="text-center max-w-sm">
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                      style={{ 
                        fontFamily: "'Poppins', sans-serif",
                        backgroundImage: `linear-gradient(to right, ${step.color.includes('pink') ? '#ec4899, #f43f5e' : step.color.includes('purple') ? '#a855f7, #6366f1' : '#3b82f6, #06b6d4'})`
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Get Started Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>

        <TestimonialCarousel />

      

        <FAQSection faqs={faqs} />
        <CallToAction />

      </main>

      <Footer />
    </div>
  );
}