"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <div className="bg-teal-400 text-black font-bold text-lg px-4 py-2 rounded-lg inline-block mb-4">
              Logo here
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              We offer a complete suite of dating app development services designed to bring your vision to life. From intuitive UI/UX design and AI-driven matchmaking to secure backend development and post-launch support, our team has the skills and experience to create an app that connects hearts and drives success.
            </p>
            <div className="flex space-x-3">
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs">🍎</span>
                </div>
                <div className="text-xs">
                  <div className="text-gray-300">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs">▶️</span>
                </div>
                <div className="text-xs">
                  <div className="text-gray-300">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4 text-sm">Other Pages</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900 transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Consumer Health Data Privacy</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Provision</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Intellectual Property</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4 text-sm">Quick Link</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900 transition">Career Portal</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Technology Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Provision</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Intellectual Property</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4 text-sm">Social</h3>
            <div className="flex space-x-3">
              <FaXTwitter className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer transition" />
              <FaInstagram className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer transition" />
              <FaFacebook className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer transition" />
              <FaYoutube className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer transition" />
              <FaTiktok className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>

          {/* FAQ Column */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4 text-sm">FAQ</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900 transition">Events</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Contact us</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Guidelines</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition">Promo Code</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Copyright © 2025 - myapp.se. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;