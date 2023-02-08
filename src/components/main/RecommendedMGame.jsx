import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { mockData } from "../../atoms/atom";

// import icons
import { HiOutlineUser } from "react-icons/hi";

const RecommendedMGameContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const RecommendedMGameList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 362px;
  height: 720px;
  border-radius: 10px;
  background-color: #f1f0f0;
  list-style: none;
  padding-left: 0px;
`;

const RecommendedMGameItem = styled.li`
  display: flex;
`;
const RecommendedMGameText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RecommendedMGameImg = styled.img`
  width: 111px;
  border-radius: 20px;
  margin: 10px 10px;
`;
const RecommendedMGameName = styled.strong`
  font-size: 16px;
`;
const RecommendedMGameInfo = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #979797;
`;
const RecommendedMGamePlayCount = styled.span``;

const RecommendedMGamePlayCountWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #696969;
`;

const FullviewGames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top: solid 2px white;
  color: #3b3b3b;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3b3b3b;
`;

function RecommendedMGame() {
  const data = useRecoilValue(mockData);
  return (
    <>
      <RecommendedMGameContainer>
        <RecommendedMGameList>
          {data.map((game, index) => {
            if (index < 5)
              return (
                <RecommendedMGameItem key={game.id}>
                  <RecommendedMGameImg src={game.thumbnail_img_url} />
                  <RecommendedMGameText>
                    <RecommendedMGameName>{game.name}</RecommendedMGameName>
                    <RecommendedMGameInfo>
                      {game.introduction}
                    </RecommendedMGameInfo>
                    <RecommendedMGamePlayCountWrap>
                      <HiOutlineUser />
                      {game.play_count === "많은 유저가 시작" ? (
                        <RecommendedMGamePlayCount>
                          많은 유저가 플레이
                        </RecommendedMGamePlayCount>
                      ) : (
                        <RecommendedMGamePlayCount>
                          {game.play_count} 플레이
                        </RecommendedMGamePlayCount>
                      )}
                    </RecommendedMGamePlayCountWrap>
                  </RecommendedMGameText>
                </RecommendedMGameItem>
              );
          })}
          <FullviewGames>
            <StyledLink to="/games">모바일게임 전체보기</StyledLink>
          </FullviewGames>
        </RecommendedMGameList>
      </RecommendedMGameContainer>
    </>
  );
}

export default RecommendedMGame;
