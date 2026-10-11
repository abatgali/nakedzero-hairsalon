import Link from "next/link";
import { Scissors } from "lucide-react";
import ServicesMenu from "@/components/ServicesMenu";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Services Menu | NakedzerO Hair Salon",
  description:
    "Explore haircuts, perms, highlights, full color, straightening, and combination services at NakedzerO Hair Salon, with appointment durations.",
  canonicalUrlRelative: "/services",
});

export default function ServicesPage() {
  return (
    <main className="bg-gray-950 px-4 pb-24 pt-44 sm:px-6 sm:pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Scissors aria-hidden="true" className="mx-auto h-9 w-9 text-orange-400" />
          <p className="mt-5 font-semibold text-orange-400">Cut, Color &amp; Texture</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            <span className="text-amber-500">Services</span> Menu
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A fresh cut or a whole new look. Explore our services and find time
            for your next salon visit.
          </p>
        </div>

        <ServicesMenu />

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-white">Ready for your next look?</h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/book-appointment"
              className="rounded-md rounded-tl-[20px] rounded-br-[20px] border-2 border-orange-400 bg-orange-400/30 px-6 py-3 text-lg text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:3177017294"
              className="text-slate-300 underline decoration-slate-600 underline-offset-4 transition hover:text-white"
            >
              Questions? Call 317-701-7294
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
