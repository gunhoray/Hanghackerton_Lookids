import React, { useState } from 'react';
import { Calender, MagicPowder, Water } from '../../assets/icons/GameIcon';
import {
    GameActionButton,
    RewardItem,
    RewardList,
    RewordBox,
    RewordText,
} from '../game/GameUI.style';
import Modal from '../common/Modal';
import Button from '../common/Button';
const AttendanceReward = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onClickCreateHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <GameActionButton onClick={onClickCreateHandler} $color="#46B91E">
                <Calender />
                출석부
            </GameActionButton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'출석체크'}>
                <p className="explanation">
                    출석체크를 하면 이로로요로로 좋아좋아 뭔가 좋아 좋을 것 같기도우오오오
                </p>
                <RewardList>
                    <RewardItem className="half">
                        1일차
                        <Water />
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem className="half">
                        2일차
                        <Water />
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem>
                        3일차
                        <RewordBox>
                            <Water />
                            <MagicPowder />
                        </RewordBox>
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem>
                        4일차
                        <RewordBox>
                            <Water />
                            <MagicPowder />
                        </RewordBox>
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem>
                        5일차
                        <RewordBox>
                            <Water />
                            <MagicPowder />
                        </RewordBox>
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem>
                        6일차
                        <RewordBox>
                            <Water />
                            <MagicPowder />
                        </RewordBox>
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem>
                        7일차
                        <RewordBox>
                            <Water />
                            <MagicPowder />
                        </RewordBox>
                        <RewordText>3개</RewordText>
                    </RewardItem>
                </RewardList>
                <Button type="submit">보상 받기</Button>
            </Modal>
        </>
    );
};

export default AttendanceReward;
