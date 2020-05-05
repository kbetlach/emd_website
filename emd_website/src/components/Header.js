import React from "react";
import "../assets/style.css";

function Header() {
  return (
    <div className="fixed-top" style={{backgroundColor: "white"}}>

    <ul className="nav nav-tabs">

        <a className="navbar-brand" id="brand" href="#landingSection">
            <img src={require("../assets/images/emd.svg")} alt="emd_brand" className="responsive" id="emd"></img>
        </a> 
    
      <a className="nav-item" href="#aboutSection">
          About Us
      </a>

      <a className="nav-item" href ="#servicesSection">
          Services
      </a>

      <a className="nav-item" href="#instagramSection">
          Instagram
      </a>

      <a className="nav-item" href="#contactSection">
          Contact
      </a>

    </ul>
    </div>
  );
}

export default Header;