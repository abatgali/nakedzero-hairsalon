import AboutContent from "@/components/AboutContent";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "About NakedzerO Hair Salon | South Indy & Greenwood",
  description:
    "Family-run and Burmese-American owned, NakedzerO Hair Salon has served South Indianapolis and Greenwood since 2019 with a 4.9 Google rating.",
  keywords: ["Mui le sam", "Great haircuts", "haircut near me", "Hair Clips"],
  canonicalUrlRelative: "/about",
});

export default function About() {
  return <AboutContent />;
}
