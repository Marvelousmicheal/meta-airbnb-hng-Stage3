import React from "react";

function SectionThree() {
  return (
    <>
      <section className="section-three">
        <div className="container flex">
          <article className="flex-sb">
            <div className="text-main">
              <h3>Metabnb NFTs</h3>
              <p>
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              <button>Learn More</button>
            </div>
            <div className="image-main">
              <img
                src="/images/collection.png"
                alt=" a collective display of different places"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default SectionThree;
