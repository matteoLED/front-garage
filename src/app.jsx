import React, { useState } from "react";
import Sidebar from "./component/SideBar";
import HomePage from "./view/homePage";
import styled from "styled-components";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import ContactPage from "./view/contactPage";
import "./styles/style.css";
import CustomerPage from "./view/customerPage";
import HourPage from "./view/hourPage";
import LoginPage from "./view/LoginPage";
import CreateUserPage from "./view/RegisterPage";
import AuthProvider from "./providers/AuthContext";
import LogoutPage from "./view/logoutPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className={`content w-full`}>
          {isLoggedIn && <Sidebar />} {/* Show Sidebar if user is logged in */}
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={
                  <CenteredPageComponent>
                    <LoginPage setIsLoggedIn={setIsLoggedIn} />
                  </CenteredPageComponent>
                }
               
              />
              <Route
                path="/register"
                element={
                  <CenteredPageComponent>
                    <CreateUserPage />
                  </CenteredPageComponent>
                }
              />

              {isLoggedIn && (
                // Only accessible when logged in
                <>
                  {console.log("isLoggedIn", isLoggedIn)}
                  <Route path="/accueil" element={<HomePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/hour" element={<HourPage />} />
                  <Route path="/customer" element={<CustomerPage />} />
                  <Route path="/logout" element={<LogoutPage />} />
                </>
              )}
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          </Wrapper>
        </div>
      </Router>
    </AuthProvider>
  );
}

const Wrapper = styled.main`
  height: ${(props) => (props.isLoggedIn ? "calc(100% - 70px)" : "100%")};
  width: ${(props) => (props.isLoggedIn ? "calc(100vw - 75px)" : "100%")};
  overflow-y: hidden;
  display: block;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

  overflow-x: auto;

  box-sizing: border-box;
  padding-left: 255px;
`;

const CenteredPageComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100vw - 455px);
  position: relative;
`;
