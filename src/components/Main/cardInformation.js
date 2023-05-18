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
    return cards.map((card, idx) => (
      <Main
        key={idx}
        img={card.img}
        cardDescription={card.cardDescription}
        cardTitle={card.cardTitle}
      />
    ));
  };
  return <div className="container">{renderCards()}</div>;
};

export default cardInformation;