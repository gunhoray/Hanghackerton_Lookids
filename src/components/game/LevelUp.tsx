import React, { useEffect, useRef, useState } from 'react';
import { GameActionButton, RewardItem, RewardList, RewordBox, RewordText } from './GameUI.style';
import { MagicPowder, MoneyReward, Water } from '../../assets/icons/GameIcon';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { styled } from 'styled-components';
import { ReactComponent as Character1 } from '../../assets/elemental.pink.2.svg';
import { Form } from './GameCreate';
import FloweryGrow from '../gamecharcter/FloweryGrow';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { useCharacter } from '../../hooks/useCharacter';

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

interface levelProps {
    isOpen: boolean;
    setIsOpen: any;
}

const LevelUp = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const levelRef = useRef();
    const user = useSelector((state: RootState) => state.user);
    const { level } = useSelector((state: RootState) => {
        return state.user.data.fairy;
    });
    const Character = useCharacter(user);
    useEffect(() => {
        if (levelRef.current === 1 && level > levelRef.current) {
            setIsOpen(!isOpen);
        }
        levelRef.current = level;
    }, [level]);

    const onSubmitHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'Level up!'}>
                <Form action="" onSubmit={onSubmitHandler}>
                    <p className="explanation">축하합니다~ 추카합니다~~~</p>
                    <LevelupEffect>
                        <div style={{ width: '70%' }}>
                            <Character />
                        </div>
                        <span className="animation-3"></span>
                        <span className="animation-2"></span>
                        <span className="animation-1"></span>
                    </LevelupEffect>
                    레벨업 보상
                    <RewordPoint>
                        <RewordBox>
                            <div>
                                <MoneyReward />
                                <RewordText>5000 포인트</RewordText>
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
