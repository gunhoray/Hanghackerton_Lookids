import React, { useEffect, useState } from 'react';
import { GameActionButton } from './GameUI.style';
import { MagicPowder } from '../../assets/icons/GameIcon';
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
import { useMutation, useQueryClient } from 'react-query';
import { clearMission } from '../../apis/fairy';
// import { styled } from 'styled-components';

const MagicpowderReward = () => {
    const [getRewardIcon, setGetRewardIcon] = useState<boolean>(false);
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );

    const { clearedShareMission, clearedAttendanceMission, clearedPurchaseMission } = useSelector(
        (state: RootState) => {
            return (
                state.user?.data?.fairy || {
                    clearedShareMission: false,
                    clearedAttendanceMission: false,
                    clearedPurchaseMission: false,
                }
            );
        }
    );

    const { share, purchase, attendance } = useSelector((state: RootState) => {
        return state.magicMission.success;
    });

    useEffect(() => {
        if (clearedShareMission) {
            dispatch(GET_REWARD_MISSION('share'));
        }
        if (clearedPurchaseMission) {
            dispatch(GET_REWARD_MISSION('purchase'));
        }
        if (clearedAttendanceMission) {
            dispatch(GET_REWARD_MISSION('attendance'));
        }
    }, []);

    useEffect(() => {
        const state = [share, purchase, attendance];
        let isSuccess = false;
        for (let i = 0; i < state.length; i++) {
            if (state[i] === 'success') {
                isSuccess = true;
                break;
            }
        }
        if (isSuccess) {
            setGetRewardIcon(true);
        } else {
            setGetRewardIcon(false);
        }
    }, [share, purchase, attendance]);

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
                {getRewardIcon && <span className="can-get-reward"></span>}
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
    const queryClient = useQueryClient();

    const mutation = useMutation((mission: SuccessKeys) => clearMission(mission), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('user');
        },
    });
    const GetRewardHandler = (mission: SuccessKeys) => {
        mutation.mutate(mission);
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
