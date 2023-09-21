import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ExpBarProps {
  maxExp: number;
}

const ProgressBar = styled.div`
  background-color: rgba(216, 216, 216, 0.5);
  border-radius: 10px;
  width: 40%;
  height: 20px;
  margin-top: -5%;
`;

const FilledBar = styled.div<{ filledPercentage: string }>`
  height: 100%;
  width: ${(props) => props.filledPercentage}%;
  background-color: #6c63ff;
  border-radius: inherit;
`;

const PercentageText = styled.span`
  font-size: 12px;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -16px;
`;

const ExpBar = ({ maxExp }: ExpBarProps) => {
  const [currentExp, setCurrentExp] = useState(0);

  useEffect(() => {
    // 서버에서 현재 경험치 가져오기
    // 가정으로 여기서는 setTimeout을 사용하여 비동기적으로 데이터를 가져온다고 가정합니다.
    setTimeout(() => {
      setCurrentExp(10); // 예시로 현재 경험치를 50으로 설정합니다.
    }, 2000);
  }, []);

  const filledPercentage = (currentExp / maxExp) * 100;

  return (
    <>
      <ProgressBar>
        <FilledBar filledPercentage={filledPercentage.toFixed(2)} />
        <PercentageText className="per">
          {filledPercentage.toFixed(2)}%
        </PercentageText>
      </ProgressBar>
    </>
  );
};

export default ExpBar;
