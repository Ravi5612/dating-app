"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-purple-100 p-2 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
          <Link href="/" className="relative hover:text-gray-900 transition-colors group">
            Home
            <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/features" className="relative hover:text-gray-900 transition-colors group">
            Features
            <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/shop" className="relative hover:text-gray-900 transition-colors group">
            The Shop
            <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/app" className="relative hover:text-gray-900 transition-colors group">
            The app
            <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/ambassadors" className="relative text-orange-500 hover:text-orange-600 transition-colors group">
            Ambassadors
            <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/event" className="relative hover:text-gray-900 transition-colors group">
            Event
            <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative hover:text-gray-900 transition-colors group">
            About
            <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Login Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            LOGIN
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
            <Link href="/" className="relative hover:text-gray-900 transition-colors py-2 group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/features" className="relative hover:text-gray-900 transition-colors py-2 group">
              Features
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/shop" className="relative hover:text-gray-900 transition-colors py-2 group">
              The Shop
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/app" className="relative hover:text-gray-900 transition-colors py-2 group">
              The app
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/ambassadors" className="relative text-orange-500 hover:text-orange-600 transition-colors py-2 group">
              Ambassadors
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/event" className="relative hover:text-gray-900 transition-colors py-2 group">
              Event
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="relative hover:text-gray-900 transition-colors py-2 group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;