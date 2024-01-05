import Link from "next/link";
import React from "react";
import AppointmentLink from "./CalScheduler";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
export default function Nav() {
  return (
    <header className="h-fit bg-stone-950 backdrop-blur-sm inset-0 top-0 z-50 fixed w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:pt-4 py-2">
        <div className="flex w-full gap-2 max-sm:hidden">
          <a
            href="https://maps.app.goo.gl/dPStnF9wuXyXjfvb6"
            className="flex items-center gap-2 text-gray-500 transition hover:text-gray-500/75"
            target="new"
          >
            <CiLocationOn />
            <span>8319 US 31 S</span>
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 text-gray-500 transition hover:text-gray-500/75"
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
                <span className="text-[45px] font-bold max-sm:text-4xl">
                  NakedzerO
                </span>{" "}
                &nbsp;
                <span className="text-[32px] font-light max-lg:hidden pl-4">
                  Hair Salon
                </span>
              </div>
            </a>
          </div>
          <div className="flex sm:flex-col max-sm:gap-2">
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-xl">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/products"
                    >
                      {" "}
                      Products{" "}
                    </a>
                  </li>

                  {/* <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#services"
                  >
                    {" "}
                    Services{" "}
                  </Link>
                </li> */}

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/#location"
                    >
                      {" "}
                      Location{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <AppointmentLink>
                  <div className=" w-32 h-12  max-sm:h-8 px-5 py-2.5 max-sm:py-1 text-center text-white text-xl bg-orange-400 rounded-tl-[20px] rounded-br-[20px] hover:bg-teal-600 hover:shadow-xl hover:shadow-slate-800">
                    Book Now
                  </div>
                </AppointmentLink>

                <div className=" hidden">
                  <button className="rounded-tl-[15px] h-[43px] rounded-br-[15px] bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 sm:hidden">
          <a
            href="https://maps.app.goo.gl/dPStnF9wuXyXjfvb6"
            className="flex items-center gap-2 text-gray-500 transition hover:text-gray-500/75"
            target="new"
          >
            <CiLocationOn />
            <span>8319 US 31 S</span>
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 text-gray-500 transition hover:text-gray-500/75"
          >
            <MdOutlineLocalPhone />
            <span>317-701-7294</span>
          </a>
        </div>
      </div>
    </header>
  );
}
