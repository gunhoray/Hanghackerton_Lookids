import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BigMagicPowder } from "../../../assets/icons/GameIcon";

const MagicPowderDescription = styled.p`
  font-size: 12px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
  margin-top: 5px;
`;

const MagicPowerBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* transform: translate(-40%, -50%); */
`;
const BarContainer = styled.div`
  width: 20px;
  height: 100px;
  border-radius: 5px;
  padding: 3%;
  background-color: white;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: -10px;
  z-index: -2;
`;
const BarContainer2 = styled.div`
  width: 20px;
  height: 120px;
  border-radius: 5px;
  padding: 3%;
  background-color: white;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: -10px;
  z-index: -2;
`;
const FilledBar = styled.div`
  background-color: orange;
  width: 80%;
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
      <BigMagicPowder />
      <BarContainer2>
        <BarContainer>
          <FilledBar style={{ height: `${fillPercentage}%` }} />
        </BarContainer>
      </BarContainer2>
      <MagicPowderDescription>마법효과*2</MagicPowderDescription>
      <TimerText>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </TimerText>
    </MagicPowerBarStyle>
  );
};

export default MagicPowerBar;
