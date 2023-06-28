import "bootstrap/dist/css/bootstrap.css";
import belt from "../../assets/imgs/belt.jpg";
import React from "react";
import banner1 from "../../assets/imgs/banner1.jpeg"
import banner2 from "../../assets/imgs/banner2.png"
import banner4 from "../../assets/imgs/banner4.jpeg"
import banner5 from "../../assets/imgs/banner5.jpeg"
import CardInformation from "../CardInformation";
import NavBar from "../NavBar";
import AboutTaekwondo from "../AboutTaekwondo";
import "./style.css";
import cards from "./cards";
import TeamDisplay from "../Team/Team"
import Album from "../Album/Album";
import Maps from "../Google/Maps";
import Reviews from "../Google/Reviews";
import logo from "../../assets/imgs/croppedLogo.png";
import Form from "../Form/Form";


const bgGray = {
  backgroundColor: "#212529"
};
const Main = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div style={bgGray}>
        <div id="home">
          <div className=" d-flex justify-content-center align-items-center">
            <img
              style={{ marginTop: "10rem", filter: 'grayscale(100%)', boxShadow: "4px 1px 4px black" }}
              className=" img-fluid main-img"
              src={belt}
              alt="logo"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center text-center">
            <div style={{fontFamily: "Raleway, sans-serif", fontWeight: "300", fontSize: "35px"}}>
              <div>HWA RANG TRADITIONAL</div>
              <div>TAEKWON-DO</div>
            </div>
          </div>
          <div className="logo">
            <img className="logo--img" src={logo} alt="logo" />
          </div>
          <div id="about">
            <AboutTaekwondo />
          </div>

          <div style={{ position: "relative" }} id="courses">
            <img
              src={banner1}
              alt="logo"
              style={{
                marginTop: "5%",
                height: "170px",
                width: "100%",
                objectFit: "cover",
                filter: 'grayscale(100%)'
              }}
            />
              <div className="banner--text">CLASSES</div>
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
          <div>
          <TeamDisplay/>
          </div>
          <div style={{ position: "relative" }} id="album">

            <img
              src={banner2}
              alt="logo"
              style={{
                marginTop: "5%",
                height: "170px",
                width: "100%",
                objectFit: "cover",
                filter: 'grayscale(100%)'
              }}
            />
              <div className="banner--text">ALBUM</div>
          </div>

          <div id="album" className="album-imgs">
            {Album()}
          </div>
          <div style={{ position: "relative" }} id="contact">
            <img
              src={banner4}
              alt="logo"
              style={{
                marginTop: "5%",
                height: "170px",
                width: "100%",
                objectFit: "cover",
                filter: 'grayscale(100%)'
              }}
            />
              <div className="banner--text" id="contact">CONTACT</div>
          </div>
          <div className="form--container">
            <Form />
            <div className="contact--information--container">
              <h1>Get in touch </h1>
              <p>(941)-202-2306</p>
              <p>taekwondobradenton@gmail.com </p>
              <p>4520 FL-64, Bradenton, FL 34208</p>
            </div>
          </div>
          <div className="maps--container">
            <Maps />
          </div>
          <div id="testimonials"> </div>
          <div style={{ position: "relative" }} id="testimonials">
            <img
              src={banner5}
              alt="logo"
              style={{
                marginTop: "5%",
                height: "170px",
                width: "100%",
                objectFit: "cover",
                filter: 'grayscale(100%)'
              }}
            />
              <div className="banner--text" >REVIEWS</div>
          </div>
          <div className="reviews--container">
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
