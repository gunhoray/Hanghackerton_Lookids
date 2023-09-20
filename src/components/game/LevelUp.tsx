import React, { useState } from 'react';
import { GameActionButton, RewardItem, RewardList, RewordBox, RewordText } from './GameUI.style';
import { MagicPowder, Water } from '../../assets/icons/GameIcon';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { styled } from 'styled-components';
import { ReactComponent as Character1 } from '../../assets/elemental.pink.2.svg';
import { Form } from './GameCreate';

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

const LevelupEffect = styled.div`
    width: 100%;
    /* height: 100px; */
    position: relative;
    span {
        display: block;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border-radius: 50%;
        z-index: -1;
        &.animation-1 {
            background-color: #ffd5bd;
            animation: scale-up 1.6s infinite ease-in-out;
            animation-delay: 0.4s;
        }
        &.animation-2 {
            width: 130px;
            height: 130px;
            background-color: #ffe9bf;
            animation: scale-up 1.6s infinite ease-in-out;
            animation-delay: 0.2s;
        }
        &.animation-3 {
            width: 160px;
            height: 160px;
            background-color: #fffadf;
            animation: scale-up 1.6s infinite ease-in-out;
        }
    }
    @keyframes scale-up {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
        }
        10% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0.1;
        }
    }
`;

const LevelUp = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const onClickCreateHandler = () => {
        setIsOpen(!isOpen);
    };
    const onSubmitHandler = () => {
        alert('submit');
        setIsOpen(!isOpen);
    };
    return (
        <>
            <GameActionButton onClick={onClickCreateHandler} $color="#FF9548">
                <MagicPowder />
                레벨업 test
            </GameActionButton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'Level up!'}>
                <Form action="" onSubmit={onSubmitHandler}>
                    <p className="explanation">축하합니다~ 추카합니다~~~</p>
                    <LevelupEffect>
                        <Character1 height={'200px'} />
                        <span className="animation-3"></span>
                        <span className="animation-2"></span>
                        <span className="animation-1"></span>
                    </LevelupEffect>
                    레벨업 보상
                    <RewordPoint>
                        <RewordBox>
                            <div>
                                <Water />
                                <RewordText>3개</RewordText>
                            </div>
                            <div>
                                <MagicPowder />
                                <RewordText>3개</RewordText>
                            </div>
                        </RewordBox>
                    </RewordPoint>
                    <Button type="submit">보상 받기</Button>
                </Form>
            </Modal>
        </>
    );
};

export default LevelUp;
