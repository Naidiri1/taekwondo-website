import React, { useState } from "react";
import { Card, CardImg, Button, Modal } from "react-bootstrap";

const CardInformation = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">

    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        textAlign: "center",
        alignContent: "center",
  alignItems:"center"
      }}
    >
        <CardImg src={props.img} style={{ height: "300px" }} />
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Body>
          <Card.Text style={{ margin: "10px", textAlign: "justify" }}>
            <div className="card--description">{props.cardDescription}</div>
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
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.modalContent}
          <img
            style={{ width: "100%" }}
            src={props.imgSrc}
            alt="movie project"
          />

          <img
            style={{ width: "100%" }}
            src={props.modalImgApp}
            alt="apps images"
          />
          <button
            className="mt-3"
            style={{ background: "#0d6efd", border: "none" }}
          >
            <a
              href={props.modalRepolink}
              style={{ textDecoration: "none", color: "white", margin: "3px" }}
            >
              Github Repository
            </a>
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
// return (<div className="container">{renderCards()}</div>);
// };

export default CardInformation;
