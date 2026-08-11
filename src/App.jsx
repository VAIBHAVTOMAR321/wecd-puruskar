import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home_layout/Home";
import NavBar from "./components/nav_bar/NavBar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;