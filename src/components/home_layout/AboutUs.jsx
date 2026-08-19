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
import { useLanguage } from "../../context/LanguageContext";


/* ── Translations ── */
const translations = {
  en: {
    aboutSrc: "About SRC",
    aboutTitle: "About <span>State Resource Center</span>",
    aboutDesc: "SRC is a centralized digital platform designed to provide comprehensive information about government departments, schemes, services, and benefits available for child empowerment. Our objective is to ensure easy access to information so that every child can receive their rights.",
    visionTitle: "Our Vision",
    missionTitle: "Our Mission",
    visionQuote: "Every child should have access to information about their rights — this is the dream of DRC.",
    missionQuote: "To integrate, simplify, and make transparent the information about government schemes and services.",
    visionPoints: [
      "Ensuring access to information for every child",
      "Promoting transparency and accountability",
      "Protecting and empowering child rights",
    ],
    missionPoints: [
      "Centralized digital repository of 18+ department schemes",
      "Simple and effective search system",
      "Integrated service portal for beneficiaries",
    ],
    howSrcWorks: "How SRC Works",
    howSrcWorksDesc: "How information reaches from department to beneficiary",
    departments: "Our Departments",
    departmentsDesc: "18 government departments are associated with child welfare",
    empowermentTitle: "Child Empowerment Areas",
    empowermentDesc: "Key areas of child development",
    viewAllDepts: "View All",
    departments_suffix: "Departments",
    schemes_suffix: "Schemes",
    beneficiaries_suffix: "Beneficiaries",
    students_suffix: "Students",
    beneficiariesLabel: "Beneficiaries",
    schemesLabel: "Schemes",
    howItWorks: [
      { title: "Data Collection", desc: "Information about schemes and services is collected from government departments." },
      { title: "Categorization", desc: "Classification based on department, work area, and beneficiary." },
      { title: "Processing", desc: "Information is organized and processed on the digital platform." },
      { title: "Mapping", desc: "Mapping of Department → Scheme → Objective → Benefit." },
      { title: "Access", desc: "Easy search and usage facility for citizens." },
    ],
    empowermentAreas: [
      { title: "Child Education", description: "Education and learning opportunities", beneficiaries: 120500, programs: 25 },
      { title: "Child Protection", description: "Safety and child rights", beneficiaries: 55200, programs: 15 },
      { title: "Health & Nutrition", description: "Health and nutrition services", beneficiaries: 210000, programs: 32 },
      { title: "Scholarships", description: "Academic and financial assistance", beneficiaries: 85000, programs: 18 },
      { title: "Skill Development", description: "Skills and vocational training", beneficiaries: 42000, programs: 22 },
      { title: "Digital Literacy", description: "Digital education and awareness", beneficiaries: 75000, programs: 12 },
    ],
    departmentsData: [
      { name: "Justice and Legal Advisory Department", workArea: "Child Rights and Legal Aid", studentCount: 1250, schemesCount: 5 },
      { name: "Finance Department", workArea: "Financial assistance and budget for schemes", studentCount: 8500, schemesCount: 8 },
      { name: "Planning Department", workArea: "Planning for state development", studentCount: 3200, schemesCount: 6 },
      { name: "Health and Family Welfare Department", workArea: "Child health, nutrition and medicine", studentCount: 15000, schemesCount: 12 },
      { name: "Education Department", workArea: "Child education, schools and literacy", studentCount: 25000, schemesCount: 15 },
      { name: "Youth Welfare and Sports Department", workArea: "Sports, youth development and talent encouragement", studentCount: 7800, schemesCount: 9 },
      { name: "Panchayati Raj Department", workArea: "Child welfare programs at rural level", studentCount: 11200, schemesCount: 7 },
      { name: "Rural Development Department", workArea: "Development and assistance programs for rural children", studentCount: 9500, schemesCount: 10 },
      { name: "Skill Development and Service Scheme Department", workArea: "Skills and vocational training", studentCount: 6400, schemesCount: 11 },
      { name: "Housing and Urban Development Department", workArea: "Child and family assistance in urban areas", studentCount: 4800, schemesCount: 8 },
      { name: "Labor Department", workArea: "Child labor prevention and welfare of children of workers", studentCount: 2100, schemesCount: 6 },
      { name: "Water Supply Department", workArea: "Availability of clean drinking water", studentCount: 18000, schemesCount: 4 },
      { name: "Food and Civil Supplies Consumer Affairs Department", workArea: "Food security and supply", studentCount: 22000, schemesCount: 5 },
      { name: "Social Welfare Department", workArea: "Social security and welfare", studentCount: 13500, schemesCount: 14 },
      { name: "Agriculture Department", workArea: "Agricultural development and farmer welfare", studentCount: 5600, schemesCount: 9 },
      { name: "Women and Child Development Department", workArea: "Women empowerment and welfare", studentCount: 19800, schemesCount: 18 },
      { name: "Association for Voluntary Action (AVA)", workArea: "Community development through voluntary work", studentCount: 850, schemesCount: 3 },
      { name: "SPOTIKIM, Police Headquarters", workArea: "Law and order and child safety", studentCount: 450, schemesCount: 4 },
    ],
  },
  hi: {
    aboutSrc: "एसआरसी के बारे में",
    aboutTitle: "<span>राज्य संसाधन केंद्र</span> के बारे में",
    aboutDesc: "एसआरसी एक केंद्रीकृत डिजिटल प्लेटफॉर्म है जिसे बाल सशक्तिकरण के लिए उपलब्ध सरकारी विभागों, योजनाओं, सेवाओं और लाभों के बारे में व्यापक जानकारी प्रदान करने के लिए डिज़ाइन किया गया है। हमारा उद्देश्य सूचना तक आसान पहुँच सुनिश्चित करना है ताकि हर बच्चे को उसका अधिकार मिल सके।",
    visionTitle: "हमारा दृष्टिकोण",
    missionTitle: "हमारा मिशन",
    visionQuote: "हर बच्चे को उसके अधिकार और हक़ की जानकारी मिले — यही DRC का सपना है।",
    missionQuote: "सरकारी योजनाओं और सेवाओं की जानकारी को एकीकृत, सुलभ और पारदर्शी बनाना।",
    visionPoints: [
      "हर बच्चे तक सूचना की पहुँच सुनिश्चित करना",
      "पारदर्शिता और जवाबदेही को बढ़ावा देना",
      "बाल अधिकारों की सुरक्षा और सशक्तिकरण",
    ],
    missionPoints: [
      "18+ विभागों की योजनाओं का केंद्रीकृत डिजिटल भंडार",
      "सरल और प्रभावी खोज प्रणाली",
      "लाभार्थियों के लिए एकीकृत सेवा पोर्टल",
    ],
    howSrcWorks: "एसआरसी कैसे काम करता है",
    howSrcWorksDesc: "जानकारी विभाग से लाभार्थी तक कैसे पहुँचती है",
    departments: "हमारे विभाग",
    departmentsDesc: "बाल कल्याण से जुड़े 18 सरकारी विभाग",
    empowermentTitle: "बाल सशक्तिकरण क्षेत्र",
    empowermentDesc: "बच्चों के विकास के प्रमुख क्षेत्र",
    viewAllDepts: "सभी देखें",
    departments_suffix: "विभाग",
    schemes_suffix: "योजनाएँ",
    beneficiaries_suffix: "लाभार्थी",
    students_suffix: "छात्र",
    beneficiariesLabel: "लाभार्थी",
    schemesLabel: "योजनाएँ",
    howItWorks: [
      { title: "डेटा संग्रह", desc: "सरकारी विभागों से योजनाओं और सेवाओं की जानकारी एकत्रित की जाती है।" },
      { title: "वर्गीकरण", desc: "विभाग, कार्यक्षेत्र और लाभार्थी के आधार पर वर्गीकरण।" },
      { title: "प्रसंस्करण", desc: "डिजिटल प्लेटफॉर्म पर जानकारी को व्यवस्थित और प्रसंस्कृत किया जाता है।" },
      { title: "मानचित्रण", desc: "विभाग → योजना → उद्देश्य → लाभ का मानचित्रण।" },
      { title: "पहुँच", desc: "नागरिकों को आसानी से खोज और उपयोग की सुविधा।" },
    ],
    empowermentAreas: [
      { title: "बाल शिक्षा", description: "शिक्षा एवं सीखने के अवसर", beneficiaries: 120500, programs: 25 },
      { title: "बाल संरक्षण", description: "सुरक्षा एवं बाल अधिकार", beneficiaries: 55200, programs: 15 },
      { title: "स्वास्थ्य एवं पोषण", description: "स्वास्थ्य एवं पोषण सेवाएँ", beneficiaries: 210000, programs: 32 },
      { title: "छात्रवृत्ति", description: "शैक्षणिक एवं वित्तीय सहायता", beneficiaries: 85000, programs: 18 },
      { title: "कौशल विकास", description: "कौशल एवं व्यावसायिक प्रशिक्षण", beneficiaries: 42000, programs: 22 },
      { title: "डिजिटल साक्षरता", description: "डिजिटल शिक्षा एवं जागरूकता", beneficiaries: 75000, programs: 12 },
    ],
    departmentsData: [
      { name: "न्याय एवं विधि परामर्शी विभाग", workArea: "बाल अधिकार एवं कानूनी सहायता", studentCount: 1250, schemesCount: 5 },
      { name: "वित्त विभाग", workArea: "योजनाओं के लिए वित्तीय सहायता एवं बजट", studentCount: 8500, schemesCount: 8 },
      { name: "नियोजन विभाग", workArea: "राज्य के विकास की योजना", studentCount: 3200, schemesCount: 6 },
      { name: "स्वास्थ्य एवं परिवार कल्याण विभाग", workArea: "बाल स्वास्थ्य, पोषण एवं चिकित्सा", studentCount: 15000, schemesCount: 12 },
      { name: "शिक्षा विभाग", workArea: "बाल शिक्षा, विद्यालय एवं साक्षरता", studentCount: 25000, schemesCount: 15 },
      { name: "युवा कल्याण एवं खेल विभाग", workArea: "खेल, युवा विकास एवं प्रतिभा प्रोत्साहन", studentCount: 7800, schemesCount: 9 },
      { name: "पंचायती राज विभाग", workArea: "ग्रामीण स्तर पर बाल कल्याण कार्यक्रम", studentCount: 11200, schemesCount: 7 },
      { name: "ग्राम्य विकास विभाग", workArea: "ग्रामीण बच्चों के विकास एवं सहायता कार्यक्रम", studentCount: 9500, schemesCount: 10 },
      { name: "कौशल विकास एवं सेवा योजना विभाग", workArea: "कौशल एवं व्यावसायिक प्रशिक्षण", studentCount: 6400, schemesCount: 11 },
      { name: "आवास एवं शहरी विकास विभाग", workArea: "शहरी क्षेत्रों में बाल एवं परिवार सहायता", studentCount: 4800, schemesCount: 8 },
      { name: "श्रम विभाग", workArea: "बाल श्रम रोकथाम एवं श्रमिक परिवारों के बच्चों का कल्याण", studentCount: 2100, schemesCount: 6 },
      { name: "पेयजल विभाग", workArea: "स्वच्छ पेयजल की उपलब्धता", studentCount: 18000, schemesCount: 4 },
      { name: "खाद्य एवं नागरिक आपूर्ति उपभोक्ता विभाग", workArea: "खाद्य सुरक्षा और आपूर्ति", studentCount: 22000, schemesCount: 5 },
      { name: "समाज कल्याण विभाग", workArea: "सामाजिक सुरक्षा और कल्याण", studentCount: 13500, schemesCount: 14 },
      { name: "कृषि विभाग", workArea: "कृषि विकास और किसान कल्याण", studentCount: 5600, schemesCount: 9 },
      { name: "महिला कल्याण विभाग", workArea: "महिला सशक्तिकरण एवं कल्याण", studentCount: 19800, schemesCount: 18 },
      { name: "एसोसिएशन फॉर वॉलंटरी एक्शन (AVA)", workArea: "स्वैच्छिक कार्यों के माध्यम से सामुदायिक विकास", studentCount: 850, schemesCount: 3 },
      { name: "एसपीओटीकाईएम, पुलिस मुख्यालय", workArea: "कानून व्यवस्था और बाल सुरक्षा", studentCount: 450, schemesCount: 4 },
    ],
  },
};

/* ── Department Data ── */
const departments = translations.en.departmentsData.map((d, i) => ({
  ...d,
  icon: [
    <FaBalanceScale />, <FaHandsHelping />, <FaChartLine />, <FaHeartbeat />, <FaSchool />,
    <FaRunning />, <FaMapMarkedAlt />, <FaHome />, <FaBriefcase />, <FaBuilding />,
    <FaHardHat />, <FaTint />, <FaShoppingCart />, <FaUsers />, <FaLeaf />,
    <FaChild />, <FaHandHoldingHeart />, <FaShieldAlt />,
  ][i],
}));

/* ── 18 unique color palettes for departments ── */
const deptThemes = [
  { bg:"#fff5f0", border:"#ffd6c7", iconBg:"#ffe8df", iconColor:"#d44a0a", numColor:"#a83800", bar:"#e8720c" },
  { bg:"#fef9ee", border:"#fce3b3", iconBg:"#fdf0d0", iconColor:"#b8860b", numColor:"#8b6508", bar:"#d4a017" },
  { bg:"#edfaf4", border:"#b8ecd0", iconBg:"#d0f5e2", iconColor:"#0d8043", numColor:"#06612f", bar:"#10b981" },
  { bg:"#fef0ef", border:"#fcd5d2", iconBg:"#fde2e0", iconColor:"#dc2626", numColor:"#a01a1a", bar:"#ef4444" },
  { bg:"#eef5ff", border:"#c6dfff", iconBg:"#dae8ff", iconColor:"#2563eb", numColor:"#1a3fa0", bar:"#3b82f6" },
  { bg:"#f5effe", border:"#e0ccff", iconBg:"#ecddff", iconColor:"#7c3aed", numColor:"#5b21b6", bar:"#8b5cf6" },
  { bg:"#edfcf2", border:"#b5f0c8", iconBg:"#cef5da", iconColor:"#16a34a", numColor:"#0d6b30", bar:"#22c55e" },
  { bg:"#fffbeb", border:"#fde5a0", iconBg:"#fef0c2", iconColor:"#ca8a04", numColor:"#92600a", bar:"#eab308" },
  { bg:"#eaf8fa", border:"#b6ecf2", iconBg:"#cdf2f7", iconColor:"#0891b2", numColor:"#056380", bar:"#06b6d4" },
  { bg:"#fef1f7", border:"#fdcce0", iconBg:"#fdddea", iconColor:"#db2777", numColor:"#a01058", bar:"#ec4899" },
  { bg:"#f8fce4", border:"#dde8a0", iconBg:"#e8f1b6", iconColor:"#65a30d", numColor:"#4a7706", bar:"#84cc16" },
  { bg:"#eef9fb", border:"#b6e8f0", iconBg:"#d0f0f5", iconColor:"#0e7490", numColor:"#0a5468", bar:"#22d3ee" },
  { bg:"#fef0f3", border:"#fbbfcf", iconBg:"#fcd5df", iconColor:"#e11d48", numColor:"#a01040", bar:"#f43f5e" },
  { bg:"#f3eef6", border:"#d9ccee", iconBg:"#e4ddf0", iconColor:"#7e57c2", numColor:"#5e3fa0", bar:"#9575cd" },
  { bg:"#eef8f0", border:"#b8e0c4", iconBg:"#d2eeda", iconColor:"#2e7d32", numColor:"#1b5e20", bar:"#43a047" },
  { bg:"#fef2f6", border:"#f8b4cb", iconBg:"#fbcfdd", iconColor:"#c2185b", numColor:"#880e4f", bar:"#e91e63" },
  { bg:"#fefcee", border:"#f5f0a0", iconBg:"#f8f5c0", iconColor:"#f9a825", numColor:"#c17900", bar:"#fbc02d" },
  { bg:"#eeeef9", border:"#c8c8f0", iconBg:"#dcdcf5", iconColor:"#5c6bc0", numColor:"#3949ab", bar:"#7986cb" },
];

/* ── Empowerment Areas ── */
const empowermentAreas = translations.en.empowermentAreas.map((a, i) => ({
  ...a,
  icon: [<FaBookOpen />, <FaShieldAlt />, <FaHeartbeat />, <FaGraduationCap />, <FaBriefcase />, <FaLaptop />][i],
}));

/* ── 6 unique color palettes for empowerment ── */
const empThemes = [
  { bg:"#eef5ff", border:"#c6dfff", iconBg:"#dae8ff", iconColor:"#2563eb", numColor:"#1a3fa0", bar:"#3b82f6", barTrack:"#c6dfff" },
  { bg:"#fef0ef", border:"#fcd5d2", iconBg:"#fde2e0", iconColor:"#dc2626", numColor:"#a01a1a", bar:"#ef4444", barTrack:"#fcd5d2" },
  { bg:"#edfaf4", border:"#b8ecd0", iconBg:"#d0f5e2", iconColor:"#0d8043", numColor:"#06612f", bar:"#10b981", barTrack:"#b8ecd0" },
  { bg:"#f5effe", border:"#e0ccff", iconBg:"#ecddff", iconColor:"#7c3aed", numColor:"#5b21b6", bar:"#8b5cf6", barTrack:"#e0ccff" },
  { bg:"#fff5f0", border:"#ffd6c7", iconBg:"#ffe8df", iconColor:"#d44a0a", numColor:"#a83800", bar:"#e8720c", barTrack:"#ffd6c7" },
  { bg:"#eaf8fa", border:"#b6ecf2", iconBg:"#cdf2f7", iconColor:"#0891b2", numColor:"#056380", bar:"#06b6d4", barTrack:"#b6ecf2" },
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
  const { language } = useLanguage();

  const t = translations[language];

  const [animDepts, deptsRef] = useAnimatedCounter(departments.length);
  const [animSchemes, schemesRef] = useAnimatedCounter(totalSchemes);
  const [animBen, benRef] = useAnimatedCounter(Math.round(totalBeneficiaries / 1000));
  const [animStudents, studentsRef] = useAnimatedCounter(Math.round(totalStudents / 1000));

  /* ── Hero stat card themes ── */
  const statCards = [
    {
      icon: <FaDatabase />,
      value: `${animDepts}+`,
      label: t.departments_suffix,
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
      label: t.schemes_suffix,
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
      label: t.beneficiaries_suffix,
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
      label: t.students_suffix,
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
  const howItWorks = t.howItWorks.map((step, i) => {
    const themes = [
      { bg:"#fff5f0", border:"#ffd6c7", iconBg:"#ffe8df", iconColor:"#d44a0a", bar:"#e8720c", shadow:"rgba(232,114,12,0.08)" },
      { bg:"#eef5ff", border:"#c6dfff", iconBg:"#dae8ff", iconColor:"#2563eb", bar:"#3b82f6", shadow:"rgba(37,99,235,0.08)" },
      { bg:"#fef0ef", border:"#fcd5d2", iconBg:"#fde2e0", iconColor:"#dc2626", bar:"#ef4444", shadow:"rgba(220,38,38,0.08)" },
      { bg:"#f5effe", border:"#e0ccff", iconBg:"#ecddff", iconColor:"#7c3aed", bar:"#8b5cf6", shadow:"rgba(124,58,237,0.08)" },
      { bg:"#edfaf4", border:"#b8ecd0", iconBg:"#d0f5e2", iconColor:"#0d8043", bar:"#10b981", shadow:"rgba(13,128,67,0.08)" },
    ];
    const icons = [<FaDatabase />, <FaLayerGroup />, <FaCogs />, <FaProjectDiagram />, <FaHandshake />];
    return { ...step, icon: icons[i], theme: themes[i], step: i + 1 };
  });

  const visionPoints = t.visionPoints.map((text, i) => ({
    icon: [<FaEye />, <FaStar />, <FaChild />][i],
    text,
  }));

  const missionPoints = t.missionPoints.map((text, i) => ({
    icon: [<FaBullseye />, <FaDatabase />, <FaHandsHelping />][i],
    text,
  }));

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
                  <span>{t.aboutSrc}</span>
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: t.aboutTitle }} />
                <p>{t.aboutDesc}</p>
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
                  <h3>{t.visionTitle}</h3>
                </div>
                <p className="vm-quote">
                  <FaQuoteLeft />
                  {t.visionQuote}
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
                  <h3>{t.missionTitle}</h3>
                </div>
                <p className="vm-quote">
                  <FaQuoteLeft />
                  {t.missionQuote}
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
            <h2>{t.howSrcWorks}</h2>
            <p>{t.howSrcWorksDesc}</p>
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
            <h2>{t.departments}</h2>
            <p>{departments.length} {t.departmentsDesc ? t.departmentsDesc : (language === "en" ? "government departments associated with child welfare" : "सरकारी विभाग बाल कल्याण से जुड़े हैं")}</p>
          </div>
          <Row className="g-3">
            {departments.slice(0, visibleDepts).map((dept, i) => {
              const dt = translations[language].departmentsData[i];
              const theme = deptThemes[i];
              return (
                <Col md={6} lg={3} key={i}>
                  <div
                    className="about-dept-card"
                    style={{
                      "--dept-bg": theme.bg,
                      "--dept-border": theme.border,
                      "--dept-icon-bg": theme.iconBg,
                      "--dept-icon-color": theme.iconColor,
                      "--dept-num-color": theme.numColor,
                      "--dept-bar": theme.bar,
                    }}
                  >
                    <div className="about-dept-icon">{dept.icon}</div>
                    <h5>{dt.name}</h5>
                    <p>{dt.workArea}</p>
                    <div className="about-dept-meta">
                      <span><strong>{dt.studentCount.toLocaleString("en-IN")}</strong> {t.students_suffix}</span>
                      <span><strong>{dt.schemesCount}</strong> {t.schemes_suffix}</span>
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
                {t.viewAllDepts} {departments.length} {t.departments_suffix} <FaArrowRight />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* ═══════════ EMPOWERMENT AREAS ═══════════ */}
      <section className="about-emp-section">
        <Container>
          <div className="about-section-heading">
            <h2>{t.empowermentTitle}</h2>
            <p>{t.empowermentDesc}</p>
          </div>
          <Row className="g-4">
            {empowermentAreas.map((area, i) => {
              const et = empThemes[i];
              const transArea = t.empowermentAreas[i];
              return (
                <Col md={6} lg={4} key={i}>
                  <div
                    className={`about-emp-card ${activeArea === i ? "about-emp-active" : ""}`}
                    style={{
                      "--emp-bg": et.bg,
                      "--emp-border": et.border,
                      "--emp-icon-bg": et.iconBg,
                      "--emp-icon-color": et.iconColor,
                      "--emp-num-color": et.numColor,
                      "--emp-bar": et.bar,
                      "--emp-bar-track": et.barTrack,
                      "--emp-delay": `${i * 0.08}s`,
                    }}
                    onMouseEnter={() => setActiveArea(i)}
                    onMouseLeave={() => setActiveArea(null)}
                  >
                    <div className="about-emp-icon">{area.icon}</div>
                    <h4>{transArea.title}</h4>
                    <p>{transArea.description}</p>
                    <div className="about-emp-stats">
                      <div>
                        <strong>{transArea.beneficiaries.toLocaleString("en-IN")}</strong>
                        <span>{t.beneficiariesLabel}</span>
                      </div>
                      <div className="about-emp-divider" />
                      <div>
                        <strong>{transArea.programs}</strong>
                        <span>{t.schemesLabel}</span>
                      </div>
                    </div>
                    <div className="about-emp-bar">
                      <div
                        className="about-emp-bar-fill"
                        style={{
                          width: `${(transArea.beneficiaries / Math.max(...t.empowermentAreas.map(a => a.beneficiaries))) * 100}%`,
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
