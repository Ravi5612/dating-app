"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Reward icons (pink theme)
  const rewardIcons = ["💖", "🎈", "🌸", "✨", "💕", "🎀"];

  return (
    <div>
      <Header />

      <main className="flex flex-col items-center justify-center py-12 px-6">
        <h1 className="text-4xl font-bold mb-6">Join Us</h1>

        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white shadow-md rounded-2xl p-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg mb-4"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg mb-4"
              required
            />
            <textarea
              placeholder="Why do you want to join?"
              className="w-full border p-3 rounded-lg mb-4"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600"
            >
              Submit
            </button>
          </form>
        )}

        <AnimatePresence>
          {submitted && (
            <>
              {/* Thank You Card */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
              >
                <div className="bg-white rounded-2xl p-8 shadow-2xl relative w-[420px] h-[270px] flex flex-col justify-center items-center">
                  {/* Cut Button */}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
                  >
                    ✖
                  </button>
                  <h2 className="text-3xl font-bold text-pink-600 mb-2">
                    Thank You! 🎉
                  </h2>
                  <p className="text-gray-600 text-center">
                    Your submission has been received.
                  </p>
                </div>
              </motion.div>

              {/* Reward Rain Animation */}
              {Array.from({ length: 25 }).map((_, i) => {
                const icon =
                  rewardIcons[Math.floor(Math.random() * rewardIcons.length)];
                return (
                  <motion.div
                    key={i}
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: "100vh", opacity: 1 }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                    className="fixed text-pink-400 text-3xl z-40 select-none"
                    style={{
                      left: `${Math.random() * 100}vw`,
                    }}
                  >
                    {icon}
                  </motion.div>
                );
              })}
            </>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
