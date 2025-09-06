import React from "react";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
