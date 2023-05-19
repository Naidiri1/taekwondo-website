import React from "react";
import Main from "./Main";
import belt from "./belt.jpg";

const cardInformation = () => {
  const cards = [
    {
      img: belt,
      cardTitle: "class 1",
      cardDescription: "class starts at 8 am",
    },
    {
      img: belt,
      cardTitle: "class 1",
      cardDescription: "class starts at 8 am",
    },
    {
      img: belt,
      cardTitle: "class 1",
      cardDescription: "class starts at 8 am",
    },
    {
      img: belt,
      cardTitle: "class 1",
      cardDescription: "class starts at 8 am",
    },
    {
      img: belt,
      cardTitle: "class 1",
      cardDescription: "class starts at 8 am",
    },
  ];

  const renderCards = () => {
    return cards.map((card, index) => (
      <Main
        key={index}
        img={card.img}
        cardTitle={card.cardTitle}
        cardDescription={card.cardDescription}
        
      />
    ));
  };
  return (<div className="container">{renderCards()}</div>);
};

export default cardInformation;