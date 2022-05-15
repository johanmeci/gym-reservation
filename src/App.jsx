//Pages
import Home from "./pages/Home";
import CreateReservation from "./pages/create/CreateReservation";
import Error404 from "./pages/Error404";
import './App.css';

//Components
import Sidebar from "./components/Sidebar";
import { MainContainer } from "./styles/LayoutStyles";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//Styles Theme
import theme from "./styles/Theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
    <MainContainer>
      <Sidebar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<CreateReservation />} />
        <Route path="/create" element={<CreateReservation />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </MainContainer>
    </ThemeProvider>
  )
}

export default App
