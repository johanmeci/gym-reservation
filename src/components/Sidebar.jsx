import React from "react";

import { Navbar } from "../styles/LayoutStyles";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Navbar>
      <p>Sidebar</p>
      <Link to="/">Reservation List</Link>
      <Link to="/create">Create reservation</Link>
    </Navbar>
  );
}

export default Sidebar;