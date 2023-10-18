import React, { useState, useEffect } from "react";
import styled from "styled-components";

const VehicleContainer = () => {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    brand: "",
    year_circulation: "",
    mileage: "",
    price: "",
    description: "",
    equipment: "",
    image_vehicle: "",
    vehicle_management: "",
  });

  const handleAddVehicle = (e) => {
    e.preventDefault();

    // Envoyez les données du véhicule au serveur
    fetch("http://localhost:8000/api/used/vehicle/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Erreur lors de l'ajout du véhicule.");
      })
      .then((data) => {
        console.log("Véhicule ajouté :", data);
        // Mettez à jour la liste des véhicules avec le nouveau véhicule
        setVehicles((prevVehicles) => [...prevVehicles, data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <ContactTitle>Ajouter un véhicule</ContactTitle>
      <ContactForm onSubmit={handleAddVehicle}>
        {/* Champs pour les informations du véhicule */}
        <FormField>
          <label htmlFor="brand">Marque :</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="year_circulation">Année de circulation :</label>
          <input
            type="date"
            id="year_circulation"
            name="year_circulation"
            value={formData.year_circulation}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="mileage">Kilométrage :</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="price">Prix :</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </FormField>

        <FormField>
          <label htmlFor="equipment">Équipement :</label>
          <input
            type="text"
            id="equipment"
            name="equipment"
            value={formData.equipment}
            onChange={handleInputChange}
          />
        </FormField>

        <FormField>
          <label htmlFor="image_vehicle">
            Ajouter le lien de l'image du véhicule :
          </label>
          <input
            type="url"
            id="image_vehicle"
            name="image_vehicle"
            value={formData.image_vehicle}
            onChange={handleInputChange}
          />
        </FormField>

        <FormField>
          <label htmlFor="vehicle_management">Gestion du véhicule :</label>
          <input
            type="text"
            id="vehicle_management"
            name="vehicle_management"
            value={formData.vehicle_management}
            onChange={handleInputChange}
          />
        </FormField>
        <SubmitButton type="submit">Ajouter</SubmitButton>
      </ContactForm>
    </div>
  );
};

const ContactTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  label {
    font-weight: bold;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const VehicleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const VehicleItem = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  max-width: 300px;
`;

const VehicleImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  margin-right: 10px;
`;

const VehicleInfo = styled.div`
  h2 {
    font-size: 18px;
    margin: 0;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
`;

export default VehicleContainer;
