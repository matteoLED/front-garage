import React from "react";
import GridList from "../component/Grid";
import { AuthContext } from "../providers/AuthContext";



const HomePage = () => {
    const { userType } = useContext(AuthContext);
    return (
      <div>
        <p>Utilisateur connecté en tant que : {userType}</p>
        <h1>Accueil</h1>
        <GridList />
      </div>
    );
}

export default HomePage;