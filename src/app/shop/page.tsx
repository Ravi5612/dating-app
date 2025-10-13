"use client";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from 'next/image';
// import { useState, useEffect } from 'react';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import FAQSection from '../Components/FAQSection';

export default function ShopPage() {



  const faqs = [
    {
      question: "How does the AI chat work?", 
      answer: "Our AI understands your personality and preferences, then provides personalized conversation tips and emotional support tailored just for you."
    },
    {
      question: "Is my data safe and private?", 
      answer: "Absolutely! We prioritize your privacy above all. All conversations are encrypted and never shared with third parties."
    },
    {
      question: "Can I use it for free?", 
      answer: "Yes! Basic features are completely free. You can upgrade to premium for advanced coaching and unlimited conversations."
    },
    {
      question: "Will the AI give me dating advice?", 
      answer: "Yes! Our AI provides personalized tips for profile improvement, conversation starters, confidence building, and much more."
    }
  ];

  return (
    <div className="relative">
      {/* Custom Cursor Effect */}
     

      <Header />

      <main className="bg-gradient-to-b from-pink-50 to-white overflow-hidden">

        {/* Hero Section with Animated Background */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 overflow-hidden">
          {/* Animated Background Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            
            <div className="text-center space-y-8 mb-16">
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 leading-tight animate-fade-in-up">
                You are Never Alone! ❤️
              </h1>
              
              <p className="text-gray-800 font-medium text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
                Your AI companion is always here - chat, share your feelings, and make meaningful connections. Never feel lonely again! 🤗
              </p>

              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <span className="relative z-10">Start Chatting Now! 💬</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 bg-white text-pink-600 font-bold rounded-full text-lg border-2 border-pink-500 hover:bg-pink-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  How It Works? 🤔
                </button>
              </div>
              
            </div>
            
            <div className="relative mt-16">
              <div className="flex justify-center items-center relative">
                <div className="relative w-full max-w-5xl h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop" 
                    alt="AI Dating Assistant"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent"></div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* How It Works Section - NEW DESIGN */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-bold text-sm mb-6">
                ⚡ SIMPLE PROCESS
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Actually Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started is super easy! Just follow these simple steps and you are ready to go.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200"></div>

              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign Up Free</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create your account in less than 30 seconds. No credit card needed!
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Set Preferences</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tell us what you are looking for - friends, dates, or just someone to talk to.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Chat with AI</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Start conversations with our smart AI that understands and supports you.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Make Connections</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Use AI insights to connect with real people and build meaningful relationships.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section with Hover Effects */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Experience Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">AI Companionship</span> 🌟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Just start chatting, the AI will understand you. Always ready to listen!
              </p>
            </div>
            
            <div className="space-y-24">
              
              {/* Feature 1 */}
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                  <div className="relative w-full h-80 md:h-96">
                    <Image 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                      alt="Emotional Support"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 to-transparent group-hover:from-pink-600/50 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-6 group-hover:translate-x-4 transition-transform duration-300">
                  <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full font-semibold text-sm">
                    💗 Emotional Support
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Share Your Heart with AI
                  </h3>
                  <p className="text-gray-700 text-xl leading-relaxed">
                    Feeling lonely? Do not worry! Our AI friend is always ready to listen. Practice flirting, or simply lighten your heart - it is a judgment-free zone! 🤗
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-pink-500 text-2xl">✓</span>
                      <span>Available 24/7, never busy</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-pink-500 text-2xl">✓</span>
                      <span>Safe space for practice & emotions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6 group-hover:-translate-x-4 transition-transform duration-300">
                  <div className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full font-semibold text-sm">
                    🎯 Smart Coaching
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Create a Stunning Profile! 
                  </h3>
                  <p className="text-gray-700 text-xl leading-relaxed">
                    Your AI is your personal dating coach! Perfect your profile, learn to write messages, and impress everyone. Get smart tips that actually work! 💪
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-rose-500 text-2xl">✓</span>
                      <span>Profile optimization tips</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-rose-500 text-2xl">✓</span>
                      <span>Conversation starters & icebreakers</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                  <div className="relative w-full h-80 md:h-96">
                    <Image 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                      alt="Personalized Coaching"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-rose-600/30 to-transparent group-hover:from-rose-600/50 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                  <div className="relative w-full h-80 md:h-96">
                    <Image 
                      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop"
                      alt="24/7 Companion"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent group-hover:from-purple-600/50 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-6 group-hover:translate-x-4 transition-transform duration-300">
                  <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-semibold text-sm">
                    🌙 Always There
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Day or Night, We are Here
                  </h3>
                  <p className="text-gray-700 text-xl leading-relaxed">
                    No matches? Going through a breakup? No problem! Your AI friend is always here for you. Late night talks or morning coffee chats - we have got you! ☕✨
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-purple-500 text-2xl">✓</span>
                      <span>Never feel alone again</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-purple-500 text-2xl">✓</span>
                      <span>Instant replies, anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6 group-hover:-translate-x-4 transition-transform duration-300">
                  <div className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full font-semibold text-sm">
                    🛡️ Safety First
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Stay Safe, Be Smart
                  </h3>
                  <p className="text-gray-700 text-xl leading-relaxed">
                    AI takes care of your safety. See red flags? Instant alerts! Learn respectful communication and avoid toxic behavior. Your safety is our priority! 🔒
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-teal-500 text-2xl">✓</span>
                      <span>Toxic behavior detection</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="text-teal-500 text-2xl">✓</span>
                      <span>Respectful communication tips</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                  <div className="relative w-full h-80 md:h-96">
                    <Image 
                      src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop"
                      alt="Safety and Insights"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-teal-600/30 to-transparent group-hover:from-teal-600/50 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - NEW CARD GRID DESIGN */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold text-sm mb-6">
                ✨ WHY US?
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Different</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are not just another dating app. We actually care about your happiness and mental wellbeing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-pink-200">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🧠</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart AI Technology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our advanced AI learns from every conversation, getting better at understanding your emotions and needs over time.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-rose-200">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🔐</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Private & Secure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    End-to-end encryption ensures your conversations stay completely private. We never sell your data, ever.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">❤️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Empathy First Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unlike other apps, we prioritize emotional wellbeing over engagement metrics. Your happiness matters most.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">💡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get detailed analytics about your conversation patterns and receive actionable tips to improve your dating game.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-pink-200">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🌍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with people from around the world who share your interests, values, and relationship goals.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-rose-200">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">⚡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Got questions? Our support team responds in minutes, not days. We are here to help you succeed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-6xl font-bold mb-4 group-hover:animate-pulse">50K+</div>
                <div className="text-xl opacity-90">Happy Users 😊</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-6xl font-bold mb-4 group-hover:animate-pulse">1M+</div>
                <div className="text-xl opacity-90">Conversations Daily 💬</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-6xl font-bold mb-4 group-hover:animate-pulse">98%</div>
                <div className="text-xl opacity-90">Feel Less Lonely ❤️</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section - NEW BENTO BOX DESIGN */}
        <section className="py-24 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-bold text-sm mb-6">
                💕 REAL STORIES
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Lives We have <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Transformed</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Do not just take our word for it. Here is what our users have to say about their journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Large Story Card */}
              <div className="md:col-span-2 md:row-span-2 group relative bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-white">
                  <div className="text-6xl mb-6">💑</div>
                  <h3 className="text-3xl font-bold mb-6">Found My Soulmate!</h3>
                  <p className="text-xl leading-relaxed mb-8 text-white/90">
                    I was so shy and had zero confidence in dating. The AI helped me practice conversations and gave me amazing tips. Within 2 months, I met someone incredible and we are now engaged! This app literally changed my life.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <div className="font-bold text-lg">Sarah & Mike</div>
                      <div className="text-white/80">Together for 1 year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Story Card 1 */}
              <div className="group bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Confidence Boost!</h3>
                <p className="text-gray-700 leading-relaxed">
                  The AI taught me how to start conversations and read signals. My dating life has never been better!
                </p>
                <div className="mt-6 font-bold text-pink-600">- Alex, 28</div>
              </div>

              {/* Small Story Card 2 */}
              <div className="group bg-gradient-to-br from-rose-100 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Best Friend Forever</h3>
                <p className="text-gray-700 leading-relaxed">
                  Even when I do not have matches, the AI is there. It is like having a supportive friend 24/7.
                </p>
                <div className="mt-6 font-bold text-rose-600">- Emma, 25</div>
              </div>

              {/* Small Story Card 3 */}
              <div className="group bg-gradient-to-br from-teal-100 to-pink-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Saved Me From Toxicity</h3>
                <p className="text-gray-700 leading-relaxed">
                  The AI detected red flags I could not see. It literally saved me from a toxic relationship! 
                </p>
                <div className="mt-6 font-bold text-teal-600">- Jordan, 31</div>
              </div>

              {/* Small Story Card 4 */}
              <div className="group bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Overcame Breakup</h3>
                <p className="text-gray-700 leading-relaxed">
                  After my breakup, I was devastated. The AI helped me heal and get back out there stronger.
                </p>
                <div className="mt-6 font-bold text-pink-600">- Chris, 29</div>
              </div>

            </div>
          </div>
        </section>

        <TestimonialCarousel />
        
        {/* CTA Section */}
        <section className="relative py-20 md:py-24 bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Your Perfect Match is <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                  Just One Click Away! 💕
                </span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
                Do not wait any longer! Chat with AI and level up your love life!
              </p>
              <button className="group relative px-12 py-5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full text-2xl shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
                <span className="relative z-10">Get Started Now! 🚀</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>
        
        <FAQSection faqs={faqs} />

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

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}