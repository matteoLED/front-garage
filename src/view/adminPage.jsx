import React, { useState } from "react";
import axios from "axios";
import { Button, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const CreateUserPage = () => {
  const [firstname, setFirstname] = useState(""); // Utiliser "firstname" au lieu de "nom"
  const [lastname, setLastname] = useState(""); // Utiliser "lastname" au lieu de "nom"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Utiliser "password" au lieu de "motDePasse"
  const [user_type, setUserType] = useState("client"); // Utiliser "user_type" au lieu de "typeUtilisateur"
  const navigate = useNavigate();

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Effectuer la validation des données ici selon les règles définies
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      user_type === ""
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Créer l'objet représentant l'utilisateur
    const newUser = {
      firstname,
      lastname,
      email,
      password,
      user_type,
    };

    // Effectuer la requête POST pour créer l'utilisateur
    axios
      .post("http://localhost:8000/api/user/add", newUser)
      .then((response) => {
        // Traiter la réponse de l'API si nécessaire
        console.log(response.data);
        // Réinitialiser les valeurs des champs
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setUserType("");
        navigate("/accueil");
      })
      .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
      });
  };

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
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Prénom"
            sx={{ mb: 1, width: "400px" }}
            type="text"
            value={firstname}
            onChange={handleFirstnameChange}
            required
          />
        </div>
        <div>
          <TextField
            label="Nom"
            sx={{ mb: 1, width: "400px" }}
            type="text"
            value={lastname}
            onChange={handleLastnameChange}
            required
          />
        </div>
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
        <div sx={{ mb: 1, width: "400px" }}>
          <label>Rôle :</label>
          <Select
            sx={{ mb: 1, width: "260px" }}
            value={user_type}
            onChange={handleUserTypeChange}
            required
          >
            <MenuItem value="employees">Employé</MenuItem>
            <MenuItem value="administrateur">Administrateur</MenuItem>
          </Select>
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
          Créer
        </Button>
      </form>
    </div>
  );
};

export default CreateUserPage;
