import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoutPage from "./view/logoutPage";
import LoginPage from "./view/loginPage";
import HomePage from "./view/homePage";
import "./styles/style.css";
import HourPage from "./view/hourPage";
import CustomerPage from "./view/customerPage";
import AuthProvider from "./providers/AuthContext";
import ContactPage from "./view/contactPage";

import CreateUserPage from "./view/registerPage";
import AdminPage from "./view/adminPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<CreateUserPage />} />
          <Route path="/accueil" element={<HomePage />} />

          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/hour" element={<HourPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/create/user" element={<AdminPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
