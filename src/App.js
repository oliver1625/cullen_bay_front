import React, { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Booking from "./components/Booking";
import Register from "./components/Register";
import ContactUs from "./components/ContactUs";
import AboutUsPage from "./components/AboutUsPage";

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/admin-profile" element={<AdminDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route path="*" />
      </Routes>
    </div>
  );
}

export default App;
