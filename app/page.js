 import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstagramContent from "@/components/InstagramContent";
import Services from "@/components/Services";
 export default function Page() {
  return (
    <>
      <header>
        <div className="bg-neutral h-auto">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white">NakedzerO</h1>
            <nav className="text-white">
              <ul className="flex gap-5">
                <li className="hover:text-gray-200">Home</li>
                <li className="hover:text-gray-200">Book Appointment</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Hero />
      <main className="container h-screen w-full p-5">
        <h1 className="text-9xl font-black ">
          Get your hair game up!
        </h1>
      </main>
      <Services />
      <InstagramContent />
      <CTA />
      <Footer />
    </>
  );
}
