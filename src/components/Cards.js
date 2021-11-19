import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the deep waterfall inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of Bali"
              label="Cruise"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="The sea trip on a small private boat"
              label="Deep Sea"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Come on and go for sports in the most spectacular view"
              label="Island"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="See the lonely streets of Oslo"
              label="City Tour"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
