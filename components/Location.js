export default function Location() {
  return (
    <div
      className=" flex justify-center pt-10 flex-col h-screen mb-24"
      id="location"
    >
      <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl text-center mx-auto tracking-tight font-medium text-white">
        Where We Are
      </h1>
      <h3 className="text-2xl font-light my-10 text-center">
        8319 US 31 S, Indianapolis, IN 46227
      </h3>
      <h2 className="text-center font-extrabold text-2xl">Hours</h2>
      <p className="text-xl text-center">
        <u>Monday - Saturday</u>
        <br />
        <span className="font-bold">10:00 AM to 8:00 PM</span>
      </p>
      <p className="text-xl text-center">
        <u>Sunday</u>
        <br />
        <span className="font-bold">Closed</span>
      </p>

      <a
        href="https://maps.google.com/maps/dir//Mui+Le+Sam+By+Nakedzero+Hair+Salon+8319+US+31+S+Indianapolis,+IN+46227/@39.6451741,-86.1324631,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x886b5dcc43cae7df:0x186193e086ca2e9a"
        className="mx-auto my-12"
        target="new"
      >
        <button className="bg-orange-400 bg-opacity-30 hover:bg-orange-400 border-2 border-orange-400  rounded-md rounded-tl-[20px] rounded-br-[20px] text-white px-6 py-2 text-lg mr-4 transition duration-300">
          Get Directions
        </button>
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1291.70033573693!2d-86.13308775966674!3d39.64524793097934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5dcc43cae7df%3A0x186193e086ca2e9a!2sMui%20Le%20Sam%20By%20Nakedzero%20Hair%20Salon!5e0!3m2!1sen!2sus!4v1699755983722!5m2!1sen!2sus"
        style={{ width: "400", height: "500" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full md:w-4/5 mx-auto h-[500px]"
        // Add the disableDefaultUI parameter to remove extra map icons
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      ></iframe>
    </div>
  );
}
