import React from "react";
import styled from "styled-components";
import { Heart, MagicPowder, Water } from "../../../assets/icons/GameIcon";

const BottomsideMenu = styled.div`
  display: flex;
  margin-top: 80%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
`;
const PlayPageBottomButton = styled.button`
  width: 80px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 5px;
  &.love {
    background-color: lightpink;
  }
  &.magicpowder {
    background-color: #ffe294;
  }
  &.water {
    background-color: lightblue;
  }
`;

const BottomSideMenu = () => {
  return (
    <BottomsideMenu>
      <PlayPageBottomButton>
        <ButtonBox className="love">
          <Heart />
          사랑해주기 <br />
          <span>3/3개</span>
        </ButtonBox>
      </PlayPageBottomButton>
      <PlayPageBottomButton>
        <ButtonBox className="magicpowder">
          <MagicPowder />
          마법가루 사용
          <br />
          <span>3/3개</span>
        </ButtonBox>
      </PlayPageBottomButton>
      <PlayPageBottomButton>
        <ButtonBox className="water">
          <Water />
          이슬먹이기
          <br />
          <span>3/3개</span>
        </ButtonBox>
      </PlayPageBottomButton>
    </BottomsideMenu>
  );
};

export default BottomSideMenu;
