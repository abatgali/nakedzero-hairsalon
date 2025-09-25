import React from "react";

export default function Appointment() {
  return (
    <>
      <div id="appointment" className=" sm:pt-24">
        <iframe
          src="https://koalendar.com/e/nakedzerosalon?embed=true"
          width="100%"
          height="800px"
        ></iframe>
      </div>
    </>
  );
}
