import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import GameCategoryList from "../components/game_list/GameCategoryList";
import GameListComponent from "../components/game_list/GameListComponent";

function GameList() {
  const [data, setData] = useState("전체");
  const backwardBool = true;

  return (
    <>
      <Navbar backwardBool={backwardBool} />
      <GameCategoryList setData={setData} />
      <GameListComponent categoryData={data} />
    </>
  );
}

export default GameList;
