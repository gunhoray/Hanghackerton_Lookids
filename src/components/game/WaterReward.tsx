import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { ADD_PAGE, CLEAR_TIME, TIME_INTERVAL } from '../../redux/modules/toastSlice';
import { useMutation, useQueryClient } from 'react-query';
import { clearMission } from '../../apis/fairy';
import {
    DEW_GET_REWARD_MISSION,
    DEW_SUCCESS_MISSION,
    DEW_TIME_MISSION,
    dewSuccessKeys,
} from '../../redux/modules/dewSlice';
const WaterReward = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );
    const { getReward } = useSelector((state: RootState) => {
        return state.toast;
    });
    const { clearedTrendMission, clearedEventMission, clearedNewMission, clearedResellMission } =
        useSelector((state: RootState) => {
            return state.user.data.fairy;
        });

    const { trend, event, newItem, resell } = useSelector((state: RootState) => {
        return state.dewMission.success;
    });
    useEffect(() => {
        if (clearedTrendMission) {
            dispatch(DEW_GET_REWARD_MISSION('trend'));
        }
        if (clearedEventMission) {
            dispatch(DEW_GET_REWARD_MISSION('event'));
        }
        if (clearedNewMission) {
            dispatch(DEW_GET_REWARD_MISSION('newItem'));
        }
        if (clearedResellMission) {
            dispatch(DEW_GET_REWARD_MISSION('resell'));
        }
    }, []);

    const nav = useNavigate();
    const dispatch = useDispatch();

    const queryClient = useQueryClient();

    const mutation = useMutation((missionType: string) => clearMission(missionType), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('user');
        },
    });

    return (
        <>
            <GameActionButton onClick={onClickShowHandler} $color="#48B2FF">
                {getReward && <span className="can-get-reward"></span>}
                <Water />
                이슬
            </GameActionButton>
            {isOpen && (
                <BottomSheet
                    isOpen={isOpen}
                    isShow={isShow}
                    setIsShow={setIsShow}
                    setIsOpen={setIsOpen}
                    actionTitle={'이슬받기'}
                >
                    <MissionList $color={'#bbf3ff'}>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>트렌드 구경하기 (30초)</MissionText>
                                <DewButton
                                    state={trend}
                                    buttonText={'바로가기'}
                                    mission={'trend'}
                                    route={'/'}
                                />
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>이벤트 구경하기</MissionText>
                                <DewButton
                                    state={event}
                                    buttonText={'바로가기'}
                                    mission={'event'}
                                    route={'/'}
                                />
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>신상마켓 구경하기</MissionText>
                                <DewButton
                                    state={newItem}
                                    buttonText={'바로가기'}
                                    mission={'newItem'}
                                    route={'/'}
                                />
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>리셀마켓 구경하기</MissionText>
                                <DewButton
                                    state={resell}
                                    buttonText={'바로가기'}
                                    mission={'resell'}
                                    route={'/'}
                                />
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default WaterReward;

type buttonProps = {
    state: string;
    buttonText: string;
    mission: dewSuccessKeys;
    route: string;
    missionEvent?: () => void;
};

const DewButton = ({ state, buttonText, mission, route, missionEvent }: buttonProps) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { page, time, getReward } = useSelector((state: RootState) => {
        return state.toast;
    });
    const mutation = useMutation((mission: dewSuccessKeys) => clearMission(mission), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('user');
        },
    });
    const nav = useNavigate();

    const onClickHandler = () => {
        nav(route);
        dispatch(ADD_PAGE(mission));
        dispatch(DEW_TIME_MISSION(mission));
    };
    const GetRewardHandler = (mission: dewSuccessKeys) => {
        mutation.mutate(mission);
        dispatch(DEW_GET_REWARD_MISSION(mission));
        dispatch(CLEAR_TIME());
    };
    useEffect(() => {
        if (time === 0) {
            dispatch(DEW_SUCCESS_MISSION(mission));
        }
    }, []);
    switch (state) {
        case 'yet':
            return <MissionButton onClick={onClickHandler}>바로 가기</MissionButton>;
        case 'time':
            return <MissionButton $color={'#efefef'}>{time}s</MissionButton>;
        case 'success':
            return (
                <MissionButton $color={'#7BDFFF'} onClick={() => GetRewardHandler(mission)}>
                    보상받기
                </MissionButton>
            );
        case 'get-reward':
            return <MissionButton $color={'#efefef'}>보상받음</MissionButton>;
        default:
            return <MissionButton>{buttonText}</MissionButton>;
    }
};
