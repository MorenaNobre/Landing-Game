import styled from "styled-components";
import ImgGrant from "../../images/Grant.png";
import ImgRed from "../../images/Red.png";
import ImgSybil from "../../images/Sybil_2.png";

export const CarouselContainer = styled.div`
  margin: auto;
  padding: 192px 40px 40px 40px;
  width: 100%;
  height: 1147px;
  background: var(--dark-bg);
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    padding: 80px 40px 40px 40px;
    height: 892px;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    padding: 40px 40px 40px 40px;
    height: 736px;
    transition: 0.3s ease-in;
  }
`;

export const CardWrapper = styled.div`
  margin: 20px;
`;

export const CharacterCard = styled.div`
  background: var(--dark-bg);
  margin: 10px;
  padding: 2%;
  position: relative;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    height: 628px;
    align-items: center;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    height: 501px;
    align-items: center;
    transition: 0.3s ease-in;
  }
`;

export const MainCard = styled.div`
  width: 387px;
  height: 580px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    width: 272px;
    height: 512px;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    width: 190px;
    height: 386px;
    transition: 0.3s ease-in;
  }
`;

export const CharacterWrapper = styled.div`
  width: 324px;
  height: 438px;
  background: var(--dark-bg);
  border: 2px solid var(--white-color);
  border-radius: 100px;
  position: absolute;
  top: 0;
  margin-top: -64px;
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    width: 224px;
    height: 329px;
    border-radius: 37px;
    margin-top: -18px;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    width: 170px;
    height: 227px;
    margin-top: -26px;
    transition: 0.3s ease-in;
  }
`;

export const Grant = styled.div`
  background: url(${ImgGrant}) no-repeat;
  width: 358px;
  height: 520px;
  background-size: 368px;
  background-position-y: center;
  background-position-x: center;
  position: absolute;
  margin-top: -324px;
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    width: 238px;
    height: 402px;
    background-size: 264px;
    margin-top: -243px;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    width: 194px;
    height: 286px;
    background-size: 217px;
    margin-top: -180px;
    transition: 0.3s ease-in;
  }
`;

export const Red = styled.div`
  background: url(${ImgRed}) no-repeat;
  width: 358px;
  height: 520px;
  background-size: 368px;
  background-position-y: center;
  background-position-x: center;
  position: absolute;
  margin-top: -324px;
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    width: 238px;
    height: 402px;
    background-size: 264px;
    margin-top: -243px;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    width: 194px;
    height: 286px;
    background-size: 217px;
    margin-top: -180px;
    transition: 0.3s ease-in;
  }
`;

export const Sybil = styled.div`
  background: url(${ImgSybil}) no-repeat;
  width: 358px;
  height: 520px;
  background-size: 368px;
  background-position-y: center;
  background-position-x: center;
  position: absolute;
  margin-top: -324px;
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    width: 238px;
    height: 402px;
    background-size: 264px;
    margin-top: -243px;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    width: 194px;
    height: 286px;
    background-size: 217px;
    margin-top: -180px;
    transition: 0.3s ease-in;
  }
`;

export const Description = styled.div`
  width: 326px;
  height: 153px;
  font-size: 20px;
  text-align: left;
  font-family: "Open Sans", sans-serif;
  color: var(--dark-bg);
  margin-bottom: -372px;
  transition: 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    width: 206px;
    height: 153px;
    font-size: 16px;
    text-align: center;
    margin-bottom: -322px;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    width: 184px;
    height: 153px;
    font-size: 12px;
    margin-bottom: -300px;
    transition: 0.3s ease-in;
  }
`;
