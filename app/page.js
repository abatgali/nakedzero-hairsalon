import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Services";
import HeroSection from "@/components/HeroSection";
import CTAn from "@/components/CTAn";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import ServicesSection from "@/components/ServicesSection";
export default function Page() {
  return (
    <>
      <HeroSection />
      <Hero />
      <ServicesSection/>
      {/* <Services /> */}
      <CTAn />
      <Location />
      <Appointment />
      <Testimonials />
      <CTA />
    </>
  );
}
