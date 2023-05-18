import React, { useState } from "react";
import { Card, CardImg, Button, Modal } from "react-bootstrap";

const cardTemplate = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
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
                <Card.Title>class 1</Card.Title>
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
            style={{ color: "blue" }}>
            <Modal.Header closeButton>
              <Modal.Title>{props.cardTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.modalContent}
              <img
                style={{ width: "100%" }}
                src={props.imgSrc}
                alt="movie project"/>
              <ul>
             {renderModalFeatures()}
              </ul>
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
        </div>
      );
    };


    export default cardTemplate;








