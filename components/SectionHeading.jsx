"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      
      <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-zinc-400">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
