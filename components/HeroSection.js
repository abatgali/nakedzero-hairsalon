import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/herovidnakedzero.mp4" 
      />
      <div className=" heading absolute w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 ">
          NakedzerO<span className="font-light"> Hair Salon</span>
        </h1>
        <p className="text-white text-lg mb-8 text-center">
          The Unique Blend of Hair, Beauty, and Barber Services
        </p>
        <div>
          <Link href="#services">
            <button className="bg-blue-500 rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-3 border-2 border-blue-400 rounded-md text-lg mr-4 hover:bg-blue-700 transition duration-300">
              Our Services
            </button>
          </Link>
          <a href="/products">
            <button className="bg-transparent border-2 rounded-tl-[20px] rounded-br-[20px] border-white text-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-black transition duration-300">
              Shop
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
