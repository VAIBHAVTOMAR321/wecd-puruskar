import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
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

import { useLanguage } from "../../context/LanguageContext";
import "../../../src/assets/css/footer.css";

const translations = {
  en: {
    brandName: "State Resource Center",
    brandSub: "Government of Uttarakhand",
    description: "A centralized digital platform for information related to the empowerment, protection, education, and welfare of children. SRC makes information about every child's rights accessible.",
    quickLinks: "Quick Links",
    resources: "Resources",
    contact: "Contact DRC",
    address: "Address",
    addressValue: "Uttarakhand Secretariat, Dehradun",
    phone: "Phone",
    email: "Email",
    website: "Website",
    copyright: "State Resource Center, Government of Uttarakhand",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    accessibility: "Accessibility",
    quickLinksData: [
      { label: "Home", href: "/" },
      { label: "About SRC", href: "/AboutUs" },
      { label: "Departments", href: "/#departments" },
      { label: "Schemes", href: "/#schemes" },
      { label: "Success Stories", href: "/SuccessStory" },
    ],
    resourcesData: [
      { label: "Education", href: "#", icon: <FaGraduationCap /> },
      { label: "Child Protection", href: "#", icon: <FaShieldAlt /> },
      { label: "Health & Nutrition", href: "#", icon: <FaHeartbeat /> },
      { label: "Skill Development", href: "#", icon: <FaBriefcase /> },
      { label: "Welfare Schemes", href: "#", icon: <FaHandHoldingHeart /> },
    ],
  },
  hi: {
    brandName: "राज्य संसाधन केंद्र",
    brandSub: "उत्तराखण्ड सरकार",
    description: "बच्चों के सशक्तिकरण, संरक्षण, शिक्षा और कल्याण से संबंधित जानकारी का केंद्रीकृत डिजिटल प्लेटफॉर्म। SRC हर बच्चे को उसके अधिकार और हक़ की जानकारी सुलभ बनाता है।",
    quickLinks: "त्वरित लिंक",
    resources: "संसाधन",
    contact: "डीआरसी से संपर्क करें",
    address: "पता",
    addressValue: "उत्तराखण्ड सचिवालय, देहरादून",
    phone: "फ़ोन",
    email: "ईमेल",
    website: "वेबसाइट",
    copyright: "राज्य संसाधन केंद्र, उत्तराखण्ड सरकार",
    privacyPolicy: "गोपनीयता नीति",
    termsOfUse: "उपयोग की शर्तें",
    accessibility: "अभिगम्यता",
    quickLinksData: [
      { label: "होम", href: "/" },
      { label: "एसआरसी के बारे में", href: "/AboutUs" },
      { label: "विभाग", href: "/#departments" },
      { label: "योजनाएं", href: "/#schemes" },
      { label: "सफलता की कहानियाँ", href: "/SuccessStory" },
    ],
    resourcesData: [
      { label: "शिक्षा", href: "#", icon: <FaGraduationCap /> },
      { label: "बाल संरक्षण", href: "#", icon: <FaShieldAlt /> },
      { label: "स्वास्थ्य एवं पोषण", href: "#", icon: <FaHeartbeat /> },
      { label: "कौशल विकास", href: "#", icon: <FaBriefcase /> },
      { label: "कल्याणकारी योजनाएं", href: "#", icon: <FaHandHoldingHeart /> },
    ],
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="drc-footer">
      <Container>
        <Row className="g-4">
          {/* ══════ BRAND + UK LOGO ══════ */}
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <img
                src={UkLogo}
                alt={t.brandSub}
                className="uk-state-logo"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">{t.brandName}</span>
                <span className="footer-brand-sub">{t.brandSub}</span>
              </div>
            </div>
            <p className="footer-desc">
              {t.description}
            </p>
            <div className="footer-tricolor">
              <div /><div /><div />
            </div>
          </Col>

          {/* ══════ QUICK LINKS ══════ */}
          <Col sm={6} lg={2} md={3}>
            <div className="footer-link-group">
              <h6>{t.quickLinks}</h6>
              <div className="footer-link-line" />
              <ul>
                {t.quickLinksData.map((link, i) => (
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
              <h6>{t.resources}</h6>
              <div className="footer-link-line" />
              <ul>
                {t.resourcesData.map((res, i) => (
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
              <h6>{t.contact}</h6>
              <div className="footer-link-line" />
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(37,99,235,0.1)", color: "#2563eb" }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <strong>{t.address}</strong>
                    <span>{t.addressValue}</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(13,128,67,0.1)", color: "#0d8043" }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <strong>{t.phone}</strong>
                    <span>+91 135-264-XXXX</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(232,114,12,0.1)", color: "#d44a0a" }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <strong>{t.email}</strong>
                    <span>support@drc.uk.gov.in</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon" style={{ background: "rgba(124,58,237,0.1)", color: "#7c3aed" }}>
                    <FaGlobe />
                  </div>
                  <div>
                    <strong>{t.website}</strong>
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
            <span>© {currentYear} {t.copyright}</span>
          </div>
          <div className="footer-bottom-right">
            <Nav.Link href="#privacy">{t.privacyPolicy}</Nav.Link>
            <Nav.Link href="#terms">{t.termsOfUse}</Nav.Link>
            <Nav.Link href="#accessibility">{t.accessibility}</Nav.Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;