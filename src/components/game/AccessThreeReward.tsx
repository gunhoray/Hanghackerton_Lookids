import React, { useState } from 'react';
import { GameActionButton, RewardItem, RewardList, RewordText } from './GameUI.style';
import { MagicPowder } from '../../assets/icons/GameIcon';
import Modal from '../common/Modal';
import Button from '../common/Button';

const AccessThreeReward = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onClickCreateHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <GameActionButton onClick={onClickCreateHandler} $color="#FF9548">
                <MagicPowder />
                마법가루
            </GameActionButton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'마법가루 보너스'}>
                <p className="explanation">
                    마법가루 보너스 하면 이로로요로로 좋아좋아 뭔가 좋아 좋을 것 같기도우오오오
                </p>
                <RewardList>
                    <RewardItem className="three">
                        <p>
                            1일차 <span className="time">0:00~8:00</span>
                        </p>
                        <MagicPowder />
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem className="three">
                        <p>
                            2일차 <span className="time">8:00~18:00</span>
                        </p>
                        <MagicPowder />
                        <RewordText>3개</RewordText>
                    </RewardItem>
                    <RewardItem className="three">
                        <p>
                            3일차 <span className="time">18:00~24:00</span>
                        </p>
                        <MagicPowder />
                        <RewordText>3개</RewordText>
                    </RewardItem>
                </RewardList>
                <Button type="submit">보상 받기</Button>
            </Modal>
        </>
    );
};

export default AccessThreeReward;
