"use client";

import { motion, useReducedMotion } from "framer-motion";

// Grows a price badge in from its colored edge, then fades the price in.
// origin: "left" for badges whose gradient starts on the left, "right" otherwise.
export default function PriceWipe({
  children,
  origin = "left",
  className,
  disableOnMobile = false,
}) {
  const reduceMotion = useReducedMotion();
  const mobileBadgeOverrides = disableOnMobile
    ? " max-sm:!transform-none max-sm:!opacity-100"
    : "";
  const mobilePriceOverrides = disableOnMobile
    ? " max-sm:!opacity-100"
    : "";

  return (
    <motion.div
      className={`${className || ""}${mobileBadgeOverrides}`.trim()}
      style={{
        transformOrigin: origin === "left" ? "left center" : "right center",
      }}
      initial={reduceMotion ? { opacity: 0 } : { scaleX: 0 }}
      whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.span
        className={`inline-block${mobilePriceOverrides}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: 0.25, duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
