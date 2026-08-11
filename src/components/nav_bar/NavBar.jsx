import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar expand="lg" className="drc-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaDatabase className="me-2" />
          Data Resource Center
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>

          <Nav>
            <Button
              as={Link}
              to="/Login"
              variant="primary"
              className="primary-btn"
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