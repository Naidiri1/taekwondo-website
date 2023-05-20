import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

const NavBar = () => {

  return (
    <div style={{background:"black"}} >
    <h1 className="mx-3">Hwa Rang Taekwon-Do</h1>
    <Navbar collapseOnSelect expand="sm" variant="dark" className="text-white">
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto text-size" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#bookonline">Book Online</Nav.Link>
            <Nav.Link href="#planspricing">Plans & Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;