import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import belt from "../../assets/imgs/belt.jpg";
import React from "react";
import SliderImg from "../SliderImg";
import CardInformation from "../CardInformation";
import NavBar from "../NavBar";
import AboutTaekwondo from "../AboutTaekwondo";
import "./style.css";
import cards from "./cards";

// Import sliderImgs array of objects from sliderImg.js
import sliderImgs from "../../assets/json/sliderImgs";

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  objectFit: "cover",
  autoplay: true,
  autoplaySpeed: 2000,
};
const style = {
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "center",
};
const bgGray = {
  backgroundColor: "#212529",
};

const Main = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div style={bgGray}>
        <div>
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
                Taekwondo, Tae Kwon Do or Taekwon-Do /ˌtaɪkwɒnˈdoʊ,
                ˌtaɪˈkwɒndoʊ,
              </p>
            
              <p>
                is a Korean martial arts involving punching and kicking
                techniques,
              </p>
              <p>
                is a Korean martial arts involving punching and kicking
                techniques,
              </p>
            </div>
          </div>
          <AboutTaekwondo />
          <div style={style}>
            <Slider {...settings}>
              {sliderImgs.map((img, idx) => (
                <SliderImg
                  key={idx}
                  srcImg={img.imgSrc}
                  alt={img.alt}
                  caption={img.caption}
                />
              ))}
            </Slider>
          </div>
          <div className="card--container">
            {cards.map((card, idx) => (
              <CardInformation
                key={idx}
                img={card.img}
                cardTitle={card.cardTitle}
                cardDescription={card.cardDescription}
                modalTitle={card.modalTitle}
                modalContent={card.modalContent}
                modalImgApp={card.modalImgApp}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
