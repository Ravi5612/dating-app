import Header from "../app/Componets/Header";
import Footer from "../app/Componets/Footer";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-red-100 overflow-hidden">
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  <span className="text-teal-400">Meet the</span>
                  <br />
                  <span className="text-red-500">Chosen one</span>
                </h1>
                
                {/* Decorative Elements */}
                <div className="relative">
                  <div className="absolute -top-10 -left-10 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Hi
                  </div>
                  <div className="absolute top-5 -right-10 text-4xl">
                    😍❤️
                  </div>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="w-80 h-80 bg-yellow-400 rounded-full mx-auto relative">
                  {/* Placeholder for main hero image */}
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    Hero Image Here
                  </div>
                </div>

                {/* Floating Profile Cards */}
                <div className="absolute -left-10 top-20 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm text-gray-500">New York</p>
                      <h4 className="font-semibold text-red-500">JOHN CARTER</h4>
                      <p className="text-xs text-gray-400">Near 2.1 Miles</p>
                      <button className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full mt-1">
                        Say Hello
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-10 top-32 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-blue-400 rounded-full"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-60 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center text-gray-500">
                  Feature Image Here
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Raise Your Standards, Date With Confidence, Live Better.
                </h2>
                <p className="text-gray-600 mb-6">
                  We believe everyone deserves meaningful connections. Our platform helps you find genuine relationships with people who share your values and aspirations.
                </p>
                <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* More Than Just Matches */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">More Than Just Matches</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover meaningful connections through our advanced matching algorithm
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                    Match Image {item}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quality Connection {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Find people who truly understand and appreciate you
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Raise Your Standards, Date With Confidence.
                </h2>
                <p className="text-gray-600 mb-8">
                  Join thousands who have found meaningful relationships through our platform.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">1M+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">50K+</div>
                    <div className="text-sm text-gray-600">Successful Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-100 rounded-2xl p-4 h-48 flex items-center justify-center text-gray-500">
                    Profile {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16">How it Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "1", title: "Create Profile", desc: "Set up your profile with photos and preferences" },
                { step: "2", title: "Get Matches", desc: "Our algorithm finds compatible people for you" },
                { step: "3", title: "Start Dating", desc: "Connect and start meaningful conversations" }
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Super Right In Your Happily Ever After */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12">
              Super Right In Your Happily Ever After!
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[1, 2].map((item) => (
                <div key={item} className="bg-pink-50 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="font-semibold text-lg mb-2">Success Story {item}</h3>
                  <p className="text-gray-600 text-sm">
                    "Amazing platform that helped me find my perfect match!"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {[
                "What is it all inclusive cost of dating?",
                "Why is a check-in required?",
                "What is the difference between of chatting?",
                "How can I cancel my subscription?",
                "What are the benefits of premium of chatting?"
              ].map((question, index) => (
                <div key={index} className="bg-white rounded-lg mb-4 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    <span className="font-medium">{question}</span>
                    <span className="text-2xl">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      <p>This is the answer to the question. You can add detailed information here about the dating platform and its features.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Match?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions who have found love through our platform
            </p>
            <button className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Start Your Journey
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}