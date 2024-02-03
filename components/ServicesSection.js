import React from "react";
import { PiScissorsLight } from "react-icons/pi";
import { IoIosColorFilter } from "react-icons/io";
import { MdOutlineBathroom } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";

// Define the ServiceBox component
const ServiceBox = ({ icon, title, description, listItems }) => {
  return (
    <div className="flex sm:w-[340px] flex-col items-center p-6 bg-gradient-to-t from-black to-gray-600 text-white  shadow-md transition duration-300 ease-in-out">
      <div className="mb-4 text-orange-400">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm w-4/5 mx-auto text-center mb-4">{description}</p>
      {listItems && <ServiceList items={listItems} />}
    </div>
  );
};

// Define the ServiceList component
const ServiceList = ({ items }) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-orange-400">
          {item}
        </li>
      ))}
    </ul>
  );
};

// Define the ServicesSection component that uses ServiceBox
const ServicesSection = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-8 mt-16 sm:mt-48" id="services">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-around items-center p-8 gap-6 w-full lg:w-4/5 mx-auto">
        <ServiceBox
          icon={<PiScissorsLight className="text-4xl" />}
          title="Shape & Style"
          description="Capture your unique essence with our expert hairstylists. Get the look you want with our cutting-edge cuts and styles."
          listItems={["Cut, Wash & styling", "Perm / Permanent Curls", "Hair Straightening"]}
        />
        <ServiceBox
          icon={<IoIosColorFilter className="text-4xl" />}
          title="Hair Color"
          description="Switch up your look with a new hair color. We offer a variety of coloring services."
          listItems={["Balayage", "Highlights", "Full Coloring", "Gloss Toning"]}
        />
        <ServiceBox
          icon={<MdOutlineBathroom className="text-4xl" />}
          title="Treatments"
          description="Hair treatments are designed to target specific problems with your hair or scalp."
          listItems={["NakedzerO Hair Serum", "Hair Growth", "Scalp Treatment", "NakedzerO Luxu"]}
        />
        <ServiceBox
          icon={<LuSparkles className="text-4xl" />}
          title="Facial Care"
          description="We offer a variety of facial care services to help you look and feel your best."
          listItems={["Steaming & Deep Cleaning", "Peeling & Brightening", "Slimming & Anti Aging", "Facial Massage"]}
        />
      </div>
    </>
  );
};

export default ServicesSection;
