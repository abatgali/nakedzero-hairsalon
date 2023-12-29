import React from "react";
import styles from "./styles/HeroImages.module.css";

export default function HeroImages() {
  return (
    <div className="w-1/2 p-5 mt-24 pl-32 sm:ml-auto z-10 max-sm:blur-[1px] max-sm:opacity-80 ">
      <div className={` ${styles.imgTwoDiv} ${styles.imgTwo}`}></div>
      <div
        className={` ${styles.imgOneDiv} ${styles.imgOne}  -translate-y-1/3 translate-x-1/3`}
      ></div>
    </div>
  );
}
