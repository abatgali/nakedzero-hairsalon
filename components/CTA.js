import Image from "next/image";
import Link from "next/link";
const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.pexels.com/photos/4422102/pexels-photo-4422102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Treat yourself to a new look
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Ready for the makeover you imagined? Check out our products and book an appointment today!
          </p>

          <div className="flex sm:space-x-4 max-sm:flex-col">
            <a href="/products">
              <button className="bg-blue-500 rounded-tl-[40px] rounded-br-[40px] text-white font-md py-2 px-4 rounded-full sm:my-10 w-48 btn my-4">
                View Products
              </button>
            </a>
            <Link href="#appointment">
              <button className="bg-orange-400 rounded-tl-[40px] rounded-br-[40px] text-white font-md py-2 px-4 rounded-full sm:my-10 w-48 btn my-4">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
