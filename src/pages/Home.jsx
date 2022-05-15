import React from "react";
import Reservation from "../components/Reservation";

import { Container, PanelContainer, TitlePanel } from "../styles/LayoutStyles";

const Home = () => {
  return (
    <Container>
      <PanelContainer>
        <TitlePanel>Reservation List</TitlePanel>
        <Reservation/>
      </PanelContainer>
    </Container>
  );
}

export default Home;