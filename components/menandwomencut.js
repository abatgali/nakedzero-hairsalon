import React from "react";

export default function HaircutforMenandWomen() {
  return (
    <div className="w-full h-auto">
      <div className="bg-gray-950 ">
        <div className="bg-transparent w-full md:w-3/4 mx-auto h-auto pt-24 flex flex-row items-start justify-around  max-w-7xl">
          <img
            className="w-64 sm:w-96"
            src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/neww.png"
            alt="texture"
            layout="fill"
            objectFit="cover"
          />
          <div>
            <h1 className="sm:text-6xl text-4xl font-bold text-left xl:text-8xl xl:w-3/4">
              <span className="text-amber-500">Women</span>&apos;s Haircut
            </h1>
            <h2 className="text-2xl font-semibold text-left text-slate-500">
              Cut, Wash & Style
            </h2>
            <div className="text-left text-white bg-gradient-to-r from-yellow-600 to-transparent p-4 font-bold text-2xl rounded-md rounded-tl-[25px] rounded-br-[25px]">
              $45
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black ">
        <div className="bg-transparent w-full md:w-3/4 mx-auto h-auto pt-24 flex flex-row items-start justify-around  max-w-7xl">
          <div className="text-right">
            <h1 className="sm:text-6xl text-4xl font-bold xl:text-8xl xl:w-3/4 ml-auto">
              <span className="text-blue-500">Men</span>&apos;s Haircut
            </h1>
            <h2 className="text-2xl font-semibold text-slate-500">
              Cut, Wash & Style
            </h2>
            <div className=" text-white bg-gradient-to-l from-blue-600 to-transparent p-4 font-bold text-2xl rounded-md rounded-tl-[25px] rounded-br-[25px]">
              $35
            </div>
          </div>
          <img
            className="w-64 sm:w-96 -ml-12"
            src="https://storage.googleapis.com/allprojectsdata/nakedzerosalon/man_new.png"
            alt="texture"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
