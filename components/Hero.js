'use client'
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(".heading span", {opacity: 0, y: 20}, {
      opacity: 1,
      y: 0,
      stagger: 0.05, // This creates the staggered effect
      duration: 1
    });
  }, []);

  return (
    <>
    </>
  );
};

export default Hero;
