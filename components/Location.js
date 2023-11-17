export default function Location() {
  return (
    <div className=" flex justify-center pt-10 flex-col h-screen mb-24">
      <h1 className="text-5xl font-extrabold my-10 text-center">
        Where We Are
      </h1>
      <a href="https://maps.google.com/maps/dir//Mui+Le+Sam+By+Nakedzero+Hair+Salon+8319+US+31+S+Indianapolis,+IN+46227/@39.6451741,-86.1324631,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x886b5dcc43cae7df:0x186193e086ca2e9a" className="mx-auto" target="new">
        <button className="bg-primary text-white font-bold py-2 px-4 rounded-full my-10 w-48 btn">
          Get Directions
        </button>
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1291.70033573693!2d-86.13308775966674!3d39.64524793097934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5dcc43cae7df%3A0x186193e086ca2e9a!2sMui%20Le%20Sam%20By%20Nakedzero%20Hair%20Salon!5e0!3m2!1sen!2sus!4v1699755983722!5m2!1sen!2sus"
        style={{ width: "400", height: "500" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full md:w-4/5 mx-auto h-3/4"
        // Add the disableDefaultUI parameter to remove extra map icons
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      ></iframe>

    </div>
  );
}
