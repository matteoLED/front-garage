import React from "react";
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

export default function App() {
  return (
    <Router>
      <div className={`content w-full`}>
        <Sidebar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accueil" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/hour" element={<HourPage />} /> 
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

const Wrapper = styled.main`
  
  height: calc(100% - 70px);
  width: calc(100vw - 75px);
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
