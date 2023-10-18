import React, { useState } from "react";
import styled from "styled-components";

const CustomerContainer = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    comment: "",
    rating: 0,
    date_testimony: "",
  });

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données au serveur
    fetch("http://localhost:8000/api/customer/testimonial/add", {
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
        throw new Error("Erreur lors de la création du témoignage client.");
      })
      .then((data) => {
        console.log("Témoignage client créé :", data);

        setFormData((prevTestimonials) => [...prevTestimonials, data]);
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
      <ContactTitle>Témoignage</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="client_name">Nom du client :</label>
          <input
            type="text"
            id="client_name"
            name="client_name"
            value={formData.client_name}
            onChange={handleInputChange}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="comment">Témoignage :</label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            value={formData.comment}
            onChange={handleInputChange}
            required
          ></textarea>
        </FormField>
        <FormField>
          <label>Classement :</label>
          <RatingButtons>
            {[1, 2, 3, 4, 5].map((value) => (
              <RatingButton
                key={value}
                selected={value === formData.rating}
                onClick={() => handleRatingChange(value)}
              >
                {value} étoile{value !== 1 ? "s" : ""}
              </RatingButton>
            ))}
          </RatingButtons>
        </FormField>
        <FormField>
          <label htmlFor="date_testimony">Date du témoignage :</label>
          <input
            type="date"
            id="date_testimony"
            name="date_testimony"
            value={formData.date_testimony}
            onChange={handleInputChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Envoyer</SubmitButton>
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

const RatingButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const RatingButton = styled.button`
  background-color: ${(props) => (props.selected ? "#f9a825" : "#ccc")};
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f9a825;
  }
`;

export default CustomerContainer;
