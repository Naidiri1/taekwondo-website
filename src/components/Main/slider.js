import React from "react";
import belt from "./belt.jpg";
import Main from "./Main"

const Slider= () => {
  const sliderImgs = [
    {
      imgSrc: belt,
      alt: "taekwondo belt",
    },
    {
      imgSrc: belt,
      alt: "taekwondo belt",
    },
    {
      imgSrc: belt,
      alt: "taekwondo belt",
    },
    {
      imgSrc: belt,
      alt: "taekwondo belt",
    },
  ];



  const renderImgs = () => {
    return sliderImgs.map((sliderImg, idx) => (
      <Main key={idx} imgSrc={sliderImg.imgSrc} alt={sliderImg.alt} />
    ));
  };
  return (
    <div>
      {renderImgs()}
    </div>
  );
};
export default Slider;
