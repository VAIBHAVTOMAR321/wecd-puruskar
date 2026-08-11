import React from "react";
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
  FaDatabase,
} from "react-icons/fa";

import "./Home.css";


// =====================================================
// 12 DEPARTMENTS
// =====================================================

const departments = [
  {
    name: "गृह विभाग",
    workArea: "बाल सुरक्षा एवं संरक्षण",
    icon: <FaShieldAlt />,
  },
  {
    name: "न्याय एवं विधि परामर्शी विभाग",
    workArea: "बाल अधिकार एवं कानूनी सहायता",
    icon: <FaBalanceScale />,
  },
  {
    name: "महिला सशक्तिकरण एवं बाल विकास विभाग",
    workArea: "बाल कल्याण एवं समग्र विकास",
    icon: <FaChild />,
  },
  {
    name: "वित्त विभाग",
    workArea: "योजनाओं के लिए वित्तीय सहायता एवं बजट",
    icon: <FaHandsHelping />,
  },
  {
    name: "स्वास्थ्य एवं परिवार कल्याण विभाग",
    workArea: "बाल स्वास्थ्य, पोषण एवं चिकित्सा",
    icon: <FaHeartbeat />,
  },
  {
    name: "शिक्षा विभाग",
    workArea: "बाल शिक्षा, विद्यालय एवं साक्षरता",
    icon: <FaSchool />,
  },
  {
    name: "युवा कल्याण एवं खेल विभाग",
    workArea: "खेल, युवा विकास एवं प्रतिभा प्रोत्साहन",
    icon: <FaRunning />,
  },
  {
    name: "पंचायती राज विभाग",
    workArea: "ग्रामीण स्तर पर बाल कल्याण कार्यक्रम",
    icon: <FaMapMarkedAlt />,
  },
  {
    name: "ग्राम्य विकास विभाग",
    workArea: "ग्रामीण बच्चों के विकास एवं सहायता कार्यक्रम",
    icon: <FaHome />,
  },
  {
    name: "कौशल विकास विभाग",
    workArea: "कौशल एवं व्यावसायिक प्रशिक्षण",
    icon: <FaBriefcase />,
  },
  {
    name: "आवास एवं शहरी विकास विभाग",
    workArea: "शहरी क्षेत्रों में बाल एवं परिवार सहायता",
    icon: <FaBuilding />,
  },
  {
    name: "श्रम विभाग",
    workArea: "बाल श्रम रोकथाम एवं श्रमिक परिवारों के बच्चों का कल्याण",
    icon: <FaHardHat />,
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
  },
  {
    title: "बाल संरक्षण",
    description: "सुरक्षा एवं बाल अधिकार",
    icon: <FaShieldAlt />,
  },
  {
    title: "स्वास्थ्य एवं पोषण",
    description: "स्वास्थ्य एवं पोषण सेवाएँ",
    icon: <FaHeartbeat />,
  },
  {
    title: "छात्रवृत्ति",
    description: "शैक्षणिक एवं वित्तीय सहायता",
    icon: <FaGraduationCap />,
  },
  {
    title: "कौशल विकास",
    description: "कौशल एवं व्यावसायिक प्रशिक्षण",
    icon: <FaBriefcase />,
  },
  {
    title: "डिजिटल साक्षरता",
    description: "डिजिटल शिक्षा एवं जागरूकता",
    icon: <FaLaptop />,
  },
];


// =====================================================
// SCHEMES
// =====================================================

const schemes = [
  {
    name: "बेटी बचाओ, बेटी पढ़ाओ",
    department: "महिला सशक्तिकरण एवं बाल विकास विभाग",
    objective:
      "बालिकाओं की सुरक्षा, शिक्षा एवं सशक्तिकरण को बढ़ावा देना।",
    eligibility: "बालिकाएँ एवं उनके परिवार",
    benefits:
      "बालिकाओं की शिक्षा, सुरक्षा एवं सामाजिक जागरूकता को बढ़ावा।",
  },
  {
    name: "मध्याह्न भोजन योजना",
    department: "शिक्षा विभाग",
    objective:
      "बच्चों की विद्यालय में उपस्थिति और पोषण स्तर में सुधार करना।",
    eligibility: "पात्र विद्यालयों के विद्यार्थी",
    benefits:
      "विद्यालय में पौष्टिक भोजन की सुविधा।",
  },
  {
    name: "एकीकृत बाल विकास सेवाएँ",
    department: "महिला सशक्तिकरण एवं बाल विकास विभाग",
    objective:
      "छोटे बच्चों के स्वास्थ्य, पोषण और प्रारंभिक विकास में सुधार करना।",
    eligibility: "0–6 वर्ष के बच्चे एवं पात्र माताएँ",
    benefits:
      "पोषण, स्वास्थ्य जांच एवं आंगनवाड़ी सेवाएँ।",
  },
  {
    name: "सुकन्या समृद्धि योजना",
    department: "वित्त विभाग",
    objective:
      "बालिका के भविष्य की शिक्षा एवं अन्य आवश्यकताओं के लिए बचत को बढ़ावा देना।",
    eligibility: "पात्र बालिकाएँ",
    benefits:
      "बचत एवं सरकारी नियमों के अनुसार वित्तीय लाभ।",
  },
  {
    name: "बाल श्रम रोकथाम एवं पुनर्वास",
    department: "श्रम विभाग",
    objective:
      "बाल श्रम को रोकना तथा बच्चों को शिक्षा एवं पुनर्वास से जोड़ना।",
    eligibility: "बाल श्रम से प्रभावित बच्चे",
    benefits:
      "शिक्षा, कौशल प्रशिक्षण एवं पुनर्वास सहायता।",
  },
];


// =====================================================
// HOME COMPONENT
// =====================================================

function Home() {
  return (
    <div className="drc-home">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="drc-hero">
        <Container>
          <Row className="align-items-center">

            <Col lg={6} className="hero-content">

              <div className="hero-badge">
                <FaDatabase />
                <span>Data Resource Center</span>
              </div>

              <h1>
                Empowering Children
                <span> Through Information</span>
              </h1>

              <p>
                एक केंद्रीकृत डिजिटल प्लेटफॉर्म जहाँ आप विभाग,
                योजनाएँ, सेवाएँ, उद्देश्य और बच्चों के लिए उपलब्ध
                लाभ आसानी से खोज सकते हैं।
              </p>

              <div className="hero-buttons">

                <Button className="primary-btn">
                  Explore Departments
                  <FaArrowRight />
                </Button>

                <Button className="secondary-btn">
                  Explore Schemes
                </Button>

              </div>

              <div className="hero-points">

                <div>
                  <FaCheckCircle />
                  <span>12 Departments</span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>Child Empowerment</span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>Government Schemes</span>
                </div>

              </div>

            </Col>


            <Col lg={6} className="hero-visual">

              <div className="hero-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop"
                  alt="Children Education and Empowerment"
                />

                <div className="floating-card floating-card-one">
                  <FaChild />
                  <div>
                    <strong>Child Empowerment</strong>
                    <small>Education & Protection</small>
                  </div>
                </div>

                <div className="floating-card floating-card-two">
                  <FaDatabase />
                  <div>
                    <strong>12 Departments</strong>
                    <small>Connected Resources</small>
                  </div>
                </div>

              </div>

            </Col>

          </Row>
        </Container>
      </section>


      {/* =================================================
          ABOUT DRC
      ================================================= */}

      <section className="section about-drc-section">
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
          DEPARTMENTS
      ================================================= */}

      <section className="section departments-section">

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

                <Card className="department-card">

                  <Card.Body>

                    <div className="department-top">

                      <div className="department-icon">
                        {department.icon}
                      </div>

                      <span className="department-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <h5>
                      {department.name}
                    </h5>

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
          CHILD EMPOWERMENT
      ================================================= */}

      <section className="section empowerment-section">

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


          <Row className="g-4">

            {empowermentAreas.map((area, index) => (

              <Col md={6} lg={4} key={index}>

                <div className="empowerment-card">

                  <div className="empowerment-icon">
                    {area.icon}
                  </div>

                  <div>
                    <h5>{area.title}</h5>
                    <p>{area.description}</p>
                  </div>

                  <FaArrowRight className="empowerment-arrow" />

                </div>

              </Col>

            ))}

          </Row>

        </Container>

      </section>


      {/* =================================================
          HOW IT WORKS
      ================================================= */}

      <section className="section flow-section">

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


          <div className="flow-container">

            <div className="flow-box">
              <div className="flow-number">01</div>
              <FaBuilding />
              <h5>Department</h5>
              <p>विभाग</p>
            </div>

            <FaArrowRight className="flow-arrow" />

            <div className="flow-box">
              <div className="flow-number">02</div>
              <FaBriefcase />
              <h5>Work Area</h5>
              <p>कार्य क्षेत्र</p>
            </div>

            <FaArrowRight className="flow-arrow" />

            <div className="flow-box">
              <div className="flow-number">03</div>
              <FaBookOpen />
              <h5>Scheme</h5>
              <p>योजना / सेवा</p>
            </div>

            <FaArrowRight className="flow-arrow" />

            <div className="flow-box">
              <div className="flow-number">04</div>
              <FaGraduationCap />
              <h5>Objective</h5>
              <p>उद्देश्य</p>
            </div>

            <FaArrowRight className="flow-arrow" />

            <div className="flow-box">
              <div className="flow-number">05</div>
              <FaHandsHelping />
              <h5>Benefits</h5>
              <p>लाभ</p>
            </div>

          </div>

        </Container>

      </section>


      {/* =================================================
          SCHEMES
      ================================================= */}

      <section className="section schemes-section">

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


          <Row className="g-4">

            {schemes.map((scheme, index) => (

              <Col lg={6} key={index}>

                <Accordion className="scheme-accordion">

                  <Accordion.Item eventKey="0">

                    <Accordion.Header>

                      <div className="scheme-title">

                        <div className="scheme-icon">
                          <FaBookOpen />
                        </div>

                        <div>
                          <strong>
                            {scheme.name}
                          </strong>

                          <small>
                            {scheme.department}
                          </small>
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