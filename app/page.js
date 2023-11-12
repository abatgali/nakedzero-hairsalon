 import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstagramContent from "@/components/InstagramContent";
import Services from "@/components/Services";
 export default function Page() {
  return (
    <>
      <header>
        <div className="bg-primary h-auto p-5">
          <div className="container mx-auto flex justify-between items-center w-1/2">
            <h1 className="text-4xl font-bold text-white">NakedzerO</h1>
            <nav className="text-white">
              <ul className="flex gap-5">
                <li className="hover:text-gray-200">Book Appointment</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Hero />
      <main className="container h-auto w-3/4 p-5 mx-auto">
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
