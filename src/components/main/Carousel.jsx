import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const StyledSlider = styled(Slider)`
  display: flex !important;
  justify-content: center;
  width: 100%;
  .slick-list {
    display: flex;
    width: 60rem;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-dots {
    margin-bottom: 3rem;
  }

  .sl .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }

  .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 7px;
  }

  li {
    margin: 0;
    padding: 0;
  }

  .slick-prev {
    display: none;
  }
`;
const TopTrendGameWrap = styled.div``;
const TopTrendGameImg = styled.img`
  width: 363px;
  border-radius: 10px;
`;

function Carousel() {
  const carouselImgs = [
    "https://playgame-img.kakaogames.com/production/images/eo4j-2023-02-02/10-01-59-374/contentUrl.jpeg",
    "https://playgame-img.kakaogames.com/production/images/gj34-2023-01-18/18-49-20-049/contentUrl.jpeg",
    "https://playgame-img.kakaogames.com/production/images/gwm9-2023-01-27/12-02-52-958/contentUrl_sm.jpeg",
    "https://playgame-img.kakaogames.com/production/images/skfj-2023-01-30/18-15-31-217/contentUrl_sm.jpeg",
    "https://playgame-img.kakaogames.com/production/images/9c3d-2023-01-17/11-55-58-716/contentUrl_sm.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <StyledSlider {...settings}>
        {carouselImgs.map((img) => {
          return (
            <TopTrendGameWrap key={img}>
              <TopTrendGameImg src={img} />
            </TopTrendGameWrap>
          );
        })}
      </StyledSlider>
    </>
  );
}

export default Carousel;
