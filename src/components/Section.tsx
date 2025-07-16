'use client';

import { motion } from 'framer-motion';

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
className="min-h-screen flex flex-col justify-center items-center px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <div className="max-w-3xl text-center text-gray-600">{children}</div>
    </motion.section>
  );
}
