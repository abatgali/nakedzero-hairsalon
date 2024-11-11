import { Scissors, Palette, Sparkles, Smile, Flower } from "lucide-react"
import styles from "./styles/Background.module.css";
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-8">
          <h2 className="text-4xl font-bold tracking-tighter">Our Services</h2>
          <p className="text-zinc-400 max-w-[600px]">
            Experience luxury and rejuvenation with our comprehensive beauty and wellness services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Styling */}
          <div className={`bg-zinc-950/50 border border-zinc-800 rounded-lg row-span-2 p-6 flex flex-col ${styles.bgImage2}`}>
            <Scissors className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Styling</h3>
            <p className="text-zinc-400 mb-4">
              Expert hair styling services including cuts, updos, and special occasion styling by our master stylists.
            </p>
            <Link href="#" className="text-orange-500 hover:text-orange-400 mt-auto inline-flex items-center">
              Learn more
            </Link>
          </div>

          {/* Hair Coloring */}
          <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6 flex flex-col">
            <Palette className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hair Coloring</h3>
            <p className="text-zinc-400 mb-4">
              Premium color services from subtle highlights to bold transformations.
            </p>
            <Link href="#" className="text-orange-500 hover:text-orange-400 mt-auto inline-flex items-center">
              Learn more
            </Link>
          </div>

          {/* Treatments */}
          <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg md:col-span-2 p-6 flex flex-col">
            <Sparkles className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Treatments</h3>
            <p className="text-zinc-400 mb-4">
              Revitalizing hair treatments including deep conditioning, keratin, and scalp therapy.
            </p>
            <Link href="#" className="text-orange-500 hover:text-orange-400 mt-auto inline-flex items-center">
              Learn more
            </Link>
          </div>

          {/* Facial Care */}
          <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6 flex flex-col">
            <Smile className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Facial Care</h3>
            <p className="text-zinc-400 mb-4">
              Customized facial treatments for radiant, healthy skin.
            </p>
            <Link href="#" className="text-orange-500 hover:text-orange-400 mt-auto inline-flex items-center">
              Learn more
            </Link>
          </div>

          {/* Body Massage */}
          <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg md:col-span-2 p-6 flex flex-col">
            <Flower className="h-8 w-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Body Massage</h3>
            <p className="text-zinc-400 mb-4">
              Therapeutic massage services to relax, rejuvenate, and restore balance.
            </p>
            <Link href="#" className="text-orange-500 hover:text-orange-400 mt-auto inline-flex items-center">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}