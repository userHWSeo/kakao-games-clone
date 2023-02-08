import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CategoriesWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  overflow: hidden;
  color: #868282;
  font-size: 14px;
  margin-top: 60px;
`;
const Categories = styled.div`
  &.active {
    color: yellow;
    font-weight: 700;
  }
`;

function GameCategoryList({ setData }) {
  const catagories = [
    { name: "전체", active: true },
    { name: "롤플레잉", active: false },
    { name: "시뮬레이션", active: false },
    { name: "보드", active: false },
    { name: "스포츠", active: false },
  ];

  const [catagory, setCategory] = useState(catagories);
  const [currentName, setCurrentName] = useState();
  const copyCategories = [...catagory];

  const clickCategoryHandler = (el) => {
    if (!el.active) {
      copyCategories.filter((el) => {
        el.active = false;
      });
    }
    el.active = true;
    setCategory(copyCategories);
  };

  useEffect(() => {
    for (const key of copyCategories) {
      if (key.active) setCurrentName(key.name);
    }
    setData(currentName);
  }, [copyCategories]);

  return (
    <>
      <CategoriesWrap>
        {copyCategories.map((el) => {
          return (
            <Categories
              key={el.name}
              className={el.active ? "active" : "inactive"}
              onClick={() => {
                clickCategoryHandler(el);
              }}
            >
              {el.name}
            </Categories>
          );
        })}
      </CategoriesWrap>
    </>
  );
}

export default GameCategoryList;
