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
  FaArrowUp,
  FaBullseye,
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
import { useLanguage } from "../../context/LanguageContext";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const translations = {
  en: {
    badge: "Our Achievements",
    heading: "Impact & Success Stories",
    subheading: "Stories of positive change in villages through our efforts",
    filters: "Filters",
    allVillages: "All Villages",
    allDepartments: "All Departments",
    allSchemes: "All Schemes",
    villagesCovered: "Villages Covered",
    studentsRegistered: "Students Registered",
    successfulCompletions: "Successful Completions",
    overallSuccessRate: "Overall Success Rate",
    villagePerformance: "Village Performance",
    registeredVsCompleted: "Registered vs Completed comparison",
    villageBreakdown: "Village Breakdown",
    successRate: "success rate",
    registered: "Registered",
    completed: "Completed",
    activeSchemes: "Active Schemes",
    noResults: "No matching stories found",
    noResultsDesc: "Please adjust your filters.",
    success: "Success",
    successData: [
      {
        village: "Dehradun",
        registered: 25000,
        completed: 23000,
        departments: ["Education Department", "Skill Development and Service Scheme Department"],
        story: "Digital literacy programs in Dehradun have opened new employment opportunities for youth.",
        schemes: [
          { name: "Midday Meal Scheme", enrolled: 15000 },
          { name: "Digital Literacy", enrolled: 10000 },
        ],
      },
      {
        village: "Haridwar",
        registered: 22000,
        completed: 19360,
        departments: ["Health and Family Welfare Department", "Women and Child Development Department"],
        story: "The success of health and nutrition schemes in Haridwar has reduced maternal and infant mortality rates.",
        schemes: [
          { name: "Integrated Child Development Services", enrolled: 12000 },
          { name: "Save the Daughter, Educate the Daughter", enrolled: 10000 },
        ],
      },
      {
        village: "Nainital",
        registered: 18000,
        completed: 17100,
        departments: ["Agriculture Department", "Rural Development Department"],
        story: "Agricultural training and women empowerment programs have increased the income of rural families in Nainital.",
        schemes: [
          { name: "Farmer Honor Fund", enrolled: 10000 },
          { name: "Rural Development Scheme", enrolled: 8000 },
        ],
      },
      {
        village: "Udham Singh Nagar",
        registered: 20000,
        completed: 18000,
        departments: ["Labor Department", "Social Welfare Department"],
        story: "Vocational training initiatives in Udham Singh Nagar have prepared a skilled workforce.",
        schemes: [
          { name: "Child Labor Prevention", enrolled: 9000 },
          { name: "Sukanya Samriddhi Scheme", enrolled: 11000 },
        ],
      },
      {
        village: "Almora",
        registered: 15500,
        completed: 14200,
        departments: ["Education Department", "Panchayati Raj Department"],
        story: "Starting mobile learning centers in remote villages of Almora has improved student attendance.",
        schemes: [
          { name: "Sarva Shiksha Abhiyan", enrolled: 8500 },
          { name: "Midday Meal Scheme", enrolled: 7000 },
        ],
      },
    ],
  },
  hi: {
    badge: "हमारी उपलब्धियाँ",
    heading: "प्रभाव और सफलता की कहानियाँ",
    subheading: "हमारे प्रयासों से गांवों में हुई सकारात्मक बदलाव की कहानियाँ",
    filters: "फ़िल्टर",
    allVillages: "सभी गांव",
    allDepartments: "सभी विभाग",
    allSchemes: "सभी योजनाएँ",
    villagesCovered: "गांव कवर",
    studentsRegistered: "छात्र पंजीकृत",
    successfulCompletions: "सफल पूर्णता",
    overallSuccessRate: "समग्र सफलता दर",
    villagePerformance: "ग्राम प्रदर्शन",
    registeredVsCompleted: "पंजीकृत बनाम पूर्ण तुलना",
    villageBreakdown: "ग्राम विवरण",
    successRate: "सफलता दर",
    registered: "पंजीकृत",
    completed: "पूर्ण",
    activeSchemes: "सक्रिय योजनाएँ",
    noResults: "कोई मिलान वाली कहानी नहीं मिली",
    noResultsDesc: "कृपया अपने फ़िल्टर को समायोजित करें।",
    success: "सफलता",
    successData: [
      {
        village: "देहरादून",
        registered: 25000,
        completed: 23000,
        departments: ["शिक्षा विभाग", "कौशल विकास एवं सेवा योजना विभाग"],
        story: "देहरादून में डिजिटल साक्षरता कार्यक्रमों ने युवाओं के लिए रोजगार के नए अवसर खोले हैं।",
        schemes: [
          { name: "मध्याह्न भोजन योजना", enrolled: 15000 },
          { name: "डिजिटल साक्षरता", enrolled: 10000 },
        ],
      },
      {
        village: "हरिद्वार",
        registered: 22000,
        completed: 19360,
        departments: ["स्वास्थ्य एवं परिवार कल्याण विभाग", "महिला कल्याण विभाग"],
        story: "हरिद्वार में स्वास्थ्य और पोषण योजनाओं की सफलता ने मातृ एवं शिशु मृत्यु दर में कमी की है।",
        schemes: [
          { name: "एकीकृत बाल विकास सेवाएँ", enrolled: 12000 },
          { name: "बेटी बचाओ, बेटी पढ़ाओ", enrolled: 10000 },
        ],
      },
      {
        village: "नैनीताल",
        registered: 18000,
        completed: 17100,
        departments: ["कृषि विभाग", "ग्राम्य विकास विभाग"],
        story: "नैनीताल में कृषि प्रशिक्षण और महिला सशक्तिकरण कार्यक्रमों ने ग्रामीण परिवारों की आय में वृद्धि की है।",
        schemes: [
          { name: "किसान सम्मान निधि", enrolled: 10000 },
          { name: "ग्राम्य विकास योजना", enrolled: 8000 },
        ],
      },
      {
        village: "उधम सिंह नगर",
        registered: 20000,
        completed: 18000,
        departments: ["श्रम विभाग", "समाज कल्याण विभाग"],
        story: "उधम सिंह नगर में व्यावसायिक प्रशिक्षण पहलों ने कुशल कार्यबल तैयार किया है।",
        schemes: [
          { name: "बाल श्रम रोकथाम", enrolled: 9000 },
          { name: "सुकन्या समृद्धि योजना", enrolled: 11000 },
        ],
      },
      {
        village: "अल्मोड़ा",
        registered: 15500,
        completed: 14200,
        departments: ["शिक्षा विभाग", "पंचायती राज विभाग"],
        story: "अल्मोड़ा के दूरदराज के गांवों में मोबाइल लर्निंग सेंटर शुरू करने से छात्रों की उपस्थिति में सुधार हुआ है।",
        schemes: [
          { name: "सर्व शिक्षा अभियान", enrolled: 8500 },
          { name: "मध्याह्न भोजन योजना", enrolled: 7000 },
        ],
      },
    ],
  },
};

const statThemes = [
  { bg: "#fff5f0", border: "#ffd6c7", iconBg: "#ffe8df", iconColor: "#d44a0a", numColor: "#a83800", shadow: "rgba(232,114,12,0.10)", hoverShadow: "rgba(232,114,12,0.20)", bar: "#e8720c" },
  { bg: "#eef5ff", border: "#c6dfff", iconBg: "#dae8ff", iconColor: "#2563eb", numColor: "#1a3fa0", shadow: "rgba(37,99,235,0.10)", hoverShadow: "rgba(37,99,235,0.20)", bar: "#3b82f6" },
  { bg: "#edfcf2", border: "#b8ecd0", iconBg: "#cef5da", iconColor: "#0d8043", numColor: "#06612f", shadow: "rgba(13,128,67,0.10)", hoverShadow: "rgba(13,128,67,0.20)", bar: "#10b981" },
  { bg: "#f5effe", border: "#e0ccff", iconBg: "#ecddff", iconColor: "#7c3aed", numColor: "#5b21b6", shadow: "rgba(124,58,237,0.10)", hoverShadow: "rgba(124,58,237,0.20)", bar: "#8b5cf6" },
];

const chartBarColors = ["#06b6d4", "#ef4444", "#10b981", "#d4a017", "#8b5cf6"];
const chartBarColorsLight = ["rgba(6,182,212,0.7)", "rgba(239,68,68,0.7)", "rgba(16,185,129,0.7)", "rgba(212,160,23,0.7)", "rgba(139,92,246,0.7)"];

function useAnimatedCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const run = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(run);
          };
          requestAnimationFrame(run);
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
  const { language } = useLanguage();
  const t = translations[language];
  const [filters, setFilters] = useState({ village: "all", department: "all", scheme: "all" });
  const [animVillages, villagesRef] = useAnimatedCounter(t.successData.length);
  const totalRegistered = t.successData.reduce((s, i) => s + i.registered, 0);
  const totalCompleted = t.successData.reduce((s, i) => s + i.completed, 0);
  const overallSuccessRate = totalRegistered > 0 ? Math.round((totalCompleted / totalRegistered) * 100) : 0;
  const [animRegistered, registeredRef] = useAnimatedCounter(totalRegistered);
  const [animCompleted, completedRef] = useAnimatedCounter(totalCompleted);
  const [animRate, rateRef] = useAnimatedCounter(overallSuccessRate);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = useMemo(() => {
    return t.successData.filter((item) => {
      const vm = filters.village === "all" || item.village === filters.village;
      const dm = filters.department === "all" || item.departments.includes(filters.department);
      const sm = filters.scheme === "all" || item.schemes.some((s) => s.name === filters.scheme);
      return vm && dm && sm;
    });
  }, [filters, t]);

  const allDepartments = useMemo(() => [...new Set(t.successData.flatMap((i) => i.departments))], [t]);
  const allSchemes = useMemo(() => [...new Set(t.successData.flatMap((i) => i.schemes.map((s) => s.name)))], [t]);

  const chartData = {
    labels: filteredData.map((d) => d.village),
    datasets: [
      {
        label: t.registered,
        data: filteredData.map((d) => d.registered),
        backgroundColor: filteredData.map((_, i) => chartBarColorsLight[i % 5]),
        borderColor: filteredData.map((_, i) => chartBarColors[i % 5]),
        borderWidth: 2, borderRadius: 6, barPercentage: 0.55,
      },
      {
        label: t.completed,
        data: filteredData.map((d) => d.completed),
        backgroundColor: filteredData.map((_, i) => chartBarColors[i % 5]),
        borderColor: filteredData.map((_, i) => chartBarColors[i % 5]),
        borderWidth: 2, borderRadius: 6, barPercentage: 0.55,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { size: 12, weight: "600" }, color: "#5a6577", usePointStyle: true, pointStyle: "rectRounded", padding: 16 },
      },
      tooltip: {
        backgroundColor: "#0e1a2b",
        titleFont: { size: 13, weight: "700" },
        bodyFont: { size: 12 },
        padding: 12, cornerRadius: 10,
        callbacks: { label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString("en-IN")}` },
      },
    },
    scales: {
      x: { ticks: { font: { size: 12, weight: "600" }, color: "#5a6577" }, grid: { display: false } },
      y: { ticks: { font: { size: 11 }, color: "#7b8794", callback: (v) => (v >= 1000 ? v / 1000 + "K" : v) }, grid: { color: "rgba(0,0,0,0.04)" } },
    },
  };

  const statCards = [
    { icon: <FaMapMarkerAlt />, value: `${animVillages}+`, label: t.villagesCovered, ref: villagesRef, theme: statThemes[0] },
    { icon: <FaUsers />, value: `${animRegistered.toLocaleString("en-IN")}+`, label: t.studentsRegistered, ref: registeredRef, theme: statThemes[1] },
    { icon: <FaCheckCircle />, value: `${animCompleted.toLocaleString("en-IN")}+`, label: t.successfulCompletions, ref: completedRef, theme: statThemes[2] },
    { icon: <FaPercentage />, value: `${animRate}%`, label: t.overallSuccessRate, ref: rateRef, theme: statThemes[3] },
  ];

  const villageThemes = [
    { bg: "#eaf8fa", border: "#b6ecf2", iconBg: "#cdf2f7", iconColor: "#0891b2", numColor: "#056380", barColor: "#06b6d4", barTrack: "#b6ecf2", shadow: "rgba(6,182,212,0.08)", hoverShadow: "rgba(6,182,212,0.18)", accent: "#06b6d4" },
    { bg: "#fef0ef", border: "#fcd5d2", iconBg: "#fde2e0", iconColor: "#dc2626", numColor: "#a01a1a", barColor: "#ef4444", barTrack: "#fcd5d2", shadow: "rgba(220,38,38,0.08)", hoverShadow: "rgba(220,38,38,0.18)", accent: "#ef4444" },
    { bg: "#edfaf4", border: "#b8ecd0", iconBg: "#d0f5e2", iconColor: "#0d8043", numColor: "#06612f", barColor: "#10b981", barTrack: "#b8ecd0", shadow: "rgba(13,128,67,0.08)", hoverShadow: "rgba(13,128,67,0.18)", accent: "#10b981" },
    { bg: "#fef9ee", border: "#fce3b3", iconBg: "#fdf0d0", iconColor: "#b8860b", numColor: "#8b6508", barColor: "#d4a017", barTrack: "#fce3b3", shadow: "rgba(184,134,11,0.08)", hoverShadow: "rgba(184,134,11,0.18)", accent: "#d4a017" },
    { bg: "#f5effe", border: "#e0ccff", iconBg: "#ecddff", iconColor: "#7c3aed", numColor: "#5b21b6", barColor: "#8b5cf6", barTrack: "#e0ccff", shadow: "rgba(124,58,237,0.08)", hoverShadow: "rgba(124,58,237,0.18)", accent: "#8b5cf6" },
  ];

  const villageIcons = [<FaSchool />, <FaHeartbeat />, <FaLeaf />, <FaHardHat />, <FaUniversity />];

  return (
    <section className="success-story-section">
      <Container>
        {/* HEADING */}
        <div className="ss-section-heading">
          <div className="ss-section-badge"><FaTrophy /><span>{t.badge}</span></div>
          <h2>{t.heading}</h2>
          <p>{t.subheading}</p>
          <div className="ss-heading-tricolor"><div /><div /><div /></div>
        </div>

        {/* STAT CARDS */}
        <Row className="g-4 ss-stats-row">
          {statCards.map((card, i) => (
            <Col md={6} lg={3} key={i}>
              <div className="ss-stat-card" ref={card.ref} style={{ "--stat-bg": card.theme.bg, "--stat-border": card.theme.border, "--stat-icon-bg": card.theme.iconBg, "--stat-icon-color": card.theme.iconColor, "--stat-num-color": card.theme.numColor, "--stat-shadow": card.theme.shadow, "--stat-hover-shadow": card.theme.hoverShadow, "--stat-bar": card.theme.bar }}>
                <div className="ss-stat-icon">{card.icon}</div>
                <strong>{card.value}</strong>
                <span>{card.label}</span>
                <div className="ss-stat-bar"><div className="ss-stat-bar-fill" /></div>
              </div>
            </Col>
          ))}
        </Row>

        {/* FILTERS */}
        <div className="ss-filters-card">
          <Row className="g-3 align-items-center">
            <Col lg="auto"><div className="ss-filter-title"><FaFilter /><span>{t.filters}</span></div></Col>
            <Col md><Form.Select name="village" value={filters.village} onChange={handleFilterChange} className="ss-filter-select"><option value="all">{t.allVillages}</option>{t.successData.map((item) => <option key={item.village} value={item.village}>{item.village}</option>)}</Form.Select></Col>
            <Col md><Form.Select name="department" value={filters.department} onChange={handleFilterChange} className="ss-filter-select"><option value="all">{t.allDepartments}</option>{allDepartments.map((d) => <option key={d} value={d}>{d}</option>)}</Form.Select></Col>
            <Col md><Form.Select name="scheme" value={filters.scheme} onChange={handleFilterChange} className="ss-filter-select"><option value="all">{t.allSchemes}</option>{allSchemes.map((s) => <option key={s} value={s}>{s}</option>)}</Form.Select></Col>
          </Row>
        </div>

        {/* CHART + BREAKDOWN */}
        {filteredData.length > 1 && (
          <div className="ss-chart-structure">
            <Row className="g-4">
              <Col lg={7}>
                <div className="ss-chart-main">
                  <div className="ss-chart-main-header">
                    <div className="ss-chart-main-icon"><FaChartBar /></div>
                    <div><h4>{t.villagePerformance}</h4><p>{t.registeredVsCompleted}</p></div>
                  </div>
                  <div className="ss-chart-wrapper"><Bar options={chartOptions} data={chartData} /></div>
                </div>
              </Col>
              <Col lg={5} className="d-none d-lg-block">
                <div className="ss-breakdown-panel">
                  <div className="ss-breakdown-header"><FaBullseye /><h4>{t.villageBreakdown}</h4></div>
                  <div className="ss-breakdown-list">
                    {filteredData.map((item, i) => {
                      const rate = item.registered > 0 ? Math.round((item.completed / item.registered) * 100) : 0;
                      const theme = villageThemes[i % villageThemes.length];
                      return (
                        <div key={i} className="ss-breakdown-item" style={{ "--bd-bg": theme.bg, "--bd-border": theme.border, "--bd-icon-bg": theme.iconBg, "--bd-icon-color": theme.iconColor, "--bd-num-color": theme.numColor, "--bd-bar": theme.barColor, "--bd-bar-track": theme.barTrack }}>
                          <div className="ss-breakdown-item-header">
                            <div className="ss-breakdown-icon">{villageIcons[i % villageIcons.length]}</div>
                            <div className="ss-breakdown-info"><strong>{item.village}</strong><span>{rate}% {t.successRate}</span></div>
                            <div className="ss-breakdown-rate"><FaArrowUp /><strong>{rate}%</strong></div>
                          </div>
                          <div className="ss-breakdown-bars">
                            <div className="ss-breakdown-bar-row">
                              <span className="ss-breakdown-bar-label">{t.registered}</span>
                              <div className="ss-breakdown-bar-track"><div className="ss-breakdown-bar-fill" style={{ width: "100%" }} /></div>
                              <span className="ss-breakdown-bar-value">{(item.registered / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="ss-breakdown-bar-row">
                              <span className="ss-breakdown-bar-label">{t.completed}</span>
                              <div className="ss-breakdown-bar-track"><div className="ss-breakdown-bar-fill" style={{ width: `${rate}%` }} /></div>
                              <span className="ss-breakdown-bar-value">{(item.completed / 1000).toFixed(0)}K</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>

            {/* COMPARISON STRIP */}
            <div className="ss-comparison-strip">
              {filteredData.map((item, i) => {
                const rate = item.registered > 0 ? Math.round((item.completed / item.registered) * 100) : 0;
                const theme = villageThemes[i % villageThemes.length];
                return (
                  <div key={i} className="ss-compare-item" style={{ "--cmp-bg": theme.bg, "--cmp-border": theme.border, "--cmp-icon-color": theme.iconColor, "--cmp-bar": theme.barColor, "--cmp-bar-track": theme.barTrack }}>
                    <div className="ss-compare-icon">{villageIcons[i % villageIcons.length]}</div>
                    <strong>{item.village}</strong>
                    <div className="ss-compare-progress">
                      <div className="ss-compare-progress-track"><div className="ss-compare-progress-fill" style={{ width: `${rate}%` }} /></div>
                    </div>
                    <span>{rate}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VILLAGE STORY CARDS */}
        <Row className="g-4 ss-stories-row">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const successRate = item.registered > 0 ? Math.round((item.completed / item.registered) * 100) : 0;
              const theme = villageThemes[index % villageThemes.length];
              return (
                <Col md={6} lg={4} key={index}>
                  <div className="ss-village-card" style={{ "--v-bg": theme.bg, "--v-border": theme.border, "--v-icon-bg": theme.iconBg, "--v-icon-color": theme.iconColor, "--v-num-color": theme.numColor, "--v-bar": theme.barColor, "--v-bar-track": theme.barTrack, "--v-shadow": theme.shadow, "--v-hover-shadow": theme.hoverShadow, "--v-accent": theme.accent }}>
                    <div className="ss-village-top-bar" />
                    <div className="ss-village-header">
                      <div className="ss-village-icon">{villageIcons[index % villageIcons.length]}</div>
                      <div className="ss-village-title-wrap"><h4>{item.village}</h4><span className="ss-success-badge">{successRate}% {t.success}</span></div>
                    </div>
                    <div className="ss-village-story"><FaQuoteLeft /><p>{item.story}</p></div>
                    <div className="ss-village-stats">
                      <div className="ss-village-stat-item"><strong>{item.registered.toLocaleString("en-IN")}</strong><span>{t.registered}</span></div>
                      <div className="ss-village-stat-divider" />
                      <div className="ss-village-stat-item"><strong>{item.completed.toLocaleString("en-IN")}</strong><span>{t.completed}</span></div>
                    </div>
                    <div className="ss-village-progress">
                      <div className="ss-village-progress-track"><div className="ss-village-progress-fill" style={{ width: `${successRate}%` }} /></div>
                      <span className="ss-village-progress-label">{successRate}%</span>
                    </div>
                    <div className="ss-village-schemes">
                      <strong>{t.activeSchemes}</strong>
                      <div className="ss-scheme-list">
                        {item.schemes.map((scheme) => (
                          <div key={scheme.name} className="ss-scheme-item">
                            <FaArrowRight className="ss-scheme-arrow" />
                            <span className="ss-scheme-name">{scheme.name}</span>
                            <span className="ss-scheme-count">{scheme.enrolled.toLocaleString("en-IN")}</span>
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
              <div className="ss-no-results"><FaTrophy /><h4>{t.noResults}</h4><p>{t.noResultsDesc}</p></div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default SuccessStory;
