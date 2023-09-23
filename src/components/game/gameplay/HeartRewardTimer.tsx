import React from "react";
import styled from "styled-components";
import { Heart, MagicPowder } from "../../../assets/icons/GameIcon";
import Timer from "./Timer";
import { TimerActionButton } from "../GameUI.style";

type style = {
  $color: string;
};

const RewardTimer = () => {
  return (
    <>
      <TimerActionButton>
        <Heart />
        {/* {getReward && <span className="can-get-reward"></span>} */}
      </TimerActionButton>
      <Timer />
    </>
  );
};

export default RewardTimer;
