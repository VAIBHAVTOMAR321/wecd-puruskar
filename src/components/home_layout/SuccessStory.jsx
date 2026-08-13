import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, ProgressBar, Form } from 'react-bootstrap';
import { FaUsers, FaClipboardList, FaMapMarkerAlt, FaCheckCircle, FaPercentage, FaFilter, FaSchool, FaHeartbeat, FaLeaf, FaHardHat, FaUniversity } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "../../../src/assets/css/SuccessStory.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data structured for API-readiness and dynamic rendering
// This data is now more aligned with home.jsx for consistency
const successData = [
    {
        village: 'देहरादून',
        registered: 25000,
        completed: 23000,
        departments: ['शिक्षा विभाग', 'कौशल विकास एवं सेवा योजना विभाग'],
        schemes: [
            { name: 'मध्याह्न भोजन योजना', enrolled: 15000 },
            { name: 'डिजिटल साक्षरता', enrolled: 10000 }
        ],
        story: 'देहरादून में डिजिटल साक्षरता कार्यक्रमों ने युवाओं के लिए रोजगार के नए अवसर खोले हैं, जिससे स्थानीय अर्थव्यवस्था को बढ़ावा मिला है।',
        icon: <FaSchool />,
        color: "#48cae4",
        bgColor: "#e4f8fb",
    },
    {
        village: 'हरिद्वार',
        registered: 22000,
        completed: 19360,
        departments: ['स्वास्थ्य एवं परिवार कल्याण विभाग', 'महिला कल्याण विभाग'],
        schemes: [
            { name: 'एकीकृत बाल विकास सेवाएँ', enrolled: 12000 },
            { name: 'बेटी बचाओ, बेटी पढ़ाओ', enrolled: 10000 }
        ],
        story: 'हरिद्वार में स्वास्थ्य और पोषण योजनाओं की सफलता ने मातृ एवं शिशु मृत्यु दर में उल्लेखनीय कमी की है, जिससे एक स्वस्थ समुदाय का निर्माण हुआ है।',
        icon: <FaHeartbeat />,
        color: "#e76f51",
        bgColor: "#fdeee9",
    },
    {
        village: 'नैनीताल',
        registered: 18000,
        completed: 17100,
        departments: ['कृषि विभाग', 'ग्राम्य विकास विभाग'],
        schemes: [
            { name: 'किसान सम्मान निधि', enrolled: 10000 },
            { name: 'ग्राम्य विकास योजना', enrolled: 8000 }
        ],
        story: 'नैनीताल में कृषि प्रशिक्षण और महिला सशक्तिकरण कार्यक्रमों ने ग्रामीण परिवारों की आय में वृद्धि की है और उन्हें आत्मनिर्भर बनाया है।',
        icon: <FaLeaf />,
        color: "#52b788",
        bgColor: "#edf8f3",
    },
    {
        village: 'उधम सिंह नगर',
        registered: 20000,
        completed: 18000,
        departments: ['श्रम विभाग', 'समाज कल्याण विभाग'],
        schemes: [
            { name: 'बाल श्रम रोकथाम', enrolled: 9000 },
            { name: 'सुकन्या समृद्धि योजना', enrolled: 11000 }
        ],
        story: 'उधम सिंह नगर में व्यावसायिक प्रशिक्षण पहलों ने कुशल कार्यबल तैयार किया है, जिससे बेरोजगारी दर में कमी आई है और जीवन स्तर में सुधार हुआ है।',
        icon: <FaHardHat />,
        color: "#c0d628",
        bgColor: "#f9fbe7",
    },
    {
        village: 'अल्मोड़ा',
        registered: 15500,
        completed: 14200,
        departments: ['शिक्षा विभाग', 'पंचायती राज विभाग'],
        schemes: [
            { name: 'सर्व शिक्षा अभियान', enrolled: 8500 },
            { name: 'मध्याह्न भोजन योजना', enrolled: 7000 }
        ],
        story: 'अल्मोड़ा के दूरदराज के गांवों में मोबाइल लर्निंग सेंटर शुरू करने से छात्रों की उपस्थिति और सीखने के परिणामों में अभूतपूर्व सुधार हुआ है।',
        icon: <FaUniversity />,
        color: "#70e000",
        bgColor: "#f0f9e6",
    },
];

// Calculate overall statistics
const totalVillages = successData.length;
const totalRegistered = successData.reduce((sum, item) => sum + item.registered, 0);
const totalCompleted = successData.reduce((sum, item) => sum + item.completed, 0);
const overallSuccessRate = totalRegistered > 0 ? Math.round((totalCompleted / totalRegistered) * 100) : 0;

const allDepartments = [...new Set(successData.flatMap(item => item.departments))];
const allSchemes = [...new Set(successData.flatMap(item => item.schemes.map(s => s.name)))];

function SuccessStory() {
  const [filters, setFilters] = useState({
    village: 'all',
    department: 'all',
    scheme: 'all',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredData = useMemo(() => {
    return successData.filter(item => {
      const villageMatch = filters.village === 'all' || item.village === filters.village;
      const departmentMatch = filters.department === 'all' || item.departments.includes(filters.department);
      const schemeMatch = filters.scheme === 'all' || item.schemes.some(s => s.name === filters.scheme);
      return villageMatch && departmentMatch && schemeMatch;
    });
  }, [filters]);

  const chartData = {
    labels: filteredData.map(item => item.village),
    datasets: [
      {
        label: 'Students Registered',
        data: filteredData.map(item => item.registered),
        backgroundColor: 'rgba(13, 110, 253, 0.6)',
        borderColor: 'rgba(13, 110, 253, 1)',
        borderWidth: 1,
      },
      {
        label: 'Completions',
        data: filteredData.map(item => item.completed),
        backgroundColor: 'rgba(25, 135, 84, 0.6)',
        borderColor: 'rgba(25, 135, 84, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return (
    <section className="success-story-section section-padding">
      <Container>
        <div className="section-heading text-center">
          <span className="section-badge">Our Achievements</span>
          <h2>Impact & Success Stories</h2>
          <p>Highlighting the positive transformation across villages through our dedicated efforts.</p>
        </div>

        <Row className="g-4 mb-5 text-center impact-summary">
          <Col md={6} lg={3}>
            <Card className="stat-card text-center">
              <Card.Body>
                <FaMapMarkerAlt className="stat-icon" />
                <h3>{totalVillages}+</h3>
                <p>Villages Covered</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="stat-card text-center">
              <Card.Body>
                <FaUsers className="stat-icon" />
                <h3>{totalRegistered.toLocaleString('en-IN')}+</h3>
                <p>Students Registered</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="stat-card text-center">
              <Card.Body>
                <FaCheckCircle className="stat-icon" />
                <h3>{totalCompleted.toLocaleString('en-IN')}+</h3>
                <p>Successful Completions</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="stat-card text-center">
              <Card.Body>
                <FaPercentage className="stat-icon" />
                <h3>{overallSuccessRate}%</h3>
                <p>Overall Success Rate</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Filters */}
        <Card className="filters-card mb-5">
          <Card.Body>
            <Row className="g-3 align-items-center">
              <Col lg="auto" className="filter-title-col">
                <h5 className="mb-0"><FaFilter /> Filters:</h5>
              </Col>
              <Col md>
                <Form.Select name="village" value={filters.village} onChange={handleFilterChange}>
                  <option value="all">All Villages</option>
                  {successData.map(item => <option key={item.village} value={item.village}>{item.village}</option>)}
                </Form.Select>
              </Col>
              <Col md>
                <Form.Select name="department" value={filters.department} onChange={handleFilterChange}>
                  <option value="all">All Departments</option>
                  {allDepartments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                </Form.Select>
              </Col>
              <Col md>
                <Form.Select name="scheme" value={filters.scheme} onChange={handleFilterChange}>
                  <option value="all">All Schemes</option>
                  {allSchemes.map(scheme => <option key={scheme} value={scheme}>{scheme}</option>)}
                </Form.Select>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Graphical Representation */}
        {filteredData.length > 1 && (
          <Card className="chart-card mb-5">
            <Card.Body>
              <h4 className="chart-title">Village Performance Comparison</h4>
              <Bar options={chartOptions} data={chartData} />
            </Card.Body>
          </Card>
        )}

        {/* Village-wise Success Stories */}
        <Row className="g-4 village-stories-row">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const successRate = item.registered > 0 ? Math.round((item.completed / item.registered) * 100) : 0;
              return (
                <Col md={6} lg={4} key={index}>
                  <Card className="h-100 village-story-card">
                    <Card.Body>
                      <div className="card-header-flex">
                        <div className="village-icon" style={{ backgroundColor: item.bgColor, color: item.color }}>
                          {item.icon}
                        </div>
                        <Card.Title as="h4">{item.village}</Card.Title>
                        <span className="badge success-rate-badge">{successRate}% Success</span>
                      </div>
                      <Card.Text className="story-text">
                        {item.story}
                      </Card.Text>

                      <Row className="g-2 text-center mb-3">
                        <Col xs={6}>
                          <div className="stat-item">
                          <strong>{item.registered.toLocaleString('en-IN')}</strong>
                          <span>Registered</span>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="stat-item">
                          <strong>{item.completed.toLocaleString('en-IN')}</strong>
                          <span>Completed</span>
                          </div>
                        </Col>
                      </Row>
                      <ProgressBar now={successRate} animated />
                      <div className="tags-section">
                        <strong>Schemes:</strong>
                        <div className="scheme-list">
                          {item.schemes.map(scheme => (
                            <div key={scheme.name} className="scheme-item">
                              <span className="scheme-name">{scheme.name}</span> <span className="scheme-enrolled badge">{scheme.enrolled.toLocaleString('en-IN')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Col>
              <div className="text-center p-5 no-results-card">
                <h4>No matching stories found.</h4>
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