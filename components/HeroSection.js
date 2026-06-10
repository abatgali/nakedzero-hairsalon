"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div ref={ref} className="relative h-screen w-full">
      <motion.div
        style={reduceMotion ? {} : { opacity, scale }}
        className="h-full w-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/hero_vid_salon.mp4"
        />
        <div className="absolute w-full h-full bg-black bg-opacity-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 ">
            NakedzerO<span className="font-light"> Hair Salon</span>
          </h1>
          <p className="text-white text-lg mb-8 text-center">
            Cuts, color, and barbering on Indy&apos;s south side since 2019.
          </p>
          <div className="flex max-sm:flex-col gap-4 px-4">
            <Link href="#services">
              <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-md rounded-tl-[20px] rounded-br-[20px] px-6 py-3 text-lg transition duration-300">
                See Services &amp; Prices
              </button>
            </Link>
            <Link href="/#appointment">
              <button className="w-full backdrop-blur-sm bg-orange-400 bg-opacity-30 hover:bg-orange-400 border-2 border-orange-400 rounded-md rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-3 text-lg transition duration-300">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
