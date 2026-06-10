"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AppointmentLink from "./CalScheduler";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`h-fit bg-stone-950 backdrop-blur-md inset-0 top-0 z-50 fixed w-full transition-all duration-300 ${
        scrolled ? "bg-opacity-90 shadow-lg" : "bg-opacity-75"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:pt-4 pt-2">
        <div
          className={`flex w-full gap-2 max-sm:hidden transition-all duration-300 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-8 opacity-100"
          }`}
        >
          <a
            href="https://maps.app.goo.gl/dPStnF9wuXyXjfvb6"
            className="flex items-center gap-2 text-gray-300 transition hover:text-white"
            target="new"
          >
            <CiLocationOn />
            <span>8319 US 31 S</span>
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="tel:3177017294"
            className="flex items-center gap-2 text-gray-300 transition hover:text-white"
          >
            <MdOutlineLocalPhone />
            <span>317-701-7294</span>
          </a>
        </div>
        <div className="flex h-auto items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <div>
                <span
                  className={`font-bold transition-all duration-300 ${
                    scrolled ? "text-3xl" : "text-[45px] max-sm:text-4xl"
                  }`}
                >
                  NakedzerO
                </span>{" "}
                &nbsp;
                <span
                  className={`font-light max-lg:hidden pl-4 transition-all duration-300 ${
                    scrolled ? "text-2xl" : "text-[32px]"
                  }`}
                >
                  Hair Salon
                </span>
              </div>
            </a>
          </div>
          <div className="flex sm:flex-col max-sm:gap-2">
            <div className="md:flex md:items-center md:gap-10">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-xl">
                  <li>
                    <Link
                      className="text-gray-300 transition hover:text-white"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 transition hover:text-white"
                      href="/#location"
                    >
                      Location
                    </Link>
                  </li>
                </ul>
              </nav>
              <AppointmentLink>
                <button className="bg-orange-400 bg-opacity-30 hover:bg-orange-400 border-2 border-orange-400  rounded-md rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-2 text-lg transition duration-300">
                  Book
                </button>
              </AppointmentLink>
            </div>
          </div>
        </div>
        <div
          className={`flex w-full gap-2 sm:hidden transition-all duration-300 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-8 opacity-100"
          }`}
        >
          <a
            href="https://maps.app.goo.gl/dPStnF9wuXyXjfvb6"
            className="flex items-center gap-2 text-gray-300 transition hover:text-white"
            target="new"
          >
            <CiLocationOn />
            <span>8319 US 31 S</span>
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="tel:3177017294"
            className="flex items-center gap-2 text-gray-300 transition hover:text-white"
          >
            <MdOutlineLocalPhone />
            <span>317-701-7294</span>
          </a>
        </div>
      </div>
    </header>
  );
}
