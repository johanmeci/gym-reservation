import Home from "./pages/Home";
import CreateReservation from "./pages/create/CreateReservation";
import Error404 from "./pages/Error404";
import './App.css';

import Sidebar from "./components/Sidebar";
import { MainContainer } from "./styles/LayoutStyles";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <MainContainer>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateReservation />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </MainContainer>
  )
}

export default App
