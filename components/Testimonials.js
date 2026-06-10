import Link from "next/link";
import React from "react";

export default function Testimonials() {
  return (
    <div>
      <section className="bg-base-100 my-32">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ">
          <h2 className="text-center text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-white">
            Been in Our Chairs?
          </h2>
          <p className="w-2/3 text-center mx-auto my-5">
            A quick Google review is how most of our neighbors find us, and it
            genuinely helps a small shop like ours. If anything was not right,
            call us first so we can make it right.
          </p>
          <div className="flex justify-center gap-5 ">
            <Link
              href="https://g.page/r/CZouyobgk2EYEBM/review"
              target="new"
            >
              <button className="backdrop-blur-sm bg-orange-400 bg-opacity-30 hover:bg-orange-400 border-2 border-orange-400 rounded-md rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-3 text-lg transition duration-300">
                Leave a Google Review
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mb-8"></div>
      </section>
    </div>
  );
}
