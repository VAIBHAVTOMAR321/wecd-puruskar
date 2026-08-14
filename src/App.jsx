import React from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/home_layout/Home";
import Login from "./components/login/Login";
import NavBar from "./components/nav_bar/NavBar";

import AdminDashBoard from "./components/all_dashbords/dis_admin/AdminDashBoard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SuccessStory from "./components/home_layout/SuccessStory";
import AboutUs from "./components/home_layout/AboutUs";
import Footer from "./components/footer/Footer";
import StateDashBoard from "./components/all_dashbords/state_admin/StateDashBoard";
import DepartDashBoard from "./components/all_dashbords/depart/DepartDashBoard";
import CWCDashBoard from "./components/all_dashbords/cwc_dashboard/CWCDashBoard";

// A wrapper component to conditionally render the NavBar
const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/AdminDashBoard","/DepartDashBoard","/StateDashBoard","/CWCDashBoard");

  return (
    <>
      {!isAdminRoute && <NavBar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SuccessStory" element={<SuccessStory />} />
       

        {/* Admin Routes */}
        <Route path="/AdminDashboard" element={<AdminDashBoard />} />
        <Route path="/StateDashBoard" element={<StateDashBoard />} />
        <Route path="/DepartDashBoard" element={<DepartDashBoard />} />
        <Route path="/CWCDashBoard" element={<CWCDashBoard />} />
        {/* Add other admin routes from AdminLeftNav here as needed */}
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

function App() {
  return <AppContent />;
}

export default App;