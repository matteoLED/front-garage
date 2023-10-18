import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link, Route } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { Button, TextField } from "@mui/material";
import HomePage from "./homePage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données de connexion au serveur
    axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Connexion réussie
        sessionStorage.setItem("authToken", response.data.token);
        const sessiontType = sessionStorage.setItem(
          "userType",
          response.data.userType
        );
        const sessionID = sessionStorage.setItem(
          "userId",
          response.data.userId
        );
        // Appeler la fonction login du contexte d'authentification avec les données de l'utilisateur
        login({
          ...response.data.user,
          userType: response.data.userType,
          userId: response.data.userId,
          sessionID,
          sessiontType,
        });

        // Rediriger vers la page d'accueil
        navigate("/accueil");

      })
      .catch((error) => {
        // Gérer les erreurs de connexion
        console.error(error);
      });

    // Réinitialiser les champs du formulaire
    setEmail("");
    setPassword("");
  };

  // useEffect(() => {
  //   // Vérifier si les informations d'identification sont présentes dans le sessionStorage
  //   const userType = sessionStorage.getItem('userType');
  //   const userId = sessionStorage.getItem('userId');

  //   if (userType && userId) {
  //     // Effectuer une vérification d'authentification automatique en utilisant les informations d'identification
  //     // Appeler la fonction login du contexte d'authentification avec les informations de l'utilisateur
  //     login({ userType: userType, userId: userId });

  //     // Rediriger vers la page d'accueil
  //     navigate('/accueil');
  //   }
  // }, [login, navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Email"
            sx={{ mb: 1, width: "400px" }}
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <TextField
            label="Mot de passe"
            sx={{ mb: 1, width: "400px" }}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Button
          variant="outlined"
          style={{
            justifyContent: "center",
            width: "400px",
            height: 50,
            borderColor: "#8B4513",
            color: "#8B4513",
          }}
          type="submit"
        >
          Se connecter
        </Button>
      </form>
      <Link to="/register">
        <Button
          variant="outlined"
          style={{
            marginTop: "10px",
            width: "400px",
            height: 50,
            borderColor: "#8B4513",
            color: "#8B4513",
          }}
        >
          Créer un compte
        </Button>
      </Link>
    </div>
  );
};

export default LoginPage;
