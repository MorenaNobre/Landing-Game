import styled from "styled-components";
import imgLogo from "../../images/logo.png";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 109px;
  width: 100vw;
  background: var(--dark-bg);
`;

export const Logo = styled.div`
  width: 109px;
  height: 109px;
  background: url(${imgLogo}) no-repeat;
  background-size: 90px;
  background-position-y: center;
  background-position-x: center;
`;

export const Title = styled.h1`
  text-align: left;
  font: normal normal bold 23px/36px Montserrat;
  letter-spacing: 0.68px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  margin-left: 30px;
`;