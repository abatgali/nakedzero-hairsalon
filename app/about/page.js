import Image from "next/image";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";
export const metadata = getSEOTags({
  title: "About Us | NakedzerO Hair Salon",
  description:
    "NakedzerO is the premier hair salon in Indianapolis and Greenwood. We specialize in trendy haircuts, flawless fades, stunning hair coloring, impeccable styling, rejuvenating treatments, and captivating makeovers.",
  keywords: ["Mui le sam", "Great haircuts", "haircut near me", "Hair Clips"],
  canonicalUrlRelative: "/about",
});

export default function About() {
  return (
    <div className="text-center py-16 sm:py-24">
      <div className="pt-8 px-2 sm:pt-16 mb-4 text-left container sm:w-3/4 mx-auto">
        <Link href="/">&larr; Back to home</Link>
      </div>
      <h1 className="text-4xl font-bold mt-12">About Us</h1>
      <Image
        className="mx-auto mt-8"
        src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/Salon%20cover%20picture.jpg"
        width={800}
        height={500}
        alt="Nakedzero Hair Salon store front"
      />
      <div className="container min-h-screen sm:py-16 mx-auto lg:w-1/3 xl:w-1/4">
        <div className="px-4 mt-4">
          <header>
            <h2 className="text-2xl font-bold">
              Elevate Your Look with NakedzerO: The Premier Hair Salon in
              Indianapolis & Greenwood
            </h2>
          </header>
          <article>
            <p className="mt-4">
              Are you ready to transform your hairstyle and elevate your look to
              new heights? Look no further than NakedzerO, the leading hair
              salon serving the vibrant communities of Indianapolis and
              Greenwood. At NakedzerO, we specialize in providing trendy
              haircuts, flawless fades, stunning hair coloring, impeccable
              styling, rejuvenating treatments, and captivating makeovers that
              perfectly complement your unique features.
            </p>
            <p className="mt-4">
              Originating from the rich cultural heritage of Myanmar/Burma,
              where hair salons are affectionately known as &quot;Mui le
              sam&quot;, NakedzerO has been redefining haircare and beauty since
              2019. Our commitment to excellence, paired with our passion for
              artistic expression, sets us apart as a premier destination for
              all your hairstyling needs.
            </p>
            <h3 className="text-xl font-bold mt-8">
              Trendy Haircuts Tailored to You
            </h3>
            <p>
              Step into NakedzerO and experience the artistry of our skilled
              stylists. Whether you&apos;re seeking a bold new look or a subtle
              change, our team is dedicated to delivering precision cuts that
              reflect your individual style and personality. From classic styles
              to avant-garde creations, we take pride in crafting hairstyles
              that turn heads and leave a lasting impression.
            </p>
            <h3 className="text-xl font-bold mt-8">
              Flawless Fades for the Modern Gentleman
            </h3>
            <p>
              Gentlemen, indulge in the luxury of a flawless fade at NakedzerO.
              Our barbers are masters of their craft, using cutting-edge
              techniques to achieve seamless transitions and impeccable
              precision. Whether you prefer a low fade, high fade, or something
              in between, trust NakedzerO to deliver a fade that exudes
              confidence and sophistication.
            </p>
            <h3 className="text-xl font-bold mt-8">
              Stunning Hair Coloring for Vibrant Results
            </h3>
            <p>
              Unleash your inner artist with our exquisite hair coloring
              services. From vibrant hues to natural tones, our color
              specialists utilize premium products and innovative techniques to
              achieve stunning results. Whether you desire a subtle balayage or
              a bold fashion color, NakedzerO is your destination for vibrant,
              head-turning hair color.
            </p>
            <h3 className="text-xl font-bold mt-8">
              Impeccable Styling for Every Occasion
            </h3>
            <p>
              Discover the power of impeccable styling at NakedzerO. Whether
              you&apos;re preparing for a special event or simply want to look
              your best every day, our stylists are here to bring your vision to
              life. With meticulous attention to detail and a keen eye for
              trends, we create hairstyles that enhance your natural beauty and
              elevate your confidence.
            </p>
            <h3 className="text-xl font-bold mt-8">
              Rejuvenating Treatments for Healthy Hair
            </h3>
            <p>
              Nourish your hair and revitalize your locks with our rejuvenating
              treatments. From hydrating masks to revitalizing scalp treatments,
              NakedzerO offers a range of luxurious options designed to promote
              healthy hair and restore vitality. Let our experts pamper you with
              personalized care, leaving your hair feeling silky smooth and
              irresistibly touchable.
            </p>
            <h3 className="text-xl font-bold mt-8">
              Captivating Makeovers that Transform
            </h3>
            <p>
              Ready for a transformative experience? Let NakedzerO work its
              magic with captivating makeovers that leave you looking and
              feeling like a million bucks. Whether you&apos;re craving a
              dramatic change or subtle enhancements, our talented team will
              customize a makeover that accentuates your features and
              complements your unique style.
            </p>
            <h3 className="text-xl font-bold mt-8">
              Experience the NakedzerO Difference Today
            </h3>
            <p>
              Elevate your look and unleash your inner beauty with NakedzerO,
              the premier hair salon in Indianapolis and Greenwood. From trendy
              haircuts to flawless fades, hair coloring, styling, treatments,
              and makeovers, we offer everything you need to express yourself
              with confidence and flair. Schedule your appointment today and
              discover why NakedzerO is the ultimate destination for
              unparalleled haircare and beauty.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
