"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    // Remove trailing slashes for comparison
    const currentPath = pathname.endsWith('/') && pathname !== '/' 
      ? pathname.slice(0, -1) 
      : pathname;
    const linkPath = path.endsWith('/') && path !== '/' 
      ? path.slice(0, -1) 
      : path;
    return currentPath === linkPath;
  };

  const navLinks = [
    { href: "/", label: "Home" },
     { href: "/about", label: "About" },
     { href: "/features", label: "Dating" },
      { href: "/ambassadors", label: "HangeOut" },
      { href: "/event", label: "Event" },
    { href: "/shop", label: "AI companion" },
    { href: "/app", label: "The App" },
   { href: "/hyper-near", label: "Hyper near" },
   
    { href: "/join-us", label: "Join Us" },
    
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

    <header 
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-pink-50 ${
    scrolled 
      ? 'backdrop-blur-md shadow-lg' 
      : 'shadow-sm'
  }`}
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
        <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 p-3 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl font-black">V</span>
              </div>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Velvet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {/* Active Background */}
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-md"></span>
                )}
                
                {/* Hover Background */}
                <span className={`absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isActive(link.href) ? 'hidden' : ''
                }`}></span>
                
                {/* Text */}
                <span className="relative z-10">{link.label}</span>
                
                {/* Bottom Indicator */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 ${
                  isActive(link.href) 
                    ? 'w-0' 
                    : 'w-0 group-hover:w-3/4'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <Link
              href="/login"
              className="relative group bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">LOGIN</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Side Navigation */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Side Menu */}
            <div className="lg:hidden fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 animate-slideIn">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-pink-50 to-purple-50">
                <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Menu
                </h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/80 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation */}
              <nav className="flex flex-col space-y-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-3.5 px-5 rounded-xl font-medium text-sm transition-all duration-300 group ${
                      isActive(link.href)
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Active Background */}
                    {isActive(link.href) && (
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl"></span>
                    )}
                    
                    {/* Hover Background */}
                    <span className={`absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isActive(link.href) ? 'hidden' : ''
                    }`}></span>
                    
                    {/* Text with Icon */}
                    <span className="relative z-10 flex items-center justify-between">
                      {link.label}
                      {isActive(link.href) && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Mobile Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gradient-to-r from-pink-50 to-purple-50">
                <Link
                  href="/login"
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOGIN
                </Link>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20"></div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;