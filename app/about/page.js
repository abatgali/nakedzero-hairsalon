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
      title: "Track issues effectively",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
    },
    {
      title: "Capture pictures with AI",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
    {
      title: "Watch our AI on YouTube",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-neutral-800",
    },
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 pt-32 pb-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          5+ years in Business
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-center font-normal text-neutral-300">
          Serving looks since 2019, hundreds of happy customers!
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

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
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
      <div className="flex flex-row">
        {images.map((image, idx) => (
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

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }) => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      dark: 1,
      theta: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [39.64520490663246, -86.13241229231019], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
  // return (
  //   <div className="text-center py-16 sm:py-24">
  //     <div className="pt-8 px-2 sm:pt-16 mb-4 text-left container sm:w-3/4 mx-auto">
  //       <Link href="/">&larr; Back to home</Link>
  //     </div>
  //     <h1 className="text-4xl font-bold mt-12">About Us</h1>
  //     <Image
  //       className="mx-auto mt-8"
  //       src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/Salon%20cover%20picture.jpg"
  //       width={800}
  //       height={500}
  //       alt="Nakedzero Hair Salon store front"
  //     />
  //     <div className="container min-h-screen sm:py-16 mx-auto lg:w-1/3 xl:w-1/4">
  //       <div className="px-4 mt-4">
  //         <header>
  //           <h2 className="text-2xl font-bold">
  //             Elevate Your Look with NakedzerO: The Premier Hair Salon in
  //             Indianapolis & Greenwood
  //           </h2>
  //         </header>
  //         <article>
  //           <p className="mt-4">
  //             Are you ready to transform your hairstyle and elevate your look to
  //             new heights? Look no further than NakedzerO, the leading hair
  //             salon serving the vibrant communities of Indianapolis and
  //             Greenwood. At NakedzerO, we specialize in providing trendy
  //             haircuts, flawless fades, stunning hair coloring, impeccable
  //             styling, rejuvenating treatments, and captivating makeovers that
  //             perfectly complement your unique features.
  //           </p>
  //           <p className="mt-4">
  //             Originating from the rich cultural heritage of Myanmar/Burma,
  //             where hair salons are affectionately known as &quot;Mui le
  //             sam&quot;, NakedzerO has been redefining haircare and beauty since
  //             2019. Our commitment to excellence, paired with our passion for
  //             artistic expression, sets us apart as a premier destination for
  //             all your hairstyling needs.
  //           </p>
  //           <h3 className="text-xl font-bold mt-8">
  //             Trendy Haircuts Tailored to You
  //           </h3>
  //           <p>
  //             Step into NakedzerO and experience the artistry of our skilled
  //             stylists. Whether you&apos;re seeking a bold new look or a subtle
  //             change, our team is dedicated to delivering precision cuts that
  //             reflect your individual style and personality. From classic styles
  //             to avant-garde creations, we take pride in crafting hairstyles
  //             that turn heads and leave a lasting impression.
  //           </p>
  //           <h3 className="text-xl font-bold mt-8">
  //             Flawless Fades for the Modern Gentleman
  //           </h3>
  //           <p>
  //             Gentlemen, indulge in the luxury of a flawless fade at NakedzerO.
  //             Our barbers are masters of their craft, using cutting-edge
  //             techniques to achieve seamless transitions and impeccable
  //             precision. Whether you prefer a low fade, high fade, or something
  //             in between, trust NakedzerO to deliver a fade that exudes
  //             confidence and sophistication.
  //           </p>
  //           <h3 className="text-xl font-bold mt-8">
  //             Stunning Hair Coloring for Vibrant Results
  //           </h3>
  //           <p>
  //             Unleash your inner artist with our exquisite hair coloring
  //             services. From vibrant hues to natural tones, our color
  //             specialists utilize premium products and innovative techniques to
  //             achieve stunning results. Whether you desire a subtle balayage or
  //             a bold fashion color, NakedzerO is your destination for vibrant,
  //             head-turning hair color.
  //           </p>
  //           <h3 className="text-xl font-bold mt-8">
  //             Impeccable Styling for Every Occasion
  //           </h3>
  //           <p>
  //             Discover the power of impeccable styling at NakedzerO. Whether
  //             you&apos;re preparing for a special event or simply want to look
  //             your best every day, our stylists are here to bring your vision to
  //             life. With meticulous attention to detail and a keen eye for
  //             trends, we create hairstyles that enhance your natural beauty and
  //             elevate your confidence.
  //           </p>
  //           <h3 className="text-xl font-bold mt-8">
  //             Rejuvenating Treatments for Healthy Hair
  //           </h3>
  //           <p>
  //             Nourish your hair and revitalize your locks with our rejuvenating
  //             treatments. From hydrating masks to revitalizing scalp treatments,
  //             NakedzerO offers a range of luxurious options designed to promote
  //             healthy hair and restore vitality. Let our experts pamper you with
  //             personalized care, leaving your hair feeling silky smooth and
  //             irresistibly touchable.
  //           </p>
  //           <h3 className="text-xl font-bold mt-8">
  //             Captivating Makeovers that Transform
  //           </h3>
  //           <p>
  //             Ready for a transformative experience? Let NakedzerO work its
  //             magic with captivating makeovers that leave you looking and
  //             feeling like a million bucks. Whether you&apos;re craving a
  //             dramatic change or subtle enhancements, our talented team will
  //             customize a makeover that accentuates your features and
  //             complements your unique style.
  //           </p>
  //           <h3 className="text-xl font-bold mt-8">
  //             Experience the NakedzerO Difference Today
  //           </h3>
  //           <p>
  //             Elevate your look and unleash your inner beauty with NakedzerO,
  //             the premier hair salon in Indianapolis and Greenwood. From trendy
  //             haircuts to flawless fades, hair coloring, styling, treatments,
  //             and makeovers, we offer everything you need to express yourself
  //             with confidence and flair. Schedule your appointment today and
  //             discover why NakedzerO is the ultimate destination for
  //             unparalleled haircare and beauty.
  //           </p>
  //         </article>
  //       </div>
  //     </div>
  //   </div>
  // );
};
