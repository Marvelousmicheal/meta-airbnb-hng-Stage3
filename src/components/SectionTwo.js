import React from "react";
import Places from "./Places";
import data from "./place";

function SectionTwo() {
  return (
    <section className="section-two">
      <h1>Inspiration for your next adventures</h1>
      <Places places={data} />
    </section>
  );
}

export default SectionTwo;
