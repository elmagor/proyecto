import React from "react";
import Logo from "../ui/Logo";

import {
  NavLink
} from "react-router-dom";

function Header() {
  return (
    <header>

      <Logo />

      <nav>
        <NavLink to="/us">Us</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>

      <nav>
        <NavLink to="/singin">SingIn</NavLink>
        <NavLink to="/singup">SingUp</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>

    </header>
  );
}

export default Header;
