"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  
  return (
    <div className="w-full p-4 space-x-4 mt-32 flex">
      <div className="">
        <Image
          alt="Hair Salon"
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className=" object-cover "
          width={500}
          height={500}
        />
      </div>
      <div className="">
        <Image
          alt="Hair Salon"
          src="https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="">
        <Image
          alt="Hair Salon"
          src="https://images.pexels.com/photos/3993323/pexels-photo-3993323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="">
        <Image
          src="https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover"
          alt="Hair Salon"
          width={500}
          height={500}
        />
      </div>
      <div className="">
        <Image
          src="https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhaXJjdXR8ZW58MHx8MHx8fDA%3D"
          alt="Hair Salon"
          className="object-cover"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
