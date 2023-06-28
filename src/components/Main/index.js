import "bootstrap/dist/css/bootstrap.css";
import belt from "../../assets/imgs/allPhotos/belt.jpg";
import React from "react";
import CardDisplay from "../CardInformation";
import NavBar from "../NavBar";
import AboutTaekwondo from "../AboutTaekwondo";
import "./style.css";
import TeamDisplay from "../Team/Team"
import Album from "../Album/Album";
import Maps from "../Google/Maps";
import Reviews from "../Google/Reviews";
import logo from "../../assets/imgs/allPhotos/croppedLogo.png";
import Form from "../Form/Form";
import Banner from "../Banner/index"
import {
  banner1, 
  banner2,
  banner3, 
  banner4, 
  banner5,
  banner6 } from "../../assets/imgs/bannerPhotos"

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
          <div id="about" style={{paddingTop: "2rem", marginTop: "-2rem"}}>
            <Banner bannerPhoto={banner6} bannerText="About"/>
          </div>
          <AboutTaekwondo />
          <div id="classes" style={{paddingTop: "2rem", marginTop: "-2rem"}}>
            <Banner bannerPhoto={banner1} bannerText="Classes"/>
          </div>
          <CardDisplay />
          <div id="team" style={{paddingTop: "2rem", marginTop: "-2rem"}}>
            <Banner bannerPhoto={banner3} bannerText="Team"/> 
          </div>
          <div>
          <TeamDisplay/>
          </div>
          <div id="album" style={{paddingTop: "2rem", marginTop: "-2rem"}}>
            <Banner bannerPhoto={banner2} bannerText="Album" /> 
          </div>
          <Album />
          <div id="contact" style={{paddingTop: "2rem", marginTop: "-2rem"}}>
            <Banner bannerPhoto={banner4} bannerText="Contact" id="contact"/> 
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
          <div id="testimonials" style={{paddingTop: "2rem", marginTop: "-2rem"}}>
            <Banner bannerPhoto={banner5} bannerText="Reviews" /> 
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
