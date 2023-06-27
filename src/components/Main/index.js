import "bootstrap/dist/css/bootstrap.css";
import belt from "../../assets/imgs/belt.jpg";
import React from "react";
import NavBar from "../NavBar";
import AboutTaekwondo from "../AboutTaekwondo";
import "./style.css";
import Banner from "../Banner";
import Album from "../Album/Album";
import Maps from "../Google/Maps";
import Reviews from "../Google/Reviews";
import logo from "../../assets/imgs/croppedLogo.png";
import Form from "../Form/Form";
import CardDisplay from "../CardInformation";

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
            <img
              style={{ marginTop: "10rem" }}
              className=" img-fluid main-img"
              src={belt}
              alt="logo"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center text-center">
            <div>
              <h2>HWA RANG TRADITIONAL</h2>
              <h2>TAEKWON-DO</h2>
            </div>
          </div>
          <div className="logo">
            <img className="logo--img" src={logo} alt="logo" />
          </div>
          <div id="about">
            <AboutTaekwondo />
          </div>
          <Banner src={belt} heading={"CLASSES"}/>

          <CardDisplay />
          <Banner src={belt} heading={"ALBUM"}/>
          <div id="album" className="album-imgs">
            <Album />
          </div>
          <Banner src={belt} heading={"LOCATION"}/>
          <div className="maps--container">
            <Maps />
          </div>
          <Banner src={belt} heading={"CONTACT"}/> 
          <div className="form--container" id="contact">
            <Form />
            <div className="contact--information--container">
              <h1>Get in touch </h1>
              <p>(941)-202-2306</p>
              <p>taekwondobradenton@gmail.com </p>
              <p>4520FL-64, Bradenton, FL 34208</p>
            </div>
          </div>
          <div id="testimonials"> </div>
          <Banner src={belt} heading={"REVIEWS"}/>
          <div className="reviews--container">
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
