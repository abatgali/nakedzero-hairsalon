import React from "react";

export default function Appointment() {
  return (
    <>
      <div id="appointment" className=" sm:pt-24">
        {/* <h1 className="text-6xl max-sm:hidden font-extrabold text-center mb-4">
        Book an Appointment
      </h1> */}
        <iframe
          src="https://koalendar.com/e/nakedzerosalon?embed=true"
          width="100%"
          height="800px"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}
