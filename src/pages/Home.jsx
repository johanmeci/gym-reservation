import React from "react";
import Reservation from "../components/Reservation";

import { Container } from "../styles/LayoutStyles";

const Home = () => {
  return (
    <Container>
      <p>Home</p>
      <Reservation/>
    </Container>
  );
}

export default Home;