import React from "react";
import Calendar from "../../components/Calendar";

import { Container, PanelContainer, TitlePanel } from "../../styles/LayoutStyles";

const CreateReservation = () => {
  return (
    <Container>
      <PanelContainer>
        <TitlePanel>Calendar</TitlePanel>
        <Calendar />
      </PanelContainer>
    </Container>
  );
}

export default CreateReservation;