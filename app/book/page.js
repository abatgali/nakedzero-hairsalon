import Appointment from "@/components/Appointment";
import React from "react";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Book an Appointment",
  description: "Book an appointment with us to get the best service",
  canonicalUrlRelative: "/book",
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
      <div className="pt-8 px-2 sm:pt-16 mb-4 text-left container sm:w-3/4 mx-auto">
        <Link href="/">&larr; Back to home</Link>
      </div>
      <Appointment />
    </div>
  );
}
