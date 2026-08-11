import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/home_layout/Home";
import NavBar from "./components/nav_bar/NavBar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
       
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;