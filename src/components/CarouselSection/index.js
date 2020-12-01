import React, { Component } from "react";
import Slider from "react-slick";
import {
  CarouselContainer,
  CardWrapper,
  CharacterCard,
  MainCard,
  CharacterWrapper,
  Grant,
  Description,
} from "./CarouselElements";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <CarouselContainer>
        <style>{cssstyle}</style>
        <Slider {...settings}>
          <CardWrapper>
            <CharacterCard>
              <MainCard>
                <CharacterWrapper></CharacterWrapper>
                <Grant />
                <Description>
                  A Camerata foi apenas os dois no início, e suas fileiras nunca
                  foram destinadas a exceder um número a ser contado em uma mão.
                </Description>
              </MainCard>
            </CharacterCard>
          </CardWrapper>
          <CardWrapper>
            <CharacterCard></CharacterCard>
          </CardWrapper>
          <CardWrapper>
            <CharacterCard></CharacterCard>
          </CardWrapper>
          <CardWrapper>
            <CharacterCard></CharacterCard>
          </CardWrapper>
        </Slider>
      </CarouselContainer>
    );
  }
}

const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #fff;
    font-size: 30px;
}
`;
