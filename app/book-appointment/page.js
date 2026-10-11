import Appointment from "@/components/Appointment";
import React from "react";
import { getSEOTags } from "@/libs/seo";
import Image from "next/image";
import ServiceMarquee from "@/components/ServiceMarquee";

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
        <Image src={'https://storage.googleapis.com/allprojectsdata/book%20page/barber_chair.png'} alt="Book a hair salon appointment at NakedzerO" width={75} height={75} className="mx-auto py-2" />
        <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Book Your Salon Appointment Today
        </h1>
      </div>
      <ServiceMarquee />
      <Appointment />
    </div>
  );
}
