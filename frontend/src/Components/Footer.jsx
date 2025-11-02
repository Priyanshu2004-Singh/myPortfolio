// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const Footer = () => {
  return (
  <footer style={{ backgroundColor: "rgb(32, 32, 32)" }} className="bg-gray-900 text-white py-12 px-4 flex flex-col items-center animate-fade-in">

      {/* Social Icons */}
      <div className="flex space-x-4 mb-8 animate-fade-in delay-200">
        <a href="https://github.com/Priyanshu2004-Singh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-white hover:text-black">
            <FaGithub className="text-xl" />
          </div>
        </a>
        <a href="https://www.fiverr.com/users/thriver2004/seller_dashboard" target="_blank" rel="noopener noreferrer" aria-label="Fiverr" title="Fiverr">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-white hover:text-black">
            <SiFiverr className="text-xl" />
          </div>
        </a>
        <a href="https://instagram.com/priyanshu_singh_69_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-white hover:text-black">
            <FaInstagram className="text-xl" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/priyanshu-singh-a17807231/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-white hover:text-black">
            <FaLinkedin className="text-xl" />
          </div>
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-sm text-gray-400">
        Copyright © 2025 Developer Co. • All Rights
      </p>
    </footer>
  );
};

export default Footer;