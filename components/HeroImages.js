import React from "react";
import styles from "./styles/HeroImages.module.css";

export default function HeroImages() {
  return (
    // <div className="w-1/2 p-5 mt-24 lg:pl-32 sm:ml-auto z-10 max-sm:blur-[1px] max-sm:opacity-80 ">
    //   <div className={` ${styles.imgTwoDiv} ${styles.imgTwo}`}></div>
    //   <div
    //     className={` ${styles.imgThreeDiv} ${styles.imgThree}  -translate-y-[300px] translate-x-[350px] max-sm:hidden`}
    //   ></div>
    //   <div
    //     className={` ${styles.imgOneDiv} ${styles.imgOne}  -translate-y-[600px] translate-x-1/3 scale-x-[-1] `}
    //   ></div>
    // </div>
    <div className="w-full sm:w-1/2 p-5 mt-24 lg:pl-32 pl-16 max-sm:pl-5 max-sm:mt-0 sm:ml-auto z-10 max-sm:opacity-80 ">
      <div className={`${styles.imgTwoDiv} ${styles.imgTwo} max-sm:-translate-x-[100px] max-sm:translate-y-[100px]`}></div>
      <div
        className={`${styles.imgThreeDiv} ${styles.imgThree} sm:-translate-y-[300px] sm:translate-x-[350px] max-sm:hidden`}
      ></div>
      <div
        className={`${styles.imgOneDiv} ${styles.imgOne} -translate-y-[380px] translate-x-[250px] sm:-translate-y-[600px] sm:translate-x-1/3 scale-x-[-1] `}
      ></div>
    </div>
  );
}
