import React, { useState } from 'react';
import { GameActionButton, RewardItem, RewardList, RewordText } from './GameUI.style';
import { FailReward, GetReward, MagicPowder } from '../../assets/icons/GameIcon';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Form } from './GameCreate';

const rewardData = [
    {
        day: '1일차',
        time: '0:00~8:00',
        items: [{ name: 'MagicPowder', count: 3 }],
        past: true,
        received: false,
        now: false,
    },
    {
        day: '2일차',
        time: '8:00~18:00',
        items: [{ name: 'MagicPowder', count: 3 }],
        past: false,
        received: false,
        now: true,
    },
    {
        day: '3일차',
        time: '18:00~24:00',
        items: [{ name: 'MagicPowder', count: 3 }],
        past: false,
        received: false,
        now: false,
    },
];

const AccessThreeReward = () => {
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
            <GameActionButton onClick={onClickCreateHandler} $color="#FF9548">
                <MagicPowder />
                마법가루
            </GameActionButton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'마법가루 보너스'}>
                <Form action="" onSubmit={onSubmitHandler}>
                    <p className="explanation">
                        마법가루 보너스 하면 이로로요로로 좋아좋아 뭔가 좋아 좋을 것 같기도우오오오
                    </p>
                    <RewardList>
                        {rewardData.map((day, index) => (
                            <RewardItem
                                key={index}
                                className={`three ${day.past ? 'past' : ''} ${
                                    day.now ? 'active-now' : ''
                                }`}
                            >
                                <p>
                                    {day.day} <span className="time">{day.time}</span>
                                </p>
                                {!day.past ? (
                                    day.items.map((item, itemIndex) => (
                                        <React.Fragment key={itemIndex}>
                                            {item.name === 'MagicPowder' && <MagicPowder />}
                                            {/* 다른 아이템이 있다면 같은 방식으로 추가 */}
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
                                <RewordText>
                                    {day.items.reduce((total, item) => total + item.count, 0)}개
                                </RewordText>
                            </RewardItem>
                        ))}
                    </RewardList>
                    <Button type="submit">보상 받기</Button>
                </Form>
            </Modal>
        </>
    );
};

export default AccessThreeReward;
