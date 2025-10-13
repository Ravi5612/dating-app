"use client";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CallToAction from "@/app/Components/CallToAction";
import FAQSection from '../Components/FAQSection';
import Image from 'next/image';

export default function AppPage() {

  const faqs = [
    {
      question: "How does location-based matching work?", 
      answer: "Our smart algorithm finds people near you based on your distance preferences. Your exact location stays private until you both decide to connect."
    },
    {
      question: "Is my privacy protected?", 
      answer: "Absolutely! We use advanced encryption and only share your approximate location. You have full control over what you share and when."
    },
    {
      question: "Can I set distance preferences?", 
      answer: "Yes! You can customize your search radius from 1km to 100km. Find matches as close or far as you prefer."
    },
    {
      question: "Can I use it just for making friends?", 
      answer: "Yes! Our app is perfect for making friends, finding activity partners, or dating. You choose what you're looking for!"
    }
  ];

  return (
    <div className="relative">
      <Header />
      
      <main className="overflow-hidden bg-white">
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
                
                <div className="inline-block">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-pink-600 rounded-full font-bold text-sm shadow-lg border border-pink-200">
                    📍 Find Friends & Dates Nearby
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                  Make Friends, Find Love
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                    Near You, Instantly!
                  </span>
                </h1>
                
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg">
                  Whether youre looking for friends to hang out with, a workout buddy, movie partner, or that special someone - Hypernear connects you with amazing people nearby who share your vibe! 💕
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <span>DOWNLOAD APP</span>
                      <span className="text-2xl">📱</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="px-8 py-4 bg-white text-pink-600 font-bold rounded-xl text-lg border-2 border-pink-400 hover:bg-pink-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                    Watch Demo 🎥
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-8 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600">50K+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-600">4.8★</div>
                    <div className="text-sm text-gray-600">App Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
                
              </div>
              
              {/* Right Column - Phone Mockup */}
              <div className="order-1 lg:order-2 relative animate-fade-in-up animation-delay-200">
                
                {/* Background Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 via-rose-200 to-orange-200 opacity-60"></div>
                </div>
                
                {/* Phone Container */}
                <div className="relative z-10 flex justify-center transform hover:scale-105 transition-transform duration-500">
                  <div className="w-72 h-[580px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] p-3 shadow-2xl hover:shadow-pink-500/30 transition-shadow duration-300">
                    
                    {/* Phone Screen */}
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20"></div>
                      
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-pink-50 to-rose-50">
                        <span className="text-sm font-bold">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-5 h-3 bg-pink-500 rounded-sm"></div>
                          <div className="w-5 h-3 bg-pink-400 rounded-sm"></div>
                          <div className="w-5 h-3 bg-pink-300 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="px-6 py-5 bg-gradient-to-r from-pink-50 to-rose-50 border-b border-pink-200">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Discover</h2>
                        <div className="flex items-center mt-2 space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-sm text-gray-600 font-medium">124 Online Now</span>
                        </div>
                      </div>
                      
                      {/* Profile Cards */}
                      <div className="p-4 space-y-3 bg-gradient-to-b from-white to-pink-50">
                        
                        {/* Card 1 */}
                        <div className="bg-gradient-to-r from-teal-100 to-teal-50 rounded-2xl p-4 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-200">
                          <div className="relative w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full overflow-hidden ring-2 ring-teal-300">
                            <Image src="/images/Rectangle 94.png" alt="User" fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-base text-gray-900">Sarah, 24</h3>
                            <p className="text-xs text-teal-600 font-medium">📍 0.5 km away • Friends</p>
                          </div>
                          <div className="text-2xl">💚</div>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl p-4 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-200">
                          <div className="relative w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full overflow-hidden ring-2 ring-pink-300">
                            <Image src="/images/image (1).png" alt="User" fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-base text-gray-900">Mike, 28</h3>
                            <p className="text-xs text-pink-600 font-medium">📍 2.1 km • Dating</p>
                          </div>
                          <div className="text-2xl">💖</div>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-4 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
                          <div className="relative w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full overflow-hidden ring-2 ring-orange-300">
                            <Image src="/images/Rectangle 94.png" alt="User" fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-base text-gray-900">Emma, 26</h3>
                            <p className="text-xs text-orange-600 font-medium">📍 1.5 km • Hangout</p>
                          </div>
                          <div className="text-2xl">🧡</div>
                        </div>
                        
                      </div>
                      
                      {/* Interest Tags */}
                      <div className="px-4 py-3 bg-gradient-to-b from-pink-50 to-white">
                        <p className="text-xs text-gray-500 font-medium mb-2">Popular Interests</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">⚽ Football</span>
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">🎬 Movies</span>
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">🗣️ Languages</span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>

        {/* What You Can Do Section - NEW */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-bold text-sm mb-6">
                ✨ WHAT YOU CAN DO
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Dating App</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hypernear is your all-in-one social connection platform. Whether youre new in town or just want to expand your circle!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
                <div className="text-6xl mb-6">💑</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Match</h3>
                <p className="text-gray-600 leading-relaxed">
                  Looking for love? Our smart algorithm matches you with compatible partners nearby. Chat, connect, and find your soulmate whos just around the corner!
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
                <div className="text-6xl mb-6">👥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Make New Friends</h3>
                <p className="text-gray-600 leading-relaxed">
                  New in the city? Want to expand your social circle? Find people with similar interests who want to hang out, grab coffee, or explore the city together!
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Activity Partners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Need a gym buddy? Want someone to watch movies with? Looking for a travel companion? Find people who share your hobbies and interests nearby!
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200">
                <div className="text-6xl mb-6">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hypernear Search</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our unique Hypernear feature shows you whos online and nearby RIGHT NOW! Perfect for spontaneous meetups, coffee dates, or last-minute hangouts.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Group Hangouts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join or create group events! From movie nights to hiking trips, party planning to study groups - connect with multiple people at once!
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-gradient-to-br from-rose-50 to-red-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-200">
                <div className="text-6xl mb-6">🌆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Together</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover new places in your city with new friends! Find people who want to explore restaurants, cafes, parks, and hidden gems together!
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-bold text-sm mb-6">
                ⚡ HOW IT WORKS
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get Started in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">3 Simple Steps</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Finding meaningful connections nearby has never been this easy. Just follow these steps and start meeting amazing people today!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl flex items-center justify-center text-white text-4xl font-bold mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                    1
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Download & Sign Up</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Get the app from App Store or Google Play. Create your profile in less than 2 minutes. Choose if youre looking for friends, dates, or both!
                </p>
              </div>

              {/* Step 2 */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-4xl font-bold mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                    2
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Set Your Preferences</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Choose your distance radius, interests, and what youre looking for. Our smart algorithm will show you perfect matches in your area!
                </p>
              </div>

              {/* Step 3 */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-4xl font-bold mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                    3
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect & Meet Up</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Start chatting, plan activities, and meet in person at safe public places. Make memories with awesome people nearby!
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Images */}
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full h-[600px]">
                  
                  {/* Image 1 */}
                  <div className="absolute top-0 right-0 lg:right-20 group">
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-3xl shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 w-72 h-72 hover:scale-105">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/images/31.png"
                          alt="Happy Couple"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="absolute bottom-0 left-0 lg:left-10 group">
                    <div className="bg-gradient-to-br from-rose-100 to-orange-100 p-3 rounded-3xl shadow-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500 w-72 h-72 hover:scale-105">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/images/33.png"
                          alt="Happy Couple"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="order-2 lg:order-2 space-y-8">
                
                <div className="inline-block">
                  <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full font-bold text-sm">
                    🏆 BEST IN CLASS
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                  Why Hypernear is
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Better Than Others</span>
                </h2>
                
                <p className="text-gray-700 text-xl leading-relaxed">
                  We are not just another dating or friend-making app. Hypernear is designed with YOU in mind - safe, user-friendly, and actually works!
                </p>
                
                {/* Feature Points */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      🔐
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Your Data is 100% Secure</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Bank-level encryption protects your personal information. Your exact location stays private until YOU decide to share it. We NEVER sell your data to third parties - your privacy is sacred!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      ⚡
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Super User-Friendly Interface</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Clean, simple, and intuitive design that anyone can use. No complicated features or confusing menus. Just swipe, chat, and connect - its that easy!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Smart Matching Technology</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our AI learns your preferences and suggests the BEST matches - whether you are looking for friends, activity partners, or romance. Real connections, guaranteed!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      ✨
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">All-in-One Social Platform</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Why use 5 different apps? Hypernear combines dating, friend-finding, activity matching, and group hangouts all in one place. One app for ALL your social needs!
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Thousands</h2>
              <p className="text-xl opacity-90">Real people, real connections, real results</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 group-hover:animate-pulse">50K+</div>
                <div className="text-lg opacity-90">Active Users</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 group-hover:animate-pulse">1M+</div>
                <div className="text-lg opacity-90">Connections Made</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 group-hover:animate-pulse">4.8★</div>
                <div className="text-lg opacity-90">App Rating</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 group-hover:animate-pulse">95%</div>
                <div className="text-lg opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Download App Section with QR Code - NEW */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
                
                <div className="inline-block">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-pink-600 rounded-full font-bold text-sm shadow-lg border border-pink-200">
                    📱 GET THE APP
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                  Download Now &
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Start Connecting!</span>
                </h2>
                
                <p className="text-gray-700 text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Join 50,000+ people who are already making amazing connections nearby. Your next best friend or soulmate is waiting! 🌟
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-xl text-xl shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <span>App Store</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-xl text-xl shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <span>Google Play</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
                
              </div>
              
              {/* Right Column - QR Code Scanner */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-300 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-pink-200">
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Scan to Download</h3>
                      <p className="text-gray-600">Quick & Easy Installation</p>
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="bg-white p-6 rounded-2xl border-4 border-pink-500 mx-auto w-fit">
                      <div className="w-64 h-64 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                        {/* QR Code Pattern Simulation */}
                        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
                          {[...Array(64)].map((_, i) => (
                            <div
                              key={i}
                              className={`${
                                Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'
                              } rounded-sm`}
                            />
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white p-3 rounded-xl shadow-lg">
                            <div className="text-4xl">📱</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-500">Available on iOS & Android</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
        <CallToAction />

      </main>

      <Footer />

      <style jsx global>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}