import React, { useState } from 'react';
import { GameActionButton } from './GameUI.style';
import { MagicPowder, Water } from '../../assets/icons/GameIcon';
import BottomSheet, {
    MissionButton,
    MissionIcon,
    MissionItem,
    MissionList,
    MissionText,
    useBottomSheet,
} from '../common/BottomSheet';
// import { styled } from 'styled-components';

const MagicpowderReward = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );
    return (
        <>
            <GameActionButton onClick={onClickShowHandler} $color="#FF9548">
                <MagicPowder />
                마법가루
            </GameActionButton>
            {isOpen && (
                <BottomSheet
                    isOpen={isOpen}
                    isShow={isShow}
                    setIsShow={setIsShow}
                    setIsOpen={setIsOpen}
                    actionTitle={'마법가루 받기'}
                >
                    <MissionList $color={'#FFE7C2'}>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>공유하기</MissionText>
                                <MissionButton>링크복사</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>매일 출석하기 (1/1)</MissionText>
                                <MissionButton>출석하기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>상품 구매하기 (1/1)</MissionText>
                                <MissionButton>둘러보기</MissionButton>
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default MagicpowderReward;
