import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";
import ulLogo from "../../assets/images/uk_logo.jpeg"

function NavBar() {
  return (
    <Navbar expand="lg" className="drc-navbar" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={ulLogo}
            height="30"
            className="d-inline-block align-top me-2"
            alt="DRC Logo"
          />
          Data Resource Center
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            

            {/* SERVICES */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {/* BENEFITS */}
            <Nav.Link as={Link} to="/AboutUs">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/SuccessStory">
              Success story
            </Nav.Link>

          </Nav>

          {/* LOGIN */}
          <Nav>
            <Button
              as={Link}
              to="/Login"
              variant="primary"
              className="primary-btn"
              size="sm"
            >
              Login
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;