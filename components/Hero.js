"use client";
import Image from "next/image";
import styles from "./styles/Background.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import texture from "../public/images/herotexture.jpeg";
import HeroImages from "./HeroImages";
import AppointmentLink from "./CalScheduler";
import Link from "next/link";

const Hero = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    // Scope the selector to this component so it doesn't grab the video
    // hero's elements, which share the .heading class.
    const ctx = gsap.context(() => {
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
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={rootRef}
        className="h-auto relative overflow-x-hidden overflow-y-hidden"
      >
        <div className="min-h-screen bg-gradient-to-b from-black via-emerald-700 to-gray-800">
          <div className={`w-full h-auto`}>
            <Image
              className="mix-blend-overlay opacity-20"
              src={texture}
              alt=""
              role="presentation"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-row sm:flex-col justify-between w-full">
            <div className="text-white text-center md:text-right absolute top-0 md:w-1/2 sm:translate-y-[250px] md:translate-y-[120px] lg:translate-y-[250px] translate-y-[450px] z-20">
              <div className="flex flex-col max-md:backdrop-blur-md max-sm:bg-black max-sm:bg-opacity-30 pt-4">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold heading xl:ml-auto">
                  Your salon on the{" "}
                  <span className="text-orange-400">Greenwood</span> line
                </h2>
                <p className="mt-4 sm:mt-8 w-full lg:w-3/4 max-md:px-4 md:ml-auto lg:text-xl text-normal max-md:mx-auto md:pl-2">
                  We opened NakedzerO in 2019 on{" "}
                  <Link href="#location">
                    <u>US 31, just up the road from downtown Greenwood</u>
                  </Link>
                  , and we have filled our chairs the old-fashioned way ever
                  since, one good haircut at a time. Bring us a photo, a vague
                  idea, or just say fix it. We will talk through what your hair
                  can actually do before we pick up the scissors. Cuts,
                  balayage, perms, straightening, facials. It all happens here,
                  Monday through Saturday until 8.
                </p>
                <div className="flex flex-row gap-5 sm:gap-8 max-md:mx-auto pl-4 sm:ml-auto my-8 sm:mt-12 text-center">
                  <a href="/#services">
                    <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-md rounded-tl-[20px] rounded-br-[20px] px-6 py-3 text-lg transition duration-300">
                      See Services &amp; Prices
                    </button>
                  </a>
                  <AppointmentLink>
                    <button className="backdrop-blur-sm bg-orange-400 bg-opacity-30 hover:bg-orange-400 border-2 border-orange-400 rounded-md rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-3 text-lg transition duration-300">
                      Book an Appointment
                    </button>
                  </AppointmentLink>
                </div>
              </div>
            </div>
            <div className="heading z-10">
              <HeroImages />
            </div>
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
