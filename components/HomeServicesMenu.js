import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServicesMenu from "./ServicesMenu";

export default function HomeServicesMenu() {
  return (
    <section
      id="services-menu"
      aria-labelledby="services-menu-heading"
      className="px-6 pb-24 sm:pb-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-semibold text-orange-400">Service Menu &amp; Appointment Times</p>
        <h2
          id="services-menu-heading"
          className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          Plan Your Visit
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          See how much time to set aside, whether you choose a single service or
          combine a few in one appointment.
        </p>
      </div>

      <ServicesMenu headingAs="h3" />
      {/*
      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-md rounded-tl-[20px] rounded-br-[20px] border-2 border-orange-400 bg-orange-400/30 px-6 py-3 text-lg text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
        >
          Open Services Menu
          <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
      */}
    </section>
  );
}
