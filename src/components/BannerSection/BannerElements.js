import styled from "styled-components";
import ImgBanner from "../../images/bg-img.png";
import HeroRedImg from "../../images/card-banner.png";

export const BannerContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
  position: relative;
  z-index: 1;
  transition: 0.3s ease-in;

  @media screen and (max-width: 960px) {
    background: var(--dark-bg);
    height: 532px;
    transition: 0.3s ease-in;
  }

  /*add :before styles */
`;

export const BannerBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1080px;
  overflow: hidden;
  transition: 0.3s ease-in;

  @media screen and (max-width: 960px) {
    height: 630px;
    transition: 0.3s ease-in;
  }
`;

export const ImgBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${ImgBanner}) no-repeat;
  background-size: 100% 100%;
  transition: 0.3s ease-in;

  @media screen and (max-width: 960px) {
    /* display: none; */
    width: 100%;
    height: 532px;
    transition: 0.3s ease-in;
  }
`;

export const BannerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 586px;
  height: 1080px;
  background: linear-gradient(#9c020480, #4d101045);
  z-index: 3;
  box-shadow: #00000099 0px 3px 6px;
  position: relative;
  transition: 0.3s ease-in;

  @media screen and (max-width: 960px) {
    width: 352px;
    height: 532px;
    background: linear-gradient(#9c020480, #4d101045);
    transition: 0.3s ease-in;
  }
`;

export const CardTitle = styled.h1`
  position: absolute;
  top: 0;
  justify-content: flex-start;
  width: 586px;
  margin-left: 30px;
  text-transform: uppercase;
  font-size: 15px;
  margin-top: 24px;
  color: var(--subtitle-color);
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 960px) {
    width: 362px;
    margin-left: 30px;
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const HeroImg = styled.div`
  margin-top: -52px;
  width: 718px;
  height: 846px;
  background: url(${HeroRedImg}) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  transition: 0.3s ease-in;

  @media screen and (max-width: 960px) {
    width: 368px;
    height: 418px;
    margin-top: -32px;
    transition: 0.3s ease-in;
  }
`;

export const CardSubtitle = styled.p`
  width: 271px;
  height: 121px;
  text-align: center;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  color: var(--subtitle-color);
  position: absolute;
  bottom: 0;
  transition: 0.3s ease-in;

  @media screen and (max-width: 960px) {
    width: 152px;
    height: 64px;
    font-size: 12px;
    transition: 0.3s ease-in;
  }
`;
