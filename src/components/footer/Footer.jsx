import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaArrowRight,
  FaShieldAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaBriefcase,
  FaHandHoldingHeart,
} from "react-icons/fa";

/* ── Import Uttarakhand State Logo ── */
import UkLogo from "../../../src/assets/images/uk_logo.jpeg";

import "../../../src/assets/css/footer.css";


function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About SRC", href: "#about" },
    { label: "Departments", href: "#departments" },
    { label: "Schemes", href: "#schemes" },
    { label: "Empowerment", href: "#empowerment" },
  ];

  const resources = [
    { label: "Education", href: "#education", icon: <FaGraduationCap /> },
    { label: "Child Protection", href: "#protection", icon: <FaShieldAlt /> },
    { label: "Health & Nutrition", href: "#health", icon: <FaHeartbeat /> },
    { label: "Skill Development", href: "#skills", icon: <FaBriefcase /> },
    { label: "Welfare Schemes", href: "#welfare", icon: <FaHandHoldingHeart /> },
  ];

  return (
    <footer className="drc-footer">
      <Container>
        {/* ══════ TOP WAVE ══════ */}
       

        <Row className="g-4">
          {/* ══════ BRAND + UK LOGO ══════ */}
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <img
                src={UkLogo}
                alt="Uttarakhand State Logo"
                className="uk-state-logo"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">State Resource Center</span>
                <span className="footer-brand-sub">उत्तराखण्ड सरकार</span>
              </div>
            </div>
            <p className="footer-desc">
              बच्चों के सशक्तिकरण, संरक्षण, शिक्षा और कल्याण से संबंधित
              जानकारी का केंद्रीकृत डिजिटल प्लेटफॉर्म। DRC हर बच्चे को
              उसके अधिकार और हक़ की जानकारी सुलभ बनाता है।
            </p>
            <div className="footer-tricolor">
              <div /><div /><div />
            </div>
          </Col>

          {/* ══════ QUICK LINKS ══════ */}
          <Col sm={6} lg={2} md={3}>
            <div className="footer-link-group">
              <h6>Quick Links</h6>
              <div className="footer-link-line" />
              <ul>
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>
                      <FaArrowRight className="footer-link-arrow" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* ══════ RESOURCES ══════ */}
          <Col sm={6} lg={2} md={3}>
            <div className="footer-link-group">
              <h6>Resources</h6>
              <div className="footer-link-line" />
              <ul>
                {resources.map((res, i) => (
                  <li key={i}>
                    <a href={res.href}>
                      <span className="footer-res-icon">{res.icon}</span>
                      {res.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* ══════ CONTACT ══════ */}
          <Col lg={4} md={6}>
            <div className="footer-link-group">
              <h6>Contact DRC</h6>
              <div className="footer-link-line" />
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(37,99,235,0.1)", color: "#2563eb" }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <strong>Address</strong>
                    <span>उत्तराखण्ड सचिवालय, देहरादून</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(13,128,67,0.1)", color: "#0d8043" }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <span>+91 135-264-XXXX</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(232,114,12,0.1)", color: "#d44a0a" }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>support@drc.uk.gov.in</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(124,58,237,0.1)", color: "#7c3aed" }}>
                    <FaGlobe />
                  </div>
                  <div>
                    <strong>Website</strong>
                    <span>www.drc.uk.gov.in</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* ══════ DIVIDER ══════ */}
        <div className="footer-divider">
          <div className="footer-divider-line" />
        </div>

        {/* ══════ BOTTOM BAR ══════ */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <img
              src={UkLogo}
              alt="UK Logo"
              className="uk-state-logo-sm"
            />
            <span>© {currentYear} State Resource Center, Government of Uttarakhand</span>
          </div>
          <div className="footer-bottom-right">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;