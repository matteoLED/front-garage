import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthContext";
import GridList from "../component/Grid";
import AppBar from "../component/AppBar";
import Modal from "../component/Modal";
import styled from "styled-components";
import Button from "@mui/material/Button";
import VehicleContainer from "../component/VehicleContainer";

function AccueilPage() {
  const { userType } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <p>Utilisateur connecté en tant que : {userType}</p>
      <h1 style={{ marginLeft: "20px" }}>Accueil</h1>
      <ButtonPosition>
        {userType === "administrateur" || userType === "employees" ? (
          <Button onClick={() => setIsModalOpen(true)}>
            Ajouter un véhicule
          </Button>
        ) : null}
      </ButtonPosition>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          body={<VehicleContainer />}
        />
      )}
      <GridList />
    </div>
  );
}

const ButtonPosition = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

export default AccueilPage;
