'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen px-6 py-28 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white rounded-t-3xl mt-24 shadow-inner"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-snug relative inline-block">
          <span className="relative z-10 mb-2">Let’s Connect and Build Something Meaningful</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-0 rounded"></span>
        </h2>

        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          I'm always open to new opportunities, collaborations, or conversations around frontend development.
          If you’re working on something exciting or just want to connect professionally, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/10 shadow-lg space-y-6 text-base sm:text-lg text-gray-300 text-left max-w-xl mx-auto">
          <div className="flex items-start gap-3">
            <FiLinkedin className="text-indigo-400 mt-1 animate-pulse" size={20} />
            <p>
              Connect with me on{' '}
              <a
                href="https://www.linkedin.com/in/rupam-acharya-263aa8258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300 transition"
              >
                LinkedIn
              </a>{' '}
              to explore ideas or opportunities.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FiMail className="text-indigo-400 mt-1 animate-pulse" size={20} />
            <p>
              Or reach out via email:{' '}
              <a
                href="mailto:rupamacharya14@gmail.com"
                className="text-indigo-400 underline hover:text-indigo-300 transition"
              >
                rupamacharya14@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Tagline (Optional) */}
        <p className="text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} Rupam Acharya. Crafted with React & Next.js
        </p>
      </div>
    </motion.section>
  );
}
