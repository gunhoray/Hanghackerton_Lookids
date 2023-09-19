import React, { useState } from 'react';
import { GameActionButton } from './GameUI.style';
import { Water } from '../../assets/icons/GameIcon';
import BottomSheet from '../common/BottomSheet';
import { styled } from 'styled-components';

const MissionList = styled.ul`
    width: 100%;
`;
const MissionItem = styled.li`
    width: 100%;
    padding: 0.4rem 0;
    border-bottom: 2px solid #efefef;
    color: #777;
    .mission-item-inner {
        padding: 0 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
    }
    &:hover {
        background-color: #f5feff;
    }
`;
const MissionIcon = styled.span`
    background-color: #bbf3ff;
    width: 36px;
    height: 36px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MissionText = styled.p`
    width: calc(100% - 140px);
    text-align: start;
`;
const MissionButton = styled.button`
    font-size: 0.9rem;
    background-color: #bbf3ff;
    color: #696969;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    cursor: pointer;
`;
const WaterReward = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);
    const onClickShowHandler = () => {
        setIsOpen(true);
        setIsShow(!isShow);
    };

    return (
        <>
            <GameActionButton onClick={onClickShowHandler}>
                <Water />
            </GameActionButton>
            {isOpen && (
                <BottomSheet isShow={isShow} setIsShow={setIsShow} actionTitle={'이슬받기'}>
                    <MissionList>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>미션 임~파써블~~ 웨압~~</MissionText>
                                <MissionButton>보상 받기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>미션 임~파써블~~ 웨압~~</MissionText>
                                <MissionButton>보상 받기</MissionButton>
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default WaterReward;
