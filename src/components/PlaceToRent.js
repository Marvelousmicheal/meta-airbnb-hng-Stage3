import React from "react";
import Header from "./Header";
import Places from "./Places";
import data2 from "./places2";
import Footer from "./Footer";
import TagsPlaces from "./TagsPlaces";

function PlaceToRent() {
  return (
    <>
      <div className="container">
        <Header />
        <TagsPlaces />
        <Places places={data2} />
      </div>
      <Footer />
    </>
  );
}

export default PlaceToRent;
