'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function AboutSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Making Things From 0 → 1';
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[i]);
        setI(i + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [i]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 sm:px-6 py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-center text-2xl sm:text-4xl font-bold tracking-wide text-indigo-400 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {typedText}
        </motion.h1>

        {/* About Grid */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-400 border-l-4 border-indigo-500 pl-4">
              A bit about me
            </h2>
            <div className="space-y-5 text-base sm:text-lg leading-7 text-gray-700 dark:text-gray-300">
              <p>
                I’m <strong className="text-indigo-500">Rupam Acharya</strong> — a frontend developer passionate about building sleek,
                responsive, and user-first web applications. Currently a final-year B.Tech student, I love turning
                designs into real-world digital experiences.
              </p>
              <p>
                I’ve built full-stack projects using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>,
                including a LinkedIn clone, personal portfolio, and a fast-paced Quick Commerce app.
              </p>
              <p>
                I focus on clean component-based architecture, performance, and smooth UI transitions that enhance the developer and user experience.
              </p>
              <p className="text-indigo-500 font-semibold">
                Frontend isn’t just code — it’s about solving real problems through intuitive experiences.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[360px] sm:max-w-[420px] mx-auto"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              glareEnable={true}
              glareColor="#ffffff"
              glareMaxOpacity={0.2}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-indigo-500">
                <Image
                  src="/rupam.jpg"
                  alt="Rupam Coding"
                  width={480}
                  height={480}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Core Tech Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-200">
            Core Tech Skills
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-center"
          >
            {[
              'HTML', 'CSS', 'JavaScript', 'Python',
              'React.js', 'Next.js', 'Tailwind CSS', 'Node.js',
              'Git', 'GitHub', 'Jira', 'Trello',
              'Postman', 'Dev Tools'
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-sm sm:text-base text-white/90 dark:text-white px-4 py-2 rounded-xl font-semibold select-none
                  relative overflow-hidden z-0
                  before:absolute before:inset-0 before:-z-10
                  before:animate-[gradientMove_6s_linear_infinite]
                  before:bg-[conic-gradient(at_top_left,_#6366f1,_#8b5cf6,_#ec4899,_#6366f1)]
                  before:blur-sm before:opacity-40
                  border border-white/10 shadow-inner"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
