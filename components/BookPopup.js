'use client'
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookPopup() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "team/nakedzero-hair-salon/hair-cut",
        buttonText: "Book Now",
        buttonColor: "#d2ff7e",
        buttonTextColor: "#000000",
      });
      cal("ui", {
        styles: { branding: { brandColor: "#8bd51b" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
}
