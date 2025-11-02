// src/components/HeroSection.jsx
import React from 'react';
import heroImage from "../assets/hero.png"; // Local hero image

const HeroSection = () => {
    return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between md:min-h-screen min-h-[70vh] px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://media.istockphoto.com/id/916306960/photo/faceless-man-in-hoodie-standing-isolated-on-black.jpg?s=612x612&w=0&k=20&c=pMeGd1UuJgvdZ2gV2VQC2Jn3VwMNeW6TF3cG9RIo1tY="
                    alt="Hero Background"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60 pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            {/* Hero Content */}
        <div className="relative z-10 flex-1 text-center lg:text-left mx-4 md:mx-10 py-8 md:py-20 animate-fade-in">
                {/* Small Intro Row */}
                <div className="flex flex-col lg:flex-row items-center lg:items-center mt-30 lg:mt-0 mb-4">
                    <p className="text-xs sm:text-sm md:text-xl lg:text-2xl font-light text-gray-300 uppercase tracking-widest mb-2 lg:mb-0 lg:mr-4">
                        I AM PRIYANSHU SINGH
                    </p>
                    <div className="hidden lg:block h-px w-20 bg-gray-400"></div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6">
                    Full stack developer
                </h1>

                {/* CTA Button */}
                <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 md:py-4 border border-white bg-[#0A0A0A] text-white font-semibold shadow-lg transition-all duration-300 btn-accent hover:bg-[#0A0A0A] hover:border-[#0a8] focus:outline-none animate-pop">
                    CONTACT ME
                </button>


            </div>

            {/* Hero Image (Right Side on large screens) */}
        <div className="relative z-10 flex-1 justify-center md:justify-end mt-6 lg:mt-0 hidden md:flex">
                <img
                    src={heroImage}
                    alt="Priyanshu Singh"
            loading="lazy"
            className="w-40 sm:w-64 md:w-96 lg:w-[32rem] xl:w-[36rem] max-h-[60vh] md:max-h-[90vh] object-contain animate-float" />
            </div>
        </div>
    );
};

export default HeroSection;