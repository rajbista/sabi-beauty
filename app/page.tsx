import React from "react";
import Service from "./service/page";
import Testimonail from "./components/Testimonail";
import Callout from "./components/Callout";

export default function page() {
  return (
    <>
      <Service />
      <Testimonail />
      <Callout />
    </>
  );
}
