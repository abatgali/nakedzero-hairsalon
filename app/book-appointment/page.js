import Appointment from "@/components/Appointment";
import React from "react";
import { getSEOTags } from "@/libs/seo";
import Image from "next/image";
import Link from "next/link";
import css from "@/components/styles/marquee.module.css";

export const metadata = getSEOTags({
  title: "Book Your Hair Makeover in Greenwood | Indianapolis",
  description: "Book an appointment with us to get the best service",
  canonicalUrlRelative: "/book-appointment",
  keywords: [
    "book",
    "appointment",
    "haircut",
    "hair color",
    "hair styling",
    "hair treatment",
    "hair care",
    "Greenwood haircut",
  ],
});

export default function Book() {
  return (
    <div className="container mx-auto my-24">
      <div className="container sm:w-3/5 mx-auto pt-8 px-8 ">
        <Image src={'https://storage.googleapis.com/allprojectsdata/book%20page/barber_chair.png'} alt="barber chair" width={200} height={200} className="mx-auto py-2" />
        <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Book Your Salon Appointment Today
        </h1>
      </div>
      <div className={`pt-12 overflow-hidden ${css.marquee}`}>
        <div className={`${css.marqueecontent} w-full flex flex-row`}>
          <div className="gap-5 flex sm:flex-row text-black">
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[30px] rounded-md rounded-br-[40px] bg-orange-200">
              Shape & Style
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Perms
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Straightening
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Balayage
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Highlights
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Gentleman Fades
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Scalp Treatment
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Facial Massage
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Deep Cleansing
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Gloss Toning
            </div>
            <div className="w-40 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              Full Coloring
            </div>
            <div className="w-48 text-center text-lg  px-5 py-4 rounded-tl-[40px] rounded-md rounded-br-[40px] bg-orange-200">
              NakedzerO Hair Serum
            </div>
          </div>
        </div>
      </div>
      <Appointment />
    </div>
  );
}
