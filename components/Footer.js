import Link from "next/link";
import config from "@/config";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>
            <div className="flex sm:w-full gap-2 max-sm:mx-auto w-fit">
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
            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © 2019 - {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
                <Link href="/about" className="link link-hover">
                  About us
                </Link>
                <Link href="/book" className="link link-hover">
                  Book an appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
