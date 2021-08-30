import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/pexels-greg-galas-3647545.jpg"
              text="Explore the waterfall of Amazon Jungle"
              label="Waterfall"
              path="/services"
            />
            <CardItem
              src="./images/pexels-asad-photo-maldives-3601426 (1).jpg"
              text="Travel through the Beauty of Maldives"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="./images/pexels-omid-visuals-4159867.jpg"
              text="Explore the Beauty of Switzerland"
              label="Beauty"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/pexels-dimitris-mourousiadis-6478033.jpg"
              text="Beautiful beach of Greece"
              label="Waterfall"
              path="/services"
            />
            <CardItem
              src="./images/pexels-reynaldo-brigworkz-brigantty-773297.jpg"
              text="Never sleeping New York city"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="./images/pexels-john-smith-726484.jpg"
              text="Explore the Beauty of London"
              label="Beauty"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;