import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import GridList from "../component/Grid";
import AppBar from "../component/AppBar";

function AccueilPage() {
  const { userType } = useContext(AuthContext);
  return (
    <div>
     
      <p>Utilisateur connecté en tant que : {userType}</p>
      <h1 style={{ marginLeft: "20px" }}>Accueil</h1>
      <GridList />
    </div>
  );
}

export default AccueilPage;
