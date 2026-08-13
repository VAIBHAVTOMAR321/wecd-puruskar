import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaDatabase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const departments = [
  "एसपीओटीकाईएम, पुलिस मुख्यालय",
  "न्याय एवं विधि परामर्शी विभाग",
  "वित्त विभाग",
  "नियोजन विभाग",
  "स्वास्थ्य एवं परिवार कल्याण विभाग",
  "शिक्षा विभाग",
  "युवा कल्याण एवं खेल विभाग",
  "पंचायती राज विभाग",
  "ग्राम्य विकास विभाग",
  "कौशल विकास एवं सेवा योजना विभाग",
  "आवास एवं शहरी विकास विभाग",
  "श्रम विभाग",
  "पेयजल विभाग",
  "खाद्य एवं नागरिक आपूर्ति उपभोक्ता विभाग",
  "समाज कल्याण विभाग",
  "कृषि विभाग",
  "महिला कल्याण विभाग",
  "एसोसिएशन फॉर वॉलंटरी एक्शन (AVA)"
];

function Login() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [loginType, setLoginType] = useState('state');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/AdminDashBoard');
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="g-0 login-container align-items-stretch">
          <Col lg={6} className="login-image-col d-none d-lg-flex">
            <div className="login-image-overlay">
              <h2 className="login-image-title">Data Resource Center</h2>
              <p>Empowering Children Through Information</p>
            </div>
          </Col>

          <Col lg={6} className="login-form-col">
            <Card className="login-card">
              <Card.Header className="login-header">
                <div className="login-logo">
                  <FaDatabase />
                </div>
                <h4>{selectedDepartment || 'DRC Portal Login'}</h4>
                <p>Welcome to the Data Resource Center</p>
              </Card.Header>
              <Card.Body>
                <Form className="login-form" onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Login as</Form.Label>
                    <div className="d-flex">
                      <Form.Check
                        inline
                        label="State Admin"
                        name="loginType"
                        type="radio"
                        id="state-admin-radio"
                        value="state"
                        checked={loginType === 'state'}
                        onChange={(e) => setLoginType(e.target.value)} />
                      <Form.Check
                        inline
                        label="District Admin"
                        name="loginType"
                        type="radio"
                        id="district-admin-radio"
                        value="district"
                        checked={loginType === 'district'}
                        onChange={(e) => setLoginType(e.target.value)} />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formDepartment">
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select
                      aria-label="Department selection"
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                      <option value="">Select Department...</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmailMobile">
                    <Form.Label>Email or Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter email or mobile" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div className="text-center mt-4">
                    <Button variant="primary" type="submit" className="login-submit-btn">
                      Login
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
