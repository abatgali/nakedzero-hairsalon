import Appointment from "@/components/Appointment";
import React from "react";
import { getSEOTags } from "@/libs/seo";

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
    <div className="container mx-auto my-16">
      <h1 className="text-4xl font-bold text-center">Get an Appointment</h1>
      <Appointment />
    </div>
  );
}
