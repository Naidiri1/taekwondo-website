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
// import AlbumTemplate from "../Album/albumTemplate";
import Album from "../Album/Album";
import Maps from "../Google/Maps"
import Reviews from "../Google/Reviews"
import logo from "../../assets/imgs/croppedLogo.png";
import Form from "../Form/Form";


const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  objectFit: "cover",
  autoplay: true,
  autoplaySpeed: 2000,
  overflow: "hidden",
};
const style = {
  overflow: "hidden",
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
          <div className=" d-flex justify-content-center align-items-center">
            <img style={{marginTop: "10rem"}} className=" img-fluid main-img" src={belt} alt="logo" />
          </div>
          <div className="d-flex justify-content-center align-items-center text-center">
            <div>
              <h2>HWA RANG TRADITIONAL</h2>
              <h2>TAEKWON-DO</h2>
              <p> Learn Something New Today</p>
              <p>Taekwondo, Tae Kwon Do or Taekwon-Do /</p>
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
                  caption="same text imgs"
                />
              ))}
            </Slider>
          </div>
          <div id ="courses" className="card--container">
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
          <div id="album" className="album-imgs">{Album()}</div>
            <div className="maps--container">
              <h1>Location</h1>
              <Maps />
            </div>
            <div className="form--container" id="contact">
            <Form/>
              <div className="contact--information--container">
              <h1>Contact Information </h1>
              <p>(941)-202-2306</p>
              <p>taekwondobradenton@gmail.com </p>
              <p>4520FL-64, Bradenton, FL 34208</p>
              </div>
            </div>
           <div id="testimonials"> </div>
           <div className="reviews--container">
              <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
