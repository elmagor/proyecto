import React from "react";
import logo from "../logo.svg";

import {
  NavLink
} from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />

      <nav>
        <NavLink to="/us"> Us </NavLink>
        <NavLink to="/"> Home </NavLink>

      </nav>

    </header>
  );
}

export default Header;
