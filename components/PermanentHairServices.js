import Image from "next/image";
import Reveal from "./motion/Reveal";

const services = [
  {
    name: "Perm",
    image:
      "https://storage.googleapis.com/allprojectsdata/nakedzerosalon/Permanent%20Hair%20Services/perm.jpg",
    description:
      "Add lasting waves, curls, and volume with a perm tailored to your hair and the way you like to style it.",
  },
  {
    name: "Straightening",
    image: "https://storage.googleapis.com/allprojectsdata/IMG_0244.PNG",
    description:
      "Create a smoother, straighter finish. We will talk through your hair texture and routine to find the right approach.",
  },
  {
    name: "Highlight",
    image:"https://storage.googleapis.com/allprojectsdata/nakedzerosalon/Permanent%20Hair%20Services/higlights.jpg",
    description:
      "Bring light and dimension to your hair with highlights, from subtle accents to a brighter overall look.",
  },
  {
    name: "Full Colors",
    image: "https://storage.googleapis.com/allprojectsdata/nakedzerosalon/Permanent%20Hair%20Services/hair%20coloring.jpg",
    description:
      "Refresh your shade or try something new with all-over color chosen to complement your style.",
  },
];

export default function PermanentHairServices() {
  return (
    <section
      id="permanent-hair-services"
      aria-labelledby="permanent-hair-services-heading"
      className="bg-gray-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-orange-400">Texture, Tone &amp; Color</p>
          <h2
            id="permanent-hair-services-heading"
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            <span className="text-amber-500">Permanent</span> Hair Services
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            A new texture, a brighter shade, or a complete color refresh. Every
            service starts with a conversation about your hair and your goals.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.08} className="h-full">
              <article className="h-full overflow-hidden rounded-lg rounded-tl-[2rem] rounded-br-[2rem] bg-stone-800">
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 border-b border-white/5 bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-800 px-6 text-stone-400">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={`${service.name} hair service`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-center text-sm">
                      {service.name} image placeholder
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
