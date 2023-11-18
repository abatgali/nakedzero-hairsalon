import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import BookPopup from "@/components/BookPopup";
import Appointment from "@/components/Appointment";
import Services from "@/components/Services";
import CTAn from "@/components/CTAn";
import InstagramContent from "@/components/InstagramContent";
import Testimonials from "@/components/Testimonials";

import Carousel from "@/components/Carousel";
export default function Page() {
  return (
    <>
      <header>
        <div className="h-auto w-full fixed inset-0 z-10 p-5">
          <div className=" bg-cyan-200 rounded-full p-4 mx-auto flex justify-around items-center w-max sm:w-3/4 backdrop-blur-md bg-opacity-80">
            <h1 className="text-5xl font-black text-white text-center">
              NakedzerO
              <br />
            </h1>
          </div>
        </div>
      </header>
      <main>
        <Carousel />
        <Hero />
        <div className="container h-auto  p-5 mx-auto text-center my-5">
          <h1 className="text-7xl font-black max-sm:text-6xl">
            Maximize looks
          </h1>
          <h5 className="text-2xl font-bold max-sm:text-xl mt-10">
            Schedule Appointment
          </h5>
        </div>
        <div className="mx-auto flex justify-center items-center align-middle w-full max-sm:mb-10">
          <div className="w-full translate-x-2">
            <Appointment />
          </div>
        </div>
        <Services />
        <CTAn />
        <BookPopup />
        <Location />
        <Testimonials />
        <InstagramContent />
        {/* <Testimonials11 /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
