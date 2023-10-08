import { Grid, Container, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PlaceImage } from "./PlaceImage";
import Box from "@mui/material/Box";

const GridList = () => {
  const [usedVehicles, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/used/vehicles")
      .then((response) => response.json())
      .then((usedVehicles) => {
        if (Array.isArray(usedVehicles.usedVehicles)) {
          setData(usedVehicles.usedVehicles);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  if (usedVehicles.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {usedVehicles.map((usedVehicle) => (
        <Grid item xs={12} sm={6} md={3} key={usedVehicle.used_vehicle_id}>
          <GridItem>
            <ItemRow>
              <h4>Marque: {usedVehicle.brand}</h4>
             

              <h4>Description:</h4>
              <p>{usedVehicle.description}</p>

              <h4>Année:</h4>
              <p>{usedVehicle.year_circulation}</p>

              <h4>Kilométrage:</h4>
              <p>{usedVehicle.mileage}</p>

              <h4>Prix:</h4>
              <p>{usedVehicle.price} €</p>

              <h4>Détail:</h4>
              <p>{usedVehicle.vehicle_management}</p>
            </ItemRow>
            <PlaceImage place={usedVehicle.image_vehicle} imageSize={400} />
          </GridItem>
        </Grid>
      ))}
    </div>
  );
};
export default GridList;

const GridItem = styled.div`
  margin: 10px auto;
  padding: 10px;
  width: 65%;
  border: 1px solid #392CEI;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 25%;
  align-items: center;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  h4 {
    font-size: 18px;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px); /* Légère élévation */
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); /* Légère ombre au survol */
  }
`;
