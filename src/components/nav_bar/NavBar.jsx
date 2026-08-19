import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import ulLogo from "../../assets/images/uk_logo.jpeg"

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`drc-navbar ${scrolled ? "navbar-scrolled" : ""}`} fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={ulLogo}
            height="30"
            className="d-inline-block align-top me-2"
            alt="SRC Logo"
          />
          State Resource Center
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            

            {/* SERVICES */}
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">
              Home
            </Nav.Link>

            {/* BENEFITS */}
            <Nav.Link as={NavLink} to="/AboutUs" className="nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/SuccessStory" className="nav-link-custom">
              Success story
            </Nav.Link>

          </Nav>

          {/* LANGUAGE TOGGLE & LOGIN */}
          <Nav className="align-items-center gap-2">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={toggleLanguage}
              className="lang-toggle-btn"
            >
              {language === "en" ? "हिंदी" : "English"}
            </Button>
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