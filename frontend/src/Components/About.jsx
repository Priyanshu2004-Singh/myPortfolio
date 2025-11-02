// src/components/About.jsx
import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiFramer } from 'react-icons/si';
import about from "../assets/about.avif";
import OptimizedImage from './OptimizedImage';

const About = () => {
  const skills = [
    { label: 'React', iconEl: <FaReact className="text-cyan-400" aria-hidden="true" /> },
    { label: 'Node.js', iconEl: <FaNodeJs className="text-cyan-400" aria-hidden="true" /> },
    { label: 'Express', iconEl: <SiExpress className="text-cyan-400" aria-hidden="true" /> },
    { label: 'MongoDB', iconEl: <SiMongodb className="text-cyan-400" aria-hidden="true" /> },
    { label: 'TailwindCSS', iconEl: <SiTailwindcss className="text-cyan-400" aria-hidden="true" /> },
    { label: 'TypeScript', iconEl: <SiTypescript className="text-cyan-400" aria-hidden="true" /> },
    { label: 'Framer Motion', iconEl: <SiFramer className="text-cyan-400" aria-hidden="true" /> },
  ];

  return (
    <section aria-labelledby="about-heading" className="bg-[#111] text-white py-14 sm:py-16 px-4 md:px-16 lg:px-32 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl text-center lg:text-left animate-fade-in delay-200">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-2 uppercase tracking-widest">Expert Web Developer & Designer</p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gray-400 mx-auto lg:mx-0 mb-6 sm:mb-8" />

          <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            I design and build responsive, fast, and accessible web apps with a strong focus on delightful user
            experiences and clean, maintainable code. I love turning ideas into polished products.
          </p>
          <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            My approach blends modern tooling, performance-first practices, and a collaborative mindset to ship
            features efficiently without compromising quality.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
            {skills.map(({ label, iconEl }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-gray-200">
                {iconEl}
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
            <a
              href="/cv.pdf"
              download="Priyanshu_Singh_CV.pdf"
              aria-label="Download CV as PDF"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 md:py-3 border border-white text-white font-semibold shadow-lg transition-all duration-300 btn-accent hover:bg-[#0A0A0A]"
            >
              Download CV
            </a>
            <a href="#contact" className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 md:py-3 border border-white/30 text-white font-semibold rounded-md hover:border-white transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative flex justify-center lg:justify-end animate-float delay-400">
          {/* Decorative glow */}
          <div className="absolute -top-6 -left-6 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-cyan-500/20 blur-3xl -z-10" />
          <picture>
            <source srcSet={about} type="image/avif" />
            <OptimizedImage
              src={about}
              alt="Portrait"
              className="w-56 sm:w-72 md:w-96 lg:w-[22rem] xl:w-[26rem] h-auto rounded-xl border border-white/10 p-3 bg-white/5"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default About;
