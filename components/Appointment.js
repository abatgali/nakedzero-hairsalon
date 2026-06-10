import React from "react";

export default function Appointment() {
  return (
    <>
      <div id="appointment" className=" sm:pt-24">
        <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl text-center mx-auto tracking-tight font-medium text-white">
          Pick a Time That Works
        </h2>
        <p className="text-center max-w-xl mx-auto my-5 px-4">
          Choose your service below and you will get a confirmation right
          away. Rather talk to a person? Call{" "}
          <a href="tel:3177017294" className="underline">
            317-701-7294
          </a>
          .
        </p>
        <iframe
          src="https://koalendar.com/e/nakedzerosalon?embed=true"
          width="100%"
          height="800px"
        ></iframe>
      </div>
    </>
  );
}
