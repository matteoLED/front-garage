import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import Contact from "./ContactContainer";

const ContactModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Témoignage Client Modal"
      style={modalStyles}
    >
      <Contact />
      <Button onClick={() => setIsModalOpen(false)}>Fermer</Button>
    </Modal>
  );
};

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const modalStyles = {
  content: {
    height: "500px",
    width: "600px",
    margin: "auto",
  },
};

export default ContactModal;
