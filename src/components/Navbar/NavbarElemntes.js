import styled from "styled-components";
import imgLogo from "../../images/logo.png";

export const Nav = styled.div`
  height: 109px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 109px;
  width: 100%;
  background: var(--dark-bg);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 109px;
  height: 109px;
  background: url(${imgLogo}) no-repeat;
  background-size: 90px;
  background-position-y: center;
  background-position-x: center;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 120px;
    margin-left: 16px;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font: normal normal bold 23px/36px Montserrat;
  letter-spacing: 0.68px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  margin-left: 30px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 108%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--white-color);
  }
`