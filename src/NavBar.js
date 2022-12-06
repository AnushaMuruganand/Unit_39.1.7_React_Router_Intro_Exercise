import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact="true" to="/soda">
        SODA
      </NavLink>
      <br/>
      <NavLink exact="true" to="/chips">
        CHIPS
      </NavLink>
      <br/>
      <NavLink exact="true" to="/sardines">
        FRESH SARDINES
      </NavLink>
      <br/>
    </nav>
  );
}

export default NavBar;