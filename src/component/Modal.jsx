import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";


const GlobalModal = ({ isModalOpen, setIsModalOpen, body }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={modalStyles}
    >
      <CloseButtonContainer>
        <IconButton onClick={() => setIsModalOpen(false)}>
          <CloseIcon />
        </IconButton>
      </CloseButtonContainer>
        {body}
    </Modal>
  );
};

const CloseButtonContainer = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;
const modalStyles = {
  content: {
    height: "500px",
    width: "600px",
    margin: "auto",
  },
};

export default GlobalModal;
