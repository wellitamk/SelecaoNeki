import React from "react";
import Logo from "../../Assets/Images/logo.png";
import { Nav, NavLink, NavLink2, NavMenu, NavBtn, NavBtnLink } from "./style";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} width="120px" height="60px" alt="logo" />
        </NavLink>
        <NavMenu>
          <NavLink2 to="/">Home</NavLink2>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
            <NavBtnLink to="/cadastro">Cadastro</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
