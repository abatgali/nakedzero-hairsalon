import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Services";
import CTAn from "@/components/CTAn";
import Testimonials from "@/components/Testimonials";
export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <CTAn />
        <Location />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
