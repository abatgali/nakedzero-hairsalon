import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Background.module.css";

export default function CTAn() {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className={`z-10 ${styles.bgImage}`}>
              <div className="w-full h-full p-8 md:p-12 lg:px-16 lg:py-24 bg-opacity-60 bg-black">
                <div className="mx-auto max-w-xl text-center  ">
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Discover Your Best Hair Yet!
                  </h2>

                  <p className="hidden text-white/90 sm:mt-4 sm:block">
                    Explore our exclusive range of hair care products, tailored
                    for every hair type and texture. Elevate your daily routine
                    with our premium selections.
                  </p>

                  <div className="mt-4 md:mt-8 ">
                    <a href="/products">
                      <button className="bg-black rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-3 border-2 border-amber-400 rounded-md text-lg mr-4 hover:bg-emerald-700 transition duration-300">
                        Find Products
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <div
                className={`h-40 w-full object-cover sm:h-56 md:h-full ${styles.bgImage2}`}
              ></div>
              <div
                className={`h-40 w-full object-cover sm:h-56 md:h-full ${styles.bgImage3}`}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
