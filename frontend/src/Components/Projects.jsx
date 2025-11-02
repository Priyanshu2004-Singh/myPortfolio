// src/components/Projects.jsx
import React, { useMemo, useState } from 'react';

// Stable project data with fixed images and GitHub links
const projectsData = [
  { id: 1, category: 'Web Application', title: 'Job Portal Website', image: 'https://picsum.photos/id/1011/800/600', url: 'https://github.com/Priyanshu2004-Singh/Job-Portal' },
  { id: 2, category: 'Web Application', title: 'Quiz Website', image: 'https://picsum.photos/id/1027/800/600', url: 'https://github.com/Priyanshu2004-Singh/QuizWebsite' },
  { id: 3, category: 'App Development', title: 'Kolam App (AI-based)', image: 'https://picsum.photos/id/1035/800/600', url: 'https://github.com/Priyanshu2004-Singh/KOLAMHackathon' },
  { id: 4, category: 'App Development', title: 'AI Healthcare App', image: 'https://picsum.photos/id/1041/800/600', url: 'https://github.com/Priyanshu2004-Singh' },
  { id: 5, category: 'Web Design', title: 'UI/UX Design Showcase', image: 'https://picsum.photos/id/1050/800/600', url: 'https://github.com/Priyanshu2004-Singh' },
  { id: 6, category: 'Web Design', title: 'Creative Mockups', image: 'https://picsum.photos/id/1062/800/600', url: 'https://github.com/Priyanshu2004-Singh' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(projectsData.map(p => p.category)))], []);
  const filteredProjects = useMemo(
    () => projectsData.filter(p => filter === 'All' || p.category === filter),
    [filter]
  );

  return (
    <section aria-labelledby="projects-heading" className="bg-black text-white py-14 md:py-16 px-4 md:px-16 lg:px-32 animate-fade-in">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">------Portfolio------</p>
        <h2 id="projects-heading" className="text-3xl md:text-5xl font-bold mt-2">WORK I HAVE DONE</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
        {categories.map(cat => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border transition-all ${
                active ? 'bg-white text-black border-white' : 'border-white/20 text-gray-300 hover:text-white hover:border-white/40'
              }`}
              aria-pressed={active}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map(project => (
          <article key={project.id} className="relative group overflow-hidden rounded-xl border border-white/10 glass animate-fade-in delay-200">
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} className="block">
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover card-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Overlay Text */}
              <div className="absolute inset-0 p-4 flex items-end">
                <div className="w-full transform transition-transform duration-500 translate-y-0 sm:translate-y-6 sm:group-hover:translate-y-0">
                  <h3 className="text-lg md:text-2xl font-semibold">{project.title}</h3>
                  <div className="mt-1 flex items-center justify-between text-gray-300">
                    <p className="text-xs md:text-sm">{project.category}</p>
                    <span className="hidden sm:inline text-xs md:text-sm underline">View on GitHub →</span>
                  </div>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;