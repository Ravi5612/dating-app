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
<section className="py-20 bg-gradient-to-b from-white to-rose-50">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        💞 Love in Every Frame
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Where hearts meet and beautiful connections are made
      </p>
    </div>

    {/* Heart Shape Container - INCREASED HEIGHT */}
    <div className="relative w-full h-[800px] md:h-[900px] flex items-center justify-center">
      
      {/* Center Heart Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-pink-200 text-[500px] md:text-[600px] leading-none opacity-20">
          ❤️
        </div>
      </div>

      {/* Top Left - INCREASED */}
      <div className="absolute top-[10%] left-[15%] w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pink-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/unsplash_fdlZBWIP0aM.png" alt="Love 1" fill className="object-cover" />
      </div>

      {/* Top Center - INCREASED */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-rose-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/unsplash_jpkfc5_d-DI.png" alt="Love 2" fill className="object-cover" />
      </div>

      {/* Top Right - INCREASED */}
      <div className="absolute top-[10%] right-[15%] w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pink-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/unsplash_mAQZ3X_8_l0.png" alt="Love 3" fill className="object-cover" />
      </div>

      {/* Middle Left - INCREASED */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[5%] w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-rose-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/Nwe1.png" alt="Love 4" fill className="object-cover" />
      </div>

      {/* Center (Largest) - INCREASED */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-red-400 shadow-2xl hover:scale-110 transition-transform duration-300 z-10">
        <Image src="/images/new3.png" alt="Love Center" fill className="object-cover" />
      </div>

      {/* Middle Right - INCREASED */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-rose-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/Rectangle 23841.png" alt="Love 5" fill className="object-cover" />
      </div>

      {/* Bottom Left - INCREASED */}
      <div className="absolute bottom-[15%] left-[20%] w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pink-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/Rectangle 23845.png" alt="Love 6" fill className="object-cover" />
      </div>

      {/* Bottom Right - INCREASED */}
      <div className="absolute bottom-[15%] right-[20%] w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pink-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/Rectangle 23847.png" alt="Love 7" fill className="object-cover" />
      </div>

      {/* Bottom Center - INCREASED */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-rose-300 shadow-xl hover:scale-110 transition-transform duration-300">
        <Image src="/images/Group 1597884004.png" alt="Love 8" fill className="object-cover" />
      </div>
    </div>

    {/* Caption */}
    <div className="text-center mt-8">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        Love is composed of a single soul inhabiting two bodies 💕
      </p>
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


<section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        🌸 Flower Crown Memories
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Blooming moments arranged in a beautiful floral crown
      </p>
    </div>

    {/* Flower Crown Circle */}
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
      
      {/* Decorative flower background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full border-4 border-dashed border-pink-200"></div>
      </div>

      {/* Photo 1 - Top */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/unsplash_fdlZBWIP0aM.png" alt="Flower 1" fill className="object-cover" />
            </div>
          </div>
          {/* Flower decoration */}
          <div className="absolute -top-2 -right-2 text-4xl">🌸</div>
        </div>
      </div>

      {/* Photo 2 - Top Right */}
      <div className="absolute top-[15%] right-[15%]">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/unsplash_jpkfc5_d-DI.png" alt="Flower 2" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 text-4xl">🌺</div>
        </div>
      </div>

      {/* Photo 3 - Right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[8%]">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/unsplash_mAQZ3X_8_l0.png" alt="Flower 3" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 text-4xl">🌼</div>
        </div>
      </div>

      {/* Photo 4 - Bottom Right */}
      <div className="absolute bottom-[15%] right-[15%]">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Nwe1.png" alt="Flower 4" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 text-4xl">🌻</div>
        </div>
      </div>

      {/* Photo 5 - Bottom */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/new3.png" alt="Flower 5" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 text-4xl">🌷</div>
        </div>
      </div>

      {/* Photo 6 - Bottom Left */}
      <div className="absolute bottom-[15%] left-[15%]">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Rectangle 23841.png" alt="Flower 6" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 text-4xl">🌹</div>
        </div>
      </div>

      {/* Photo 7 - Left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[8%]">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Rectangle 23845.png" alt="Flower 7" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -left-2 text-4xl">🏵️</div>
        </div>
      </div>

      {/* Photo 8 - Top Left */}
      <div className="absolute top-[15%] left-[15%]">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/images/Rectangle 23847.png" alt="Flower 8" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-2 -left-2 text-4xl">💐</div>
        </div>
      </div>

      {/* Center text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>
          Blooming<br/>Together
        </h3>
      </div>
    </div>

    {/* Caption */}
    <div className="text-center mt-12">
      <p className="text-2xl text-gray-700" style={{ fontFamily: "'Caveat', cursive" }}>
        A crown of memories, each petal a moment 🌸
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