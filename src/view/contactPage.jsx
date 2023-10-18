import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Modal from "../component/Modal";
import ContactContainer from "../component/ContactContainer";
import AppBar from "../component/AppBar";

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
    <div>
      {" "}
      <AppBar />
      <Container>
        <h1>Contact </h1>
        <ButtonPosition>
          <Button onClick={() => setIsModalOpen(true)}>
            Ajouter un contact
          </Button>
        </ButtonPosition>

        <Contacts>
          {contacts.map((contact) => (
            <Contact key={contact.contact_id}>
              <Author>
                - {contact.lastname} {contact.firstname}
              </Author>
              <Quote>{contact.message}</Quote>

              <Author>Contact par {contact.email}</Author>
            </Contact>
          ))}
        </Contacts>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            body={<ContactContainer />}
          />
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Contact = styled.div`
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

const ButtonPosition = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

export default ContactPage;
