import React from "react";
import { NavLink } from "react-router-dom";
import "./Sardines.css";

function Sardines() {
  return (
    <div className="Sardines">
      <div className="Sardines-div">
          <h1>YOU DONT'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h1>
          <NavLink className="Sardines-link" exact="true" to="/">GoBack</NavLink>  
      </div>   
    </div>
      
  );
}

export default Sardines;