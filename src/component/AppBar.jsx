import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/appbar.css";
import logo from "../assets/logo_garage.png";

import { PlaceImage } from "./PlaceImage";
import styled from "styled-components";
import { AuthContext } from "../providers/AuthContext";

const AppBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const { userType } = useContext(AuthContext);

  useEffect(() => {
    // Récupérer l'élément actif depuis le stockage local lors du chargement de la page
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(Number(storedActiveTab));
    }
  }, []);

  useEffect(() => {
    // Mettre à jour l'élément actif lorsqu'il y a un changement de location (route)
    const currentTab = getActiveTab(location.pathname);
    setActiveTab(currentTab);
    localStorage.setItem("activeTab", currentTab.toString());
  }, [location]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index.toString());
  };

  return (
    <div >
      <div className="appbar">
        <div className="tab-container">
          <LogoContainer>
            <PlaceImage place={logo} imageSize={60} />
          </LogoContainer>
          <Link
            to="/accueil"
            className={activeTab === 0 ? "appbar-title active" : "appbar-link"}
            onClick={() => handleTabClick(0)}
          >
            Accueil
          </Link>
          <Link
            to="/customer"
            className={activeTab === 1 ? "appbar-title active" : "appbar-link"}
            onClick={() => handleTabClick(1)}
          >
            Témoignage
          </Link>
          <Link
            to="/hour"
            className={activeTab === 2 ? "appbar-title active" : "appbar-link"}
            onClick={() => handleTabClick(2)}
          >
            Horaire
          </Link>
          <Link
            to="/contact"
            className={activeTab === 3 ? "appbar-title active" : "appbar-link"}
            onClick={() => handleTabClick(3)}
          >
            Contact
          </Link>
          {userType === "administrateur" ? (
            <Link
              to="/create/user"
              className={
                activeTab === 4 ? "appbar-title active" : "appbar-link"
              }
              onClick={() => handleTabClick(4)}
            >
              Création de compte 
            </Link>
          ) : null}
          <Link
            to="/logout"
            className={activeTab === 5 ? "appbar-title active" : "appbar-link"}
            onClick={() => handleTabClick(5)}
          >
            Déconnexion
          </Link>
        </div>
      </div>
    </div>
  );
};

const getActiveTab = (pathname) => {
  switch (pathname) {
    case "/accueil":
      return 0;

    case "/customer":
      return 1;
    case "/hour":
      return 2;
    case "/contact":
      return 3;
    case "/create/user":
      return 4;
    case "/logout":
      return 5;
    default:
      return 0;
  }
};

const LogoContainer = styled.div`
  text-align: center;
  margin-right: 20px;
`;

export default AppBar;
