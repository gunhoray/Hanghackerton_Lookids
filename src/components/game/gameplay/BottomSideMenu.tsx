import React from 'react';
import styled from 'styled-components';
import { Heart, MagicPowder, Water } from '../../../assets/icons/GameIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/config/configStore';
import { useMutation, useQueryClient } from 'react-query';
import { itemtypeProps, usingItem } from '../../../apis/fairy';

const BottomsideMenu = styled.div`
    display: flex;
    margin-top: 80%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: fixed;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
`;
const PlayPageBottomButton = styled.button`
    width: 80px;
    height: 100px;
    background-color: white;
    border-radius: 10px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ButtonBox = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    gap: 5px;
    &.love {
        background-color: lightpink;
    }
    &.magicpowder {
        background-color: #ffe294;
    }
    &.water {
        background-color: lightblue;
    }
`;

const BottomSideMenu = () => {
    const { inventoryToItems } = useSelector((state: RootState) => {
        return state.user.data.inventory;
    });
    const { magicPowderGauge } = useSelector((state: RootState) => {
        return state.user.data.fairy;
    });

    const queryClient = useQueryClient();

    const mutation = useMutation((itemType: string) => usingItem(itemType), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('user');
        },
    });

    const onClickHandler = (itemType: string) => {
        mutation.mutate(itemType);
    };
    // console.log(inventoryToItems[].name)
    return (
        <BottomsideMenu>
            <PlayPageBottomButton onClick={() => onClickHandler('heart')}>
                <ButtonBox className="love">
                    <Heart />
                    사랑해주기 <br />
                    <span>{inventoryToItems[2].quantity}개</span>
                </ButtonBox>
            </PlayPageBottomButton>
            <PlayPageBottomButton
                onClick={() => onClickHandler('magicPowder')}
                disabled={magicPowderGauge > 90}
            >
                <ButtonBox className="magicpowder">
                    <MagicPowder />
                    마법가루 사용
                    <br />
                    <span>{inventoryToItems[1].quantity}개</span>
                </ButtonBox>
            </PlayPageBottomButton>
            <PlayPageBottomButton onClick={() => onClickHandler('dew')}>
                <ButtonBox className="water">
                    <Water />
                    이슬먹이기
                    <br />
                    <span>{inventoryToItems[0].quantity}개</span>
                </ButtonBox>
            </PlayPageBottomButton>
        </BottomsideMenu>
    );
};

export default BottomSideMenu;
