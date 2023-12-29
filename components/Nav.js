import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <header className="h-fit bg-stone-950 backdrop-blur-sm inset-0 top-0 z-50 fixed w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex h-auto items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <div>
                <span className="text-[45px] font-bold max-sm:text-3xl">NakedzerO</span> &nbsp;
                <span className="text-[32px] font-light max-lg:hidden pl-4">
                  Hair Salon
                </span>
              </div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-xl">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Products{" "}
                  </a>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#services"
                  >
                    {" "}
                    Services{" "}
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Location{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className=" w-32 h-12  max-sm:h-8 px-5 py-2.5 max-sm:py-1 text-center text-white text-xl bg-orange-400 rounded-tl-[20px] rounded-br-[20px]">
                <a className="" href="/">
                  Book Now
                </a>
              </div>

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
    </header>
  );
}
