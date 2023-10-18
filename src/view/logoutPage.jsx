import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { Button } from "@mui/material";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    // Supprimer les informations d'identification du stockage local
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("userId");

    // Appeler la fonction logout du contexte d'authentification pour déconnecter l'utilisateur
    logout();

    // Rediriger vers la page de connexion
    navigate("/");
  };

  return (
    <div className="content">
      <h2>Déconnexion</h2>
      <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
      <Button variant="outlined" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </div>
  );
};

export default LogoutPage;
