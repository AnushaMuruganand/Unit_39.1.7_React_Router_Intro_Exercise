import React from "react";
import NavBar from "./NavBar";
import "./VendingMachine.css";

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-header">
                <h1> HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
            </div>
            <div className="VendingMachine-links">
                <NavBar />
            </div>
            
        </div>
        
    )
}

export default VendingMachine;