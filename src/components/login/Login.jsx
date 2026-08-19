import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaDatabase, FaUserShield, FaBuilding, FaGlobe, FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';

function Login() {
  const [departments, setDepartments] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('state');
  const [loading, setLoading] = useState({ departments: false, districts: false });
  const [error, setError] = useState({ api: null, departments: null, districts: null });
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const fetchDepartments = async () => {
      setLoading(prev => ({ ...prev, departments: true }));
      try {
        const response = await fetch('https://mahadevaaya.com/srcproject/srcproject_backend/api/departments/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDepartments(data);
        setError(prev => ({ ...prev, departments: null }));
      } catch (error) {
        setError(prev => ({ ...prev, departments: error.message }));
      } finally {
        setLoading(prev => ({ ...prev, departments: false }));
      }
    };

    const fetchDistricts = async () => {
      setLoading(prev => ({ ...prev, districts: true }));
      try {
        const response = await fetch('https://mahadevaaya.com/srcproject/srcproject_backend/api/districts/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDistricts(data);
        setError(prev => ({ ...prev, districts: null }));
      } catch (error) {
        setError(prev => ({ ...prev, districts: error.message }));
      } finally {
        setLoading(prev => ({ ...prev, districts: false }));
      }
    };

    if (loginType === 'department') {
      fetchDepartments();
    }
    if (loginType === 'district' || loginType === 'cwc') {
      fetchDistricts();
    }
  }, [loginType]);

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    setError(prev => ({ ...prev, api: null }));

    let username;
    let role = loginType;

    switch (loginType) {
      case 'state':
        username = 'uttarakhand';
        break;
      case 'district':
        username = selectedDistrict;
        break;
      case 'cwc':
        username = selectedDistrict;
        role = 'cwc-district'; // API expects 'cwc-district'
        break;
      case 'department':
        username = selectedDepartment;
        break;
      default:
        setError(prev => ({ ...prev, api: 'Invalid login type selected.' }));
        return;
    }

    if ((loginType === 'district' || loginType === 'cwc' || loginType === 'department') && !username) {
      setError(prev => ({ ...prev, api: `Please select a ${loginType}.` }));
      return;
    }

    try {
      const response = await fetch('https://mahadevaaya.com/srcproject/srcproject_backend/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || 'Login failed. Please check your credentials.');
      }

      login(data); // Store user data and tokens

      // Navigate based on role
      switch (data.role) {
        case 'state':
          navigate('/StateDashBoard');
          break;
        case 'district':
          navigate('/DisDashBoard');
          break;
        case 'department':
          navigate('/DepartDashBoard');
          break;
        case 'cwc-district':
          navigate('/CWCDashBoard');
          break;
        default:
          navigate('/'); // Fallback to home
      }
    } catch (err) {
      setError(prev => ({ ...prev, api: err.message }));
    }
  }, [
    loginType,
    selectedDistrict,
    selectedDepartment,
    password,
    navigate,
    login,
  ]);

  const getLoginTitle = () => {
    if (loginType === 'department' && selectedDepartment) return selectedDepartment;
    if ((loginType === 'district' || loginType === 'cwc') && selectedDistrict) return selectedDistrict;
    return 'SRC Portal Login';
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="g-0 login-container align-items-stretch">
          <Col lg={6} className="login-image-col d-none d-lg-flex">
            <div className="login-image-overlay">
              <h2 className="login-image-title">State Resource Center</h2>
              <p>Empowering Children Through Information</p>
            </div>
          </Col>

          <Col lg={6} className="login-form-col d-flex align-items-center justify-content-center p-2">
            <div className="login-card border-0 w-100">
              <div className="p-3">
                <div className="text-center mb-4">
                  <FaDatabase size={40} className="text-primary mb-3" />
                  <h3 className="fw-bold">{getLoginTitle()}</h3>
                  <p className="text-muted">Welcome! Please login to your account.</p>
                </div>
                <Form className="login-form" onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Login as</Form.Label>
                    <div className="d-flex flex-wrap">
                      <Form.Check
                        className="me-3 mb-2"
                        label="State Admin"
                        name="loginType"
                        type="radio"
                        id="state-admin-radio"
                        value="state"
                        checked={loginType === 'state'}
                        onChange={(e) => setLoginType(e.target.value)} />
                      <Form.Check
                        className="me-3 mb-2"
                        label="District Admin"
                        name="loginType"
                        type="radio"
                        id="district-admin-radio"
                        value="district"
                        checked={loginType === 'district'}
                        onChange={(e) => setLoginType(e.target.value)} />
                      <Form.Check
                        className="me-3 mb-2"
                        label="CWC"
                        name="loginType"
                        type="radio"
                        id="cwc-admin-radio"
                        value="cwc"
                        checked={loginType === 'cwc'}
                        onChange={(e) => setLoginType(e.target.value)} />
                      <Form.Check
                        className="mb-2"
                        label="Department"
                        name="loginType"
                        type="radio"
                        id="department-admin-radio"
                        value="department"
                        checked={loginType === 'department'}
                        onChange={(e) => setLoginType(e.target.value)} />
                    </div>
                  </Form.Group>

                  {loginType === 'state' && (
                    <Form.Group className="mb-3" controlId="formUsername">
                      <Form.Label><FaUserShield className="me-2" />Username</Form.Label>
                      <Form.Control
                        type="text"
                        value="Uttarakhand"
                        readOnly
                        disabled
                      />
                    </Form.Group>
                  )}

                  {loginType === 'department' && (
                    <Form.Group className="mb-3" controlId="formDepartment">
                      <Form.Label><FaBuilding className="me-2" />Select Department</Form.Label>
                      <Form.Select
                        aria-label="Department selection"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        required>
                        <option value="">{loading.departments ? 'Loading...' : 'Select Department...'}</option>
                        {error.departments && <option value="" disabled>Error loading departments</option>}
                        {!loading.departments && !error.departments && departments.map((dept) => (
                          <option key={dept.department} value={dept.department_hindi}>
                            {dept.department_hindi}
                          </option>
                        ))}
                      </Form.Select>
                      {error.departments && <Form.Text className="text-danger">
                        Could not load departments. Please try again later.
                      </Form.Text>}
                    </Form.Group>
                  )}

                  {(loginType === 'district' || loginType === 'cwc') && (
                    <Form.Group className="mb-3" controlId="formDistrict">
                      <Form.Label><FaGlobe className="me-2" />Select District</Form.Label>
                      <Form.Select
                        aria-label="District selection"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        required>
                        <option value="">{loading.districts ? 'Loading...' : 'Select District...'}</option>
                        {error.districts && <option value="" disabled>Error loading districts</option>}
                        {!loading.districts && !error.districts && districts.map((dist) => (
                          <option key={dist.district} value={dist.district}>
                            {dist.district}
                          </option>
                        ))}
                      </Form.Select>
                      {error.districts && <Form.Text className="text-danger">
                        Could not load districts. Please try again later.
                      </Form.Text>}
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label><FaKey className="me-2" />Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>

                  <div className="text-center mt-4">
                    {error.api && <p className="text-danger text-center">{error.api}</p>}
                    <Button variant="primary" type="submit" className="login-submit-btn">
                      Login
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
