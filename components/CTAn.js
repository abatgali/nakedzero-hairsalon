import React from "react";
import Image from "next/image";
import Link from "next/link";
import skincare from "@/public/images/IMG_0246.png";
import styles from "./styles/Background.module.css";
import haircare from "@/public/images/IMG_0244.png";

export default function CTAn() {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className={`  z-10 ${styles.bgImage}`}
            >
              <div className="w-full h-full p-8 md:p-12 lg:px-16 lg:py-24 bg-opacity-10 bg-orange-600">
                <div className="mx-auto max-w-xl text-center  ">
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Discover Your Best Hair Yet!
                  </h2>

                  <p className="hidden text-white/90 sm:mt-4 sm:block">
                    Explore our exclusive range of hair care products, tailored
                    for every hair type and texture. Elevate your daily routine
                    with our premium selections.
                  </p>
                  <p className="text-white/90 sm:mt-4 hidden sm:block">
                    Our expert stylists recommend the finest products,
                    incorporating the latest hair care innovations, to help you
                    achieve and maintain your dream look.
                  </p>

                  <div className="mt-4 md:mt-8 ">
                    <div className="rounded-tl-[40px] rounded-br-[40px] border-white bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                      <Link href="/products" target="new">
                        Our Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                alt="Hair dyeing"
                src={haircare}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                width={1260}
                height={750}
              />

              <Image
                alt="Permanent hair curling"
                src={skincare}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                width={1260}
                height={750}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
