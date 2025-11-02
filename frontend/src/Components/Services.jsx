// src/components/Services.jsx
import React from 'react';
import { FaPaintBrush, FaCode, FaRobot, FaMobileAlt, FaHeadset } from 'react-icons/fa';
import app from "../assets/app.jpg"
import ai from "../assets/ai.jpg"
import webdesing from "../assets/webdesign.jpg"
import development from "../assets/development.jpg"
import support from "../assets/support.jpg"
import OptimizedImage from './OptimizedImage'

const Services = () => {
        const items = [
            // TODO: replace the url values with your real GitHub repository links
            { title: 'Web Design', desc: 'I specialize in creating visually stunning and user-friendly websites that are responsive, modern, and optimized for performance.', img: webdesing, iconEl: <FaPaintBrush className="text-white" aria-hidden="true" />, url: 'https://github.com/Priyanshu2004-Singh/QuizWebsite' },
            { title: 'Development', desc: 'I build scalable, efficient, and maintainable web applications using modern technologies and best practices.', img: development, iconEl: <FaCode className="text-white" aria-hidden="true" />, url: 'https://github.com/Priyanshu2004-Singh/Job-Portal' },
            { title: 'AI Based Web/App', desc: 'I develop intelligent web and mobile applications that leverage AI to deliver personalized, data-driven, and interactive experiences.', img: ai, iconEl: <FaRobot className="text-white" aria-hidden="true" />, url: 'https://github.com/Priyanshu2004-Singh/KOLAMHackathon' },
            { title: 'App Development', desc: 'I create high-quality, responsive mobile applications for iOS and Android that are fast, user-friendly, and scalable.', img: app, iconEl: <FaMobileAlt className="text-white" aria-hidden="true" />, url: 'https://github.com/Priyanshu2004-Singh/calmCore' },
            { title: '24×7 Support', desc: 'Providing round-the-clock assistance to ensure your websites and applications run smoothly without interruptions.', img: support, iconEl: <FaHeadset className="text-white" aria-hidden="true" />, url: 'here Goes my portolio contact #contact me' },
        ];

    return (
        <section aria-labelledby="services-heading" style={{ backgroundColor: "rgb(32, 32, 32)" }} className="text-white py-14 sm:py-16 px-4 md:px-16 lg:px-32 animate-fade-in">
            <div className="text-center mb-10 sm:mb-12">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">What I Do</p>
                <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">MY SERVICES</h2>
            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                {items.map(({ title, desc, img, iconEl, url }) => (
                    <article key={title} className="relative group overflow-hidden rounded-xl border border-white/10 glass animate-fade-in delay-200">
                        {/* Image background */}
                                                <div className="absolute inset-0">
                                                        <OptimizedImage
                                                            src={img}
                                                            alt={title}
                                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                            className="w-full h-full object-cover card-img"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                                </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-end h-full aspect-[4/3] sm:aspect-square p-4 sm:p-5">
                            {/* Icon */}
                                                                                        <div className="absolute top-4 left-4 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                                                {iconEl}
                                            </div>

                                                        <div className="transform transition-transform duration-500 translate-y-0 sm:translate-y-10 sm:group-hover:translate-y-0">
                                                                <h3 className="text-lg sm:text-2xl font-bold mb-1">{title}</h3>
                                                                <p className="text-xs sm:text-base text-gray-300">{desc}</p>
                            </div>

                            {/* Action */}
                                                                <div className="mt-3 sm:mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                                    <a
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                                                            className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 text-sm font-semibold border border-white/30 rounded-md btn-accent"
                                      aria-label={`Open ${title} on GitHub in a new tab`}
                                    >
                                      Learn more
                                    </a>
                                </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;