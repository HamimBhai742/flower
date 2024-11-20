// src/components/Footer.js
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">Fruit Paradise 🍎</h2>
            <p className="text-sm mt-2">
              Fresh and organic fruits delivered directly to your home. Your
              health is our priority!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-green-600 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
            >
            <FaFacebook/>
            </a>
            <a
              href="#"
              className="bg-white text-green-600 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
            >
            <FaTwitter/>
            </a>
            <a
              href="#"
              className="bg-white text-green-600 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
            >
            <FaInstagram/>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t border-green-500 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fruit Paradise. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
