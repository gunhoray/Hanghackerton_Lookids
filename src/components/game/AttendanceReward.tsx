import React, { useState } from 'react';
import {
    Calender,
    FailReward,
    GetReward,
    Heart,
    MagicPowder,
    Water,
} from '../../assets/icons/GameIcon';
import {
    GameActionButton,
    RewardItem,
    RewardList,
    RewordBox,
    RewordText,
} from '../game/GameUI.style';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Form } from './GameCreate';

const rewardData = [
    {
        day: '1일차',
        items: [{ name: 'Water', count: 3 }],
        past: true,
        received: false,
    },
    {
        day: '2일차',
        items: [{ name: 'Water', count: 3 }],
        past: true,
        received: true,
    },
    {
        day: '3일차',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: false,
        received: false,
    },
    {
        day: '4일차',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: false,
        received: false,
    },
    {
        day: '5일차',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: false,
        received: false,
    },
    {
        day: '6일차',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: false,
        received: false,
    },
    {
        day: '7일차',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: false,
        received: false,
    },
];

const AttendanceReward = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onClickCreateHandler = () => {
        setIsOpen(!isOpen);
    };
    const onSubmitHandler = () => {
        alert('submit');
        setIsOpen(!isOpen);
    };
    return (
        <>
            <GameActionButton onClick={onClickCreateHandler} $color="#46B91E">
                <Calender />
                출석부
            </GameActionButton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'출석체크'}>
                <Form action="" onSubmit={onSubmitHandler}>
                    <p className="explanation">
                        출석체크를 하면 이로로요로로 좋아좋아 뭔가 좋아 좋을 것 같기도우오오오
                    </p>
                    <RewardList>
                        {rewardData.map((day, index) => (
                            <RewardItem key={index} className={day.past ? 'past' : ''}>
                                {day.day}
                                <RewordBox>
                                    {!day.past ? (
                                        day.items.map((item, itemIndex) => (
                                            <React.Fragment key={itemIndex}>
                                                {item.name === 'Water' && (
                                                    <div>
                                                        <Water />
                                                        <RewordText>{item.count}개</RewordText>
                                                    </div>
                                                )}
                                                {item.name === 'MagicPowder' && (
                                                    <div>
                                                        <MagicPowder />
                                                        <RewordText>{item.count}개</RewordText>
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        ))
                                    ) : day.received ? (
                                        <React.Fragment>
                                            <GetReward />
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <FailReward />
                                        </React.Fragment>
                                    )}
                                </RewordBox>
                            </RewardItem>
                        ))}
                    </RewardList>
                    <Button type="submit">보상 받기</Button>
                </Form>
            </Modal>
        </>
    );
};

export default AttendanceReward;
