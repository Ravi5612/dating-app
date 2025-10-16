"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CallToAction from "@/app/Components/CallToAction";
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
 const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTimeline, setActiveTimeline] = useState(0);

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
        {/* Hero Section with Gradient Overlay */}
        <div className="relative w-full h-[28rem] md:h-[34rem] lg:h-[40rem] overflow-hidden">
          <Image 
            src="/images/about.png" 
            alt="Happy couple" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-rose-500/30"></div>
          
          {/* Animated Floating Hearts */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-50">💖</div>
            <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-40">💕</div>
            <div className="absolute bottom-32 left-1/4 text-7xl animate-bounce opacity-30" style={{animationDelay: '1s'}}>❤️</div>
            <div className="absolute bottom-20 right-1/3 text-6xl animate-pulse opacity-35" style={{animationDelay: '0.5s'}}>💘</div>
          </div>
          
          {/* Floating Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 animate-fade-in" style={{ fontFamily: "'Poppins', sans-serif" }}>
                About Velvet
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold animate-fade-in" style={{animationDelay: '0.2s'}}>Where Real Love Begins ❤️</p>
            </div>
          </div>
        </div>

        {/* Real Connections Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            
            {/* Heading with animated underline */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Real Connections, Real You!
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Subtext */}
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-3xl mx-auto text-center leading-relaxed">
              We believe dating should be fun, safe, and meaningful. 
              Our app is designed for real connections with features that matter:
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <p className="text-sm font-semibold text-gray-700">{feature.text}</p>
                </div>
              ))}
            </div>
            
            {/* Main Image with Pink Border */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl overflow-hidden">
                  <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Image 
                      src="/images/Rectangle 94 (1).png"
                      alt="Couple in garden" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-pink-100 px-4 py-2 rounded-full mb-6">
                  <span className="text-pink-600 font-semibold text-sm">💖 OUR MISSION</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Building Real<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                    Relationships
                  </span>
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  At Velvet, we make dating safe, real, and meaningful. Our goal is to help 
                  people build genuine connections through verified profiles, smart 
                  matching, and shared interests.
                </p>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  No random swiping—just real relationships that last. We use advanced AI algorithms 
                  to match you with compatible partners who share your values, interests, and life goals. ✨
                </p>

                {/* Mission Points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <p className="text-gray-600">Create meaningful connections based on compatibility</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <p className="text-gray-600">Ensure safety with verified profiles and background checks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <p className="text-gray-600">Foster genuine relationships that stand the test of time</p>
                  </div>
                </div>
              </div>
              
              {/* Right images - Polaroid Style */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full h-[500px] md:h-[600px]">
                  
                  {/* Main Central Image */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 md:w-96 rotate-2 z-20 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-white rounded-lg shadow-2xl p-4">
                      <div className="relative w-full h-64 md:h-80 bg-gray-200 rounded-md overflow-hidden">
                        <Image 
                          src="/images/Group 1597884004.png"
                          alt="Happy Couple" 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="font-bold text-lg text-gray-800">Why Velvet Matters</h3>
                        <p className="text-sm text-gray-600 mt-2">Creating meaningful connections every day</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left Image */}
                  <div className="absolute bottom-0 left-0 w-56 md:w-64 -rotate-6 z-10 hover:rotate-0 hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-lg shadow-xl p-3">
                      <div className="relative w-full h-40 md:h-48 bg-gray-200 rounded-md overflow-hidden">
                        <Image 
                          src="/images/image (1).png" 
                          alt="Meaningful Moments" 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        💕 Meaningful Moments
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right Image */}
                  <div className="absolute bottom-12 right-0 w-56 md:w-64 rotate-6 z-10 hover:rotate-0 hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-lg shadow-xl p-3">
                      <div className="relative w-full h-40 md:h-48 bg-gray-200 rounded-md overflow-hidden">
                        <Image 
                          src="/images/Rectangle 23855.png"
                          alt="Real Connections" 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        ❤️ Real Connections
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Achievements Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-pink-500 to-rose-500">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our Achievements
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Numbers that tell our success story
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-300 hover:bg-white/20"
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{achievement.number}</div>
                  <div className="text-sm text-white/90 font-semibold">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our Core Values
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Meet Our Team
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                Passionate people working to bring love into your life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="group text-center"
                >
                  <div className={`relative w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.gradient} p-1 transform group-hover:scale-105 transition-all duration-300`}>
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl">
                      👤
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-pink-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 italic">{member.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What Makes Us Different
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              
              {aboutCards.map((card) => (
                <div 
                  key={card.id}
                  className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
                  
                  {/* Image */}
                  <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      fill
                      className={`object-cover transition-transform duration-500 ${hoveredCard === card.id ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${card.gradient} opacity-10 rounded-bl-full`}></div>
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