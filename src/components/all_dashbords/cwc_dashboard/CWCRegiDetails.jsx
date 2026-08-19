import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Table,
  Button,
  Modal,
  Badge,
} from "react-bootstrap";

import { FaEye, FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CWCLeftNav from "./CWCLeftNav";
import CWCtopNav from "./CWCTopNav";
import { useAuth } from "../../login/AuthContext";

const CWCRegiDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { authFetch } = useAuth();

  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchRegistrations = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await authFetch(
          "https://mahadevaaya.com/srcproject/srcproject_backend/api/cncp-child-welfare-committee/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch registration data.");
        }
        const data = await response.json();
        if (data.status) {
          setRegistrations(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch data.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [authFetch]);

   const toggleSidebar = () => {
     setSidebarOpen(!sidebarOpen);
   };

   const handleViewClick = (registration) => {
     setSelectedRegistration(registration);
     setShowModal(true);
   };

   const handleCloseModal = () => {
     setShowModal(false);
     setSelectedRegistration(null);
   };

   const renderFileLink = (url, label) => {
     if (!url) {
       return <span className="text-muted">Not provided</span>;
     }
     return (
       <a href={url} target="_blank" rel="noopener noreferrer">
         <FaFilePdf className="me-2" />
         {label}
       </a>
     );
   };

   return (
     <div className="dashboard-container">
       <CWCLeftNav
         sidebarOpen={sidebarOpen}
         setSidebarOpen={setSidebarOpen}
         isMobile={isMobile}
         isTablet={isTablet}
       />
       <div className="main-content-dash">
         <CWCtopNav toggleSidebar={toggleSidebar} />

         <Container fluid className="dashboard-box mt-3">
           <Card>
             <Card.Header as="h4">CNCP Child Registrations</Card.Header>
             <Card.Body>
               {loading && <div className="text-center"><Spinner animation="border" /> <p>Loading Registrations...</p></div>}
               {error && <Alert variant="danger">{error}</Alert>}
               {!loading && !error && (
                 <Table striped bordered hover responsive>
                   <thead>
                     <tr>
                       <th>#</th>
                       <th>Form ID</th>
                       <th>Enrollment No.</th>
                       <th>CWC Name</th>
                       <th>District</th>
                       <th>Status</th>
                       <th>Actions</th>
                     </tr>
                   </thead>
                   <tbody>
                     {registrations.length > 0 ? (
                       registrations.map((reg, index) => (
                         <tr key={reg.id}>
                           <td>{index + 1}</td>
                           <td>{reg.form_id}</td>
                           <td>{reg.cncp_child_enroll_number}</td>
                           <td>{reg.child_welfare_committee_name}</td>
                           <td>{reg.district}</td>
                           <td>
                             <Badge bg={reg.status === 'pending' ? 'warning' : 'success'}>
                               {reg.status}
                             </Badge>
                           </td>
                           <td>
                             <Button variant="primary" size="sm" onClick={() => handleViewClick(reg)}>
                               <FaEye /> View
                             </Button>
                           </td>
                         </tr>
                       ))
                     ) : (
                       <tr>
                         <td colSpan="7" className="text-center">No registrations found.</td>
                       </tr>
                     )}
                   </tbody>
                 </Table>
               )}
             </Card.Body>
           </Card>

           {selectedRegistration && (
             <Modal show={showModal} onHide={handleCloseModal} size="lg">
               <Modal.Header closeButton>
                 <Modal.Title>Registration Details - {selectedRegistration.form_id}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <Row>
                   <Col md={6}>
                     <p><strong>State:</strong> {selectedRegistration.state}</p>
                     <p><strong>District:</strong> {selectedRegistration.district}</p>
                     <p><strong>CWC Name:</strong> {selectedRegistration.child_welfare_committee_name}</p>
                     <p><strong>CWC Number:</strong> {selectedRegistration.child_welfare_committee_number}</p>
                   </Col>
                   <Col md={6}>
                     <p><strong>CNCP Child Enrollment No.:</strong> {selectedRegistration.cncp_child_enroll_number}</p>
                     <p><strong>CNCP Child Aadhaar No.:</strong> {selectedRegistration.cncp_child_aadhaar_number}</p>
                     <p><strong>Status:</strong> <Badge bg={selectedRegistration.status === 'pending' ? 'warning' : 'success'}>{selectedRegistration.status}</Badge></p>
                     <p><strong>Registration Date:</strong> {new Date(selectedRegistration.created_at).toLocaleDateString()}</p>
                   </Col>
                 </Row>
                 <hr />
                 <h5>Uploaded Documents</h5>
                 <Row>
                    <Col md={4} className="mb-3">
                        <strong>Child Details:</strong><br/>
                        {renderFileLink(selectedRegistration.cncp_child_details, 'View Document')}
                    </Col>
                    <Col md={4} className="mb-3">
                        <strong>Home Verification:</strong><br/>
                        {renderFileLink(selectedRegistration.home_verification, 'View Document')}
                    </Col>
                    <Col md={4} className="mb-3">
                        <strong>SIR:</strong><br/>
                        {renderFileLink(selectedRegistration.sir, 'View Document')}
                    </Col>
                    <Col md={4} className="mb-3">
                        <strong>Rehabilitation Plan:</strong><br/>
                        {renderFileLink(selectedRegistration.rehabilitation_plan, 'View Document')}
                    </Col>
                    <Col md={4} className="mb-3">
                        <strong>Order Sent to Department:</strong><br/>
                        {renderFileLink(selectedRegistration.order_sent_to_department, 'View Document')}
                    </Col>
                    <Col md={4} className="mb-3">
                        <strong>Follow-up on Direction:</strong><br/>
                        {renderFileLink(selectedRegistration.follow_up_on_direction, 'View Document')}
                    </Col>
                 </Row>
               </Modal.Body>
               <Modal.Footer>
                 <Button variant="secondary" onClick={handleCloseModal}>
                   Close
                 </Button>
               </Modal.Footer>
             </Modal>
           )}

          </Container>
       </div>
     </div>
   );
};

export default CWCRegiDetails;