import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import HeroSection from "@/components/HeroSection";
import CTAn from "@/components/CTAn";
import Testimonials from "@/components/Testimonials";
import ServiceBento from "@/components/ServiceBento";
import Appointment from "@/components/Appointment";
import InstagramContent from "@/components/InstagramContent";
import HaircutforMenandWomen from "@/components/menandwomencut";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Your Go-To Hair Salon in South Indy & Greenwood",
  description:
    "Discover NakedzerO Salon in South Indianapolis & Greenwood for top-notch haircuts, coloring, and treatments. Your journey to stunning hair starts here.",
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
        <CTAn />
        <ServiceBento/> 
        <Location />
        <Appointment />
        <Testimonials />
        <InstagramContent />
      </div>
      <CTA />
    </>
  );
}
