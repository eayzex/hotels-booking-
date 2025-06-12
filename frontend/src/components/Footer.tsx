
import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="h-6 w-6 text-gold" />
              <span className="text-xl font-semibold">LuxStay</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover exceptional stays for the modern traveler. Luxury accommodations with personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/hotels" className="text-gray-300 hover:text-gold transition-colors">Hotels</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-gold transition-colors">Rooms</Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-300 hover:text-gold transition-colors">Special Offers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Casablanca, Morocco<br />
                   NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <span className="text-gray-300">+212  123-456700</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <a href="mailto:info@morocstay.com" className="text-gray-300 hover:text-gold transition-colors">
                  info@morocstay.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/20 rounded p-2 w-16 h-10 flex items-center justify-center">
                <span className="text-xs">VISA</span>
              </div>
              <div className="bg-white/20 rounded p-2 w-16 h-10 flex items-center justify-center">
                <span className="text-xs">MASTER</span>
              </div>
              <div className="bg-white/20 rounded p-2 w-16 h-10 flex items-center justify-center">
                <span className="text-xs">AMEX</span>
              </div>
              <div className="bg-white/20 rounded p-2 w-16 h-10 flex items-center justify-center">
                <span className="text-xs">PAYPAL</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mt-6 mb-2">Languages</h3>
            <div className="flex space-x-2">
              <span className="text-gray-300 hover:text-gold cursor-pointer transition-colors">English</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300 hover:text-gold cursor-pointer transition-colors">Français</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300 hover:text-gold cursor-pointer transition-colors">Español</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LuxStay. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-sm text-gray-400 hover:text-gold transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
