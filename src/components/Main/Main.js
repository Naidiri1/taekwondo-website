import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import belt from "./belt.jpg";
import { Card, CardImg, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./cardInformation"
import SliderImg from './SliderImg';
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
const style ={
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "center"
}


const Main = (props) => {
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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

  return (
    <div>
      <div>
        <ul className="header d-flex justify-content-around list-unstyled">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/book">Book Online</a>
          </li>
          <li>
            <a href="/pricing">Plan and Pricing</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Team">Team</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </div>
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
          style={{ background: "none" }}
        >
          <h3 style={{ background: "none" }}>ABOUT OUR MARTIAL ART</h3>
          <h3 style={{ background: "none" }}>ARTS SCHOOL</h3>
          <p style={{ background: "none" }}>
            What is Taekwondo original meaning? Taekwondo (also known as Tae
            Kwon Do) is the art of self defense that originated in Korea. It is
            recognized as one of the oldest forms of martial arts in the world,
            reaching back over 2,000 years.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: "100%", margin: "0 auto", textAlign: "center" }}>
        <Slider {...settings}>
          {sliderImgs.map((img, idx) => <SliderImg key={idx} srcImg={img.imgSrc} alt={img.alt}/>)}
        </Slider>
      </div>
      <div
          style={{
            width: "100%",
            maxWidth: "600px",
            textAlign: "center",
            alignContent: "center",
            margin: "20px",
          }}>
          <div>
              <CardImg
                src={props.img}
                style={{ height: "300px"}}/>
                <Card.Title>{props.cardTitle}</Card.Title>
            <Card.Body>
              <Card.Text style={{ margin: "10px", textAlign: "justify" }}>
                {props.cardDescription}
              </Card.Text>
            </Card.Body>
          </div>
          <Button className="me-2 mb-2" onClick={() => handleShow()}>
            More about this class
          </Button>
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.modalContent}
          <img
            style={{ width: "100%" }}
            src={props.imgSrc}
            alt="movie project"/>
          
          <img
            style={{ width: "100%" }}
            src={props.modalImgApp}
            alt="apps images"/>
          <button className="mt-3" style={{background:"#0d6efd", border:"none"}}>
          <a href={props.modalRepolink} style={{textDecoration:"none",  color:"white", margin:"3px"}}>Github Repository</a>
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
{/* 

      <div className="container" >
        <div className="row mt-5">
          <div className="col-sm-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={belt} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={belt} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={belt} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
};

export default Main;
