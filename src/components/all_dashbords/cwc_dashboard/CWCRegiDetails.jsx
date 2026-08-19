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

import { FaEye, FaFilePdf, FaClipboardList, FaClock, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CWCLeftNav from "./CWCLeftNav";
import CWCtopNav from "./CWCTopNav";
import { useAuth } from "../../login/AuthContext";
import "../../../../src/assets/css/cwcregis.css";

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

   const getMediaUrl = (path) => {
     if (!path) return null;
     if (path.startsWith("http://") || path.startsWith("https://")) return path;
     return `https://mahadevaaya.com/srcproject/srcproject_backend${path}`;
   };

   const renderFileLink = (url, label) => {
     const mediaUrl = getMediaUrl(url);

     if (!mediaUrl) {
       return (
         <span className="cwc-doc-missing">
           <FaFilePdf className="me-1 text-muted" /> Not provided
         </span>
       );
     }

     const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(mediaUrl);

     if (isImage) {
       return (
         <a href={mediaUrl} target="_blank" rel="noopener noreferrer" className="cwc-doc-link cwc-image-link">
           <img src={mediaUrl} alt={label} className="cwc-doc-thumb" />
           <span className="cwc-doc-text">{label}</span>
         </a>
       );
     }

     return (
       <a href={mediaUrl} target="_blank" rel="noopener noreferrer" className="cwc-doc-link">
         <FaFilePdf className="me-1" />
         {label}
       </a>
     );
   };

   const totalRegistrations = registrations.length;
   const pendingCount = registrations.filter(r => r.status === 'pending').length;
   const approvedCount = registrations.filter(r => r.status === 'approved').length;

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
           <div className="cwc-page-header">
             <div>
               <h1 className="cwc-page-title">CNCP Child Registrations</h1>
               <p className="cwc-page-subtitle">Manage and review child welfare committee registration records</p>
             </div>
           </div>

           <Row className="cwc-stats-row g-3 mb-4">
             <Col md={4}>
               <Card className="cwc-stat-card cwc-stat-total">
                 <Card.Body>
                   <div className="cwc-stat-icon"><FaClipboardList /></div>
                   <div className="cwc-stat-info">
                     <span className="cwc-stat-value">{totalRegistrations}</span>
                     <span className="cwc-stat-label">Total Registrations</span>
                   </div>
                 </Card.Body>
               </Card>
             </Col>
             <Col md={4}>
               <Card className="cwc-stat-card cwc-stat-pending">
                 <Card.Body>
                   <div className="cwc-stat-icon"><FaClock /></div>
                   <div className="cwc-stat-info">
                     <span className="cwc-stat-value">{pendingCount}</span>
                     <span className="cwc-stat-label">Pending Review</span>
                   </div>
                 </Card.Body>
               </Card>
             </Col>
             <Col md={4}>
               <Card className="cwc-stat-card cwc-stat-approved">
                 <Card.Body>
                   <div className="cwc-stat-icon"><FaCheckCircle /></div>
                   <div className="cwc-stat-info">
                     <span className="cwc-stat-value">{approvedCount}</span>
                     <span className="cwc-stat-label">Approved</span>
                   </div>
                 </Card.Body>
               </Card>
             </Col>
           </Row>

           <Card className="cwc-table-card">
             <Card.Header as="h5" className="cwc-card-header">
               Registration Records
             </Card.Header>
             <Card.Body>
               {loading && (
                 <div className="cwc-loading-state">
                   <Spinner animation="border" variant="primary" />
                   <p className="cwc-loading-text">Loading Registrations...</p>
                 </div>
               )}
               {error && <Alert variant="danger" className="cwc-alert">{error}</Alert>}
               {!loading && !error && (
                 <div className="cwc-table-wrapper">
                   <Table striped bordered hover responsive className="cwc-registration-table">
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
                           <tr key={reg.id} className="cwc-table-row">
                             <td className="cwc-table-index">{index + 1}</td>
                             <td className="cwc-table-form-id">{reg.form_id}</td>
                             <td className="cwc-table-enroll">{reg.cncp_child_enroll_number}</td>
                             <td className="cwc-table-cwc">{reg.child_welfare_committee_name}</td>
                             <td className="cwc-table-district">{reg.district}</td>
                             <td>
                               <Badge bg={reg.status === 'pending' ? 'warning' : 'success'} className="cwc-status-badge">
                                 {reg.status}
                               </Badge>
                             </td>
                             <td>
                               <Button variant="primary" size="sm" onClick={() => handleViewClick(reg)} className="cwc-action-btn">
                                 <FaEye className="me-1" /> View
                               </Button>
                             </td>
                           </tr>
                         ))
                       ) : (
                         <tr>
                           <td colSpan="7" className="cwc-empty-state">
                             <FaClipboardList className="cwc-empty-icon" />
                             <p className="mb-0">No registrations found.</p>
                           </td>
                         </tr>
                       )}
                     </tbody>
                   </Table>
                 </div>
               )}
             </Card.Body>
           </Card>

           {selectedRegistration && (
             <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="cwc-registration-modal">
               <Modal.Header closeButton className="cwc-modal-header">
                 <Modal.Title as="h5">
                   <FaClipboardList className="me-2" />
                   Registration Details - {selectedRegistration.form_id}
                 </Modal.Title>
               </Modal.Header>
               <Modal.Body className="cwc-modal-body">
                 <Row className="mb-4">
                   <Col md={6}>
                     <Card className="cwc-detail-card">
                       <Card.Body>
                         <h6 className="cwc-detail-section-title">Applicant Information</h6>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">State:</span>
                           <span className="cwc-detail-value">{selectedRegistration.state}</span>
                         </div>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">District:</span>
                           <span className="cwc-detail-value">{selectedRegistration.district}</span>
                         </div>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">CWC Name:</span>
                           <span className="cwc-detail-value">{selectedRegistration.child_welfare_committee_name}</span>
                         </div>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">CWC Number:</span>
                           <span className="cwc-detail-value">{selectedRegistration.child_welfare_committee_number}</span>
                         </div>
                       </Card.Body>
                     </Card>
                   </Col>
                   <Col md={6}>
                     <Card className="cwc-detail-card">
                       <Card.Body>
                         <h6 className="cwc-detail-section-title">Child Information</h6>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">Enrollment No.:</span>
                           <span className="cwc-detail-value">{selectedRegistration.cncp_child_enroll_number}</span>
                         </div>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">Aadhaar No.:</span>
                           <span className="cwc-detail-value">{selectedRegistration.cncp_child_aadhaar_number}</span>
                         </div>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">Status:</span>
                           <span className="cwc-detail-value">
                             <Badge bg={selectedRegistration.status === 'pending' ? 'warning' : 'success'} className="cwc-status-badge">
                               {selectedRegistration.status}
                             </Badge>
                           </span>
                         </div>
                         <div className="cwc-detail-item">
                           <span className="cwc-detail-label">Registered On:</span>
                           <span className="cwc-detail-value">{new Date(selectedRegistration.created_at).toLocaleDateString()}</span>
                         </div>
                       </Card.Body>
                     </Card>
                   </Col>
                 </Row>
                 <hr className="cwc-modal-divider" />
                 <h5 className="cwc-doc-section-title">
                   <FaFilePdf className="me-2" />
                   Uploaded Documents
                 </h5>
                  <div className="cwc-docs-grid">
                     <div className="cwc-doc-col">
                       <Card className="cwc-doc-card">
                         <Card.Body>
                           <div className="cwc-doc-icon"><FaFilePdf /></div>
                           <span className="cwc-doc-label">Child Details</span>
                           <div className="cwc-doc-action">
                             {renderFileLink(selectedRegistration.cncp_child_details, 'View Document')}
                           </div>
                         </Card.Body>
                       </Card>
                     </div>
                     <div className="cwc-doc-col">
                       <Card className="cwc-doc-card">
                         <Card.Body>
                           <div className="cwc-doc-icon"><FaFilePdf /></div>
                           <span className="cwc-doc-label">Home Verification</span>
                           <div className="cwc-doc-action">
                             {renderFileLink(selectedRegistration.home_verification, 'View Document')}
                           </div>
                         </Card.Body>
                       </Card>
                     </div>
                     <div className="cwc-doc-col">
                       <Card className="cwc-doc-card">
                         <Card.Body>
                           <div className="cwc-doc-icon"><FaFilePdf /></div>
                           <span className="cwc-doc-label">SIR</span>
                           <div className="cwc-doc-action">
                             {renderFileLink(selectedRegistration.sir, 'View Document')}
                           </div>
                         </Card.Body>
                       </Card>
                     </div>
                     <div className="cwc-doc-col">
                       <Card className="cwc-doc-card">
                         <Card.Body>
                           <div className="cwc-doc-icon"><FaFilePdf /></div>
                           <span className="cwc-doc-label">Rehabilitation Plan</span>
                           <div className="cwc-doc-action">
                             {renderFileLink(selectedRegistration.rehabilitation_plan, 'View Document')}
                           </div>
                         </Card.Body>
                       </Card>
                     </div>
                     <div className="cwc-doc-col">
                       <Card className="cwc-doc-card">
                         <Card.Body>
                           <div className="cwc-doc-icon"><FaFilePdf /></div>
                           <span className="cwc-doc-label">Order Sent to Department</span>
                           <div className="cwc-doc-action">
                             {renderFileLink(selectedRegistration.order_sent_to_department, 'View Document')}
                           </div>
                         </Card.Body>
                       </Card>
                     </div>
                     <div className="cwc-doc-col">
                       <Card className="cwc-doc-card">
                         <Card.Body>
                           <div className="cwc-doc-icon"><FaFilePdf /></div>
                           <span className="cwc-doc-label">Follow-up on Direction</span>
                           <div className="cwc-doc-action">
                             {renderFileLink(selectedRegistration.follow_up_on_direction, 'View Document')}
                           </div>
                         </Card.Body>
                       </Card>
                     </div>
                  </div>
               </Modal.Body>
               <Modal.Footer className="cwc-modal-footer">
                 <Button variant="secondary" onClick={handleCloseModal} className="cwc-modal-close-btn">
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