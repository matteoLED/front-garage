import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

const HoraireContainer = () => {
  const [horaires, setHoraires] = useState([]);

  useEffect(() => {
    const fetchHoraires = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/hours");
        const data = await response.json();
        setHoraires(data.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des horaires:",
          error
        );
      }
    };

    fetchHoraires();
  }, []);

  // Vérifier si les horaires pour le dimanche existent
  const horairesDimanche = horaires.find(
    (horaire) => horaire.jour_semaine === "Dimanche"
  );

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginTop: "4rem",
          padding: "2rem",
          border: "1px solid #8B4513",
          borderRadius: "1px",
          position: "relative",
        }}
      >
        <h1>Horaires</h1>
        {horaires.length === 0 ? (
          <p>Aucun horaire trouvé.</p>
        ) : (
          <ul>
            {horaires.map((horaire) => (
              <li key={horaire.id}>
                {horaire.day} : {horaire.open_hour.split(" ")[1]} -{" "}
                {horaire.close_hour.split(" ")[1]}
              </li>
            ))}
            {horairesDimanche ? null : <li>Dimanche : Fermé</li>}
          </ul>
        )}
      </Container>
    </div>
  );
};

export default HoraireContainer;
