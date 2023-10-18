import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

import StarIcon from "@mui/icons-material/Star";
import Customer from "../component/CustomerContainer";
import Modal from "../component/Modal";
import AppBar from "../component/AppBar";
import { AuthContext } from "../providers/AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const CustomerPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userRole = useContext(AuthContext);

  const handleDeleteTestimonial = (testimonialId) => {
    // Vérifiez les autorisations de l'utilisateur ici
    // Remplacez cela par la fonction qui récupère le rôle de l'utilisateur

    if (userRole === "administrateur" || userRole === "employees") {
      // L'utilisateur a les autorisations, envoyez une demande de suppression
      fetch(`http://localhost:8000/api/customer/testimonial/${testimonialId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            // Suppression réussie, mettez à jour la liste des témoignages
            setFormData((prevTestimonials) =>
              prevTestimonials.filter(
                (item) => item.testimonialId !== testimonialId
              )
            );
          } else {
            throw new Error("Erreur lors de la suppression du témoignage.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert(
        "Vous n'avez pas les autorisations nécessaires pour supprimer ce témoignage."
      );
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/customer/testimonials")
      .then((response) => response.json())
      .then((testimonials) => {
        if (Array.isArray(testimonials.testimonials)) {
          setTestimonials(testimonials.testimonials);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  if (testimonials.length === 0) {
    return <div>Aucun témoignage trouvé</div>;
  }
  return (
    <div>
      <AppBar />
      <div className="content">
        <Container>
          <h1>Témoignage Client</h1>
          <ButtonPosition>
            <Button onClick={() => setIsModalOpen(true)}>
              Ajouter un témoignage
            </Button>
          </ButtonPosition>
          <Testimonials>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.testimonial_id}>
                {userRole === "administrateur" || userRole === "employees" ? (
                  <CloseButtonContainer>
                    <IconButton onClick={() => handleDeleteTestimonial(testimonial.testimonial_id)}>
                      <CloseIcon />
                    </IconButton>
                  </CloseButtonContainer>
                ) : null}
                <Quote>{testimonial.comment}</Quote>
                <Author>- {testimonial.client_name}</Author>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </Testimonial>
            ))}
          </Testimonials>
          {isModalOpen && (
            <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              body={<Customer />}
            />
          )}
        </Container>
      </div>
    </div>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Testimonials = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  visibility: hidden;
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
    ${CloseButtonContainer} {
      visibility: visible;
    }
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



export default CustomerPage;
