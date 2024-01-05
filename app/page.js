import CTA from "@/components/CTA";
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
      <CTAn />
      <Location />
      <Appointment />
      <Testimonials />
      <CTA />
    </>
  );
}
