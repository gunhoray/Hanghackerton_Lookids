import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MagicPowder } from "../../../assets/icons/GameIcon";
const MagicPowerBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* transform: translate(-40%, -50%); */
`;
const BarContainer = styled.div`
  width: 20px;
  height: 200px;
  border-radius: 5px;
  padding: 1%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilledBar = styled.div`
  background-color: orange;
  width: 100%;
  border-radius: 5px;
`;

const TimerText = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: orange;
`;

const MagicPowerBar = () => {
  const [fillPercentage, setFillPercentage] = useState(100);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 초 단위로 설정

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFillPercentage((prevPercent) =>
        Math.max(prevPercent - 100 / (10 * 60), 0)
      );
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // 분과 초를 계산
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  return (
    <MagicPowerBarStyle>
      <MagicPowder />
      <BarContainer>
        <FilledBar style={{ height: `${fillPercentage}%` }} />
      </BarContainer>
      <TimerText>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </TimerText>
    </MagicPowerBarStyle>
  );
};

export default MagicPowerBar;
