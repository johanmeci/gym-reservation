import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar } from "../styles/LayoutStyles";
import { FaRegCalendar, FaRegCalendarPlus } from "react-icons/fa";
import { BiRun } from "react-icons/bi";

const Sidebar = () => {
  return (
    <Navbar>
      <div className="containerLogo">
        <BiRun/>
        <span className="logoName">Gym<span className="txtLogo">Calendar</span></span>
      </div>
      <p className="navbarTitle">Main Menu</p>
      <NavLink className={(navData) => "linkMenu " + (navData.isActive ? "active" : "")} to="/"><FaRegCalendar/> Reservation List</NavLink>
      <NavLink className={(navData) => "linkMenu " + (navData.isActive ? "active" : "")} to="/create"><FaRegCalendarPlus/> Create reservation</NavLink>
    </Navbar>
  );
}

export default Sidebar;