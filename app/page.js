 import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstagramContent from "@/components/InstagramContent";
import Location from "@/components/Location";
import BookPopup from "@/components/BookPopup";
import Appointment from "@/components/Appointment";
import Services from "@/components/Services";
import Link from "next/link";
 export default function Page() {
  return (
    <>
      <header>
        <div className="bg-primary h-auto p-5">
          <div className="container mx-auto flex justify-between items-center w-1/2">
            <h1 className="text-4xl font-bold text-white text-center">NakedzerO</h1>
            <nav className="text-white">
              <ul className="flex gap-5 max-md:hidden">
                <li className="hover:text-gray-200"><Link href="#services">Our Services</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Hero />
      <main className="container h-auto  p-5 mx-auto text-center my-5">
        <h1 className="text-7xl font-black max-sm:text-6xl">
          Maximize looks
        </h1>
        <h5 className="text-2xl font-bold max-sm:text-xl mt-10">
          Schedule Appointment
          </h5>
      </main>
      <div className="mx-auto flex justify-center items-center align-middle w-4/5 max-sm:mb-10 pl-5">
      <Appointment />
        </div>
      <Services />
      <BookPopup />
      <Location />
      <InstagramContent />
      <CTA />
      <Footer />
    </>
  );
}
