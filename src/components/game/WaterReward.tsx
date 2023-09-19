import React, { useState } from 'react';
import { GameActionButton } from './GameUI.style';
import { Water } from '../../assets/icons/GameIcon';
import BottomSheet, {
    MissionButton,
    MissionIcon,
    MissionItem,
    MissionList,
    MissionText,
    useBottomSheet,
} from '../common/BottomSheet';
// import { styled } from 'styled-components';

const WaterReward = () => {
    const { isOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(false, false);
    return (
        <>
            <GameActionButton onClick={onClickShowHandler} $color="#48B2FF">
                <Water />
                이슬
            </GameActionButton>
            {isOpen && (
                <BottomSheet isShow={isShow} setIsShow={setIsShow} actionTitle={'이슬받기'}>
                    <MissionList $color={'#bbf3ff'}>
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
