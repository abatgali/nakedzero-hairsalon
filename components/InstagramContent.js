"use client";
import React, { useEffect } from "react";

function InstagramEmbed() {
  useEffect(() => {
    // Function to load the Instagram embed script
    const loadInstagramScript = () => {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadInstagramScript();
  }, []);

  return (
    <div className="py-16 items-center">
      <div className="flex justify-center w-full items-center">
        <div
          dangerouslySetInnerHTML={{
            __html: `
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/nakedzerohairsalon/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#000; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
        <!-- Instagram embed code goes here -->
      </blockquote>
    `,
          }}
        />
      </div>
    </div>
  );
}

export default InstagramEmbed;
