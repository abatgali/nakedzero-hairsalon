import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Services";
import CTAn from "@/components/CTAn";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
export default function Page() {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <Appointment />
      <CTAn />
      <Location />
      <Testimonials />
      <CTA />

      <Footer />
    </>
  );
}
