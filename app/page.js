import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import HeroSection from "@/components/HeroSection";
import CTAn from "@/components/CTAn";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import ServicesSection from "@/components/ServicesSection";
import InstagramContent from "@/components/InstagramContent";
import HaircutforMenandWomen from "@/components/menandwomencut";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Home Page | NakedzerO Hair Salon",
  keywords: [
    "Asian haircut",
    "haircut",
    "hair color",
    "hair styling",
    "hair treatment",
    "hair care",
    "Indianapolis Clips",
    "Greenwood haircut",
  ],
  canonicalUrlRelative: "/",
});

export default function Page() {
  return (
    <>
      <HeroSection />
      <Hero />
      <HaircutforMenandWomen />
      <div className="container mx-auto max-w-7xl">
        <ServicesSection />
        <CTAn />
        <Location />
        <Appointment />
        <Testimonials />
        <InstagramContent />
      </div>
      <CTA />
    </>
  );
}
