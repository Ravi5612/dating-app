"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HyperNearSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 1,
      icon: "💬",
      title: "Chat Nearby",
      description: "Connect and chat with people around you instantly",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      id: 2,
      icon: "🔍",
      title: "Find Friends",
      description: "Discover new friends based on your interests and location",
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      id: 3,
      icon: "🎉",
      title: "Plan Hangouts",
      description: "Share your plans and invite people to join your adventures",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 4,
      icon: "📍",
      title: "Live Location",
      description: "Let friends know where you're heading and meet up easily",
      gradient: "from-orange-400 to-amber-500",
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "In The Metro",
      description: "Spotted someone interesting on your daily commute? Don't let the moment pass. With Hyper Near, you can connect with people in the same train, bus, or metro without the awkwardness of approaching face-to-face.",
      icon: "🚆",
      gradient: "from-pink-100 to-rose-100",
      image: "/images/rav2.png"
    },
    {
      id: 2,
      title: "At The Gym",
      description: "Working out alone? Find gym buddies with similar fitness goals nearby. Share workout tips, motivate each other, and make your fitness journey more fun and social.",
      icon: "💪",
      gradient: "from-purple-100 to-pink-100",
      image: "/images/zym.png"
    },
    {
      id: 3,
      title: "Coffee Shop Vibes",
      description: "Sitting alone at your favorite cafe? Discover fellow coffee lovers nearby who are up for a chat, collaboration, or just sharing recommendations about the best brews in town.",
      icon: "☕",
      gradient: "from-rose-100 to-orange-100",
      image: "/images/coffee.png"
    },
    {
      id: 4,
      title: "Park & Recreation",
      description: "Enjoying nature but missing company? Connect with people in the same park who want to play sports, have a picnic, or just enjoy a peaceful walk together.",
      icon: "🌳",
      gradient: "from-green-100 to-emerald-100",
      image: "/images/park.png"
    }
  ];

  return (
    <>
      <Header />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* SECTION 1: Hero Section */}
<section className="relative py-16 md:py-24 lg:py-32 bg-pink-500 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
   
    <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" style={{animation: 'float 8s ease-in-out infinite'}}></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Heart Shape Frame Section - RIGHT SIDE */}
      <div className="relative flex justify-center items-center lg:order-2">
        <div className="relative transform transition-all duration-500 group hover:scale-105">
          
          <svg 
            width="700" 
            height="760" 
            viewBox="0 0 400 360"
            className="drop-shadow-2xl filter"
          >
            <path
              d="M200 60 C80 0 20 100 60 220 C100 300 200 350 200 350 C200 350 300 300 340 220 C380 100 320 0 200 60 Z"
              fill="url(#heartGradient)"
              stroke="white"
              strokeWidth="8"
            />
            
            <clipPath id="heartClip">
              <path d="M200 65 C85 10 30 100 65 215 C100 295 200 340 200 340 C200 340 300 295 335 215 C370 100 315 10 200 65 Z"/>
            </clipPath>
            
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
            
            <image
              href="/images/girlsg.png"  
              width="380"
              height="320"
              x="10"
              y="20"
              clipPath="url(#heartClip)"
              className="cursor-pointer"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>

      

          <div className="absolute -top-6 -left-6 text-4xl animate-bounce">💖</div>
          <div className="absolute -top-4 -right-8 text-3xl animate-pulse">💕</div>
          <div className="absolute -bottom-8 -left-8 text-4xl animate-bounce delay-1000">💘</div>
          <div className="absolute -bottom-6 -right-6 text-3xl animate-pulse delay-500">❤️</div>
        </div>
      </div>

      {/* Text Content - LEFT SIDE */}
      <div className="space-y-8 lg:order-1">
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-rose-700 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">💖</span>
          </div>
          <span className="text-gray-800 font-semibold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Find Your Soulmates
          </span>
        </div>

        <div>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Find your
            <br />
            <span className="relative">
              perfect match
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C100 2 200 2 298 10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-semibold">
            Connect with people who share your heart
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`relative p-4 rounded-2xl transition-all duration-300 text-left group ${
                activeTab === index 
                  ? 'bg-white shadow-2xl scale-105' 
                  : 'bg-white/70 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {activeTab === index && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <button className="bg-white hover:bg-gray-50 text-pink-600 px-8 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Find Love Now
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white">
            Success Stories
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Add custom animation for the hearts */}
<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
`}</style>


      {/* SECTION 2: Real Life Scenarios */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Real Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Connections</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Break the ice without breaking the silence. Connect with people around you in everyday situations.
            </p>
          </div>

          <div className="space-y-24">
            {scenarios.map((scenario, index) => (
              <div 
                key={scenario.id} 
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${scenario.gradient} px-4 py-2 rounded-full mb-6`}>
                    <span className="text-3xl">{scenario.icon}</span>
                    <span className="font-bold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {scenario.title}
                    </span>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {scenario.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Try Now
                    </button>
                    <button className="bg-pink-100 text-pink-700 px-6 py-3 rounded-xl font-semibold hover:bg-pink-200 transition-all duration-300">
                      See Examples
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${scenario.gradient} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>

                    <div className="relative bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96">
                      {scenario.image ? (
                        <Image 
                          src={scenario.image}
                          alt={scenario.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">
                          {scenario.icon}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: How It Works */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to start connecting with people nearby
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Enable Location",
                description: "Turn on Hyper Near mode to see and be discovered by people within your chosen radius",
                icon: "📍",
                color: "from-pink-400 to-rose-500"
              },
              {
                step: "02",
                title: "Browse Nearby",
                description: "Scroll through profiles of people around you. Filter by interests, distance, and availability",
                icon: "👀",
                color: "from-purple-400 to-pink-500"
              },
              {
                step: "03",
                title: "Connect & Meet",
                description: "Send a message, plan a meetup, or join someone's activity. It's that simple!",
                icon: "💬",
                color: "from-rose-400 to-orange-500"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/50 to-rose-300/50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="text-5xl font-black text-pink-200 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Safety Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Safety</span> First
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with confidence. We&apos;ve built robust safety features to protect your privacy and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "Verified Profiles", desc: "Face verification ensures real people" },
              { icon: "🔒", title: "Privacy Controls", desc: "Control who sees your location" },
              { icon: "🚫", title: "Block & Report", desc: "Instant blocking and reporting tools" },
              { icon: "👁️", title: "Invisible Mode", desc: "Browse without being seen" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Success Stories */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Stories</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real connections from real people using Hyper Near
            </p>
          </div>

    <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      name: "Priya & Rahul",
      story: "Met in the same metro every day for months. Finally connected through Hyper Near and now we're best friends!",
      location: "Delhi Metro",
      image: "/images/gaye3.png",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      name: "Amit",
      story: "Found my gym buddy through Hyper Near. Now we motivate each other every morning!",
      location: "Fitness First Gym",
      image: "/images/love2.png",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "Sneha & Gang",
      story: "Started a weekend hiking group with 5 people I met through Hyper Near. Best decision ever!",
      location: "Nehru Park",
      image: "/images/love.png",
      gradient: "from-blue-400 to-cyan-500"
    }
  ].map((story, index) => (
    <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
      <div className={`h-48 bg-gradient-to-br ${story.gradient} relative overflow-hidden`}>
        {story.image ? (
          <Image 
            src={story.image}
            alt={story.name}
            fill
            className="object-cover object-top brightness-110 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500"
            style={{ objectPosition: 'center top' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            💝
          </div>
        )}
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {story.name}
        </h3>
        <p className="text-sm text-pink-600 font-semibold mb-3">📍 {story.location}</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          &ldquo;{story.story}&rdquo;
        </p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* SECTION 6: CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Ready to Find Your People?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of people making real connections every day. Your next friend could be just meters away!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              Download for iOS
            </button>
            <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              Download for Android
            </button>
          </div>

          <p className="text-white/80 mt-6">
            Available on iOS and Android • Free Download
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HyperNearSection;