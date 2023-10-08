import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contactez-nous</ContactTitle>
      <ContactForm>
        <FormField>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" />
        </FormField>
        <FormField>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" />
        </FormField>
        <FormField>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </FormField>
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
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
