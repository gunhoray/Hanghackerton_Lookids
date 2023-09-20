import React from "react";
import styled from "styled-components";
import { MagicPowder } from "../../../assets/icons/GameIcon";
import Timer from "./Timer";

type style = {
  $color: string;
};

const TimerActionButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: "#000";
`;
const RewardTimer = () => {
  return (
    <>
      <TimerActionButton>
        <MagicPowder />
      </TimerActionButton>
      <Timer />
    </>
  );
};

export default RewardTimer;
