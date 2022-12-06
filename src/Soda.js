import React from "react";
import { NavLink } from "react-router-dom";
import "./Soda.css";

function Soda() {
  return (
    <div className="Soda">
      <img className="Soda-img" src="https://static6.depositphotos.com/1011415/607/v/600/depositphotos_6072808-stock-illustration-cola-can.jpg"/>
      <div className="Soda-div">
        <h1>OMG SUGARRRRRRR</h1>
        <NavLink className="Soda-link" exact="true" to="/">GoBack</NavLink> 
      </div> 
      <img className="Soda-img" src="https://static6.depositphotos.com/1011415/607/v/600/depositphotos_6072808-stock-illustration-cola-can.jpg"/>
    </div>
  );
}

export default Soda;