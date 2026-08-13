import React, { useState, useMemo, useRef, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  FaUsers,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPercentage,
  FaFilter,
  FaSchool,
  FaHeartbeat,
  FaLeaf,
  FaHardHat,
  FaUniversity,
  FaArrowRight,
  FaChartBar,
  FaTrophy,
  FaQuoteLeft,
} from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "../../../src/assets/css/SuccessStory.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

/* ── Village Data ── */
const successData = [
  {
    village: "देहरादून",
    registered: 25000,
    completed: 23000,
    departments: ["शिक्षा विभाग", "कौशल विकास एवं सेवा योजना विभाग"],
    schemes: [
      { name: "मध्याह्न भोजन योजना", enrolled: 15000 },
      { name: "डिजिटल साक्षरता", enrolled: 10000 },
    ],
    story:
      "देहरादून में डिजिटल साक्षरता कार्यक्रमों ने युवाओं के लिए रोजगार के नए अवसर खोले हैं, जिससे स्थानीय अर्थव्यवस्था को बढ़ावा मिला है।",
    icon: <FaSchool />,
    /* Cyan theme */
    theme: {
      bg: "#eaf8fa",
      border: "#b6ecf2",
      iconBg: "#cdf2f7",
      iconColor: "#0891b2",
      numColor: "#056380",
      barColor: "#06b6d4",
      barTrack: "#b6ecf2",
      shadow: "rgba(6,182,212,0.08)",
      hoverShadow: "rgba(6,182,212,0.18)",
      accent: "#06b6d4",
    },
  },
  {
    village: "हरिद्वार",
    registered: 22000,
    completed: 19360,
    departments: ["स्वास्थ्य एवं परिवार कल्याण विभाग", "महिला कल्याण विभाग"],
    schemes: [
      { name: "एकीकृत बाल विकास सेवाएँ", enrolled: 12000 },
      { name: "बेटी बचाओ, बेटी पढ़ाओ", enrolled: 10000 },
    ],
    story:
      "हरिद्वार में स्वास्थ्य और पोषण योजनाओं की सफलता ने मातृ एवं शिशु मृत्यु दर में उल्लेखनीय कमी की है, जिससे एक स्वस्थ समुदाय का निर्माण हुआ है।",
    icon: <FaHeartbeat />,
    /* Rose Red theme */
    theme: {
      bg: "#fef0ef",
      border: "#fcd5d2",
      iconBg: "#fde2e0",
      iconColor: "#dc2626",
      numColor: "#a01a1a",
      barColor: "#ef4444",
      barTrack: "#fcd5d2",
      shadow: "rgba(220,38,38,0.08)",
      hoverShadow: "rgba(220,38,38,0.18)",
      accent: "#ef4444",
    },
  },
  {
    village: "नैनीताल",
    registered: 18000,
    completed: 17100,
    departments: ["कृषि विभाग", "ग्राम्य विकास विभाग"],
    schemes: [
      { name: "किसान सम्मान निधि", enrolled: 10000 },
      { name: "ग्राम्य विकास योजना", enrolled: 8000 },
    ],
    story:
      "नैनीताल में कृषि प्रशिक्षण और महिला सशक्तिकरण कार्यक्रमों ने ग्रामीण परिवारों की आय में वृद्धि की है और उन्हें आत्मनिर्भर बनाया है।",
    icon: <FaLeaf />,
    /* Emerald theme */
    theme: {
      bg: "#edfaf4",
      border: "#b8ecd0",
      iconBg: "#d0f5e2",
      iconColor: "#0d8043",
      numColor: "#06612f",
      barColor: "#10b981",
      barTrack: "#b8ecd0",
      shadow: "rgba(13,128,67,0.08)",
      hoverShadow: "rgba(13,128,67,0.18)",
      accent: "#10b981",
    },
  },
  {
    village: "उधम सिंह नगर",
    registered: 20000,
    completed: 18000,
    departments: ["श्रम विभाग", "समाज कल्याण विभाग"],
    schemes: [
      { name: "बाल श्रम रोकथाम", enrolled: 9000 },
      { name: "सुकन्या समृद्धि योजना", enrolled: 11000 },
    ],
    story:
      "उधम सिंह नगर में व्यावसायिक प्रशिक्षण पहलों ने कुशल कार्यबल तैयार किया है, जिससे बेरोजगारी दर में कमी आई है और जीवन स्तर में सुधार हुआ है।",
    icon: <FaHardHat />,
    /* Amber theme */
    theme: {
      bg: "#fef9ee",
      border: "#fce3b3",
      iconBg: "#fdf0d0",
      iconColor: "#b8860b",
      numColor: "#8b6508",
      barColor: "#d4a017",
      barTrack: "#fce3b3",
      shadow: "rgba(184,134,11,0.08)",
      hoverShadow: "rgba(184,134,11,0.18)",
      accent: "#d4a017",
    },
  },
  {
    village: "अल्मोड़ा",
    registered: 15500,
    completed: 14200,
    departments: ["शिक्षा विभाग", "पंचायती राज विभाग"],
    schemes: [
      { name: "सर्व शिक्षा अभियान", enrolled: 8500 },
      { name: "मध्याह्न भोजन योजना", enrolled: 7000 },
    ],
    story:
      "अल्मोड़ा के दूरदराज के गांवों में मोबाइल लर्निंग सेंटर शुरू करने से छात्रों की उपस्थिति और सीखने के परिणामों में अभूतपूर्व सुधार हुआ है।",
    icon: <FaUniversity />,
    /* Violet theme */
    theme: {
      bg: "#f5effe",
      border: "#e0ccff",
      iconBg: "#ecddff",
      iconColor: "#7c3aed",
      numColor: "#5b21b6",
      barColor: "#8b5cf6",
      barTrack: "#e0ccff",
      shadow: "rgba(124,58,237,0.08)",
      hoverShadow: "rgba(124,58,237,0.18)",
      accent: "#8b5cf6",
    },
  },
];

/* ── 4 stat card color themes ── */
const statThemes = [
  /* Villages - Saffron */
  {
    bg: "#fff5f0",
    border: "#ffd6c7",
    iconBg: "#ffe8df",
    iconColor: "#d44a0a",
    numColor: "#a83800",
    shadow: "rgba(232,114,12,0.10)",
    hoverShadow: "rgba(232,114,12,0.20)",
    bar: "#e8720c",
  },
  /* Registered - Blue */
  {
    bg: "#eef5ff",
    border: "#c6dfff",
    iconBg: "#dae8ff",
    iconColor: "#2563eb",
    numColor: "#1a3fa0",
    shadow: "rgba(37,99,235,0.10)",
    hoverShadow: "rgba(37,99,235,0.20)",
    bar: "#3b82f6",
  },
  /* Completed - Green */
  {
    bg: "#edfcf2",
    border: "#b8ecd0",
    iconBg: "#cef5da",
    iconColor: "#0d8043",
    numColor: "#06612f",
    shadow: "rgba(13,128,67,0.10)",
    hoverShadow: "rgba(13,128,67,0.20)",
    bar: "#10b981",
  },
  /* Success Rate - Violet */
  {
    bg: "#f5effe",
    border: "#e0ccff",
    iconBg: "#ecddff",
    iconColor: "#7c3aed",
    numColor: "#5b21b6",
    shadow: "rgba(124,58,237,0.10)",
    hoverShadow: "rgba(124,58,237,0.20)",
    bar: "#8b5cf6",
  },
];

/* ── Chart bar colors per village ── */
const chartBarColors = ["#06b6d4", "#ef4444", "#10b981", "#d4a017", "#8b5cf6"];
const chartBarColorsLight = [
  "rgba(6,182,212,0.65)",
  "rgba(239,68,68,0.65)",
  "rgba(16,185,129,0.65)",
  "rgba(212,160,23,0.65)",
  "rgba(139,92,246,0.65)",
];

const totalVillages = successData.length;
const totalRegistered = successData.reduce((sum, item) => sum + item.registered, 0);
const totalCompleted = successData.reduce((sum, item) => sum + item.completed, 0);
const overallSuccessRate =
  totalRegistered > 0 ? Math.round((totalCompleted / totalRegistered) * 100) : 0;

const allDepartments = [...new Set(successData.flatMap((item) => item.departments))];
const allSchemes = [...new Set(successData.flatMap((item) => item.schemes.map((s) => s.name)))];

/* ── Animated Counter ── */
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

function SuccessStory() {
  const [filters, setFilters] = useState({
    village: "all",
    department: "all",
    scheme: "all",
  });

  const [animVillages, villagesRef] = useAnimatedCounter(totalVillages);
  const [animRegistered, registeredRef] = useAnimatedCounter(totalRegistered);
  const [animCompleted, completedRef] = useAnimatedCounter(totalCompleted);
  const [animRate, rateRef] = useAnimatedCounter(overallSuccessRate);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = useMemo(() => {
    return successData.filter((item) => {
      const villageMatch = filters.village === "all" || item.village === filters.village;
      const departmentMatch =
        filters.department === "all" || item.departments.includes(filters.department);
      const schemeMatch =
        filters.scheme === "all" || item.schemes.some((s) => s.name === filters.scheme);
      return villageMatch && departmentMatch && schemeMatch;
    });
  }, [filters]);

  const chartData = {
    labels: filteredData.map((item) => item.village),
    datasets: [
      {
        label: "Registered",
        data: filteredData.map((item) => item.registered),
        backgroundColor: filteredData.map((_, i) => chartBarColorsLight[i % 5]),
        borderColor: filteredData.map((_, i) => chartBarColors[i % 5]),
        borderWidth: 2,
        borderRadius: 8,
      },
      {
        label: "Completed",
        data: filteredData.map((item) => item.completed),
        backgroundColor: filteredData.map((_, i) => chartBarColorsLight[i % 5]),
        borderColor: filteredData.map((_, i) => chartBarColors[i % 5]),
        borderWidth: 2,
        borderRadius: 8,
        borderDash: [4, 4],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    aspectRatio: 2.5, // Makes the chart wider than it is tall
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 13, weight: "600" },
          color: "#4a5568",
          usePointStyle: true,
          pointStyle: "rectRounded",
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "#0e1a2b",
        titleFont: { size: 13, weight: "700" },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 10,
      },
    },
    scales: {
      x: {
        ticks: { font: { size: 12, weight: "600" }, color: "#5a6577" },
        grid: { display: false },
      },
      y: {
        ticks: { font: { size: 11 }, color: "#7b8794" },
        grid: { color: "rgba(0,0,0,0.04)" },
      },
    },
  };

  const statCards = [
    {
      icon: <FaMapMarkerAlt />,
      value: `${animVillages}+`,
      label: "Villages Covered",
      ref: villagesRef,
      theme: statThemes[0],
    },
    {
      icon: <FaUsers />,
      value: `${animRegistered.toLocaleString("en-IN")}+`,
      label: "Students Registered",
      ref: registeredRef,
      theme: statThemes[1],
    },
    {
      icon: <FaCheckCircle />,
      value: `${animCompleted.toLocaleString("en-IN")}+`,
      label: "Successful Completions",
      ref: completedRef,
      theme: statThemes[2],
    },
    {
      icon: <FaPercentage />,
      value: `${animRate}%`,
      label: "Overall Success Rate",
      ref: rateRef,
      theme: statThemes[3],
    },
  ];

  return (
    <section className="success-story-section">
      <Container>
        {/* ══════ HEADING ══════ */}
        <div className="ss-section-heading">
          <div className="ss-section-badge">
            <FaTrophy />
            <span>Our Achievements</span>
          </div>
          <h2>Impact & Success Stories</h2>
          <p>
            हमारे प्रयासों से गांवों में हुई सकारात्मक बदलाव की कहानियाँ
          </p>
          <div className="ss-heading-tricolor">
            <div /><div /><div />
          </div>
        </div>

        {/* ══════ STAT CARDS ══════ */}
        <Row className="g-4 ss-stats-row">
          {statCards.map((card, i) => (
            <Col md={6} lg={3} key={i}>
              <div
                className="ss-stat-card"
                ref={card.ref}
                style={{
                  "--stat-bg": card.theme.bg,
                  "--stat-border": card.theme.border,
                  "--stat-icon-bg": card.theme.iconBg,
                  "--stat-icon-color": card.theme.iconColor,
                  "--stat-num-color": card.theme.numColor,
                  "--stat-shadow": card.theme.shadow,
                  "--stat-hover-shadow": card.theme.hoverShadow,
                  "--stat-bar": card.theme.bar,
                }}
              >
                <div className="ss-stat-icon">{card.icon}</div>
                <strong>{card.value}</strong>
                <span>{card.label}</span>
                <div className="ss-stat-bar">
                  <div className="ss-stat-bar-fill" />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* ══════ FILTERS ══════ */}
        <div className="ss-filters-card">
          <Row className="g-3 align-items-center">
            <Col lg="auto">
              <div className="ss-filter-title">
                <FaFilter />
                <span>Filters</span>
              </div>
            </Col>
            <Col md>
              <Form.Select
                name="village"
                value={filters.village}
                onChange={handleFilterChange}
                className="ss-filter-select"
              >
                <option value="all">All Villages</option>
                {successData.map((item) => (
                  <option key={item.village} value={item.village}>
                    {item.village}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md>
              <Form.Select
                name="department"
                value={filters.department}
                onChange={handleFilterChange}
                className="ss-filter-select"
              >
                <option value="all">All Departments</option>
                {allDepartments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md>
              <Form.Select
                name="scheme"
                value={filters.scheme}
                onChange={handleFilterChange}
                className="ss-filter-select"
              >
                <option value="all">All Schemes</option>
                {allSchemes.map((scheme) => (
                  <option key={scheme} value={scheme}>
                    {scheme}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </div>

        {/* ══════ CHART ══════ */}
        {filteredData.length > 1 && (
          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <div className="ss-chart-card">
                <div className="ss-chart-header">
                  <FaChartBar />
                  <h4>Village Performance Comparison</h4>
                </div>
                <Bar options={chartOptions} data={chartData} />
              </div>
            </Col>
          </Row>
        )}

        {/* ══════ VILLAGE STORY CARDS ══════ */}
        <Row className="g-4 ss-stories-row">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const successRate =
                item.registered > 0
                  ? Math.round((item.completed / item.registered) * 100)
                  : 0;
              const t = item.theme;
              return (
                <Col md={6} lg={4} key={index}>
                  <div
                    className="ss-village-card"
                    style={{
                      "--v-bg": t.bg,
                      "--v-border": t.border,
                      "--v-icon-bg": t.iconBg,
                      "--v-icon-color": t.iconColor,
                      "--v-num-color": t.numColor,
                      "--v-bar": t.barColor,
                      "--v-bar-track": t.barTrack,
                      "--v-shadow": t.shadow,
                      "--v-hover-shadow": t.hoverShadow,
                      "--v-accent": t.accent,
                    }}
                  >
                    {/* Top accent bar */}
                    <div className="ss-village-top-bar" />

                    {/* Header */}
                    <div className="ss-village-header">
                      <div className="ss-village-icon">{item.icon}</div>
                      <div className="ss-village-title-wrap">
                        <h4>{item.village}</h4>
                        <span className="ss-success-badge">{successRate}% Success</span>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="ss-village-story">
                      <FaQuoteLeft />
                      <p>{item.story}</p>
                    </div>

                    {/* Stats */}
                    <div className="ss-village-stats">
                      <div className="ss-village-stat-item">
                        <strong>{item.registered.toLocaleString("en-IN")}</strong>
                        <span>Registered</span>
                      </div>
                      <div className="ss-village-stat-divider" />
                      <div className="ss-village-stat-item">
                        <strong>{item.completed.toLocaleString("en-IN")}</strong>
                        <span>Completed</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="ss-village-progress">
                      <div className="ss-village-progress-track">
                        <div
                          className="ss-village-progress-fill"
                          style={{ width: `${successRate}%` }}
                        />
                      </div>
                      <span className="ss-village-progress-label">{successRate}%</span>
                    </div>

                    {/* Schemes */}
                    <div className="ss-village-schemes">
                      <strong>Active Schemes</strong>
                      <div className="ss-scheme-list">
                        {item.schemes.map((scheme) => (
                          <div key={scheme.name} className="ss-scheme-item">
                            <FaArrowRight className="ss-scheme-arrow" />
                            <span className="ss-scheme-name">{scheme.name}</span>
                            <span className="ss-scheme-count">
                              {scheme.enrolled.toLocaleString("en-IN")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <Col>
              <div className="ss-no-results">
                <FaTrophy />
                <h4>No matching stories found</h4>
                <p>Please adjust your filters to see more success stories.</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default SuccessStory;