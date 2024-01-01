"use client";
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import styles from "./styles/Background.module.css";
import { useEffect } from "react";
import gsap from "gsap";
import texture from "../public/images/herotexture.jpeg";
import HeroImages from "./HeroImages";
import AppointmentLink from "./CalScheduler";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05, // This creates the staggered effect
        duration: 1,
      }
    );
  }, []);

  return (
    <>
      <div className="h-auto relative overflow-x-hidden overflow-y-hidden">
        <div className="min-h-screen bg-gradient-to-b from-stone-950 to-teal-500">
          <div className={`w-full h-auto`}>
            <Image
              className="mix-blend-overlay opacity-20"
              src={texture}
              alt="texture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-row sm:flex-col justify-between w-full">
            <div className="text-white text-center md:text-right absolute top-0 md:w-1/2 sm:translate-y-[250px] md:translate-y-[120px] lg:translate-y-[250px] translate-y-[450px] z-20">
              <div className="flex flex-col max-md:backdrop-blur-md max-sm:bg-black max-sm:bg-opacity-30 pt-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold heading ">
                  Crafting your{" "}
                  <span className="text-orange-400">Signature</span> Look
                </h1>
                <p className="mt-4 sm:mt-8 w-full max-md:px-4 md:ml-auto lg:text-xl text-normal max-md:mx-auto md:pl-2">
                  Discover the NakedzerO difference in the{" "}
                  <Link href="#location">
                    <u>South Indianapolis, Greenwood</u>
                  </Link>{" "}
                  area.
                  <span className="max-sm:hidden">
                    {" "}
                    Our expert stylists are dedicated to creating hairstyles
                    that capture your unique essence. From cutting-edge cuts to
                    vibrant colors and luxurious treatments, we specialize in
                    personalizing your haircare experience. Embrace a new you
                    with our exclusive hair care products and innovative
                    styling, all tailored to your individual style.
                  </span>{" "}
                  Let us help you unveil a look that&apos;s unmistakably yours.
                </p>
                <div className="flex flex-row gap-5 sm:gap-8 max-md:mx-auto pl-4 sm:ml-auto my-8 sm:mt-12 text-center md:text-xl md:font-medium text-sm font-normal">
                  <a href="/products">
                    <div className="w-32 md:w-[216px] md:h-[60px] bg-blue-950 hover:bg-black rounded-tl-[40px] rounded-br-[40px] py-4 shadow-lg hover:shadow-2xl">
                      {" "}
                      Our Products{" "}
                    </div>
                  </a>
                  <AppointmentLink>
                    <div className="hover:bg-teal-600 w-36 md:w-[216px] md:h-[60px] bg-orange-400 rounded-tl-[40px] rounded-br-[40px] py-4 shadow-lg hover:shadow-2xl">
                      {" "}
                      Book Appointment
                    </div>
                  </AppointmentLink>
                </div>
                <div className="mt-4 md:ml-auto">
                  <TestimonialsAvatars />
                </div>
              </div>
            </div>
            <HeroImages />
          </div>
          <div
            id="ellipsethree"
            className={` ${styles.ellipsethree} z-10 absolute top-0`}
          ></div>
        </div>
        <div id="ellipseone" className={` ${styles.ellipseone}`}></div>
        <div id="ellipsetwo" className={` ${styles.ellipsetwo} `}></div>
      </div>
    </>
  );
};

export default Hero;
