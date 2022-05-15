import React from "react";
import Calendar from "../../components/Calendar";

import { Container } from "../../styles/LayoutStyles";

const CreateReservation = () => {
  return (
    <Container>
      <p>Form create reservation</p>
      <Calendar />
    </Container>
  );
}

export default CreateReservation;