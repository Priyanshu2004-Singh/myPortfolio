// src/components/VerticalNavbar.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const VerticalNavbar = () => {
  // Update these profile links as needed
  const links = {
    github: 'https://github.com/Priyanshu2004-Singh',
    instagram: 'https://instagram.com/priyanshu_singh_69_',
    linkedin: 'https://www.linkedin.com/in/priyanshu-singh-a17807231/',
    fiverr: 'https://www.fiverr.com/users/thriver2004/seller_dashboard',
  };

  return (
    <>
      {/* Desktop: vertical left bar */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 p-3 hidden lg:block z-50 animate-fade-in">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-gray-400 font-bold tracking-widest uppercase -rotate-90 origin-center text-sm">
            Social
          </span>
          <div className="h-20 w-px bg-gray-600 my-2" />

          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <FaGithub className="text-xl text-white transition-colors duration-200 hover:text-gray-300" />
          </a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <FaInstagram className="text-xl text-white transition-colors duration-200 hover:text-pink-500" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin className="text-xl text-white transition-colors duration-200 hover:text-blue-400" />
          </a>
          <a href={links.fiverr} target="_blank" rel="noopener noreferrer" aria-label="Fiverr" title="Fiverr">
            <SiFiverr className="text-xl text-white transition-colors duration-200 hover:text-green-400" />
          </a>
        </div>
      </div>

      {/* Mobile/Tablet: bottom sticky bar */}
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 lg:hidden z-50 animate-fade-in">
        <ul className="glass border border-white/10 rounded-full px-4 py-2 flex items-center gap-4 shadow-lg">
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="block p-2">
              <FaGithub className="text-2xl text-white" />
            </a>
          </li>
          <li>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="block p-2">
              <FaInstagram className="text-2xl text-white" />
            </a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="block p-2">
              <FaLinkedin className="text-2xl text-white" />
            </a>
          </li>
          <li>
            <a href={links.fiverr} target="_blank" rel="noopener noreferrer" aria-label="Fiverr" title="Fiverr" className="block p-2">
              <SiFiverr className="text-2xl text-white" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default VerticalNavbar;