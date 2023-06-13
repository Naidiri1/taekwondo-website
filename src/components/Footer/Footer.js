import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const style = {
  color: "white",
};
const bgBlack = {
  backgroundColor: "black"
};

const margingLeft = {
  marginLeft: "35px",
};

const mLeft = {
  marginLeft: "30px",
};

function Footer() {
  return (
    <footer className="text-center  ">
      <Container style={bgBlack} className="pt-5 pb-5 ">
      
        <a href="tel:941-202-2306" style={style}>
          <FontAwesomeIcon icon={faPhone} size="lg" style={margingLeft} />
          941-202-2306
        </a>
        <a
          href="https://www.facebook.com/traditionaTaekwondobradenton?mibextid=LQQJ4d"
          style={mLeft}
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
        </a>

        <a href="https://www.instagram.com/hwarangtaekwondo/" style={mLeft}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>

        <a
          href="https://youtube.com/@hwarangtraditionaltaekwon-5947"
          style={mLeft}
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a href="mailto:taekwondobradenton@gmail.com" style={style}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" style={mLeft} />
          taekwondobradenton@gmail.com
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
