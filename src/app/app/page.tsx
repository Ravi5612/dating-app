"use client";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CallToAction from "@/app/Components/CallToAction";
import FAQSection from '../Components/FAQSection';
export default function AppPage() {
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
      <main>
   <section className="py-16 md:py-20 bg-pink-100 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Content */}
      <div className="order-2 lg:order-1 space-y-8">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Find Connections Near You, Instantly!
        </h1>
        
        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg">
          With Hypernear, meeting someone nearby has never been easier. Get matched with 
          people in your area and take the next step towards real-life connections!
        </p>
        
        {/* CTA Button */}
        <div className="pt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            DOWNLOAD APP
          </button>
        </div>
        
      </div>
      
      {/* Right Column - Phone Mockup */}
      <div className="order-1 lg:order-2 relative">
        
        {/* Colorful Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-300 via-pink-300 to-teal-300 opacity-80"></div>
          <div className="absolute w-72 h-72 rounded-full border-2 border-black opacity-20"></div>
          <div className="absolute w-64 h-64 rounded-full border-2 border-black opacity-15"></div>
          <div className="absolute w-56 h-56 rounded-full border-2 border-black opacity-10"></div>
        </div>
        
        {/* Phone Container */}
        <div className="relative z-10 flex justify-center">
          <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
            
            {/* Phone Screen */}
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
              
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 py-3 bg-white">
                <span className="text-sm font-semibold">9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-black rounded-sm"></div>
                  <div className="w-4 h-2 bg-black rounded-sm"></div>
                  <div className="w-4 h-2 bg-black rounded-sm"></div>
                </div>
              </div>
              
              {/* App Header */}
              <div className="px-6 py-4 bg-white border-b border-gray-100">
                <h2 className="text-xl font-bold text-teal-500">Discover</h2>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-sm text-gray-600">Online</span>
                </div>
              </div>
              
              {/* Profile Cards */}
              <div className="p-4 space-y-3">
                
                {/* Card 1 */}
                <div className="bg-teal-100 rounded-xl p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="/Images/Rectangle 94.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">Sarah, 24</h3>
                    <p className="text-xs text-gray-600">Interests</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-pink-100 rounded-xl p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="/Images/image (1).png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">Mike, 28</h3>
                    <p className="text-xs text-gray-600">2.1 km away</p>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="bg-orange-100 rounded-xl p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="/Images/Rectangle 94.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">Emma, 26</h3>
                    <p className="text-xs text-gray-600">1.5 km away</p>
                  </div>
                </div>
                
              </div>
              
              {/* Interest Tags */}
              <div className="px-4 py-2">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Football</span>
                  <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Movies</span>
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">Languages</span>
                </div>
              </div>
              
              
              
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</section>

       <section className="py-16 md:py-20 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Images */}
      <div className="order-1 lg:order-1 relative">
        <div className="space-y-6">
          {/* First Image */}
         <div className="flex flex-col items-center space-y-10 mt-10">
  {/* Image 1 */}
<div className="bg-pink-200 p-2 rounded-xl shadow-lg transform -rotate-6 w-72 h-72 ml-auto">
  <img
    src="/Images/31.png"
     
    alt="Couple 1"
    className="w-full h-full object-cover rounded-lg"
  />
</div>


  {/* Image 2 */}
 <div className="bg-pink-200 p-2 rounded-xl shadow-lg transform -rotate-6 w-72 h-72 -ml-16">
  <img
   src="/Images/33.png"
    alt="Couple 1"
    className="w-full h-full object-cover rounded-lg"
  />
</div>

</div>

        </div>
      </div>
      
      {/* Right Column - Content */}
      <div className="order-2 lg:order-2 space-y-8">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Effortless, Smart,
          <br />
          and Secure
        </h1>
        
        {/* Feature Points */}
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Hypernear uses advanced location-based technology to suggest matches who are close to you
          </p>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Your exact location remains private until both of you decide to connect
          </p>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Set your preferred distance range and find someone who's just around the corner!
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="pt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg">
            DOWNLOAD VELVET
          </button>
        </div>
        
      </div>
      
    </div>
  </div>
</section>

<section className="py-16 md:py-20 bg-pink-100 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Content */}
      <div className="order-2 lg:order-1 space-y-8">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Get Closer to Real
          <br />
          Connections
        </h1>
        
        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg">
          Turn online matches into real-life moments. Activate Hypernear today and discover amazing people nearby!
        </p>
        
        {/* CTA Button */}
        <div className="pt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            DISCOVER MORE
          </button>
        </div>
        
      </div>
      
      {/* Right Column - Image */}
      <div className="order-1 lg:order-2 relative">
        <div className="relative">
          <div className="w-full h-80 md:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/Images/19.png"
        
              alt="Happy couple celebrating at night"
              className="w-full h-full object-cover"
            />
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
    </div>
  );
}
