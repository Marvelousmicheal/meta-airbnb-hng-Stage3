import React from "react";

function SectionOne() {
  return (
    <>
      <section className="section-one flex">
        <article className=" flex-sb">
          <div className="title-text">
            <h1>
              Rent a <span>place</span> away from <span>home</span> in the{" "}
              <span>metaverse</span>
            </h1>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, Get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="search">
              <input
                type="text"
                placeholder="Search for Location"
                id="search"
              />
              <button>Search</button>
            </div>
          </div>
          <div className="title-img">
            <img
              src="/images/Group 4028.png"
              alt="different display for places for rent"
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default SectionOne;
