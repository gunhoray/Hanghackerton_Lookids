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
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { ADD_PAGE, CLEAR_TIME, TIME_INTERVAL } from '../../redux/modules/toastSlice';
const WaterReward = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );
    const { page, time, getReward } = useSelector((state: RootState) => {
        return state.toast;
    });

    const nav = useNavigate();
    const dispatch = useDispatch();
    const onClickHandler = () => {
        nav('/');
        dispatch(ADD_PAGE('main'));
    };

    const onClickGetRewardHandler = () => {
        dispatch(CLEAR_TIME());
        setIsOpen(!isOpen);
        alert('get reward');
    };
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
                                {page !== 'main' && getReward === false ? (
                                    <MissionButton onClick={onClickHandler}>
                                        바로 가기
                                    </MissionButton>
                                ) : time === 0 ? (
                                    <MissionButton
                                        $color="#7BDFFF"
                                        onClick={onClickGetRewardHandler}
                                    >
                                        보상 받기
                                    </MissionButton>
                                ) : (
                                    <MissionButton $color="#efefef" onClick={() => nav('/')}>
                                        {time}s
                                    </MissionButton>
                                )}
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>이벤트 구경하기</MissionText>
                                <MissionButton $color="#efefef">바로 가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>신상마켓 구경하기</MissionText>
                                <MissionButton $color="#efefef">바로 가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>리셀마켓 구경하기</MissionText>
                                <MissionButton $color="#efefef">바로 가기</MissionButton>
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default WaterReward;
