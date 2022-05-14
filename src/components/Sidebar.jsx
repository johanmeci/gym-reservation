import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <p>Sidebar</p>
      <Link to="/">Reservation List</Link>
      <Link to="/create">Create reservation</Link>
    </>
  );
}

export default Sidebar;