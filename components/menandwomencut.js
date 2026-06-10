import React from "react";
import Reveal from "./motion/Reveal";
import PriceWipe from "./motion/PriceWipe";

export default function HaircutforMenandWomen() {
  return (
    <div className="w-full h-auto">
      <div className="bg-gray-950 ">
        <div className="bg-transparent w-full md:w-3/4 mx-auto h-auto pt-24 px-4 flex flex-col sm:flex-row items-center sm:items-start gap-8 justify-around max-w-7xl">
          <Reveal>
            <h2 className="sm:text-6xl text-4xl font-bold text-left xl:text-8xl xl:w-3/4">
              <span className="text-amber-500">Women</span>&apos;s Haircut
            </h2>
            <h2 className="text-2xl font-semibold text-left text-slate-500">
              Cut, Wash & Style
            </h2>
            <PriceWipe
              origin="left"
              className="text-left text-white bg-gradient-to-r from-yellow-600 to-transparent p-4 font-bold text-2xl rounded-md rounded-tl-[25px] rounded-br-[25px]"
            >
              $55
            </PriceWipe>
            <p className="text-left text-slate-400 mt-3 max-w-xs">
              Shampoo, precision cut, and a full blow-dry finish. You leave
              styled, not just trimmed.
            </p>
          </Reveal>
          <img
            className="w-56 sm:w-96"
            src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/woman-hc.png"
            alt="Women's haircut, wash and style at NakedzerO Hair Salon in Greenwood, Indiana"
          />
        </div>
      </div>
      <div className="bg-black ">
        <div className="bg-transparent w-full md:w-3/4 mx-auto h-auto pt-24 px-4 flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8 justify-around max-w-7xl">
          <img
            className="w-64 sm:w-96 sm:-ml-12"
            src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/man-hc.png"
            alt="Men's haircut, wash and style at NakedzerO Hair Salon in South Indianapolis"
          />
          <Reveal className="text-right">
            <h2 className="sm:text-6xl text-4xl font-bold xl:text-8xl xl:w-3/4 ml-auto">
              <span className="text-blue-500">Men</span>&apos;s Haircut
            </h2>
            <h2 className="text-2xl font-semibold text-slate-500">
              Cut, Wash & Style
            </h2>
            <PriceWipe
              origin="right"
              className=" text-white bg-gradient-to-l from-blue-600 to-transparent p-4 font-bold text-2xl rounded-md rounded-tl-[25px] rounded-br-[25px]"
            >
              $40
            </PriceWipe>
            <p className="text-right text-slate-400 mt-3 max-w-xs ml-auto">
              Shears or clippers, classic cut or clean fade, washed and styled
              so you can head straight back out.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
