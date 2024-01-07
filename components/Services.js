export default function Services() {
  return (
    <div className=" flex items-start h-max sm:h-screen bg-neutral relative" id="services">
      <div className="w-3/4 mx-auto h-auto">
        <h2 className="text-7xl font-black text-center -rotate-90 mt-32 absolute left-0 -translate-x-1/3 p-2">
          Services
        </h2>
        <div className="my-10 h-full flex flex-wrap w-3/4 gap-10 float-right">
          <div>
            <h3 className="text-4xl font-bold mb-4">Hair Color</h3>
            <ul className="list-disc list-inside">
              <li>Balayage</li>
              <li>Highlights</li>
              <li>Full Coloring</li>
              <li>Gloss Toning</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Shape & Style</h3>
            <ul className="list-disc list-inside">
              <li>Women&apos;s Cut & Styling <span className="pricing">$35</span></li>
              <li>Men&apos;s Cut, Wash & Styling <span className="pricing">$45</span></li>
              <li>Perm - Permanent Curls</li>
              <li>Permanent Hair Straightening</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Treatments</h3>
            <ul className="list-disc list-inside">
              <li>NakedzerO Hair Serum Treatment</li>
              <li>Hair Growth</li>
              <li>Scalp Treatment</li>
              <li>NakedzerO Luxu Treatment 700ml <span className="pricing">$85</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Facial Care</h3>
            <ul className="list-disc list-inside">
              <li>Face Steaming</li>
              <li>Deep Cleaning</li>
              <li>Peeling</li>
              <li>Brightening</li>
              <li>Face Slimming/Jawline</li>
              <li>Anti Aging</li>
              <li>Facial Massage</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Products</h3>
            <ul className="list-disc list-inside">
              <li>Skin Care</li>
              <li>Hair Care</li>
              <li>NakedzerO Shampoo <span className="pricing">$55 - $155</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
