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
          minWidth: "400px",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <CardImg src={props.img} style={{ height: "300px", objectFit:"cover" }} />
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

export default CardInformation;
