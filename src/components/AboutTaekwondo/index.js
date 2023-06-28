import React from 'react';
import belt from '../../assets/imgs/belt.jpg';

const AboutTaekwondo = () => {
    return (
        <div style={{ position: "relative" }}>
        <img
          src={belt}
          alt="logo"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
            filter: "contrast(60%)",
          }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center "
          style={{ background: "none", fontFamily: "Raleway, sans-serif" }}
        >
          <h3 style={{ background: "none", fontWeight: "400" }}>ABOUT OUR MARTIAL ART</h3>
          <h3 style={{ background: "none", fontWeight: "400" }}>ARTS SCHOOL</h3>
          <p style={{ background: "none", fontWeight: "200" }}>
            What is Taekwondo original meaning? Taekwondo also known as Tae
            Kwon Do is the art of self defense that originated in Korea. It is
            recognized as one of the oldest forms of martial arts in the world,
            reaching back over 2,000 years.
          </p>
        </div>
      </div>
    );
};

export default AboutTaekwondo;