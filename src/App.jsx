import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreateReservation from "./pages/CreateReservation";
import Error404 from "./pages/Error404";
import './App.css';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateReservation />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
