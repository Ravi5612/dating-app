"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CallToAction from "@/app/Components/CallToAction"
export default function About() {
  return (
    <div>
      <Header />
      
      <main>
        {/* Hero Section */}
    
   <img 
  src="/Images/about.png" 
  alt="Happy couple" 
  className="w-full h-[28rem] md:h-[34rem] lg:h-[40rem] object-cover"
/>
     {/* Real Connections Section */}
<section className="py-16 md:py-20 bg-pink-100">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
      Real Connections, Real You!
    </h2>
    
    {/* Subtext */}
    <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
      We believe dating should be fun, safe, and meaningful. 
      Our app is designed for real connections with features like:
    </p>
    
    {/* Image with Blue Border - CORRECTED */}
   <div className="relative max-w-4xl mx-auto mb-8">
  <div className="bg-white rounded-2xl overflow-hidden">
    <img 
      src="/Images/Rectangle 94 (1).png"
      alt="Couple in garden" 
      className="w-full h-64 md:h-80 lg:h-96 object-cover"
    />
  </div>
</div>

    
   
  </div>
</section>
{/* Our Mission Section */}
<section className="py-16 md:py-20 bg-pink-100">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Content */}
     <div className="order-1 lg:order-1">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
    Our mission
  </h2>
  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
    At Velvet, we make dating safe, real, and meaningful. Our goal is to help 
    people build genuine connections through verified profiles, smart 
    matching, and shared interests. No random swiping—just real 
    relationships that last.
  </p>
</div>

      
      {/* Right Images - Corner Touching Layout */}
      <div className="order-1 lg:order-2 relative">
        <div className="relative w-full h-96 md:h-[450px]">
          
          {/* Main Top Image - Larger & Central */}
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 md:w-96 h-auto rotate-1 z-30">
  <div className="w-full bg-white rounded-lg shadow-xl p-3 flex flex-col">
    
    {/* Image Container */}
    <div className="w-full h-64 md:h-80 bg-gray-200 rounded-md overflow-hidden">
      <img 
        src="/Images/Group 1597884004.png"
       
        alt="Couple in garden" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Below Image */}
    <div className="mt-4 text-gray-700 text-sm md:text-base">
      <h3 className="font-semibold text-lg mb-2">Why Velvet Matters</h3>
      <p className="leading-relaxed">
         {/* Content Here */}
      </p>
    </div>
  </div>
</div>


{/* Bottom Left Image - Touching Main Image Corner */}
<div className="absolute top-72 md:top-88 left-[-72px] md:left-[-96px] w-64 md:w-72 h-48 md:h-56 transform rotate-30 z-30">
  <div className="w-full h-full bg-white rounded-lg shadow-xl p-3">
    <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden relative">
      <img 
        src="/Images/image (1).png" 
        
        alt="Meaningful Moments" 
        className="w-full h-full object-cover"
      />
      {/* Text Label */}
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 text-black px-3 py-1 rounded-md text-sm font-semibold">
        Meaningful Moments
      </div>
    </div>
  </div>
</div>


{/* Bottom Right Image - Touching Main Image Corner */}
<div className="absolute top-80 md:top-88 right-0 md:right-4 w-64 md:w-72 h-48 md:h-56 transform -rotate-30 z-30">
  <div className="w-full h-full bg-white rounded-lg shadow-xl p-3">
    <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden relative">
      <img 
        src="/Images/Rectangle 23855.png"
       
        alt="Real Connections" 
        className="w-full h-full object-cover"
      />
      {/* Text Label */}
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 text-black px-3 py-1 rounded-md text-sm font-semibold">
        Real Connections
      </div>
    </div>
  </div>
</div>




          
        </div>
      </div>
      
    </div>
  </div>
</section>


{/* About Us Section */}
<section className="py-16 md:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    {/* Blue Border Container */}
  
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black">
        About Us
      </h2>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        
        {/* Card 1 - Why Velvet Matters */}
       <div className="bg-white rounded-tl-3xl rounded-bl-md rounded-br-md shadow-lg overflow-hidden">
  {/* Image */}
  <div className="w-full h-64 md:h-80 rounded-tl-3xl overflow-hidden">
    <img 
      src="/Images/Rectangle 23841.png" 
      // public/images/Rectangle 23841.png
      alt="Couple embracing outdoors" 
      className="w-full h-full object-cover rounded-tl-3xl"
    />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-500">
      Why Velvet Matters
    </h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit, 
      luctus nec ullamcorper mattis tellus
    </p>
  </div>
</div>


        {/* Card 2 - How Velvet Works */}
    <div className="bg-white rounded-tl-3xl rounded-bl-md rounded-br-md shadow-lg overflow-hidden">
  {/* Image */}
  <div className="w-full h-64 md:h-80 rounded-tl-3xl overflow-hidden">
    <img 
      src="/Images/Rectangle 23845.png" 
      // public/images/Rectangle 23845.png
      alt="Couple embracing outdoors" 
      className="w-full h-full object-cover rounded-tl-3xl"
    />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-500">
      Why Velvet Matters
    </h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit, 
      luctus nec ullamcorper mattis tellus
    </p>
  </div>
</div>


        {/* Card 3 - What Velvet Values */}
          <div className="bg-white rounded-tl-3xl rounded-bl-md rounded-br-md shadow-lg overflow-hidden">
  {/* Image */}
  <div className="w-full h-64 md:h-80 rounded-tl-3xl overflow-hidden">
    <img 
      src="/Images/Rectangle 23847.png" 
      
      alt="Couple embracing outdoors" 
      className="w-full h-full object-cover rounded-tl-3xl"
    />
  </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-500">
              What Velvet Values
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit, 
              luctus nec ullamcorper mattis tellus
            </p>
          </div>
        </div>

      </div>

  </div>
</section>

<CallToAction />
     
      </main>

      <Footer />
    </div>
  );
}