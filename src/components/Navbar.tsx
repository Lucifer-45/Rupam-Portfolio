'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Home', id: 'about', type: 'scroll' },
  { label: 'Projects', id: 'projects', type: 'scroll' },
  {
    label: 'Download Resume',
    id: 'resume',
    type: 'download',
    href: '/rupam-resume.pdf',
  },
  { label: "Let's Connect", id: 'contact', type: 'scroll' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-[#0e0e1c]/70 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600 dark:text-white tracking-wider">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ label, id, type, href }) =>
            type === 'download' ? (
              <a
                key={id}
                href={href}
                download
                className="text-gray-800 dark:text-gray-200 font-medium relative group"
              >
                {label}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-indigo-500 absolute bottom-[-2px] left-0"></span>
              </a>
            ) : (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id)}
                className="text-gray-800 dark:text-gray-200 font-medium relative group"
              >
                {label}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-indigo-500 absolute bottom-[-2px] left-0"></span>
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-900 dark:text-white focus:outline-none z-50 relative"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#0e0e1c] text-white z-[999] flex flex-col justify-center items-center space-y-10 text-xl font-semibold"
          >
            {navItems.map(({ label, id, type, href }) =>
              type === 'download' ? (
                <a
                  key={id}
                  href={href}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-indigo-400 transition"
                >
                  {label}
                </a>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  className="hover:text-indigo-400 transition"
                >
                  {label}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
