import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/HeroImages.module.css";

export default function HeroImages() {
  // Create a ref for the parent container
  const containerRef = useRef(null);
  // State to hold the calculated height
  const [containerHeight, setContainerHeight] = useState("auto");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 640);
    };

    // Check screen size on mount and update isLargeScreen accordingly
    checkScreenSize();

    // Update isLargeScreen whenever the window is resized
    window.addEventListener("resize", checkScreenSize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Function to calculate the height of the container
    const updateContainerHeight = () => {
      const container = containerRef.current;
      let maxHeight = 0;

      // Get the container's top position
      const containerTop = container.getBoundingClientRect().top;

      // Loop through all children to calculate the maximum bottom value
      container.childNodes.forEach((child) => {
        const rect = child.getBoundingClientRect();
        const bottomSpace = rect.bottom - containerTop;
        maxHeight = Math.max(maxHeight, bottomSpace);
      });

      // Update the state with the new height
      setContainerHeight(`${maxHeight}px`);
    };

    // Calculate the height on mount
    updateContainerHeight();

    // Recalculate on window resize
    window.addEventListener("resize", updateContainerHeight);

    // Cleanup listener when the component is unmounted
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);

  return (
    <div
      className="w-full sm:w-1/2 p-5 mt-20 lg:pl-24 pl-16 max-sm:pl-5 max-sm:mt-0 sm:ml-auto z-10 "
      ref={containerRef}
      style={
        isLargeScreen ? { height: containerHeight } : { height: "min-content" }
      } // Apply the calculated height
    >
      {/* This is the guy image */}
      <div
        className={`${styles.imgTwoDiv} ${styles.imgOne} max-sm:-translate-x-[100px] max-sm:translate-y-[50px] sm:scale-x-[-1]`}
      ></div>
      <div
        className={`${styles.imgThreeDiv} ${styles.imgThree} sm:-translate-y-[300px] sm:translate-x-[350px] max-sm:hidden`}
      ></div>
      <div
        className={`${styles.imgOneDiv} ${styles.imgTwo} -translate-y-[420px] translate-x-[200px] sm:-translate-y-[600px] sm:translate-x-1/3  `}
      ></div>
    </div>
  );
}
