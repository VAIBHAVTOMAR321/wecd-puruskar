import React from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Nav, Accordion, Image } from 'react-bootstrap';
import {
  FaBuilding, FaChild, FaHeartbeat, FaBook, FaShieldAlt, FaGraduationCap,
  FaLaptop, FaSearch, FaArrowRight, FaBalanceScale, FaUserFriends, FaHandsHelping, FaBriefcase, FaSchool
} from 'react-icons/fa';
import './Home.css';

// --- Placeholder Data ---
const departments = [
  { name: 'Police Department', workArea: 'Child Protection & Safety', icon: <FaShieldAlt /> },
  { name: 'Education Department', workArea: 'Schools & Literacy', icon: <FaSchool /> },
  { name: 'Health Department', workArea: 'Nutrition & Healthcare', icon: <FaHeartbeat /> },
  { name: 'Social Justice', workArea: 'Welfare & Rights', icon: <FaBalanceScale /> },
  { name: 'Women & Child Development', workArea: 'Holistic Growth', icon: <FaChild /> },
  { name: 'Tribal Development', workArea: 'Community Support', icon: <FaUserFriends /> },
  { name: 'Skill Development', workArea: 'Vocational Training', icon: <FaBriefcase /> },
  { name: 'Higher Education', workArea: 'Scholarships & Colleges', icon: <FaGraduationCap /> },
  { name: 'Minority Development', workArea: 'Inclusion & Support', icon: <FaHandsHelping /> },
  { name: 'Rural Development', workArea: 'Village-level Programs', icon: <FaBuilding /> },
  { name: 'Urban Development', workArea: 'City Child Services', icon: <FaBuilding /> },
  { name: 'IT Department', workArea: 'Digital Literacy', icon: <FaLaptop /> },
];

const empowermentAreas = [
    { title: 'Child Education', icon: <FaBook /> },
    { title: 'Child Protection', icon: <FaShieldAlt /> },
    { title: 'Health & Nutrition', icon: <FaHeartbeat /> },
    { title: 'Scholarship', icon: <FaGraduationCap /> },
    { title: 'Skill Development', icon: <FaBriefcase /> },
    { title: 'Digital Literacy & Safety', icon: <FaLaptop /> },
];

const schemes = [
  { name: 'Beti Bachao, Beti Padhao', department: 'Women & Child Development', objective: 'Prevent gender-biased sex selective elimination and ensure survival & protection of the girl child.', eligibility: 'All girl children', benefits: 'Improved sex ratio, education support.' },
  { name: 'Mid-Day Meal Scheme', department: 'Education Department', objective: 'To enhance enrollment, retention, and attendance and simultaneously improve nutritional levels among children.', eligibility: 'Students in primary and upper primary classes', benefits: 'Free nutritious lunch on school days.' },
  { name: 'Integrated Child Development Services (ICDS)', department: 'Women & Child Development', objective: 'To improve the nutritional and health status of children in the age-group 0-6 years.', eligibility: 'Children 0-6 years, pregnant women, and lactating mothers', benefits: 'Anganwadi services, supplementary nutrition, health check-ups.' },
];

// --- Reusable Components ---
const Section = ({ children, title, className }) => (
    <div className={`section ${className || ''}`}>
        <Container>
            <h2 className="section-title">{title}</h2>
            {children}
        </Container>
    </div>
);

const DepartmentCard = ({ icon, name, workArea }) => (
    <Col md={4} lg={3} className="mb-4">
        <Card className="department-card">
            <Card.Body>
                <div className="department-icon">{icon}</div>
                <Card.Title as="h5">{name}</Card.Title>
                <Card.Text className="text-muted">{workArea}</Card.Text>
                <Button variant="outline-primary" size="sm">View Details</Button>
            </Card.Body>
        </Card>
    </Col>
);

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. Hero Section */}
      <header className="hero-section d-flex align-items-center">
          <Container>
              <Row className="align-items-center">
                  <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                      <h1 className="display-4">Data Resource Center</h1>
                      <p className="lead">Empowering Children Through Information</p>
                      <div>
                          <Button variant="primary" size="lg">Explore Departments</Button>
                          <Button variant="outline-secondary" size="lg">Explore Schemes</Button>
                      </div>
                  </Col>
                  <Col md={6} className="text-center">
                      <Image src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1974&auto=format&fit=crop" fluid className="hero-image" />
                  </Col>
              </Row>
          </Container>
      </header>

      <main>
        {/* 2. Departments Section */}
        <Section title="Government Departments">
          <Row>
            {departments.map((dept, index) => (
              <DepartmentCard key={index} {...dept} />
            ))}
          </Row>
        </Section>

        {/* 3. Child Empowerment Section */}
        <Section title="Focus on Child Empowerment" className="bg-light">
            <Row className="g-4">
                {empowermentAreas.map((area, index) => (
                    <Col md={6} lg={4} key={index}>
                        <div className="d-flex align-items-center empowerment-card">
                            <div className="empowerment-icon me-3">{area.icon}</div>
                            <h5 className="mb-0">{area.title}</h5>
                        </div>
                    </Col>
                ))}
            </Row>
        </Section>

        {/* 4. Flow Section */}
        <Section title="How It Works: From Department to Benefit">
            <Row className="align-items-center text-center">
                <Col md>
                    <div className="flow-step">
                        <FaBuilding className="flow-icon" />
                        <h6>Department</h6>
                        <p className="small text-muted">e.g., Police Department</p>
                        <FaArrowRight className="flow-arrow d-none d-md-block" />
                    </div>
                </Col>
                <Col md>
                    <div className="flow-step">
                        <FaBriefcase className="flow-icon" />
                        <h6>Work Area</h6>
                        <p className="small text-muted">e.g., Child Protection</p>
                        <FaArrowRight className="flow-arrow d-none d-md-block" />
                    </div>
                </Col>
                <Col md>
                    <div className="flow-step">
                        <FaBook className="flow-icon" />
                        <h6>Scheme</h6>
                        <p className="small text-muted">e.g., Child Safety Program</p>
                        <FaArrowRight className="flow-arrow d-none d-md-block" />
                    </div>
                </Col>
                <Col md>
                    <div className="flow-step">
                        <FaGraduationCap className="flow-icon" />
                        <h6>Objective & Benefits</h6>
                        <p className="small text-muted">e.g., Ensure safety, provide support</p>
                    </div>
                </Col>
            </Row>
        </Section>

        {/* 5. Schemes Section */}
        <Section title="Featured Schemes" className="bg-light">
            <Accordion defaultActiveKey="0" className="scheme-accordion">
                {schemes.map((scheme, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{scheme.name}</Accordion.Header>
                        <Accordion.Body>
                            <p><strong>Department:</strong> {scheme.department}</p>
                            <p><strong>Objective:</strong> {scheme.objective}</p>
                            <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                            <p><strong>Benefits:</strong> {scheme.benefits}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Section>

        {/* 6. Search Section */}
        <Section title="Search for Information">
            <Row className="justify-content-center">
                <Col md={8}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search departments, schemes, objectives, benefits..."
                            aria-label="Search"
                        />
                        <Button variant="primary" id="button-search">
                            <FaSearch /> Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Section>

        {/* 7. CTA Section */}
        <div className="cta-section">
            <Container>
                <h2>Find the Right Scheme for Every Child</h2>
                <p className="lead">Our comprehensive database helps you connect children with the support they need.</p>
                <Button variant="light" size="lg">Get Started Now</Button>
            </Container>
        </div>
      </main>

      {/* 8. Footer */}
      <footer className="footer pt-5 pb-4">
        <Container>
            <Row>
                <Col md={4} className="mb-3">
                    <h5>Data Resource Center (DRC)</h5>
                    <p className="small">An initiative for consolidating information to empower the children of our nation.</p>
                </Col>
                <Col md={2} sm={6} className="mb-3">
                    <h6>Quick Links</h6>
                    <Nav className="flex-column">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#departments">Departments</Nav.Link>
                        <Nav.Link href="#schemes">Schemes</Nav.Link>
                    </Nav>
                </Col>
                <Col md={2} sm={6} className="mb-3">
                    <h6>Resources</h6>
                    <Nav className="flex-column">
                        <Nav.Link href="#reports">Reports</Nav.Link>
                        <Nav.Link href="#data">Data Sets</Nav.Link>
                        <Nav.Link href="#guides">Guides</Nav.Link>
                    </Nav>
                </Col>
                <Col md={4} className="mb-3">
                    <h6>Contact</h6>
                    <p className="small">
                        Ministry of Women & Child Development<br />
                        Government Building, New Delhi, India<br />
                        Email: contact@drc.gov.in
                    </p>
                </Col>
            </Row>
            <hr className="bg-secondary"/>
            <div className="text-center small">
                <p>&copy; {new Date().getFullYear()} Data Resource Center. All Rights Reserved.</p>
            </div>
        </Container>
      </footer>
    </div>
  );
}

export default Home;