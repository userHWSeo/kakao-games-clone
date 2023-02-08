import React from "react";
import styled from "styled-components";
import Carousel from "../components/main/Carousel";
import Navbar from "../components/common/Navbar";
import RecommendedMGame from "../components/main/RecommendedMGame";

const TitGame = styled.h3`
  margin-top: 70px;
`;

function Main() {
  return (
    <>
      <Navbar />
      <TitGame>대세게임</TitGame>
      <Carousel />
      <TitGame style={{ marginTop: "40px" }}>추천 모바일 게임</TitGame>
      <RecommendedMGame />
    </>
  );
}

export default Main;
