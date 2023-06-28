import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import {
  belt, CardDisplay, NavBar, AboutTaekwondo, TeamDisplay,
  Album, Maps, Reviews, logo, Form, Banner
} from "../index.js"
import {
  banner1, banner2, banner3, 
  banner4, banner5, banner6 
} from "../../assets/imgs/bannerPhotos"

const bgGray = {
  backgroundColor: "#212529"
};

const bannerStyle = {
  paddingTop: "2rem",
  marginTop: "-2rem"
}

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
              style={{marginTop: "10rem", filter: 'grayscale(100%)', boxShadow: "4px 1px 4px black" }}
              className=" img-fluid main-img"
              src={belt}
              alt="logo"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center text-center">
            <div style={{fontFamily: "Raleway, sans-serif", fontWeight: "300", fontSize: "35px"}}>
              <div>HWA RANG TRADITIONAL</div>
              <div>TAEKWON-DO</div>
              <div className="logo">
            <img className="logo--img" src={logo} alt="logo" />
          </div>
    
            </div>
          </div>
          <div id="about" style={bannerStyle}>
            <Banner bannerPhoto={banner6} bannerText="About"/>
          </div>
          <AboutTaekwondo />
          <div id="classes" style={bannerStyle}>
            <Banner bannerPhoto={banner1} bannerText="Classes"/>
          </div>
          <CardDisplay />
          <div id="team" style={bannerStyle}>
            <Banner bannerPhoto={banner3} bannerText="Team"/> 
          </div>
          <div>
          <TeamDisplay/>
          </div>
          <div id="album" style={bannerStyle}>
            <Banner bannerPhoto={banner2} bannerText="Album" /> 
          </div>
          <Album />
          <div id="contact" style={bannerStyle}>
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
          <div id="testimonials" style={bannerStyle}>
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
