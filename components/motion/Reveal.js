"use client";

import { motion, useReducedMotion } from "framer-motion";

// Fade-up reveal for content entering the viewport. Runs once.
// Falls back to a plain opacity fade when the user prefers reduced motion.
export default function Reveal({ children, delay = 0, className }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
