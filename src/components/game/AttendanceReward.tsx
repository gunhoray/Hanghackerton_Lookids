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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { useMutation, useQueryClient } from 'react-query';
import { clearMission } from '../../apis/fairy';
import { fetchUserSuccess } from '../../redux/modules/userSlice';

const rewardData = [
    {
        day: '월요일',
        items: [{ name: 'Water', count: 3 }],
        past: true,
        received: false,
    },
    {
        day: '화요일',
        items: [{ name: 'Water', count: 3 }],
        past: true,
        received: true,
    },
    {
        day: '수요일',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: true,
        received: false,
    },
    {
        day: '목요일',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: true,
        received: false,
    },
    {
        day: '금요일',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: true,
        received: false,
    },
    {
        day: '토요일',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: true,
        received: false,
    },
    {
        day: '일요일',
        items: [
            { name: 'Water', count: 3 },
            { name: 'MagicPowder', count: 1 },
        ],
        past: true,
        received: false,
    },
];

const AttendanceReward = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {
        clearedSUNMission,
        clearedMONMission,
        clearedTUEMission,
        clearedWEDMission,
        clearedTHUMission,
        clearedFRIMission,
        clearedSATMission,
    } = useSelector((state: RootState) => {
        return state.user.data.fairy;
    });

    // 현재 날짜를 가져옵니다.
    const today = new Date();
    const clearMissionList = [
        clearedMONMission,
        clearedTUEMission,
        clearedWEDMission,
        clearedTHUMission,
        clearedFRIMission,
        clearedSATMission,
        clearedSUNMission,
    ];

    const dayOfWeek = today.getDay() - 1;
    const missionDayOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    for (let i = dayOfWeek; i <= rewardData.length; i++) {
        if (rewardData[i]) {
            rewardData[i].past = false;
        }
    }
    for (let j = 0; j < rewardData.length; j++) {
        if (rewardData[j]) {
            rewardData[j].received = clearMissionList[j];
        }
    }
    const onClickCreateHandler = () => {
        setIsOpen(!isOpen);
    };
    const queryClient = useQueryClient();

    const mutation = useMutation((missionType: string) => clearMission(missionType), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('user');
        },
    });

    const onSubmitHandler = () => {
        const clearDayOfWeek = missionDayOfWeek[dayOfWeek];
        mutation.mutate(clearDayOfWeek);
        setIsOpen(!isOpen);
    };
    return (
        <>
            <GameActionButton onClick={onClickCreateHandler} $color="#46B91E">
                {!rewardData[dayOfWeek].received && <span className="can-get-reward"></span>}
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
                            <RewardItem
                                key={`attendance-reward-${index}`}
                                className={
                                    day.past || day.received
                                        ? 'past'
                                        : index === dayOfWeek
                                        ? 'today'
                                        : ''
                                }
                            >
                                {day.day}
                                <RewordBox>
                                    {day.received ? (
                                        <React.Fragment>
                                            <GetReward />
                                        </React.Fragment>
                                    ) : day.past ? (
                                        <React.Fragment>
                                            <FailReward />
                                        </React.Fragment>
                                    ) : (
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
                                    )}
                                </RewordBox>
                            </RewardItem>
                        ))}
                    </RewardList>
                    {/* {rewardData[dayOfWeek].received ? ( */}
                    <Button type="submit" disabled={rewardData[dayOfWeek].received}>
                        {rewardData[dayOfWeek].received ? '보상 받음' : '보상 받기'}
                    </Button>
                    {/* ) : ( */}
                    {/* <Button type="submit">보상 받기</Button> */}
                    {/* )} */}
                </Form>
            </Modal>
        </>
    );
};

export default AttendanceReward;
