"use client";
import React from "react";
import { useEffect } from "react";

export default function Offer() {
  useEffect(() => {
    // Dynamically inject the GiftUp script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://cdn.giftup.app/dist/gift-up.js";
    document.body.appendChild(script);

    // Cleanup to prevent duplicate scripts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="gift-up-target"
      data-site-id="8cbb281c-2253-4bf5-c4d0-08dd2e639dbe"
      data-platform="Other"
    ></div>
  );
}
