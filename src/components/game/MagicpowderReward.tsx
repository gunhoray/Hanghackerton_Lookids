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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import {
    GET_REWARD_MISSION,
    SUCCESS_MISSION,
    SuccessKeys,
} from '../../redux/modules/magicMissionSlice';
import { useNavigate } from 'react-router-dom';
// import { styled } from 'styled-components';

const MagicpowderReward = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );

    const { share, purchase, attendance } = useSelector((state: RootState) => {
        return state.magicMission.success;
    });
    const dispatch = useDispatch();
    const nav = useNavigate();
    const shareMissionHandler = () => {
        setIsOpen(!isOpen);
    };
    const purchaseMissionHandler = () => {
        nav('/');
    };
    const attendanceMissionHandler = () => {
        dispatch(SUCCESS_MISSION('attendance'));
    };

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
                                {/* <MissionButton onClick={() => GetRewardHandler('share')}> */}
                                <MagicpowderButton
                                    state={share}
                                    buttonText={'바로가기'}
                                    mission={'share'}
                                    missionEvent={shareMissionHandler}
                                />
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>매일 출석하기</MissionText>
                                <MagicpowderButton
                                    state={attendance}
                                    buttonText={'출석하기'}
                                    mission={'attendance'}
                                    missionEvent={attendanceMissionHandler}
                                />
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>상품 구매하기</MissionText>
                                <MagicpowderButton
                                    state={purchase}
                                    buttonText={'둘러보기'}
                                    mission={'purchase'}
                                    missionEvent={purchaseMissionHandler}
                                />
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default MagicpowderReward;

type buttonProps = {
    state: string;
    buttonText: string;
    mission: SuccessKeys;
    missionEvent: () => void;
};

const MagicpowderButton = ({ state, buttonText, mission, missionEvent }: buttonProps) => {
    const dispatch = useDispatch();

    const GetRewardHandler = (mission: SuccessKeys) => {
        dispatch(GET_REWARD_MISSION(mission));
    };
    switch (state) {
        case 'yet':
            return <MissionButton onClick={missionEvent}>{buttonText}</MissionButton>;
        case 'success':
            return (
                <MissionButton $color={'#FFD79B'} onClick={() => GetRewardHandler(mission)}>
                    보상받기
                </MissionButton>
            );
        case 'get-reward':
            return <MissionButton $color={'#efefef'}>보상받음</MissionButton>;
        default:
            return <MissionButton>{buttonText}</MissionButton>;
    }
};
