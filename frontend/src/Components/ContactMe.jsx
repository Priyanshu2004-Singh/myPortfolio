// src/components/ContactMe.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const ContactMe = () => {
  return (
    <div id='contact' className="bg-[#111] text-white py-14 md:py-16 px-4 md:px-16 lg:px-32 animate-fade-in">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mt-2">Let's build something great together</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Contact info card */}
        <div className="glass border border-white/10 rounded-xl p-5 sm:p-6 animate-fade-in delay-200">
          <h3 className="text-2xl font-bold mb-4">My Contacts</h3>
          <p className="text-gray-300 leading-relaxed text-sm mb-6">Feel free to reach out for collaborations, freelance work, or just a friendly hello.</p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-cyan-400"><FaMapMarkerAlt aria-hidden="true" /></span>
              <div>
                <p className="text-gray-400 uppercase tracking-wide text-[11px]">Address</p>
                <p className="text-white text-sm sm:text-base">Greater Noida, Gautam Buddha Nagar, Dankaur</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-cyan-400"><FaPhoneAlt aria-hidden="true" /></span>
              <div>
                <p className="text-gray-400 uppercase tracking-wide text-[11px]">Phone</p>
                <a className="text-white text-sm sm:text-base underline-offset-2 hover:underline" href="tel:+918181869595">+91 8181869595</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-cyan-400"><FaEnvelope aria-hidden="true" /></span>
              <div>
                <p className="text-gray-400 uppercase tracking-wide text-[11px]">Email</p>
                <a className="text-cyan-400 text-sm sm:text-base underline" href="mailto:buildwiththriver@gmail.com">buildwiththriver@gmail.com</a>
              </div>
            </li>
          </ul>

          {/* Quick social links */}
          <div className="mt-6 flex items-center gap-3">
            <a href="https://github.com/Priyanshu2004-Singh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors">
              <FaGithub />
            </a>
            <a href="https://instagram.com/priyanshu_singh_69_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-singh-a17807231/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.fiverr.com/users/thriver2004/seller_dashboard" target="_blank" rel="noopener noreferrer" aria-label="Fiverr" title="Fiverr" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors">
              <SiFiverr />
            </a>
          </div>

          {/* Mailto fallback */}
          <div className="mt-4">
            <a href="mailto:buildwiththriver@gmail.com?subject=Project%20Inquiry&body=Hi%20Priyanshu,%20I'd%20like%20to%20discuss..." className="inline-block mt-2 px-4 py-2 border border-white/30 rounded-md btn-accent">Email me directly</a>
          </div>
        </div>

        {/* Right: Form card */}
        <div className="glass border border-white/10 rounded-xl p-5 sm:p-6 animate-fade-in delay-400">
          <h3 className="text-2xl font-bold text-center mb-6">Quick Contact Form</h3>
          <form className="space-y-4" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="Your Name" autoComplete="name" required className="w-full bg-gray-800/70 border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-md" />
              <label className="sr-only" htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" placeholder="Your Email" autoComplete="email" required className="w-full bg-gray-800/70 border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-md" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="phone">Your Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="Your Phone" autoComplete="tel" className="w-full bg-gray-800/70 border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-md" />
              <label className="sr-only" htmlFor="address">Address</label>
              <input id="address" name="address" type="text" placeholder="Address" autoComplete="street-address" className="w-full bg-gray-800/70 border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-md" />
            </div>
            <label className="sr-only" htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Your Message..." rows="4" required className="w-full bg-gray-800/70 border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-md"></textarea>
            <button type="submit" className="w-full bg-white text-black font-semibold py-3 border border-white/10 transition-colors duration-300 hover:bg-cyan-500 hover:text-white rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;