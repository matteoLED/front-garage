import React from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "../component/AppBar";
import AccueilPage from "./accueilPage.jsx";
import HourPage from "./hourPage.jsx";
import LogoutPage from "./logoutPage.jsx";

import CustomerPage from "./customerPage.jsx";
import ContactPage from "./contactPage.jsx";
// import '../components'

function HomePage() {
  return (
    <div>
      <AppBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/hour" element={<HourPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
