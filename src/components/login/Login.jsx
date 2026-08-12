import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaDatabase } from 'react-icons/fa';
import './Login.css';

const departments = [
  "गृह विभाग",
  "न्याय एवं विधि परामर्शी विभाग",
  "महिला सशक्तिकरण एवं बाल विकास विभाग",
  "वित्त विभाग",
  "स्वास्थ्य एवं परिवार कल्याण विभाग",
  "शिक्षा विभाग",
  "युवा कल्याण एवं खेल विभाग",
  "पंचायती राज विभाग",
  "ग्राम्य विकास विभाग",
  "कौशल विकास विभाग",
  "आवास एवं शहरी विकास विभाग",
  "श्रम विभाग"
];

function Login() {
  const [selectedDepartment, setSelectedDepartment] = useState('');

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
                <h3>{selectedDepartment || 'DRC Portal Login'}</h3>
                <p>Welcome to the Data Resource Center</p>
              </Card.Header>
             
                <Form>
                  <Form.Group className="mb-4" controlId="formDepartment">
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

                  <Form.Group className="mb-4" controlId="formEmailMobile">
                    <Form.Label>Email or Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter email or mobile" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit" className="primary-btn">
                      Login
                    </Button>
                  </div>
                </Form>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
