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
import { ADD_PAGE, TIME_INTERVAL } from '../../redux/modules/toastSlice';
const WaterReward = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );

    const { page } = useSelector((state: RootState) => {
        return state.toast;
    });

    const nav = useNavigate();
    const dispatch = useDispatch();
    const onClickHandler = () => {
        nav('/');
        dispatch(ADD_PAGE('main'));
    };

    return (
        <>
            <GameActionButton onClick={onClickShowHandler} $color="#48B2FF">
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
                                <MissionText>인기 급상승템 구경하기</MissionText>
                                <MissionButton onClick={onClickHandler}>바로 가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>오늘 뭐입지? 구경하기</MissionText>
                                <MissionButton onClick={() => nav('/')}>바로 가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>신상마켓 구경하기</MissionText>
                                <MissionButton>바로 가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>리셀마켓 구경하기</MissionText>
                                <MissionButton>바로 가기</MissionButton>
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default WaterReward;
