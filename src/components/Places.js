import React from "react";

function Places({ places }) {
  return (
    <>
      <article className="place">
        {places.map((place) => {
          const { Image, name, rate, distance, availablity, id, alt } = place;
          return (
            <div className="card" key={id}>
              <div className="center">
                <div className="image">
                  <img src={Image} alt={alt} />
                </div>
                <div className="name-rent flex-sb">
                  <p>{name}</p>
                  <h5>{rate}</h5>
                </div>
                <div className="meter-available flex-sb">
                  <p>{distance}</p>
                  <p>{availablity}</p>
                </div>
                <img src="/images/stars.png" alt="rating" />
              </div>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default Places;
