import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  Badge,
} from "react-bootstrap";

import {
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
  FaSearch,
  FaCheckCircle,
  FaUsers,
  FaChartLine,
  FaTint,
  FaShoppingCart,
  FaLeaf,
  FaHandHoldingHeart,
  FaDatabase,
  FaFileAlt,
  FaAppleAlt,
} from "react-icons/fa";

import "./Home.css";
import drcHomeImg from "../../assets/images/drc_home-img.png";






// =====================================================
// 12 DEPARTMENTS
// =====================================================

const departments = [
  {
    name: "न्याय एवं विधि परामर्शी विभाग",
    workArea: "बाल अधिकार एवं कानूनी सहायता",
    icon: <FaBalanceScale />,
    cardColor: "#e7f5ff",
    color: "#8ecae6",
    studentCount: 1250,
    schemesCount: 5,
  },
  {
    name: "वित्त विभाग",
    workArea: "योजनाओं के लिए वित्तीय सहायता एवं बजट",
    icon: <FaHandsHelping />,
    cardColor: "#fff8e1",
    color: "#fca311",
    studentCount: 8500,
    schemesCount: 8,
  },
  {
    name: "नियोजन विभाग",
    workArea: "राज्य के विकास की योजना",
    icon: <FaChartLine />,
    cardColor: "#eaf6f5",
    color: "#2a9d8f",
    studentCount: 3200,
    schemesCount: 6,
  },
  {
    name: "स्वास्थ्य एवं परिवार कल्याण विभाग",
    workArea: "बाल स्वास्थ्य, पोषण एवं चिकित्सा",
    icon: <FaHeartbeat />,
    cardColor: "#fdeee9",
    color: "#e76f51",
    studentCount: 15000,
    schemesCount: 12,
  },
  {
    name: "शिक्षा विभाग",
    workArea: "बाल शिक्षा, विद्यालय एवं साक्षरता",
    icon: <FaSchool />,
    cardColor: "#e4f8fb",
    color: "#48cae4",
    studentCount: 25000,
    schemesCount: 15,
  },
  {
    name: "युवा कल्याण एवं खेल विभाग",
    workArea: "खेल, युवा विकास एवं प्रतिभा प्रोत्साहन",
    icon: <FaRunning />,
    cardColor: "#f6eefe",
    color: "#c77dff",
    studentCount: 7800,
    schemesCount: 9,
  },
  {
    name: "पंचायती राज विभाग",
    workArea: "ग्रामीण स्तर पर बाल कल्याण कार्यक्रम",
    icon: <FaMapMarkedAlt />,
    cardColor: "#f0f9e6",
    color: "#70e000",
    studentCount: 11200,
    schemesCount: 7,
  },
  {
    name: "ग्राम्य विकास विभाग",
    workArea: "ग्रामीण बच्चों के विकास एवं सहायता कार्यक्रम",
    icon: <FaHome />,
    cardColor: "#fff9e6",
    color: "#ffbe0b",
    studentCount: 9500,
    schemesCount: 10,
  },
  {
    name: "कौशल विकास एवं सेवा योजना विभाग",
    workArea: "कौशल एवं व्यावसायिक प्रशिक्षण",
    icon: <FaBriefcase />,
    cardColor: "#e0f7fa",
    color: "#00b4d8",
    studentCount: 6400,
    schemesCount: 11,
  },
  {
    name: "आवास एवं शहरी विकास विभाग",
    workArea: "शहरी क्षेत्रों में बाल एवं परिवार सहायता",
    icon: <FaBuilding />,
    cardColor: "#fef0f5",
    color: "#f72585",
    studentCount: 4800,
    schemesCount: 8,
  },
  {
    name: "श्रम विभाग",
    workArea: "बाल श्रम रोकथाम एवं श्रमिक परिवारों के बच्चों का कल्याण",
    icon: <FaHardHat />,
    cardColor: "#f9fbe7",
    color: "#c0d628",
    studentCount: 2100,
    schemesCount: 6,
  },
  {
    name: "पेयजल विभाग",
    workArea: "स्वच्छ पेयजल की उपलब्धता",
    icon: <FaTint />,
    cardColor: "#ebf9f8",
    color: "#ade8f4",
    studentCount: 18000,
    schemesCount: 4,
  },
  {
    name: "खाद्य एवं नागरिक आपूर्ति उपभोक्ता विभाग",
    workArea: "खाद्य सुरक्षा और आपूर्ति",
    icon: <FaShoppingCart />,
    cardColor: "#fff5f7",
    color: "#ff8fab",
    studentCount: 22000,
    schemesCount: 5,
  },
  {
    name: "समाज कल्याण विभाग",
    workArea: "सामाजिक सुरक्षा और कल्याण",
    icon: <FaUsers />,
    cardColor: "#f3eef2",
    color: "#b5838d",
    studentCount: 13500,
    schemesCount: 14,
  },
  {
    name: "कृषि विभाग",
    workArea: "कृषि विकास और किसान कल्याण",
    icon: <FaLeaf />,
    cardColor: "#edf8f3",
    color: "#52b788",
    studentCount: 5600,
    schemesCount: 9,
  },
  {
    name: "महिला कल्याण विभाग",
    workArea: "महिला सशक्तिकरण एवं कल्याण",
    icon: <FaChild />,
    cardColor: "#fef3f7",
    color: "#f78fb3",
    studentCount: 19800,
    schemesCount: 18,
  },
  {
    name: "एसोसिएशन फॉर वॉलंटरी एक्शन (AVA)",
    workArea: "स्वैच्छिक कार्यों के माध्यम से सामुदायिक विकास",
    icon: <FaHandHoldingHeart />,
    cardColor: "#fffde6",
    color: "#ffdd00",
    studentCount: 850,
    schemesCount: 3,
  },
  {
    name: "एसपीओटीकाईएम, पुलिस मुख्यालय",
    workArea: "कानून व्यवस्था और बाल सुरक्षा",
    icon: <FaShieldAlt />,
    cardColor: "#eeeffd",
    color: "#a2a6f0",
    studentCount: 450,
    schemesCount: 4,
  },
];


// =====================================================
// CHILD EMPOWERMENT
// =====================================================

const empowermentAreas = [
  {
    title: "बाल शिक्षा",
    description: "शिक्षा एवं सीखने के अवसर",
    icon: <FaBookOpen />,
    beneficiaries: 120500,
    programs: 25,
  },
  {
    title: "बाल संरक्षण",
    description: "सुरक्षा एवं बाल अधिकार",
    icon: <FaShieldAlt />,
    beneficiaries: 55200,
    programs: 15,
  },
  {
    title: "स्वास्थ्य एवं पोषण",
    description: "स्वास्थ्य एवं पोषण सेवाएँ",
    icon: <FaHeartbeat />,
    beneficiaries: 210000,
    programs: 32,
  },
  {
    title: "छात्रवृत्ति",
    description: "शैक्षणिक एवं वित्तीय सहायता",
    icon: <FaGraduationCap />,
    beneficiaries: 85000,
    programs: 18,
  },
  {
    title: "कौशल विकास",
    description: "कौशल एवं व्यावसायिक प्रशिक्षण",
    icon: <FaBriefcase />,
    beneficiaries: 42000,
    programs: 22,
  },
  {
    title: "डिजिटल साक्षरता",
    description: "डिजिटल शिक्षा एवं जागरूकता",
    icon: <FaLaptop />,
    beneficiaries: 75000,
    programs: 12,
  },
];


// =====================================================
// SCHEMES
// =====================================================

const schemes = [
  {
    studentCount: 95000,
    name: "बेटी बचाओ, बेटी पढ़ाओ",
    department: "महिला सशक्तिकरण एवं बाल विकास विभाग",
    category: "Protection",
    icon: <FaShieldAlt />,
    objective:
      "बालिकाओं की सुरक्षा, शिक्षा एवं सशक्तिकरण को बढ़ावा देना।",
    eligibility: "बालिकाएँ एवं उनके परिवार",
    benefits:
      "बालिकाओं की शिक्षा, सुरक्षा एवं सामाजिक जागरूकता को बढ़ावा।",
  },
  {
    studentCount: 85000,
    name: "मध्याह्न भोजन योजना",
    department: "शिक्षा विभाग",
    category: "Nutrition",
    icon: <FaLeaf />,
    objective:
      "बच्चों की विद्यालय में उपस्थिति और पोषण स्तर में सुधार करना।",
    eligibility: "पात्र विद्यालयों के विद्यार्थी",
    benefits:
      "विद्यालय में पौष्टिक भोजन की सुविधा।",
  },
  {
    studentCount: 120000,
    name: "एकीकृत बाल विकास सेवाएँ",
    department: "महिला सशक्तिकरण एवं बाल विकास विभाग",
    category: "Health",
    icon: <FaHeartbeat />,
    objective:
      "छोटे बच्चों के स्वास्थ्य, पोषण और प्रारंभिक विकास में सुधार करना।",
    eligibility: "0–6 वर्ष के बच्चे एवं पात्र माताएँ",
    benefits:
      "पोषण, स्वास्थ्य जांच एवं आंगनवाड़ी सेवाएँ।",
  },
  {
    studentCount: 45000,
    name: "सुकन्या समृद्धि योजना",
    department: "वित्त विभाग",
    category: "Finance",
    icon: <FaBriefcase />,
    objective:
      "बालिका के भविष्य की शिक्षा एवं अन्य आवश्यकताओं के लिए बचत को बढ़ावा देना।",
    eligibility: "पात्र बालिकाएँ",
    benefits:
      "बचत एवं सरकारी नियमों के अनुसार वित्तीय लाभ।",
  },
  {
    studentCount: 15000,
    name: "बाल श्रम रोकथाम एवं पुनर्वास",
    department: "श्रम विभाग",
    category: "Welfare",
    icon: <FaHandsHelping />,
    objective:
      "बाल श्रम को रोकना तथा बच्चों को शिक्षा एवं पुनर्वास से जोड़ना।",
    eligibility: "बाल श्रम से प्रभावित बच्चे",
    benefits:
      "शिक्षा, कौशल प्रशिक्षण एवं पुनर्वास सहायता।",
  },
];

const schemeDepartments = [
  "All Departments",
  ...Array.from(new Set(schemes.map((scheme) => scheme.department))),
];

const categoryColors = {
  Protection: "#7c3aed",
  Nutrition: "#16a34a",
  Health: "#dc2626",
  Finance: "#0ea5e9",
  Welfare: "#f59e0b",
};

// category tags data
const categoryTags = [
  { label: 'Education', icon: <FaGraduationCap />, color: '#1a5276' },
  { label: 'Health', icon: <FaHeartbeat />, color: '#e74c3c' },
  { label: 'Nutrition', icon: <FaAppleAlt />, color: '#138808' },
  { label: 'Protection', icon: <FaShieldAlt />, color: '#8e44ad' },
  { label: 'Welfare', icon: <FaHandsHelping />, color: '#FF9933' },
];

// stat ring data
const totalSchemes = departments.reduce((sum, dept) => sum + dept.schemesCount, 0);
const totalBeneficiaries = empowermentAreas.reduce((sum, a) => sum + a.beneficiaries, 0);
const statRingSegments = [
  { label: 'Education', percent: 35, color: '#1a5276' },
  { label: 'Health', percent: 25, color: '#e74c3c' },
  { label: 'Nutrition', percent: 20, color: '#138808' },
  { label: 'Protection', percent: 12, color: '#8e44ad' },
  { label: 'Welfare', percent: 8, color: '#FF9933' },
];
// =====================================================
// HOME COMPONENT
// =====================================================

function Home() {
  
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [activeSchemeDepartment, setActiveSchemeDepartment] = useState("All Departments");
  const [studentLegendExpanded, setStudentLegendExpanded] = useState(false);
  const [schemeLegendExpanded, setSchemeLegendExpanded] = useState(false);
// inside your component:
const [activeCard, setActiveCard] = useState(null);
const [activeTag, setActiveTag] = useState(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });


  // Group schemes by department for easier lookup
  const schemesByDepartment = departments.reduce((acc, dept) => {
    acc[dept.name] = schemes.filter((scheme) => scheme.department === dept.name);
    return acc;
  }, {});

  const filteredSchemes =
    activeSchemeDepartment === "All Departments"
      ? schemes
      : schemes.filter((scheme) => scheme.department === activeSchemeDepartment);

  const handleDepartmentClick = (departmentName) => {
    // Toggle selection: if the same department is clicked again, deselect it
    setSelectedDepartment(departmentName === selectedDepartment ? null : departmentName);
  };

  const handleSchemeDepartmentSelect = (department) => {
    setActiveSchemeDepartment(department);
  };

  const generateConicGradient = (data, key, colors) => {
    const total = data.reduce((sum, item) => sum + item[key], 0);
    let cumulativePercentage = 0;
    const gradientParts = data.map((item, index) => {
      const percentage = (item[key] / total) * 100;
      const start = cumulativePercentage;
      cumulativePercentage += percentage;
      const end = cumulativePercentage;
      return `${colors[index]} ${start}% ${end}%`;
    });
    return `conic-gradient(${gradientParts.join(", ")})`;
  };

  const sortedByStudent = [...departments].sort((a, b) => b.studentCount - a.studentCount);
  const studentChartGradient = generateConicGradient(
    sortedByStudent,
    'studentCount',
    sortedByStudent.map(d => d.color)
  );

  const sortedBySchemes = [...departments].sort((a, b) => b.schemesCount - a.schemesCount);
  const schemeChartGradient = generateConicGradient(
    sortedBySchemes,
    'schemesCount',
    sortedBySchemes.map(d => d.color)
  );

  const handleMouseMove = (e, data, key) => {
    const chart = e.currentTarget;
    const rect = chart.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angle = (Math.atan2(y - centerY, x - centerX) * 180 / Math.PI + 450) % 360;
    const percentage = angle / 360;

    const total = data.reduce((sum, item) => sum + item[key], 0);
    let cumulativePercentage = 0;

    let foundDept = null;
    for (const item of data) {
        const itemPercentage = item[key] / total;
        if (percentage >= cumulativePercentage && percentage < cumulativePercentage + itemPercentage) {
            foundDept = item;
            break;
        }
        cumulativePercentage += itemPercentage;
    }

    if (foundDept) {
        setTooltip({
            visible: true,
            content: `${foundDept.name}: ${foundDept[key].toLocaleString('en-IN')}`,
            x: e.clientX,
            y: e.clientY,
        });
    }
};

const handleMouseLeave = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
};
  const handleScroll = (id) => { // This closing brace was incorrect
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="drc-home">
      {tooltip.visible && (
        <div className="chart-tooltip" style={{ top: tooltip.y, left: tooltip.x }}>
          {tooltip.content}
        </div>
      )}


      {/* =================================================
          HERO
      ================================================= */}

 <section className="drc-hero">
  <Container>
    <Row className="align-items-center">

      {/* ===== LEFT CONTENT ===== */}
      <Col lg={6} className="hero-content">

       

        <h1>
          Empowering Children
          <span> Through Information</span>
        </h1>

        <p>
          एक केंद्रीकृत डिजिटल प्लेटफॉर्म जहाँ आप विभाग,
          योजनाएँ, सेवाएँ, उद्देश्य और बच्चों के लिए उपलब्ध
          लाभ आसानी से खोज सकते हैं।
        </p>

        <div className="hero-stats">
          <div className="hero-stat-item">
            <strong>{departments.length.toLocaleString('en-IN')}+</strong>
            <span>Departments</span>
          </div>
          <div className="hero-stat-item">
            <strong>{totalSchemes.toLocaleString('en-IN')}+</strong>
            <span>Schemes</span>
          </div>
          <div className="hero-stat-item">
            <strong>{(totalBeneficiaries / 100000).toFixed(1)}L+</strong>
            <span>Beneficiaries</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Button className="primary-btn" onClick={() => handleScroll("departments")}>
            Explore Departments <FaArrowRight />
          </Button>
          <Button className="secondary-btn" onClick={() => handleScroll("schemes")}>
            Explore Schemes
          </Button>
        </div>

        <div className="hero-points">
          <div><FaCheckCircle /><span>18 Departments</span></div>
          <div><FaCheckCircle /><span>Child Empowerment</span></div>
          <div><FaCheckCircle /><span>Government Schemes</span></div>
        </div>

      </Col>


      {/* ===== RIGHT INTERACTIVE VISUAL ===== */}
      <Col lg={6} className="hero-visual">

        {/* Layer 1: Full Image */}
        <div className="hero-image-container">
          <div className="hero-image-frame">
            <img src={drcHomeImg} alt="Children Education and Empowerment" />
          </div>
          {/* Image overlay badge */}
          <div className="image-badge">
            <FaDatabase />
            <span>DRC Portal</span>
          </div>
        </div>

        {/* Layer 2: Stat Ring — top right */}
        <div className="stat-ring-wrapper">
          <svg viewBox="0 0 120 120" className="stat-ring-svg">
            {statRingSegments.reduce((acc, seg, i) => {
              const offset = acc.offset;
              const circumference = 2 * Math.PI * 48;
              const dashLen = (seg.percent / 100) * circumference;
              const gap = circumference - dashLen;
              acc.elements.push(
                <circle
                  key={i}
                  cx="60" cy="60" r="48"
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="8"
                  strokeDasharray={`${dashLen} ${gap}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="round"
                  className="stat-segment"
                  style={{ '--delay': `${i * 0.15}s` }}
                />
              );
              acc.offset += dashLen;
              return acc;
            }, { elements: [], offset: 0 }).elements}
            <text x="60" y="56" textAnchor="middle" className="ring-center-num">
              {departments.length}+
            </text>
            <text x="60" y="72" textAnchor="middle" className="ring-center-label">
              Depts
            </text>
          </svg>
          {/* Ring legend — appears on hover */}
          <div className="ring-legend">
            {statRingSegments.map((seg, i) => (
              <div key={i} className="legend-item">
                <span className="legend-dot" style={{ background: seg.color }} />
                <span className="legend-label">{seg.label}</span>
                <span className="legend-pct">{seg.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3: Interactive Floating Cards */}
        <div
          className={`floating-card fc-dept ${activeCard === 'dept' ? 'fc-active' : ''}`}
          onMouseEnter={() => setActiveCard('dept')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="fc-icon"><FaDatabase /></div>
          <div className="fc-info">
            <strong>{departments.length}+</strong>
            <span>Departments</span>
          </div>
          <div className="fc-pulse" />
          {/* Expanded detail on hover */}
          <div className="fc-expand">
            <div className="fc-expand-row">
              <FaArrowRight />
              <span>Active: {departments.length}</span>
            </div>
            <div className="fc-expand-row">
              <FaArrowRight />
              <span>Schemes: {totalSchemes.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        <div
          className={`floating-card fc-schemes ${activeCard === 'schemes' ? 'fc-active' : ''}`}
          onMouseEnter={() => setActiveCard('schemes')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="fc-icon"><FaFileAlt /></div>
          <div className="fc-info">
            <strong>{totalSchemes.toLocaleString('en-IN')}+</strong>
            <span>Schemes</span>
          </div>
          <div className="fc-pulse" />
          <div className="fc-expand">
            <div className="fc-expand-row">
              <FaArrowRight />
              <span>Central: {Math.round(totalSchemes * 0.6)}</span>
            </div>
            <div className="fc-expand-row">
              <FaArrowRight />
              <span>State: {Math.round(totalSchemes * 0.4)}</span>
            </div>
          </div>
        </div>

        <div
          className={`floating-card fc-beneficiaries ${activeCard === 'ben' ? 'fc-active' : ''}`}
          onMouseEnter={() => setActiveCard('ben')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="fc-icon"><FaUsers /></div>
          <div className="fc-info">
            <strong>{(totalBeneficiaries / 100000).toFixed(1)}L+</strong>
            <span>Beneficiaries</span>
          </div>
          <div className="fc-pulse" />
          <div className="fc-expand">
            <div className="fc-expand-row">
              <FaArrowRight />
              <span>Rural: {(totalBeneficiaries * 0.65 / 100000).toFixed(1)}L</span>
            </div>
            <div className="fc-expand-row">
              <FaArrowRight />
              <span>Urban: {(totalBeneficiaries * 0.35 / 100000).toFixed(1)}L</span>
            </div>
          </div>
        </div>

        {/* Layer 4: Interactive Category Tags */}
        <div className="hero-tags">
          {categoryTags.map((tag, i) => (
            <div
              key={i}
              className={`hero-tag ${activeTag === i ? 'tag-active' : ''}`}
              style={{ '--tag-color': tag.color, '--delay': `${i * 0.08}s` }}
              onMouseEnter={() => setActiveTag(i)}
              onMouseLeave={() => setActiveTag(null)}
            >
              <span className="tag-icon">{tag.icon}</span>
              <span className="tag-label">{tag.label}</span>
              <span className="tag-arrow"><FaArrowRight /></span>
            </div>
          ))}
        </div>

        {/* Layer 5: Mini Progress Bars */}
        <div className="hero-mini-bars">
          {statRingSegments.slice(0, 3).map((seg, i) => (
            <div key={i} className="mini-bar-item">
              <div className="mini-bar-head">
                <span className="mini-bar-label">{seg.label}</span>
                <span className="mini-bar-pct">{seg.percent}%</span>
              </div>
              <div className="mini-bar-track">
                <div
                  className="mini-bar-fill"
                  style={{ width: `${seg.percent}%`, background: seg.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative: Tricolor strip */}
        <div className="tricolor-bar">
          <div className="tc-saffron" />
          <div className="tc-white" />
          <div className="tc-green" />
        </div>

        {/* Decorative: Dot grid */}
        <div className="hero-dot-grid" />

      </Col>

    </Row>
  </Container>
</section>


      {/* =================================================
          ABOUT DRC
      ================================================= */}

      <section className="section about-drc-section section-padding">
        <Container>
          <Row className="align-items-center g-5">
           
            <Col lg={12}>
              <div className="section-heading">
                

                <h2>
                About  डेटा रिसोर्स सेंटर (DRC)
                </h2>

                <p>
                  DRC एक केंद्रीकृत डिजिटल प्लेटफॉर्म है जिसे बाल सशक्तिकरण के लिए
                  उपलब्ध सरकारी विभागों, योजनाओं, सेवाओं और लाभों के बारे में
                  व्यापक जानकारी प्रदान करने के लिए डिज़ाइन किया गया है। हमारा
                  उद्देश्य सूचना तक आसान पहुँच सुनिश्चित करना है ताकि हर बच्चे को
                  उसका अधिकार मिल सके।
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* =================================================
          HOW IT WORKS
      ================================================= */}

      <section className="section flow-section section-padding">

        <Container>

          <div className="section-heading">

            <Badge>How DRC Works</Badge>

            <h2>
              From Department to Beneficiary
            </h2>

            <p>
              DRC में जानकारी को सरल और व्यवस्थित तरीके से खोजें।
            </p>

          </div>


          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-icon"><FaBuilding /></div>
              <div className="timeline-content">
                <span className="timeline-step">Step 1</span>
                <h5>Department (विभाग)</h5>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><FaBriefcase /></div>
              <div className="timeline-content">
                <span className="timeline-step">Step 2</span>
                <h5>Work Area (कार्य क्षेत्र)</h5>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><FaBookOpen /></div>
              <div className="timeline-content">
                <span className="timeline-step">Step 3</span>
                <h5>Scheme (योजना / सेवा)</h5>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><FaGraduationCap /></div>
              <div className="timeline-content">
                <span className="timeline-step">Step 4</span>
                <h5>Objective (उद्देश्य)</h5>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><FaHandsHelping /></div>
              <div className="timeline-content">
                <span className="timeline-step">Step 5</span>
                <h5>Benefits (लाभ)</h5>
              </div>
            </div>
          </div>

        </Container>

      </section>


      {/* =================================================
          DEPARTMENTS
      ================================================= */}

      <section id="departments" className="section departments-section section-padding">

        <Container>

          <div className="section-heading">
           

            <h2>
              Government Departments
            </h2>

            <p>
              विभागवार कार्य, योजनाएँ और बच्चों से संबंधित
              सेवाओं की जानकारी एक ही स्थान पर।
            </p>
          </div>


          <Row className="g-4">

            {departments.map((department, index) => (

              <Col
                md={6}
                lg={4}
                xl={3}
                key={index}
              >
                <Card
                  className="department-card"
                  style={{ backgroundColor: department.cardColor }}
                >

                  <Card.Body>

                    <div className="department-header">
                      <div className="department-icon">
                        {department.icon}
                      </div>
                      <h5>{department.name}</h5>
                    </div>

                    <div className="department-stats">
                      <div>
                        <strong>{department.studentCount.toLocaleString('en-IN')}</strong>
                        <small>Students</small>
                      </div>
                      <div>
                        <strong>{department.schemesCount}</strong>
                        <small>Schemes</small>
                      </div>
                    </div>

                    <p>
                      {department.workArea}
                    </p>
                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

      {/* =================================================
          DEPARTMENT STATS
      ================================================= */}

      <section id="department-stats" className="section department-stats-section">
        <Container>
          <div className="section-heading">
            <h2>Department Statistics</h2>
            <p>A graphical overview of student and scheme counts across various departments.</p>
          </div>

          <Row className="g-5">
            <Col lg={6}>
              <div className="pie-chart-card">
                <h4 className="chart-title">Registered Students</h4>
                <div className="pie-chart-wrapper">
                  <div
                    className="pie-chart"
                    style={{ background: studentChartGradient }}
                    onMouseMove={(e) => handleMouseMove(e, sortedByStudent, 'studentCount')}
                    onMouseLeave={handleMouseLeave}
                  ></div>
                  <ul className="pie-chart-legend">
                    {sortedByStudent.slice(0, studentLegendExpanded ? sortedByStudent.length : 5).map((dept, index) => (
                      <li key={index}>
                        <span className="legend-color" style={{ backgroundColor: dept.color }}></span>
                        <span className="legend-label">{dept.name}</span>
                        <span className="legend-value">{dept.studentCount.toLocaleString('en-IN')}</span>
                      </li>
                    ))}
                    {sortedByStudent.length > 5 && (
                      <li className="legend-toggle" onClick={() => setStudentLegendExpanded(!studentLegendExpanded)}>
                        {studentLegendExpanded ? "Show Less" : `... and ${sortedByStudent.length - 5} more`}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="pie-chart-card">
                <h4 className="chart-title">Available Schemes</h4>
                <div className="pie-chart-wrapper">
                  <div
                    className="pie-chart"
                    style={{ background: schemeChartGradient }}
                    onMouseMove={(e) => handleMouseMove(e, sortedBySchemes, 'schemesCount')}
                    onMouseLeave={handleMouseLeave}
                  ></div>
                  <ul className="pie-chart-legend">
                    {sortedBySchemes.slice(0, schemeLegendExpanded ? sortedBySchemes.length : 5).map((dept, index) => (
                      <li key={index}>
                        <span className="legend-color" style={{ backgroundColor: dept.color }}></span>
                        <span className="legend-label">{dept.name}</span>
                        <span className="legend-value">{dept.schemesCount}</span>
                      </li>
                    ))}
                    {sortedBySchemes.length > 5 && (
                       <li className="legend-toggle" onClick={() => setSchemeLegendExpanded(!schemeLegendExpanded)}>
                         {schemeLegendExpanded ? "Show Less" : `... and ${sortedBySchemes.length - 5} more`}
                       </li>
                    )}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* =================================================
          CHILD EMPOWERMENT
      ================================================= */}

      <section className="section empowerment-section section-padding">

        <Container>

          <div className="section-heading light-heading">

            <Badge>Child Empowerment</Badge>

            <h2>
              Key Areas of Child Empowerment
            </h2>

            <p>
              बच्चों की शिक्षा, सुरक्षा, स्वास्थ्य और विकास
              से जुड़े प्रमुख क्षेत्र।
            </p>

          </div>


          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <div className="empowerment-list">
                {empowermentAreas.map((area, index) => (
                  <div className="empowerment-item" key={index}>
                    <div className="empowerment-item-icon">
                      {area.icon}
                    </div>
                    <div className="empowerment-item-content">
                      <h5>{area.title}</h5>
                      <p>{area.description}</p>
                    </div>
                    <div className="empowerment-item-stats">
                      <div>
                        <strong>{area.beneficiaries.toLocaleString('en-IN')}</strong>
                        <small>Beneficiaries</small>
                      </div>
                      <div>
                        <strong>{area.programs}</strong>
                        <small>Schemes</small>
                      </div>
                    </div>
                    <div className="empowerment-item-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={6}>
              <div className="empowerment-chart-container">
                <div className="empowerment-chart">
                  <h5 className="empowerment-chart-title">Beneficiaries by Area</h5>
                  {empowermentAreas.map((area, index) => (
                    <div className="bar-chart-item" key={index}>
                      <div className="bar-chart-label">{area.title}</div>
                      <div className="bar-chart-bar-wrapper">
                        <div
                          className="bar-chart-bar"
                          style={{ width: `${(area.beneficiaries / Math.max(...empowermentAreas.map(a => a.beneficiaries))) * 100}%` }}
                        >
                          <span>{area.beneficiaries.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="empowerment-chart">
                  <h5 className="empowerment-chart-title">Schemes by Area</h5>
                  {empowermentAreas.map((area, index) => (
                    <div className="bar-chart-item" key={index}>
                      <div className="bar-chart-label">{area.title}</div>
                      <div className="bar-chart-bar-wrapper">
                        <div
                          className="bar-chart-bar scheme-bar"
                          style={{ width: `${(area.programs / Math.max(...empowermentAreas.map(a => a.programs))) * 100}%` }}
                        >
                          <span>{area.programs}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>


        </Container>

      </section>


      {/* =================================================
          FIND SCHEMES FOR YOU
      ================================================= */}

      <section className="section find-schemes-section section-padding">
        <Container>
          <div className="section-heading">
            <Badge>For You</Badge>
            <h2>Find Schemes by Department</h2>
            <p>
              Select a department to see the government schemes relevant to its work area.
            </p>
          </div>

          <Row className="g-3 mb-5 justify-content-center">
            {departments.map((department, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <div
                  className={`department-selector-card ${selectedDepartment === department.name ? 'active' : ''}`}
                  style={{ '--dept-color': department.color, '--dept-bg-color': department.cardColor }}
                  onClick={() => handleDepartmentClick(department.name)}
                >
                  <div className="department-icon">{department.icon}</div>
                  <small>{department.name}</small>
                  <div className="scheme-count-badge">
                    {department.schemesCount} Scheme{department.schemesCount !== 1 ? 's' : ''}
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {selectedDepartment && (
            <div className="selected-department-schemes">
              <div className="selected-department-header">
                <h3>Schemes under <span>{selectedDepartment}</span></h3>
              </div>

              <Row className="g-4">
                {schemesByDepartment[selectedDepartment] && schemesByDepartment[selectedDepartment].length > 0 ? (
                  schemesByDepartment[selectedDepartment].map((scheme, index) => (
                    <Col lg={6} key={index}>
                      <Accordion className="scheme-accordion">
                        <Accordion.Item eventKey={String(index)}> {/* Unique eventKey */}
                          <Accordion.Header>
                            <div className="scheme-title">
                              <div className="scheme-icon">
                                <FaBookOpen />
                              </div>
                              <div>
                                <strong>{scheme.name}</strong>
                                <small>{scheme.department}</small>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="scheme-detail">
                              <strong>उद्देश्य</strong>
                              <p>{scheme.objective}</p>
                              <strong>पात्रता</strong>
                              <p>{scheme.eligibility}</p>
                              <strong>लाभ</strong>
                              <p>{scheme.benefits}</p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  ))
                ) : (
                  <Col lg={12}>
                    <p className="text-center text-muted">No schemes found for this department.</p>
                  </Col>
                )}
              </Row>
            </div>
          )}
        </Container>
      </section>






      {/* =================================================
          SCHEMES
      ================================================= */}

      <section id="schemes" className="section schemes-section section-padding">

        <Container>

          <div className="section-heading">

            <Badge>Government Schemes</Badge>

            <h2>
             Key Schemes & Services
            </h2>

            <p>
              योजना के उद्देश्य, पात्रता और लाभ की जानकारी प्राप्त करें।
            </p>

          </div>

          <div className="schemes-filters-row">
            {schemeDepartments.map((dept, index) => (
              <button
                key={index}
                className={`scheme-pill ${activeSchemeDepartment === dept ? 'active' : ''}`}
                onClick={() => handleSchemeDepartmentSelect(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          <Row className="g-4 scheme-card-grid">
            {filteredSchemes.map((scheme, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="scheme-card">
                  <div className="scheme-card-accent" />
                  <div className="scheme-card-header">
                    <div className="scheme-badge" style={{ backgroundColor: categoryColors[scheme.category] }}>
                      <span className="scheme-badge-dot" />
                      {scheme.category}
                    </div>
                    <div className="scheme-card-icon">
                      {scheme.icon}
                    </div>
                  </div>

                  <div className="scheme-card-body">
                    <h3>{scheme.name}</h3>
                    <p className="scheme-card-meta">{scheme.department}</p>
                    {scheme.studentCount && (
                      <p className="scheme-card-meta"><strong>Enrolled:</strong> {scheme.studentCount.toLocaleString('en-IN')} students</p>
                    )}
                    <p>{scheme.objective}</p>
                  </div>

                  <div className="scheme-card-footer">
                    <div>
                      <strong>पात्रता</strong>
                      <p>{scheme.eligibility}</p>
                    </div>
                    <div>
                      <strong>लाभ</strong>
                      <p>{scheme.benefits}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

        </Container>

      </section>


   
     


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="drc-footer">

        <Container>

          <Row className="g-4">

            <Col lg={5}>

              <div className="footer-brand">
                <FaDatabase />

                <span>
                  Data Resource Center
                </span>
              </div>

              <p>
                बच्चों के सशक्तिकरण, संरक्षण, शिक्षा और
                कल्याण से संबंधित जानकारी का केंद्रीकृत डिजिटल प्लेटफॉर्म।
              </p>

            </Col>


            <Col sm={6} lg={2}>

              <h6>Quick Links</h6>

              <a href="#home">Home</a>
              <a href="#departments">Departments</a>
              <a href="#schemes">Schemes</a>

            </Col>


            <Col sm={6} lg={2}>

              <h6>Resources</h6>

              <a href="#education">Education</a>
              <a href="#protection">Child Protection</a>
              <a href="#benefits">Benefits</a>

            </Col>


            <Col lg={3}>

              <h6>DRC</h6>

              <p className="footer-contact">
                Government Information Resource Platform
              </p>

              <p className="footer-contact">
                Email: support@drc.gov.in
              </p>

            </Col>

          </Row>


          <div className="footer-bottom">

            <span>
              © {new Date().getFullYear()} Data Resource Center
            </span>

            <span>
              All Rights Reserved
            </span>

          </div>

        </Container>

      </footer>

    </div>
  );
}

export default Home;