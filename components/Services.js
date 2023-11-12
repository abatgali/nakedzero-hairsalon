export default function Services() {
  return (
    <div className=" flex items-start h-auto sm:h-screen bg-neutral relative">
      <div className="w-3/4 mx-auto h-full">
        <h2 className="text-7xl font-black text-center -rotate-90 mt-32 absolute right-0 translate-x-1/3 p-2">
          Services
        </h2>
        <div className="my-10 h-full flex flex-wrap w-3/4 gap-10">
          <div>
            <h3 className="text-4xl font-bold mb-4">Hair Color</h3>
            <ul className="list-disc list-inside">
              <li>Balayage</li>
              <li>Foilyage</li>
              <li>Highlights</li>
              <li>Babylights</li>
              <li>Base Color</li>
              <li>All Over Color</li>
              <li>Gloss</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Shape & Style</h3>
            <ul className="list-disc list-inside">
              <li>Women&apos;s Cut</li>
              <li>Men&apos;s Cut</li>
              <li>Up Dos</li>
              <li>Blowouts</li>
              <li>Extensions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Treatments</h3>
            <ul className="list-disc list-inside">
              <li>Brazilian Blowout</li>
              <li>Kérastase Treatment</li>
              <li>Deep Conditioning</li>
              <li>Olaplex</li>
              <li>K Water Shine Treatment</li>
              <li>Scalp Treatment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Brows & Lashes</h3>
            <ul className="list-disc list-inside">
              <li>Brow Lamination</li>
              <li>Brow Henna</li>
              <li>Brow Tint</li>
              <li>Lash Tint</li>
              <li>Lash Lift</li>
              <li>Brow Wax</li>
              <li>Lip Wax</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
