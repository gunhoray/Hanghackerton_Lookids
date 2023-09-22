import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/config/configStore';

interface ExpBarProps {
    maxExp: number;
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

const ExpBar = ({ maxExp }: ExpBarProps) => {
    const [currentExp, setCurrentExp] = useState(0);
    const { exp } = useSelector((state: RootState) => {
        return state.user.data.fairy;
    });
    useEffect(() => {
        // 서버에서 현재 경험치 가져오기
        // 가정으로 여기서는 setTimeout을 사용하여 비동기적으로 데이터를 가져온다고 가정합니다.
        setTimeout(() => {
            setCurrentExp(10);
        }, 2000);
    }, []);

    const filledpercentage = (currentExp / maxExp) * 100;

    return (
        <>
            <ProgressBar>
                {/* <FilledBar $filledpercentage={filledpercentage.toFixed(2)} />
        <PercentageText className="per">
          {filledpercentage.toFixed(2)}%
        </PercentageText> */}
                <FilledBar $filledpercentage={exp} />
                <PercentageText className="per">{exp}%</PercentageText>
            </ProgressBar>
        </>
    );
};

export default ExpBar;
