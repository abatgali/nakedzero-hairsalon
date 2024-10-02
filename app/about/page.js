"use client";
import { cn } from "@/libs/utils";
import React from "react";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
// import { getSEOTags } from "@/libs/seo";
// export const metadata = getSEOTags({
//   title: "NakedzerO - South Indy's Best Salon",
//   description:
//     "NakedzerO is the premier hair salon in Indianapolis and Greenwood. We specialize in trendy haircuts, flawless fades, stunning hair coloring, impeccable styling, rejuvenating treatments, and captivating makeovers.",
//   keywords: ["Mui le sam", "Great haircuts", "haircut near me", "Hair Clips"],
//   canonicalUrlRelative: "/about",
// });

export default function About() {
  const features = [
    {
      title: "From Myanmar to Indy",
      description:
        "",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
    },
    {
      title: "Customer Photos from our Salon",
      description:
        "At NakedzerO, our talented stylists are dedicated to helping you look and feel your absolute best. From special occasions to everyday moments, we'll work with you to create custom hairstyles that make you shine.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
  ];
  return (
    <div className="relative z-20 pt-32 pb-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          5+ years in Business
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-center font-normal text-neutral-300">
          Bringing you style and smiles since 2019, with hundreds of happy
          customers!
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-center font-normal text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/Salon%20cover%20picture.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-auto object-cover object-center rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://storage.googleapis.com/allprojectsdata/about%20page/Shared%20IMG%206855.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Shared%20IMG%205227%201.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Shared%20IMG%206849.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Shared%20IMG%204457.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Salon%20IMG%200248.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Salon%20Image%200238.jpg",
  ];

  const moreImages = [
    "https://storage.googleapis.com/allprojectsdata/about%20page/Salon%20Image%200235.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Shared%20IMG%203367%201.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Salon%20Image%200238.jpg",
    "https://storage.googleapis.com/allprojectsdata/about%20page/Salon%20Images%200240.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="salon images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {moreImages.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};
