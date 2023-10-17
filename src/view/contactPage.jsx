import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ContactModal from "../component/Modal";


const ContactPage = () => {
  const [contacts, setContact] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/contacts")
      .then((response) => response.json())
      .then((contacts) => {
        if (Array.isArray(contacts.contacts)) {
          setContact(contacts.contacts);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  if (contacts.length === 0) {
    return <div>Aucun Contact trouvé</div>;
  }
  return (
    <Container>
      <h1>Contact </h1>
      <Button onClick={() => setIsModalOpen(true)}>Ouvrir la Modal</Button>
      <Testimonials>
        {contacts.map((contact) => (
          <Testimonial key={contact.contact_id}>
            <Author>
              - {contact.lastname} {contact.firstname}
            </Author>
            <Quote>{contact.message}</Quote>

            <Author>Contact par {contact.email}</Author>
          </Testimonial>
        ))}
      </Testimonials>
      {isModalOpen && (
        <ContactModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
  
`;

const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Testimonial = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Légère élévation au survol */
  }
`;

const Quote = styled.p`
  font-size: 18px;
`;

const Author = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

export default ContactPage;
