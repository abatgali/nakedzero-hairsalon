import styles from "./styles/Background.module.css";

export default function ServiceBento() {
  return (
    <>
      <div className=" py-24 sm:py-32" id="services">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-orange-400 mx-auto text-center">
            The Ultimate Salon Experience
          </h2>
          <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl mx-auto text-center">
            Trims, Tones and Treatments
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-3">
              <div className="overflow-hidden rounded-lg bg-stone-800 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <img
                  alt=""
                  src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/servicesImages/shapingService.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Starting from $40
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Shaping & Styling
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Capture your unique essence with our expert hairstylists.
                    Get the look you want with our cutting-edge cuts and styles.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-3">
              <div className="overflow-hidden rounded-lg bg-stone-800 lg:rounded-tr-[2rem]">
                <img
                  alt="Hair Coloring at NakedzerO Salon"
                  src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/servicesImages/coloring_service.png"
                  className="h-80 object-cover"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Starting from $50
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Hair Coloring
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Balayage, highlights, full coloring, gloss toning and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-3">
              <div className="overflow-hidden rounded-lg bg-stone-800 lg:rounded-bl-[2rem]">
                <img
                  alt="Facial Rejuvenation"
                  src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/servicesImages/Face%20Steaming%20Image.jpg"
                  className="h-80 object-cover"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Starting from $30
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Facial Rejuvenation
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Our facial treatments will leave your skin feeling refreshed and rejuvenated.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-3">
              <div className="overflow-hidden rounded-lg bg-stone-800 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <img
                  alt="Body Massage at NakedzerO Salon for Men only"
                  src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/servicesImages/massageresized.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Starting from $60
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Men&apos;s Body Massage
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Indulge in our expertly crafted Body Massage therapy,
                    designed to melt away stress and leave you feeling refreshed
                    and rejuvenated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
