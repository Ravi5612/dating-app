"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

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
          <Link 
            href="/" 
            className={`relative transition-colors group ${
              isActive('/') ? 'text-pink-500' : 'hover:text-gray-900'
            }`}
          >
            Home
            <span className={`absolute left-0 bottom-[-8px] h-0.5 bg-pink-500 transition-all duration-300 ${
              isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          <Link 
            href="/features" 
            className={`relative transition-colors group ${
              isActive('/features') ? 'text-pink-500' : 'hover:text-gray-900'
            }`}
          >
            Features
            <span className={`absolute left-0 bottom-[-8px] h-0.5 bg-pink-500 transition-all duration-300 ${
              isActive('/features') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          <Link 
            href="/shop" 
            className={`relative transition-colors group ${
              isActive('/shop') ? 'text-pink-500' : 'hover:text-gray-900'
            }`}
          >
            The Shop
            <span className={`absolute left-0 bottom-[-8px] h-0.5 bg-pink-500 transition-all duration-300 ${
              isActive('/shop') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          <Link 
            href="/app" 
            className={`relative transition-colors group ${
              isActive('/app') ? 'text-pink-500' : 'hover:text-gray-900'
            }`}
          >
            The app
            <span className={`absolute left-0 bottom-[-8px] h-0.5 bg-pink-500 transition-all duration-300 ${
              isActive('/app') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          <Link 
            href="/ambassadors" 
            className={`relative transition-colors group ${
              isActive('/ambassadors') ? 'text-pink-500' : 'hover:text-gray-900'
            }`}
          >
            Ambassadors
            <span className={`absolute left-0 bottom-[-8px] h-0.5 bg-pink-500 transition-all duration-300 ${
              isActive('/ambassadors') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          <Link 
            href="/event" 
            className={`relative transition-colors group ${
              isActive('/event') ? 'text-pink-500' : 'hover:text-gray-900'
            }`}
          >
            Event
            <span className={`absolute left-0 bottom-[-8px] h-0.5 bg-pink-500 transition-all duration-300 ${
              isActive('/event') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          <Link 
            href="/about" 
            className={`relative transition-colors group ${
              isActive('/about') ? 'text-pink-500' : 'hover:text-gray-900'
            }`}
          >
            About
            <span className={`absolute left-0 bottom-[-8px] h-0.5 bg-pink-500 transition-all duration-300 ${
              isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
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

      {/* Mobile Side Navigation */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Side Menu */}
          <div className="lg:hidden fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col space-y-2 p-4 font-medium text-gray-700">
              <Link 
                href="/" 
                className={`relative py-3 px-4 rounded-lg transition-colors ${
                  isActive('/') ? 'text-pink-500 bg-pink-50' : 'hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/features" 
                className={`relative py-3 px-4 rounded-lg transition-colors ${
                  isActive('/features') ? 'text-pink-500 bg-pink-50' : 'hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              
              <Link 
                href="/shop" 
                className={`relative py-3 px-4 rounded-lg transition-colors ${
                  isActive('/shop') ? 'text-pink-500 bg-pink-50' : 'hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                The Shop
              </Link>
              
              <Link 
                href="/app" 
                className={`relative py-3 px-4 rounded-lg transition-colors ${
                  isActive('/app') ? 'text-pink-500 bg-pink-50' : 'hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                The app
              </Link>
              
              <Link 
                href="/ambassadors" 
                className={`relative py-3 px-4 rounded-lg transition-colors ${
                  isActive('/ambassadors') ? 'text-pink-500 bg-pink-50' : 'hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ambassadors
              </Link>
              
              <Link 
                href="/event" 
                className={`relative py-3 px-4 rounded-lg transition-colors ${
                  isActive('/event') ? 'text-pink-500 bg-pink-50' : 'hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Event
              </Link>
              
              <Link 
                href="/about" 
                className={`relative py-3 px-4 rounded-lg transition-colors ${
                  isActive('/about') ? 'text-pink-500 bg-pink-50' : 'hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;