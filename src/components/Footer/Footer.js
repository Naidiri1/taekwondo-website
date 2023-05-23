import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const style = {
  color: "white",
  marginLeft: "15px",
};
const bgBlack = {
  backgroundColor: "black",
};

const margingLeft = {
  marginLeft: "55px",
};

function Footer() {
  return (
    <footer className="text-center ">
      <Container style={bgBlack} className="pt-5 pb-5 text-align-center">
        <a
          href="https://www.google.com/maps/place/Hwa+Rang+Traditional+TaeKwon-Do+Center,+4520+FL-64,+Bradenton,+FL+34208/@27.4965506,-82.5054414,17z/data=!4m9!1m2!2m1!1staekwondo+near+Bradenton,+FL!3m5!1s0x88c33cf2f6f408bb:0x4c5d649f8601b722!8m2!3d27.4965506!4d-82.5054414!16s%2Fg%2F1ptwq4k9z?source=g.page.m.ad._"
          style={style}
        >
          <FontAwesomeIcon icon={faLocationDot} size="lg" />
          4520FL-64, Bradenton, FL 34208
        </a>
        <a href="tel:941-202-2306" style={style}>
          <FontAwesomeIcon icon={faPhone} size="lg" style={margingLeft} />
          941-202-2306
        </a>
        <a href="https://www.facebook.com/traditionaTaekwondobradenton?mibextid=LQQJ4d" style={{marginLeft:"30px"}}>
          <FontAwesomeIcon 
            icon={faFacebookSquare}
            size="lg"
        
          />
        </a>

        <a href="https://www.instagram.com/hwarangtaekwondo/" style={{marginLeft:"30px"}}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>

        <a href="https://youtube.com/@hwarangtraditionaltaekwon-5947" style={{marginLeft:"30px"}}>
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
