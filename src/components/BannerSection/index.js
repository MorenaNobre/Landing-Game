import React from "react";
import { BannerContainer, BannerBg, ImgBg, BannerCard, CardTitle, HeroImg, CardSubtitle } from "./BannerElements";
import ImgBanner from "../../images/bg-img.png";
import HeroRedImg from '../../images/card-banner.png'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerBg>
        <ImgBg src={ImgBanner} />
      </BannerBg>
      <BannerCard>
        <CardTitle>Transistor - Red the Singer</CardTitle>
        <HeroImg src={HeroRedImg}/>
        <CardSubtitle>
          "Olha, o que quer que você esteja pensando, me faça um favor, não
          solte."
        </CardSubtitle>
      </BannerCard>
    </BannerContainer>
  );
};

export default Banner;
