import React, { useEffect, useRef, useState } from 'react';
import { GameActionButton, RewardItem, RewardList, RewordBox, RewordText } from './GameUI.style';
import { Calender, LastReward, MagicPowder, MoneyReward, Water } from '../../assets/icons/GameIcon';
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
    .last-level {
        animation: fade-out 0.8s forwards ease-in-out;
    }
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
        &.bye-message {
            padding: 20px 0;
            width: 90%;
            z-index: 10;
            font-size: 24px;
            opacity: 0;
            animation: fade-in 1.6s forwards ease-in-out;
            animation-delay: 0.8s;
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.3;
        }
    }
`;

interface levelProps {
    isOpen: boolean;
    setIsOpen: any;
}

const LastLevelUp = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const levelRef = useRef();
    const user = useSelector((state: RootState) => state.user);
    const { level, name } = useSelector((state: RootState) => {
        return state.user.data.fairy || { level: 1, name: '플립' };
    });

    const Character = useCharacter(user);

    useEffect(() => {
        if (levelRef.current === 2 && level > levelRef.current) {
            setIsOpen(!isOpen);
        }
        levelRef.current = level;
    }, [level]);

    const onCLickOpenHanlder = () => {
        setIsOpen(!isOpen);
    };

    const onSubmitHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GameActionButton onClick={onCLickOpenHanlder} $color="#FF84A9">
                {!isOpen && <span className="can-get-reward"></span>}
                <LastReward />
                보내주기
            </GameActionButton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'Last level up!'}>
                <Form action="" onSubmit={onSubmitHandler}>
                    <p className="explanation">축하합니다~ 추카합니다~~~</p>
                    <LevelupEffect>
                        <div className="last-level">
                            <Character />
                        </div>
                        <span className="bye-message">
                            지금까지 <br /> 키워주셔서 감사합니다
                        </span>
                    </LevelupEffect>
                    {name}이 포인트를 남겨두고 떠나요
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

export default LastLevelUp;
