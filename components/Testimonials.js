import Link from "next/link";
import React from "react";

export default function Testimonials() {
  return (
    <div>
      <section className="bg-base-100 my-32">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
            Say Hi
          </h2>
          <p className="w-2/3 text-center mx-auto my-5">
            We highly appreciate your feedback and would love to hear from you.
            Please take a moment to write us a review using the link provided
            below. Your review will help us improve our services and serve you
            better in the future.
          </p>
          <div className="flex justify-center gap-5 ">
            <Link
              href="https://testimonial.to/nakedzero-hair-salon"
              target="new"
            >
              <button className="bg-orange-400 bg-opacity-30 hover:bg-orange-400 border-2 border-orange-400  rounded-md rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-2 text-lg mr-4 transition duration-300">
                Post a Review
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mb-8"></div>
      </section>
    </div>
  );
}
