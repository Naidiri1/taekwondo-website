import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import belt from "./belt.jpg";
import { Card, CardImg, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./cardInformation"
import SliderImg from '../SliderImg';
import CardInformation from "../CardInformation";
import Nav from "../Nav";
import AboutTaekwondo from "../AboutTaekwondo";
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  objectFit: "cover",
  autoplay: true,
  // autoplaySpeed: 2000,
};
const style = {
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "center"
}


const Main = (props) => {

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

  return (
    <div>
      <Nav/>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={belt}
          alt="logo"
          className="img-fluid"
          style={{
            maxHeight: "500px",
            marginTop: "100px",
            justifyContent: "center",
            alignContent: "center",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center text-center">
        <div>
          <h2>HWA RANG TRADITIONAL</h2>
          <h2>TAEKWON-DO</h2>
          <p> Learn Something New Today</p>
          <p>
            Taekwondo, Tae Kwon Do or Taekwon-Do (/ˌtaɪkwɒnˈdoʊ, ˌtaɪˈkwɒndoʊ,
          </p>
          ˌtɛkwənˈdoʊ/;[3][4][5] Korean: 태권도/跆拳道 [t̪ʰɛ.k͈wʌ̹n.d̪o] (listen))
          <p>
            is a Korean martial arts involving punching and kicking techniques,
          </p>
        </div>
      </div>
      <AboutTaekwondo/>
      <div style={{ maxWidth: "100%", margin: "0 auto", textAlign: "center" }}>
        <Slider {...settings}>
          {sliderImgs.map((img, idx) => <SliderImg key={idx} srcImg={img.imgSrc} alt={img.alt} />)}
        </Slider>
      </div>
      <div id="classes" style={{ width: "100%", maxWidth: "600px", textAlign: "center", alignContent: "center", margin: "20px" }}>
          {cards.map((card,idx) => <CardInformation key={idx} img={card.img} cardTitle={card.cardTitle} cardDescription={card.cardDescription}/>)}
      </div>
    </div>
  );
};

export default Main;
