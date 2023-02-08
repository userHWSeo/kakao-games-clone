import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { mockData } from "../../atoms/atom";

import { HiOutlineUser } from "react-icons/hi";

const GameContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const GameList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 362px;
  border-radius: 10px;
  list-style: none;
  padding-left: 0px;
`;

const GameItem = styled.li`
  display: flex;
`;
const GameText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const GameImg = styled.img`
  width: 111px;
  border-radius: 20px;
  margin: 10px 10px;
`;
const GameName = styled.strong`
  font-size: 16px;
`;
const GameInfo = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #979797;
`;
const GamePlayCount = styled.span``;

const GamePlayCountWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #696969;
`;

const MoreGames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top: solid 2px white;
  color: #3b3b3b;
  font-weight: 700;
`;

function GameListComponent({ categoryData }) {
  const [itemCount, setItemCount] = useState(10);
  const data = useRecoilValue(mockData);

  return (
    <>
      <GameContainer>
        <GameList>
          {categoryData === "전체"
            ? data.map((game, index) => {
                if (index < itemCount)
                  return (
                    <GameItem key={game.id}>
                      <GameImg src={game.thumbnail_img_url} />
                      <GameText>
                        <GameName>{game.name}</GameName>
                        <GameInfo>{game.introduction}</GameInfo>
                        <GamePlayCountWrap>
                          <HiOutlineUser />
                          {game.play_count === "많은 유저가 시작" ? (
                            <GamePlayCount>많은 유저가 플레이</GamePlayCount>
                          ) : (
                            <GamePlayCount>
                              {game.play_count} 플레이
                            </GamePlayCount>
                          )}
                        </GamePlayCountWrap>
                      </GameText>
                    </GameItem>
                  );
              })
            : data.map((game) => {
                if (categoryData === game.category)
                  return (
                    <GameItem key={game.id}>
                      <GameImg src={game.thumbnail_img_url} />
                      <GameText>
                        <GameName>{game.name}</GameName>
                        <GameInfo>{game.introduction}</GameInfo>
                        <GamePlayCountWrap>
                          <HiOutlineUser />
                          {game.play_count === "많은 유저가 시작" ? (
                            <GamePlayCount>많은 유저가 플레이</GamePlayCount>
                          ) : (
                            <GamePlayCount>
                              {game.play_count} 플레이
                            </GamePlayCount>
                          )}
                        </GamePlayCountWrap>
                      </GameText>
                    </GameItem>
                  );
              })}
          {data.length > itemCount ? (
            <MoreGames
              onClick={() => {
                setItemCount((prev) => prev + 10);
              }}
            >
              더보기
            </MoreGames>
          ) : null}
        </GameList>
      </GameContainer>
    </>
  );
}

export default GameListComponent;
