import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import icons
import { HiOutlineMenu, HiSearch, HiArrowLeft } from "react-icons/hi";

const NavigationBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 393px;
  height: 52px;
  border-bottom: 1px solid black;
  z-index: 99;
  background-color: white;
`;

const KaKaoGamesMText = styled.img`
  width: 176px;
`;

function Navbar({ backwardBool }) {
  const navigate = useNavigate();

  return (
    <NavigationBarContainer>
      {backwardBool ? (
        <HiArrowLeft
          size="25"
          style={{ paddingRight: "-20px" }}
          onClick={() => navigate(-1)}
        />
      ) : null}
      <HiOutlineMenu size="32" />
      <KaKaoGamesMText src="//playgame-img.kakaogames.com/production/static/images/m/rtn/logo_game_190802.png" />
      <HiSearch size="32" />
    </NavigationBarContainer>
  );
}

export default Navbar;
