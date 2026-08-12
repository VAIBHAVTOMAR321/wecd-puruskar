import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar expand="lg" className="drc-navbar" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <FaDatabase className="me-2" />
          Data Resource Center
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {/* HOME DROPDOWN */}
            <NavDropdown title="Home" id="home-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Home
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/about">
                About Us
              </NavDropdown.Item>

             
            </NavDropdown>

            {/* DEPARTMENTS */}
            <NavDropdown title="Departments" id="departments-dropdown">
              <NavDropdown.Item as={Link} to="/departments">
                All Departments
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/departments/education">
                Education Department
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/departments/health">
                Health Department
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/departments/agriculture">
                Agriculture Department
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/departments/welfare">
                Social Welfare Department
              </NavDropdown.Item>
            </NavDropdown>

            {/* SCHEMES */}
            <NavDropdown title="Schemes" id="schemes-dropdown">
              <NavDropdown.Item as={Link} to="/schemes">
                All Schemes
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/schemes/education">
                Education Schemes
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/schemes/health">
                Health Schemes
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/schemes/scholarship">
                Scholarships
              </NavDropdown.Item>
            </NavDropdown>

            {/* SERVICES */}
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>

            {/* BENEFITS */}
            <Nav.Link as={Link} to="/benefits">
              Benefits
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