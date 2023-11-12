import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Give yourself a new look
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        NakedzerO Hair Salon is a full service salon located in the South of Indianapolis. We offer a wide range of services from haircuts, color, and styling to waxing and makeup.
        </p>
        <button className="btn btn-primary btn-wide">
          Get Appointment
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
