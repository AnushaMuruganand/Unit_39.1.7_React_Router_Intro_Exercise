import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Chips.css";

function Chips() {

    const [eaten, setEaten] = useState(0);

    return (
        <div className="Chips">
            <div className="Chips-div">
                <h1>BAGS EATEN : {eaten}</h1>
                <button className="Chips-button" onClick={() => setEaten(eaten => eaten + 1)}>
                    NOM NOM NOM 
                </button>
                <br/><br/>
                <NavLink className="Chips-link" exact="true" to="/">GoBack</NavLink> 
            </div> 
        </div>
    );
}

export default Chips;