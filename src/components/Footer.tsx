import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <span className="text-2xl font-bold mb-4 flex items-center">
              StorrSec
            </span>
            <p className="text-gray-400 mt-4">
              Providing cutting-edge cybersecurity solutions to protect your digital assets and ensure your peace of mind.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/company" className="text-gray-400 hover:text-blue-400 transition-colors">Company</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-gray-400 hover:text-blue-400 transition-colors">Subscribe</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">info@storrsec.com</span>
              </li>
              <li className="flex items-start">
                <Shield size={20} className="text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">24/7 Security Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Storrsec. All rights reserved.
          </p>
          <div className="flex justify-between w-full md:w-auto space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
