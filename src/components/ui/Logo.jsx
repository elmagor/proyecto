import React from "react";
import logo from "../../assets/logo.svg";

import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="enlace_div">
      
      <NavLink to="/" className="enlace">
        <img src={logo} className="App-logo" alt="logo" />
      </NavLink>
    </div>
  );
}
