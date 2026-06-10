import Link from "next/link";
import { MdOutlineLocalPhone } from "react-icons/md";

// Sticky call/book bar shown on phones only. The two actions a salon
// visitor actually wants are always one thumb-tap away.
export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden grid grid-cols-2 border-t border-stone-800 bg-stone-950/95 backdrop-blur">
      <a
        href="tel:3177017294"
        className="flex items-center justify-center gap-2 py-3 text-lg text-white"
      >
        <MdOutlineLocalPhone />
        Call
      </a>
      <Link
        href="/book-appointment"
        className="flex items-center justify-center gap-2 py-3 text-lg text-white bg-orange-400 bg-opacity-30 border-l border-stone-800"
      >
        Book
      </Link>
    </div>
  );
}
