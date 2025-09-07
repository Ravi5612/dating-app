"use client";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from 'next/image'

import TestimonialCarousel from '../Components/TestimonialCarousel';
import FAQSection from '../Components/FAQSection';

export default function ShopPage() {

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

      <main className="bg-white">

        <section className="py-16 md:py-20 bg-pink-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Upper Section - Content */}
            <div className="text-center space-y-8 mb-16">
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 leading-tight">
                Smart Conversations Start Here
              </h1>
              
              {/* Description */}
              <p className="text-gray-900 font-semibold text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Let our AI help break the ice, spark engaging conversations, and make meaningful connections effortless.
              </p>
              
            </div>
            
            {/* Lower Section - Image/Illustration Area */}
            <div className="relative">
              
              {/* Central Illustration Container */}
              <div className="flex justify-center items-center relative">
                
                <div className="relative w-full max-w-4xl h-80 md:h-96">
                  <Image 
                    src="/Images/Container (1).png" 
                    alt="AI Robot for emotional support"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                
              </div>
              
            </div>
            
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            {/* Main Heading */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                How AI Chat Elevates Your Experience
              </h1>
            </div>
            
            {/* Features List */}
            <div className="space-y-16">
              
              {/* Feature 1 - Image Left, Content Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-1">
                  <div className="relative w-full h-64 md:h-80">
                    <Image 
                      src="/Images/r1.png"
                      alt="AI Robot for emotional support"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="order-2 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-black">
                    Emotional Support & Practice
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Acts as a conversational partner to help users build confidence, practice flirting, or explore emotional expression before engaging with real matches
                  </p>
                </div>
              </div>
              
              {/* Feature 2 - Content Left, Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-black">
                    Personalized Match Coaching
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Offers tailored advice on profile optimization, message crafting, and conversation tips based on user behavior and preferences.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative w-full h-64 md:h-80">
                    <Image 
                      src="/Images/r2.png"
                      alt="AI personalized coaching"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Feature 3 - Image Left, Content Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-1">
                  <div className="relative w-full h-64 md:h-80">
                    <Image 
                      src="/Images/r3.png"
                      alt="AI 24/7 companion"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="order-2 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-black">
                    24/7 Companionship and Friend
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Provides companionship during lonely periods, especially for users who may not have active matches or are navigating breakups or rejection.
                  </p>
                </div>
              </div>
              
              {/* Feature 4 - Content Left, Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-black">
                    Behavioral Insights & Safety
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Monitors user interactions to give feedback on respectful communication and flag potentially unsafe or toxic behavior patterns.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative w-full h-64 md:h-80">
                    <Image 
                      src="/Images/r4.png"
                      alt="AI behavioral insights and safety"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <TestimonialCarousel />
        
        <section className="py-12 md:py-16 bg-teal-400 my-8 md:my-12 lg:my-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight animate-bounce">
                Your Next Great Match is Closer Than You Think
              </h1>
            </div>
          </div>
        </section>
        
        <FAQSection faqs={faqs} />

      </main>

      <Footer />
    </div>
  );
}