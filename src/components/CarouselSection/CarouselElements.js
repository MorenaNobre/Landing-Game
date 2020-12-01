import styled from "styled-components";
import ImgGrant from "../../images/Grant.png";

export const CarouselContainer = styled.div`
  margin: auto;
  padding: 192px 40px 40px 40px;
  width: 100%;
  height: 1147px;
  background: var(--dark-bg);
`;

export const CardWrapper = styled.div`
  margin: 20px;
`;

export const CharacterCard = styled.div`
  background: #5f9ea0;
  margin: 10px;
  padding: 2%;
  position: relative;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
`;

export const Description = styled.div`
  width: 326px;
  height: 153px;
  font-size: 20px;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  color: var(--dark-bg);
  margin-bottom: -372px;
`;
