import React, { useState } from 'react';
import { GameActionButton, RewardItem, RewardList, RewordBox, RewordText } from './GameUI.style';
import { MagicPowder, Water } from '../../assets/icons/GameIcon';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { styled } from 'styled-components';
import { ReactComponent as Character1 } from '../../assets/elemental.pink.2.svg';

const RewordPoint = styled.div`
    width: 100%;
    padding: 16px;
    background: #efefef;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const LevelUp = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const onClickCreateHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <GameActionButton onClick={onClickCreateHandler} $color="#FF9548">
                <MagicPowder />
                레벨업 test
            </GameActionButton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'Level up!'}>
                <p className="explanation">축하합니다~ 추카합니다~~~</p>
                <Character1 height={'200px'} />
                <RewordPoint>
                    <RewordBox>
                        <Water />
                        <MagicPowder />
                    </RewordBox>
                    <RewordText>3개</RewordText>
                </RewordPoint>
                <Button type="submit">보상 받기</Button>
            </Modal>
        </>
    );
};

export default LevelUp;
