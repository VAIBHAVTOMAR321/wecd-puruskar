import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import {
  FaDatabase,
  FaShieldAlt,
  FaBalanceScale,
  FaChild,
  FaHandsHelping,
  FaHeartbeat,
  FaSchool,
  FaRunning,
  FaMapMarkedAlt,
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaHardHat,
  FaBookOpen,
  FaGraduationCap,
  FaLaptop,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaTint,
  FaShoppingCart,
  FaLeaf,
  FaHandHoldingHeart,
  FaFileAlt,
  FaCheckCircle,
  FaQuoteLeft,
  FaBullseye,
  FaEye,
  FaCogs,
  FaLayerGroup,
  FaProjectDiagram,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

import "../../../src/assets/css/aboutus.css";

const departments = [
  { name: "न्याय एवं विधि परामर्शी विभाग", workArea: "बाल अधिकार एवं कानूनी सहायता", icon: <FaBalanceScale />, cardColor: "#e7f5ff", color: "#8ecae6", studentCount: 1250, schemesCount: 5 },
  { name: "वित्त विभाग", workArea: "योजनाओं के लिए वित्तीय सहायता एवं बजट", icon: <FaHandsHelping />, cardColor: "#fff8e1", color: "#fca311", studentCount: 8500, schemesCount: 8 },
  { name: "नियोजन विभाग", workArea: "राज्य के विकास की योजना", icon: <FaChartLine />, cardColor: "#eaf6f5", color: "#2a9d8f", studentCount: 3200, schemesCount: 6 },
  { name: "स्वास्थ्य एवं परिवार कल्याण विभाग", workArea: "बाल स्वास्थ्य, पोषण एवं चिकित्सा", icon: <FaHeartbeat />, cardColor: "#fdeee9", color: "#e76f51", studentCount: 15000, schemesCount: 12 },
  { name: "शिक्षा विभाग", workArea: "बाल शिक्षा, विद्यालय एवं साक्षरता", icon: <FaSchool />, cardColor: "#e4f8fb", color: "#48cae4", studentCount: 25000, schemesCount: 15 },
  { name: "युवा कल्याण एवं खेल विभाग", workArea: "खेल, युवा विकास एवं प्रतिभा प्रोत्साहन", icon: <FaRunning />, cardColor: "#f6eefe", color: "#c77dff", studentCount: 7800, schemesCount: 9 },
  { name: "पंचायती राज विभाग", workArea: "ग्रामीण स्तर पर बाल कल्याण कार्यक्रम", icon: <FaMapMarkedAlt />, cardColor: "#f0f9e6", color: "#70e000", studentCount: 11200, schemesCount: 7 },
  { name: "ग्राम्य विकास विभाग", workArea: "ग्रामीण बच्चों के विकास एवं सहायता कार्यक्रम", icon: <FaHome />, cardColor: "#fff9e6", color: "#ffbe0b", studentCount: 9500, schemesCount: 10 },
  { name: "कौशल विकास एवं सेवा योजना विभाग", workArea: "कौशल एवं व्यावसायिक प्रशिक्षण", icon: <FaBriefcase />, cardColor: "#e0f7fa", color: "#00b4d8", studentCount: 6400, schemesCount: 11 },
  { name: "आवास एवं शहरी विकास विभाग", workArea: "शहरी क्षेत्रों में बाल एवं परिवार सहायता", icon: <FaBuilding />, cardColor: "#fef0f5", color: "#f72585", studentCount: 4800, schemesCount: 8 },
  { name: "श्रम विभाग", workArea: "बाल श्रम रोकथाम एवं श्रमिक परिवारों के बच्चों का कल्याण", icon: <FaHardHat />, cardColor: "#f9fbe7", color: "#c0d628", studentCount: 2100, schemesCount: 6 },
  { name: "पेयजल विभाग", workArea: "स्वच्छ पेयजल की उपलब्धता", icon: <FaTint />, cardColor: "#ebf9f8", color: "#ade8f4", studentCount: 18000, schemesCount: 4 },
  { name: "खाद्य एवं नागरिक आपूर्ति उपभोक्ता विभाग", workArea: "खाद्य सुरक्षा और आपूर्ति", icon: <FaShoppingCart />, cardColor: "#fff5f7", color: "#ff8fab", studentCount: 22000, schemesCount: 5 },
  { name: "समाज कल्याण विभाग", workArea: "सामाजिक सुरक्षा और कल्याण", icon: <FaUsers />, cardColor: "#f3eef2", color: "#b5838d", studentCount: 13500, schemesCount: 14 },
  { name: "कृषि विभाग", workArea: "कृषि विकास और किसान कल्याण", icon: <FaLeaf />, cardColor: "#edf8f3", color: "#52b788", studentCount: 5600, schemesCount: 9 },
  { name: "महिला कल्याण विभाग", workArea: "महिला सशक्तिकरण एवं कल्याण", icon: <FaChild />, cardColor: "#fef3f7", color: "#f78fb3", studentCount: 19800, schemesCount: 18 },
  { name: "एसोसिएशन फॉर वॉलंटरी एक्शन (AVA)", workArea: "स्वैच्छिक कार्यों के माध्यम से सामुदायिक विकास", icon: <FaHandHoldingHeart />, cardColor: "#fffde6", color: "#ffdd00", studentCount: 850, schemesCount: 3 },
  { name: "एसपीओटीकाईएम, पुलिस मुख्यालय", workArea: "कानून व्यवस्था और बाल सुरक्षा", icon: <FaShieldAlt />, cardColor: "#eeeffd", color: "#a2a6f0", studentCount: 450, schemesCount: 4 },
];

const empowermentAreas = [
  { title: "बाल शिक्षा", description: "शिक्षा एवं सीखने के अवसर", icon: <FaBookOpen />, beneficiaries: 120500, programs: 25 },
  { title: "बाल संरक्षण", description: "सुरक्षा एवं बाल अधिकार", icon: <FaShieldAlt />, beneficiaries: 55200, programs: 15 },
  { title: "स्वास्थ्य एवं पोषण", description: "स्वास्थ्य एवं पोषण सेवाएँ", icon: <FaHeartbeat />, beneficiaries: 210000, programs: 32 },
  { title: "छात्रवृत्ति", description: "शैक्षणिक एवं वित्तीय सहायता", icon: <FaGraduationCap />, beneficiaries: 85000, programs: 18 },
  { title: "कौशल विकास", description: "कौशल एवं व्यावसायिक प्रशिक्षण", icon: <FaBriefcase />, beneficiaries: 42000, programs: 22 },
  { title: "डिजिटल साक्षरता", description: "डिजिटल शिक्षा एवं जागरूकता", icon: <FaLaptop />, beneficiaries: 75000, programs: 12 },
];

const totalSchemes = departments.reduce((s, d) => s + d.schemesCount, 0);
const totalBeneficiaries = empowermentAreas.reduce((s, a) => s + a.beneficiaries, 0);
const totalStudents = departments.reduce((s, d) => s + d.studentCount, 0);

function useAnimatedCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
}

function AboutUs() {
  const [activeStep, setActiveStep] = useState(null);
  const [activeArea, setActiveArea] = useState(null);
  const [visibleDepts, setVisibleDepts] = useState(8);

  const [animDepts, deptsRef] = useAnimatedCounter(departments.length);
  const [animSchemes, schemesRef] = useAnimatedCounter(totalSchemes);
  const [animBen, benRef] = useAnimatedCounter(Math.round(totalBeneficiaries / 1000));
  const [animStudents, studentsRef] = useAnimatedCounter(Math.round(totalStudents / 1000));

  const howItWorks = [
    { step: 1, icon: <FaDatabase />, title: "Data Collection", desc: "सरकारी विभागों से योजनाओं और सेवाओं की जानकारी एकत्रित की जाती है।", color: "#FF9933" },
    { step: 2, icon: <FaLayerGroup />, title: "Categorization", desc: "विभाग, कार्यक्षेत्र और लाभार्थी के आधार पर वर्गीकरण।", color: "#1a5276" },
    { step: 3, icon: <FaCogs />, title: "Processing", desc: "डिजिटल प्लेटफॉर्म पर जानकारी को व्यवस्थित और प्रसंस्कृत किया जाता है।", color: "#e74c3c" },
    { step: 4, icon: <FaProjectDiagram />, title: "Mapping", desc: "विभाग → योजना → उद्देश्य → लाभ का मानचित्रण।", color: "#8e44ad" },
    { step: 5, icon: <FaHandshake />, title: "Access", desc: "नागरिकों को आसानी से खोज और उपयोग की सुविधा।", color: "#138808" },
  ];

  const visionPoints = [
    { icon: <FaEye />, text: "हर बच्चे तक सूचना की पहुँच सुनिश्चित करना" },
    { icon: <FaStar />, text: "पारदर्शिता और जवाबदेही को बढ़ावा देना" },
    { icon: <FaChild />, text: "बाल अधिकारों की सुरक्षा और सशक्तिकरण" },
  ];

  const missionPoints = [
    { icon: <FaBullseye />, text: "18+ विभागों की योजनाओं का केंद्रीकृत डिजिटल भंडार" },
    { icon: <FaDatabase />, text: "सरल और प्रभावी खोज प्रणाली" },
    { icon: <FaHandsHelping />, text: "लाभार्थियों के लिए एकीकृत सेवा पोर्टल" },
  ];

  return (
    <div className="about-page">

      {/* ═══════════ HERO WITH STATS ON RIGHT ═══════════ */}
      <section className="about-hero">
        <Container>
          <Row className="align-items-center g-4">
            {/* LEFT - Text */}
            <Col lg={6}>
              <div className="about-hero-inner">
                <div className="about-hero-badge">
                  <FaDatabase />
                  <span>About DRC</span>
                </div>
                <h1>
                  About <span>डेटा रिसोर्स सेंटर</span>
                </h1>
                <p>
                  DRC एक केंद्रीकृत डिजिटल प्लेटफॉर्म है जिसे बाल सशक्तिकरण के लिए
                  उपलब्ध सरकारी विभागों, योजनाओं, सेवाओं और लाभों के बारे में
                  व्यापक जानकारी प्रदान करने के लिए डिज़ाइन किया गया है। हमारा
                  उद्देश्य सूचना तक आसान पहुँच सुनिश्चित करना है ताकि हर बच्चे को
                  उसका अधिकार मिल सके।
                </p>
                <div className="about-hero-tricolor">
                  <div /><div /><div />
                </div>
              </div>
            </Col>

            {/* RIGHT - Stats */}
            <Col lg={6}>
              <div className="about-hero-stats-grid">
                <div className="about-hero-stat" ref={deptsRef}>
                  <div className="about-hero-stat-icon" style={{ background: "rgba(255,153,51,0.12)", color: "#FF9933" }}>
                    <FaDatabase />
                  </div>
                  <div className="about-hero-stat-content">
                    <strong>{animDepts}+</strong>
                    <span>Departments</span>
                  </div>
                </div>

                <div className="about-hero-stat" ref={schemesRef}>
                  <div className="about-hero-stat-icon" style={{ background: "rgba(26,82,118,0.1)", color: "#1a5276" }}>
                    <FaFileAlt />
                  </div>
                  <div className="about-hero-stat-content">
                    <strong>{animSchemes}+</strong>
                    <span>Schemes</span>
                  </div>
                </div>

                <div className="about-hero-stat" ref={benRef}>
                  <div className="about-hero-stat-icon" style={{ background: "rgba(19,136,8,0.1)", color: "#138808" }}>
                    <FaUsers />
                  </div>
                  <div className="about-hero-stat-content">
                    <strong>{animBen}K+</strong>
                    <span>Beneficiaries</span>
                  </div>
                </div>

                <div className="about-hero-stat" ref={studentsRef}>
                  <div className="about-hero-stat-icon" style={{ background: "rgba(42,157,143,0.12)", color: "#2a9d8f" }}>
                    <FaGraduationCap />
                  </div>
                  <div className="about-hero-stat-content">
                    <strong>{animStudents}K+</strong>
                    <span>Students</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ═══════════ VISION & MISSION ═══════════ */}
      <section className="about-vm-section">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="vm-card vm-vision">
                <div className="vm-header">
                  <div className="vm-icon"><FaEye /></div>
                  <h3>Our Vision</h3>
                </div>
                <p className="vm-quote">
                  <FaQuoteLeft />
                  हर बच्चे को उसके अधिकार और हक़ की जानकारी मिले — यही DRC का सपना है।
                </p>
                <div className="vm-points">
                  {visionPoints.map((pt, i) => (
                    <div key={i} className="vm-point" style={{ "--vm-delay": `${i * 0.1}s` }}>
                      <span className="vm-point-icon">{pt.icon}</span>
                      <span>{pt.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vm-card vm-mission">
                <div className="vm-header">
                  <div className="vm-icon"><FaBullseye /></div>
                  <h3>Our Mission</h3>
                </div>
                <p className="vm-quote">
                  <FaQuoteLeft />
                  सरकारी योजनाओं और सेवाओं की जानकारी को एकीकृत, सुलभ और पारदर्शी बनाना।
                </p>
                <div className="vm-points">
                  {missionPoints.map((pt, i) => (
                    <div key={i} className="vm-point" style={{ "--vm-delay": `${i * 0.1}s` }}>
                      <span className="vm-point-icon">{pt.icon}</span>
                      <span>{pt.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ═══════════ HOW DRC WORKS ═══════════ */}
      <section className="about-flow-section">
        <Container>
          <div className="about-section-heading">
            <h2>How DRC Works</h2>
            <p>जानकारी विभाग से लाभार्थी तक कैसे पहुँचती है</p>
          </div>
          <div className="flow-steps">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className={`flow-step ${activeStep === i ? "flow-step-active" : ""}`}
                style={{ "--step-color": step.color, "--step-delay": `${i * 0.12}s` }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flow-step-number">{step.step}</div>
                <div className="flow-step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                <div className="flow-step-line" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ DEPARTMENTS OVERVIEW ═══════════ */}
      <section className="about-depts-section">
        <Container>
          <div className="about-section-heading">
            <h2>Our Departments</h2>
            <p>{departments.length} सरकारी विभाग बाल कल्याण से जुड़े हैं</p>
          </div>
          <Row className="g-3">
            {departments.slice(0, visibleDepts).map((dept, i) => (
              <Col md={6} lg={3} key={i}>
                <div className="about-dept-card" style={{ "--dept-color": dept.color, "--dept-bg": dept.cardColor }}>
                  <div className="about-dept-icon">{dept.icon}</div>
                  <h5>{dept.name}</h5>
                  <p>{dept.workArea}</p>
                  <div className="about-dept-meta">
                    <span><strong>{dept.studentCount.toLocaleString("en-IN")}</strong> Students</span>
                    <span><strong>{dept.schemesCount}</strong> Schemes</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {visibleDepts < departments.length && (
            <div className="about-load-more">
              <Button className="load-more-btn" onClick={() => setVisibleDepts(departments.length)}>
                View All {departments.length} Departments <FaArrowRight />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* ═══════════ EMPOWERMENT AREAS ═══════════ */}
      <section className="about-emp-section">
        <Container>
          <div className="about-section-heading">
            <h2>Child Empowerment Areas</h2>
            <p>बच्चों के विकास के प्रमुख क्षेत्र</p>
          </div>
          <Row className="g-4">
            {empowermentAreas.map((area, i) => (
              <Col md={6} lg={4} key={i}>
                <div
                  className={`about-emp-card ${activeArea === i ? "about-emp-active" : ""}`}
                  style={{ "--emp-delay": `${i * 0.08}s` }}
                  onMouseEnter={() => setActiveArea(i)}
                  onMouseLeave={() => setActiveArea(null)}
                >
                  <div className="about-emp-icon">{area.icon}</div>
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                  <div className="about-emp-stats">
                    <div>
                      <strong>{area.beneficiaries.toLocaleString("en-IN")}</strong>
                      <span>Beneficiaries</span>
                    </div>
                    <div className="about-emp-divider" />
                    <div>
                      <strong>{area.programs}</strong>
                      <span>Schemes</span>
                    </div>
                  </div>
                  <div className="about-emp-bar">
                    <div
                      className="about-emp-bar-fill"
                      style={{
                        width: `${(area.beneficiaries / Math.max(...empowermentAreas.map(a => a.beneficiaries))) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default AboutUs;