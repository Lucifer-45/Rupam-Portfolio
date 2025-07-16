'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Props
export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  url: string;
}

// Polished Project Card
const ProjectCard = ({ title, description, tech, url }: ProjectCardProps) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="group relative w-full sm:w-[340px] rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-indigo-500/30 p-6 overflow-hidden transition-all"
  >
    <div className="absolute top-4 right-4 text-indigo-500 group-hover:text-indigo-400 transition">
      <ExternalLink size={18} />
    </div>

    <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400 mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

    <div className="flex flex-wrap gap-2 mt-auto">
      {tech.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-800/30 text-indigo-700 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-600"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
  </motion.a>
);

// Data
const projects = [
  {
    title: 'LinkedIn Clone — College Project',
    description:
      'A LinkedIn-style social platform with a clean UI and responsive layout using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://linkedin-repo-tan.vercel.app',
  },
  {
    title: 'Client Portfolio Website',
    description:
      'Responsive portfolio built with Next.js, Tailwind CSS, SEO optimizations, and Framer Motion animations.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://portfolio2-0-eight-rouge.vercel.app',
  },
  {
    title: 'Quick Commerce App — Internship',
    description:
      'A fast-paced e-commerce app with dynamic filtering, cart flow, and robust API integration using React and Next.js.',
    tech: ['Next.js', 'React', 'API Integration'],
    url: 'https://qc-web.onrender.com',
  },
];

// Projects Section
export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3 text-indigo-600 dark:text-indigo-400 tracking-tight">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          A few featured works where design, performance, and usability intersect to create polished digital products.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-20 h-20 bg-gradient-to-b from-transparent to-black dark:to-gray-950" />
    </motion.section>
  );
}
