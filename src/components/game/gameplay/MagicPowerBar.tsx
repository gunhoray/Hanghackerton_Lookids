import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BigMagicPowder } from '../../../assets/icons/GameIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/config/configStore';

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
    height: 110px;
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

const MagicPowerBar = () => {
    const [fillPercentage, setFillPercentage] = useState(100);
    const { magicPowderGauge } = useSelector((state: RootState) => {
        return state.user.data.fairy;
    });
    useEffect(() => {}, []);

    // 분과 초를 계산

    return (
        <MagicPowerBarStyle>
            <BigMagicPowder />
            <BarContainer2>
                <BarContainer>
                    <FilledBar style={{ height: `${magicPowderGauge}%` }} />
                </BarContainer>
            </BarContainer2>
            <MagicPowderDescription>{magicPowderGauge}%</MagicPowderDescription>
            <MagicPowderDescription>마법효과 X 2</MagicPowderDescription>
        </MagicPowerBarStyle>
    );
};

export default MagicPowerBar;
