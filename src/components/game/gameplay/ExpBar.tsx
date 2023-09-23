import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/config/configStore';
import { LevelStart } from '../../../assets/icons/GameIcon';

interface ExpBarProps {
    maxExp?: number;
}

const ProgressBar = styled.div`
    position: relative;
    background-color: rgba(216, 216, 216, 0.5);
    border-radius: 10px;
    width: 60%;
    height: 20px;
    /* margin-top: -5%; */
    margin: auto;
`;

const FilledBar = styled.div<{ $filledpercentage: string }>`
    height: 100%;
    width: ${(props) => props.$filledpercentage}%;
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

const LevelInfo = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    text-align: center;
    font-size: 12px;
    margin: 8px auto;
    color: #fff;
`;

const LevelBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExpBar = ({ maxExp }: ExpBarProps) => {
    const [currentExp, setCurrentExp] = useState(0);
    const { exp, level } = useSelector((state: RootState) => {
        return state.user.data.fairy || { exp: 0, level: 1 };
    });
    // useEffect(() => {
    // 서버에서 현재 경험치 가져오기
    // 가정으로 여기서는 setTimeout을 사용하여 비동기적으로 데이터를 가져온다고 가정합니다.
    //     setTimeout(() => {
    //         setCurrentExp(10);
    //     }, 2000);
    // }, []);

    // const filledpercentage = (currentExp / maxExp) * 100;

    return (
        <LevelBox>
            <LevelInfo>
                <LevelStart /> Lv.{level}
            </LevelInfo>
            <ProgressBar>
                {/* <FilledBar $filledpercentage={filledpercentage.toFixed(2)} />
        <PercentageText className="per">
          {filledpercentage.toFixed(2)}%
        </PercentageText> */}
                <FilledBar $filledpercentage={exp} />
                <PercentageText className="per">{exp}%</PercentageText>
            </ProgressBar>
        </LevelBox>
    );
};

export default ExpBar;
