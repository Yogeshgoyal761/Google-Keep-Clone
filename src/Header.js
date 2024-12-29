// src/components/Header.js
import React from "react";
import keep_logo from "./keep_logo.png";

function Header() {
  return (
    <div>
        <nav style={{backgroundColor: "white", margin: "10px", display: "flex", justifyContent: "center", border: "1px solid" }}>
            <img src={keep_logo} alt="logo" style={{margin: "2px", height: "20px", width: "20px"}} />
            <span style={{fontSize: "1rem", justifyContent: "center", alignContent: "center"}}>Keep</span>           
        </nav>
    </div>
  );
}

export default Header;
