import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Services";
import CTAn from "@/components/CTAn";
import Testimonials from "@/components/Testimonials";

import Carousel from "@/components/Carousel";
export default function Page() {
  return (
    <>
      <header>
        <div className="h-auto w-full fixed inset-0 z-10 p-5">
          <div className="bg-black bg-opacity-25 rounded-full p-4 mx-auto flex justify-around items-center w-max sm:w-3/4 backdrop-blur-md ">
            <h1 className="text-5xl font-black text-white text-center">
              NakedzerO
              {/* <br />
              <span className="text-3xl font-light">Hair Salon</span> */}
            </h1>
          </div>
        </div>
      </header>
      <main>
        {/* <Carousel /> */}
        <Hero />
        <Services />
        <CTAn />
        {/* <BookPopup /> */}
        <Location />
        <Testimonials />
        {/* <InstagramContent /> */}
        {/* <Testimonials11 /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
