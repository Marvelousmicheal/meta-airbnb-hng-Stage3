import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Partner from "./Partner";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <SectionOne />
        </main>
      </div>
      <Partner />
      <div className="container">
        <main className="second-main main">
          <SectionTwo />
        </main>
      </div>
      <SectionThree />
      <Footer />
    </>
  );
}

export default Home;
