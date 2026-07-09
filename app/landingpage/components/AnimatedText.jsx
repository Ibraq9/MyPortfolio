"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedText({ text, className = "", ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={`relative ${className}`} {...props}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = (i + 1) / chars.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">{char}</span>
            <motion.span
              style={{ opacity }}
              className="absolute inset-0"
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
