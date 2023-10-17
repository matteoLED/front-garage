import React,{useState} from "react";
import styled from "styled-components";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/contact/add", {
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
        throw new Error("Erreur lors de la création du contact.");
      })
      .then((data) => {
        // Réinitialiser le formulaire ou faire toute autre action après la création
        console.log("Contact créé :", data);
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
       <ContactTitle>Contactez-nous</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="firstname">Prénom :</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="lastname">Nom :</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </FormField>
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </ContactForm>
  </div>)
};

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

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

export default Contact;
