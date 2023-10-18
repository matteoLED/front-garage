import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

import StarIcon from "@mui/icons-material/Star";
import Customer from "../component/CustomerContainer";
import Modal from "../component/Modal";
import AppBar from "../component/AppBar";

const CustomerPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
const ButtonPosition = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

export default CustomerPage;
