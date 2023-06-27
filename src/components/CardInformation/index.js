import React, { useState } from "react";
import { Card, CardImg, Button, Modal } from "react-bootstrap";
import "./style.css";
import cards from "./cards";
const CardInformation = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          margin: "40px",
          minWidth: "300px",
          width: "100%",
          maxWidth: "400px",
          minHeight: "550px",
          textAlign: "center",
          border: "1px solid rgb(171, 171, 171)",
        }}
      >
        <CardImg
          src={props.img}
          style={{
            minWidth: "300px",
            width: "100%",
            maxWidth: "400px",
            minHeight: "400",
            height: "100%",
            maxHeight: "600px",
          }}
        />
        <Card.Title style={{ margin: "20px" }}>{props.cardTitle}</Card.Title>
        <div style={{ borderBottom: "1px solid white" }}></div>
        <Card.Body>
          <Card.Text style={{ margin: "10px", textAlign: "justify" }}>
            <div className="card--description">{props.cardDescription}</div>
          </Card.Text>
        </Card.Body>
        <Button className="class--button" onClick={() => handleShow()}>
          More about this class
        </Button>
      </div>
      <div className="modal">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              {props.modalTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>
            {props.modalContent}

            <img
              style={{ width: "100%" }}
              src={props.modalImgApp}
              alt="apps images"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const CardDisplay = () => {
  return (
    <div id="courses" className="card--container">
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
  );
};

export default CardDisplay;
