import { Grid, Container } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { PlaceImage } from "./PlaceImage";

const GridList = () => {
  const [usedVehicles, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/used/vehicles")
      .then((response) => response.json())
      .then((usedVehicles) => {
        if (Array.isArray(usedVehicles.usedVehicles)) {
          setData(usedVehicles.usedVehicles);
        } else {
          console.error("toto", usedVehicles);
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
        <Grid
          container
          spacing={2}
          item
          xs={12} 
          sm={6}
          key={usedVehicle.used_vehicle_id}
        >
          <Container
            sx={{
              mt: 2,
              ml: 2,
              p: 1,
              border: 1,
              alignItems: "center",

              borderColor: "#392CEI",
              borderRadius: 1,
            }}
          >
            <h4>Titre:{usedVehicle.brand}</h4>
            <h4>Description:{usedVehicle.description}</h4>
            <h4>Année:{usedVehicle.year_circulation}</h4>
            <h4>Kilométrage:{usedVehicle.mileage}</h4>
            <h4>Prix:{usedVehicle.price} €</h4>
            <h4>Détail: {usedVehicle.vehicle_management}</h4>
            <PlaceImage place={usedVehicle.image_vehicle} imageSize={250} />
          </Container>
        </Grid>
      ))}
    </div>
  );
};
export default GridList;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 50%;
  border: 1px solid #392CEI;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
