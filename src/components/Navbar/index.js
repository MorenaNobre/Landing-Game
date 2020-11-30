import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Logo,
  Title,
  MobileIcon,
} from "./NavbarElemntes";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Logo />
          <Title>SuperGiantGames</Title>
        </NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </Nav>
    </>
  );
};

export default Navbar;
