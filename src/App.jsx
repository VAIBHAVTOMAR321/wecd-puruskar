import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/home_layout/Home";
import Login from "./components/login/Login";
import NavBar from "./components/nav_bar/NavBar";

import AdminDashBoard from "./components/all_dashbords/admin/AdminDashBoard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// A wrapper component to conditionally render the NavBar
const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/AdminDashboard");

  return (
    <>
      {!isAdminRoute && <NavBar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       

        {/* Admin Routes */}
        <Route path="/AdminDashboard" element={<AdminDashBoard />} />
        {/* Add other admin routes from AdminLeftNav here as needed */}
      </Routes>
    </>
  );
};

function App() {
  return <Router><AppContent /></Router>;
}

export default App;