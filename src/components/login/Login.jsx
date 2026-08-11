import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcDepartment } from 'react-icons/fc';
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
      <Container fluid className="p-0">
        <Row className="g-0 login-container">
          {/* Left side with image */}
          <Col lg={6} className="login-image-col d-none d-lg-block" />

          {/* Right side with login form */}
          <Col lg={6} className="login-form-col">
            <Card className="login-card">
              <div className="login-header">
                <FcDepartment className="login-logo" />
                <h3>
                  {selectedDepartment ? `${selectedDepartment} Login` : 'DRC Portal Login'}
                </h3>
                <p>Welcome to the Data Resource Center</p>
              </div>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formDepartment">
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select
                      aria-label="Department selection"
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                      <option value="">Select Department...</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
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

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check type="checkbox" label="Remember me" />
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>

                  <div className="d-grid">
                    <Button variant="primary" type="submit" size="lg">Login</Button>
                  </div>
                </Form>
                <div className="text-center mt-4">
                  <span className="text-muted">Don't have an account? </span>
                  <Link to="/register">Register Now</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
            
             