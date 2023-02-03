import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from "reactstrap";
import { NavBarStyle } from "./style";

const NavbarInitial = () => {
  return (
    <NavBarStyle>
    <Navbar
    className="my-2"
    id="navbar"
  >
    <NavbarBrand href="/home">
      <img
        alt="logo"
        src="assets/logoBranca.png"
      />
      <span>PRIMEIRA IGREJA BÍBLICA INDEPENDENTE DE FORTALEZA</span>
    </NavbarBrand>
  </Navbar>
  </NavBarStyle>
  );
};

export default NavbarInitial;


