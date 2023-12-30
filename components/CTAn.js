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
            <div className=" bg-gradient-to-b from-slate-900 to-teal-600 p-8 md:p-12 lg:px-16 lg:py-24 z-10 bgImage">
              <div className="mx-auto max-w-xl text-center  ">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Ready to dive in?
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Treating all kinds of hair types and textures, we offer a wide
                  range of services to help you look and feel your best.
                </p>
                <p className="text-white/90 sm:mt-4 hidden sm:block">
                  Our stylists are trained in the latest techniques and trends,
                  and are passionate about helping you achieve your hair goals.
                </p>
                <div className="mt-4 md:mt-8 ">
                  <div className=" inline-block btn border-white bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                    <Link
                      href="https://cal.com/team/nakedzero-hair-salon/hair-cut"
                      target="new"
                    >
                      Get an Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                alt="Hair dyeing"
                src="https://images.pexels.com/photos/4981460/pexels-photo-4981460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                width={1260}
                height={750}
              />

              <Image
                alt="Permanent hair curling"
                src="https://images.pexels.com/photos/3065208/pexels-photo-3065208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
