import React from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/home_layout/Home";
import Login from "./components/login/Login";
import NavBar from "./components/nav_bar/NavBar";

import DisDashBoard from "./components/all_dashbords/dis_admin/DisDashBoard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SuccessStory from "./components/home_layout/SuccessStory";
import AboutUs from "./components/home_layout/AboutUs";
import Footer from "./components/footer/Footer";
import StateDashBoard from "./components/all_dashbords/state_Admin/StateDashBoard";
import DepartDashBoard from "./components/all_dashbords/depart/DepartDashBoard";
import CWCDashBoard from "./components/all_dashbords/cwc_dashboard/CWCDashBoard";

// A wrapper component to conditionally render the NavBar
const AppContent = () => {
  const location = useLocation();
  const isDisRoute = location.pathname.startsWith("/DisDashBoard","/DepartDashBoard","/StateDashBoard","/CWCDashBoard");

  return (
    <>
      {!isDisRoute && <NavBar />}
      <div className={!isDisRoute ? "main-content" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SuccessStory" element={<SuccessStory />} />
          

          {/* Dis Routes */}
          <Route path="/DisDashboard" element={<DisDashBoard />} />
          <Route path="/StateDashBoard" element={<StateDashBoard />} />
          <Route path="/DepartDashBoard" element={<DepartDashBoard />} />
          <Route path="/CWCDashBoard" element={<CWCDashBoard />} />
          {/* Add other Dis routes from DisLeftNav here as needed */}
        </Routes>
      </div>
      {!isDisRoute && <Footer />}
    </>
  );
};

function App() {
  return <AppContent />;
}

export default App;