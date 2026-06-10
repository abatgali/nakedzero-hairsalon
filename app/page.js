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
    "Family-run hair salon on US 31 S serving South Indianapolis and Greenwood since 2019. Haircuts from $40, balayage, perms and facials. Book online in about a minute.",
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
