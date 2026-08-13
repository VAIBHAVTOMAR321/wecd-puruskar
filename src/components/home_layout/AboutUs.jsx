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

/* ── Department Data ── */
const departments = [
  { name: "न्याय एवं विधि परामर्शी विभाग", workArea: "बाल अधिकार एवं कानूनी सहायता", icon: <FaBalanceScale />, studentCount: 1250, schemesCount: 5 },
  { name: "वित्त विभाग", workArea: "योजनाओं के लिए वित्तीय सहायता एवं बजट", icon: <FaHandsHelping />, studentCount: 8500, schemesCount: 8 },
  { name: "नियोजन विभाग", workArea: "राज्य के विकास की योजना", icon: <FaChartLine />, studentCount: 3200, schemesCount: 6 },
  { name: "स्वास्थ्य एवं परिवार कल्याण विभाग", workArea: "बाल स्वास्थ्य, पोषण एवं चिकित्सा", icon: <FaHeartbeat />, studentCount: 15000, schemesCount: 12 },
  { name: "शिक्षा विभाग", workArea: "बाल शिक्षा, विद्यालय एवं साक्षरता", icon: <FaSchool />, studentCount: 25000, schemesCount: 15 },
  { name: "युवा कल्याण एवं खेल विभाग", workArea: "खेल, युवा विकास एवं प्रतिभा प्रोत्साहन", icon: <FaRunning />, studentCount: 7800, schemesCount: 9 },
  { name: "पंचायती राज विभाग", workArea: "ग्रामीण स्तर पर बाल कल्याण कार्यक्रम", icon: <FaMapMarkedAlt />, studentCount: 11200, schemesCount: 7 },
  { name: "ग्राम्य विकास विभाग", workArea: "ग्रामीण बच्चों के विकास एवं सहायता कार्यक्रम", icon: <FaHome />, studentCount: 9500, schemesCount: 10 },
  { name: "कौशल विकास एवं सेवा योजना विभाग", workArea: "कौशल एवं व्यावसायिक प्रशिक्षण", icon: <FaBriefcase />, studentCount: 6400, schemesCount: 11 },
  { name: "आवास एवं शहरी विकास विभाग", workArea: "शहरी क्षेत्रों में बाल एवं परिवार सहायता", icon: <FaBuilding />, studentCount: 4800, schemesCount: 8 },
  { name: "श्रम विभाग", workArea: "बाल श्रम रोकथाम एवं श्रमिक परिवारों के बच्चों का कल्याण", icon: <FaHardHat />, studentCount: 2100, schemesCount: 6 },
  { name: "पेयजल विभाग", workArea: "स्वच्छ पेयजल की उपलब्धता", icon: <FaTint />, studentCount: 18000, schemesCount: 4 },
  { name: "खाद्य एवं नागरिक आपूर्ति उपभोक्ता विभाग", workArea: "खाद्य सुरक्षा और आपूर्ति", icon: <FaShoppingCart />, studentCount: 22000, schemesCount: 5 },
  { name: "समाज कल्याण विभाग", workArea: "सामाजिक सुरक्षा और कल्याण", icon: <FaUsers />, studentCount: 13500, schemesCount: 14 },
  { name: "कृषि विभाग", workArea: "कृषि विकास और किसान कल्याण", icon: <FaLeaf />, studentCount: 5600, schemesCount: 9 },
  { name: "महिला कल्याण विभाग", workArea: "महिला सशक्तिकरण एवं कल्याण", icon: <FaChild />, studentCount: 19800, schemesCount: 18 },
  { name: "एसोसिएशन फॉर वॉलंटरी एक्शन (AVA)", workArea: "स्वैच्छिक कार्यों के माध्यम से सामुदायिक विकास", icon: <FaHandHoldingHeart />, studentCount: 850, schemesCount: 3 },
  { name: "एसपीओटीकाईएम, पुलिस मुख्यालय", workArea: "कानून व्यवस्था और बाल सुरक्षा", icon: <FaShieldAlt />, studentCount: 450, schemesCount: 4 },
];

/* ── 18 unique color palettes for departments ── */
const deptThemes = [
  { bg:"#fff5f0", border:"#ffd6c7", iconBg:"#ffe8df", iconColor:"#d44a0a", numColor:"#a83800", bar:"#e8720c" },  // Burnt Orange
  { bg:"#fef9ee", border:"#fce3b3", iconBg:"#fdf0d0", iconColor:"#b8860b", numColor:"#8b6508", bar:"#d4a017" },  // Gold
  { bg:"#edfaf4", border:"#b8ecd0", iconBg:"#d0f5e2", iconColor:"#0d8043", numColor:"#06612f", bar:"#10b981" },  // Emerald
  { bg:"#fef0ef", border:"#fcd5d2", iconBg:"#fde2e0", iconColor:"#dc2626", numColor:"#a01a1a", bar:"#ef4444" },  // Rose Red
  { bg:"#eef5ff", border:"#c6dfff", iconBg:"#dae8ff", iconColor:"#2563eb", numColor:"#1a3fa0", bar:"#3b82f6" },  // Royal Blue
  { bg:"#f5effe", border:"#e0ccff", iconBg:"#ecddff", iconColor:"#7c3aed", numColor:"#5b21b6", bar:"#8b5cf6" },  // Violet
  { bg:"#edfcf2", border:"#b5f0c8", iconBg:"#cef5da", iconColor:"#16a34a", numColor:"#0d6b30", bar:"#22c55e" },  // Green
  { bg:"#fffbeb", border:"#fde5a0", iconBg:"#fef0c2", iconColor:"#ca8a04", numColor:"#92600a", bar:"#eab308" },  // Amber
  { bg:"#eaf8fa", border:"#b6ecf2", iconBg:"#cdf2f7", iconColor:"#0891b2", numColor:"#056380", bar:"#06b6d4" },  // Cyan
  { bg:"#fef1f7", border:"#fdcce0", iconBg:"#fdddea", iconColor:"#db2777", numColor:"#a01058", bar:"#ec4899" },  // Pink
  { bg:"#f8fce4", border:"#dde8a0", iconBg:"#e8f1b6", iconColor:"#65a30d", numColor:"#4a7706", bar:"#84cc16" },  // Lime
  { bg:"#eef9fb", border:"#b6e8f0", iconBg:"#d0f0f5", iconColor:"#0e7490", numColor:"#0a5468", bar:"#22d3ee" },  // Light Cyan
  { bg:"#fef0f3", border:"#fbbfcf", iconBg:"#fcd5df", iconColor:"#e11d48", numColor:"#a01040", bar:"#f43f5e" },  // Ruby
  { bg:"#f3eef6", border:"#d9ccee", iconBg:"#e4ddf0", iconColor:"#7e57c2", numColor:"#5e3fa0", bar:"#9575cd" },  // Soft Purple
  { bg:"#eef8f0", border:"#b8e0c4", iconBg:"#d2eeda", iconColor:"#2e7d32", numColor:"#1b5e20", bar:"#43a047" },  // Forest Green
  { bg:"#fef2f6", border:"#f8b4cb", iconBg:"#fbcfdd", iconColor:"#c2185b", numColor:"#880e4f", bar:"#e91e63" },  // Fuchsia
  { bg:"#fefcee", border:"#f5f0a0", iconBg:"#f8f5c0", iconColor:"#f9a825", numColor:"#c17900", bar:"#fbc02d" },  // Sunflower
  { bg:"#eeeef9", border:"#c8c8f0", iconBg:"#dcdcf5", iconColor:"#5c6bc0", numColor:"#3949ab", bar:"#7986cb" },  // Periwinkle
];

/* ── Empowerment Areas ── */
const empowermentAreas = [
  { title: "बाल शिक्षा", description: "शिक्षा एवं सीखने के अवसर", icon: <FaBookOpen />, beneficiaries: 120500, programs: 25 },
  { title: "बाल संरक्षण", description: "सुरक्षा एवं बाल अधिकार", icon: <FaShieldAlt />, beneficiaries: 55200, programs: 15 },
  { title: "स्वास्थ्य एवं पोषण", description: "स्वास्थ्य एवं पोषण सेवाएँ", icon: <FaHeartbeat />, beneficiaries: 210000, programs: 32 },
  { title: "छात्रवृत्ति", description: "शैक्षणिक एवं वित्तीय सहायता", icon: <FaGraduationCap />, beneficiaries: 85000, programs: 18 },
  { title: "कौशल विकास", description: "कौशल एवं व्यावसायिक प्रशिक्षण", icon: <FaBriefcase />, beneficiaries: 42000, programs: 22 },
  { title: "डिजिटल साक्षरता", description: "डिजिटल शिक्षा एवं जागरूकता", icon: <FaLaptop />, beneficiaries: 75000, programs: 12 },
];

/* ── 6 unique color palettes for empowerment ── */
const empThemes = [
  { bg:"#eef5ff", border:"#c6dfff", iconBg:"#dae8ff", iconColor:"#2563eb", numColor:"#1a3fa0", bar:"#3b82f6", barTrack:"#c6dfff" },  // Blue
  { bg:"#fef0ef", border:"#fcd5d2", iconBg:"#fde2e0", iconColor:"#dc2626", numColor:"#a01a1a", bar:"#ef4444", barTrack:"#fcd5d2" },  // Red
  { bg:"#edfaf4", border:"#b8ecd0", iconBg:"#d0f5e2", iconColor:"#0d8043", numColor:"#06612f", bar:"#10b981", barTrack:"#b8ecd0" },  // Emerald
  { bg:"#f5effe", border:"#e0ccff", iconBg:"#ecddff", iconColor:"#7c3aed", numColor:"#5b21b6", bar:"#8b5cf6", barTrack:"#e0ccff" },  // Violet
  { bg:"#fff5f0", border:"#ffd6c7", iconBg:"#ffe8df", iconColor:"#d44a0a", numColor:"#a83800", bar:"#e8720c", barTrack:"#ffd6c7" },  // Orange
  { bg:"#eaf8fa", border:"#b6ecf2", iconBg:"#cdf2f7", iconColor:"#0891b2", numColor:"#056380", bar:"#06b6d4", barTrack:"#b6ecf2" },  // Cyan
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

  /* ── Hero stat card themes ── */
  const statCards = [
    {
      icon: <FaDatabase />,
      value: `${animDepts}+`,
      label: "Departments",
      ref: deptsRef,
      theme: {
        bg: "#fff5f0", border: "#ffd6c7", iconBg: "#ffe8df",
        iconColor: "#d44a0a", numColor: "#a83800",
        shadow: "rgba(232,114,12,0.10)", hoverShadow: "rgba(232,114,12,0.22)",
        bar: "#e8720c",
      },
    },
    {
      icon: <FaFileAlt />,
      value: `${animSchemes}+`,
      label: "Schemes",
      ref: schemesRef,
      theme: {
        bg: "#eef5ff", border: "#c6dfff", iconBg: "#dae8ff",
        iconColor: "#2563eb", numColor: "#1a3fa0",
        shadow: "rgba(37,99,235,0.10)", hoverShadow: "rgba(37,99,235,0.20)",
        bar: "#3b82f6",
      },
    },
    {
      icon: <FaUsers />,
      value: `${animBen}K+`,
      label: "Beneficiaries",
      ref: benRef,
      theme: {
        bg: "#edfcf2", border: "#b8ecd0", iconBg: "#cef5da",
        iconColor: "#0d8043", numColor: "#06612f",
        shadow: "rgba(13,128,67,0.10)", hoverShadow: "rgba(13,128,67,0.20)",
        bar: "#10b981",
      },
    },
    {
      icon: <FaGraduationCap />,
      value: `${animStudents}K+`,
      label: "Students",
      ref: studentsRef,
      theme: {
        bg: "#f5effe", border: "#e0ccff", iconBg: "#ecddff",
        iconColor: "#7c3aed", numColor: "#5b21b6",
        shadow: "rgba(124,58,237,0.10)", hoverShadow: "rgba(124,58,237,0.20)",
        bar: "#8b5cf6",
      },
    },
  ];

  /* ── How DRC Works - 5 step themes ── */
  const howItWorks = [
    { step: 1, icon: <FaDatabase />, title: "Data Collection", desc: "सरकारी विभागों से योजनाओं और सेवाओं की जानकारी एकत्रित की जाती है।",
      theme: { bg:"#fff5f0", border:"#ffd6c7", iconBg:"#ffe8df", iconColor:"#d44a0a", bar:"#e8720c", shadow:"rgba(232,114,12,0.08)" } },
    { step: 2, icon: <FaLayerGroup />, title: "Categorization", desc: "विभाग, कार्यक्षेत्र और लाभार्थी के आधार पर वर्गीकरण।",
      theme: { bg:"#eef5ff", border:"#c6dfff", iconBg:"#dae8ff", iconColor:"#2563eb", bar:"#3b82f6", shadow:"rgba(37,99,235,0.08)" } },
    { step: 3, icon: <FaCogs />, title: "Processing", desc: "डिजिटल प्लेटफॉर्म पर जानकारी को व्यवस्थित और प्रसंस्कृत किया जाता है।",
      theme: { bg:"#fef0ef", border:"#fcd5d2", iconBg:"#fde2e0", iconColor:"#dc2626", bar:"#ef4444", shadow:"rgba(220,38,38,0.08)" } },
    { step: 4, icon: <FaProjectDiagram />, title: "Mapping", desc: "विभाग → योजना → उद्देश्य → लाभ का मानचित्रण।",
      theme: { bg:"#f5effe", border:"#e0ccff", iconBg:"#ecddff", iconColor:"#7c3aed", bar:"#8b5cf6", shadow:"rgba(124,58,237,0.08)" } },
    { step: 5, icon: <FaHandshake />, title: "Access", desc: "नागरिकों को आसानी से खोज और उपयोग की सुविधा।",
      theme: { bg:"#edfaf4", border:"#b8ecd0", iconBg:"#d0f5e2", iconColor:"#0d8043", bar:"#10b981", shadow:"rgba(13,128,67,0.08)" } },
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

      {/* ═══════════ HERO ═══════════ */}
      <section className="about-hero">
        <Container>
          <Row className="align-items-center g-4">
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
            <Col lg={6}>
              <div className="about-hero-stats-grid">
                {statCards.map((card, i) => (
                  <div
                    key={i}
                    className="about-hero-stat"
                    ref={card.ref}
                    style={{
                      "--stat-bg": card.theme.bg,
                      "--stat-border": card.theme.border,
                      "--stat-icon-bg": card.theme.iconBg,
                      "--stat-icon-color": card.theme.iconColor,
                      "--stat-number-color": card.theme.numColor,
                      "--stat-shadow": card.theme.shadow,
                      "--stat-hover-shadow": card.theme.hoverShadow,
                      "--stat-bar": card.theme.bar,
                    }}
                  >
                    <div className="about-hero-stat-icon">{card.icon}</div>
                    <div className="about-hero-stat-content">
                      <strong>{card.value}</strong>
                      <span>{card.label}</span>
                    </div>
                    <div className="about-hero-stat-bar">
                      <div className="about-hero-stat-bar-fill" />
                    </div>
                  </div>
                ))}
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
                style={{
                  "--step-bg": step.theme.bg,
                  "--step-border": step.theme.border,
                  "--step-icon-bg": step.theme.iconBg,
                  "--step-icon-color": step.theme.iconColor,
                  "--step-bar": step.theme.bar,
                  "--step-shadow": step.theme.shadow,
                  "--step-delay": `${i * 0.12}s`,
                }}
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

      {/* ═══════════ DEPARTMENTS ═══════════ */}
      <section className="about-depts-section">
        <Container>
          <div className="about-section-heading">
            <h2>Our Departments</h2>
            <p>{departments.length} सरकारी विभाग बाल कल्याण से जुड़े हैं</p>
          </div>
          <Row className="g-3">
            {departments.slice(0, visibleDepts).map((dept, i) => {
              const t = deptThemes[i];
              return (
                <Col md={6} lg={3} key={i}>
                  <div
                    className="about-dept-card"
                    style={{
                      "--dept-bg": t.bg,
                      "--dept-border": t.border,
                      "--dept-icon-bg": t.iconBg,
                      "--dept-icon-color": t.iconColor,
                      "--dept-num-color": t.numColor,
                      "--dept-bar": t.bar,
                    }}
                  >
                    <div className="about-dept-icon">{dept.icon}</div>
                    <h5>{dept.name}</h5>
                    <p>{dept.workArea}</p>
                    <div className="about-dept-meta">
                      <span><strong>{dept.studentCount.toLocaleString("en-IN")}</strong> Students</span>
                      <span><strong>{dept.schemesCount}</strong> Schemes</span>
                    </div>
                    <div className="about-dept-bar">
                      <div className="about-dept-bar-fill" />
                    </div>
                  </div>
                </Col>
              );
            })}
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
            {empowermentAreas.map((area, i) => {
              const t = empThemes[i];
              return (
                <Col md={6} lg={4} key={i}>
                  <div
                    className={`about-emp-card ${activeArea === i ? "about-emp-active" : ""}`}
                    style={{
                      "--emp-bg": t.bg,
                      "--emp-border": t.border,
                      "--emp-icon-bg": t.iconBg,
                      "--emp-icon-color": t.iconColor,
                      "--emp-num-color": t.numColor,
                      "--emp-bar": t.bar,
                      "--emp-bar-track": t.barTrack,
                      "--emp-delay": `${i * 0.08}s`,
                    }}
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
              );
            })}
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default AboutUs;