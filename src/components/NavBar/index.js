import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const NavBar = () => {
  return (
    <div style={{ background: "black" }} className="nav--container">
      <div>
        <h1 className="mx-3">Hwa Rang Taekwon-Do</h1>
        <a
          className="navbar-brand mx-3"
          href="https://www.google.com/maps/place/Hwa+Rang+Traditional+TaeKwon-Do+Center,+4520+FL-64,+Bradenton,+FL+34208/@27.4965506,-82.5054414,17z/data=!4m9!1m2!2m1!1staekwondo+near+Bradenton,+FL!3m5!1s0x88c33cf2f6f408bb:0x4c5d649f8601b722!8m2!3d27.4965506!4d-82.5054414!16s%2Fg%2F1ptwq4k9z?source=g.page.m.ad._"
        >
          <FontAwesomeIcon icon={faLocationDot} />
          4520 FL-64, Bradenton, FL 34208
        </a>
      </div>
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="dark"
        className="text-white"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-size">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#courses">Classes</Nav.Link>
              <Nav.Link href="#album">Album</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
