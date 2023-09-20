import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { XmarkIcon } from '../../assets/icons/SVG';

const OverlayBG = styled.div`
    position: fixed;
    top: 0;
    max-width: 360px;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    z-index: 999;
    cursor: pointer;
    &.fadein {
        animation: fadein 0.8s forwards;
    }
    &.fadeout {
        animation: fadeout 0.8s forwards;
    }
    @keyframes fadein {
        0% {
            background-color: rgba(0, 0, 0, 0);
        }
        99% {
            background-color: rgba(0, 0, 0, 0.5);
        }
        100% {
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
        }
    }
    @keyframes fadeout {
        0% {
            background-color: rgba(0, 0, 0, 0.5);
        }
        99% {
            background-color: rgba(0, 0, 0, 0);
        }
        100% {
            background-color: rgba(0, 0, 0, 0);
            display: none;
        }
    }
`;

const BottomSheetBox = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #fff;
    max-width: 360px;
    width: 100%;
    min-height: 30vh;
    padding: 10px 0px 30px;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    text-align: center;
    line-height: 1.2;
    z-index: 1000;
    &.up {
        animation: up 0.8s forwards;
    }
    &.down {
        animation: down 0.8s forwards;
    }
    @keyframes up {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }
    @keyframes down {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100%);
        }
    }
`;

const BottomSheetBoxHeader = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    cursor: pointer;
    span {
        display: block;
        background-color: #ddd;
        height: 3px;
        width: 32px;
        border-radius: 2px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
`;
const BottomSheetBoxTitle = styled.p`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    margin-top: 10px;
`;

type styleColor = {
    $color: string;
};

export const MissionList = styled.ul<styleColor>`
    width: 100%;
    --hover-color: ${(props) => props.$color + '50'};
    --color: ${(props) => props.$color || '#bbf3ff'};
`;
export const MissionItem = styled.li`
    width: 100%;
    padding: 0.4rem 0;
    border-bottom: 2px solid #efefef;
    color: #777;
    .mission-item-inner {
        padding: 0 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
    }
    &:hover {
        background-color: var(--hover-color);
    }
`;
export const MissionIcon = styled.span`
    background-color: var(--color);
    width: 36px;
    height: 36px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

type styleProps = {
    $width?: string;
};

export const MissionText = styled.p<styleProps>`
    width: ${(props) => (props.$width ? props.$width : 'calc(100% - 140px)')};
    text-align: start;
`;
export const MissionButton = styled.button`
    font-size: 0.9rem;
    /* background-color: #bbf3ff; */
    background-color: var(--color);
    color: #696969;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    cursor: pointer;
`;

type bottomSheetProps = {
    isShow: boolean;
    isOpen: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
    actionTitle: string;
    onClickEvent?: () => void;
};

export const useBottomSheet = (initialIsOpen = false, initialIsShow = false) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const [isShow, setIsShow] = useState(initialIsShow);
    const onClickShowHandler = () => {
        setIsOpen(true);
        setIsShow(true);
    };
    return { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler };
};

const BottomSheet = ({
    isOpen,
    setIsOpen,
    isShow,
    setIsShow,
    actionTitle,
    children,
    onClickEvent,
}: bottomSheetProps) => {
    const onClickCloseHandler = () => {
        setIsShow(false);
        setTimeout(() => {
            setIsOpen(false); // 0.8초 후에 모달 열기/닫기 상태를 토글합니다.
        }, 800); // 0.8초 (800 밀리초) 지연
    };

    return (
        <>
            <OverlayBG
                className={isShow ? 'fadein' : 'fadeout'}
                onClick={onClickCloseHandler}
            ></OverlayBG>
            <BottomSheetBox className={isShow ? 'up' : 'down'}>
                <BottomSheetBoxHeader onClick={onClickCloseHandler}>
                    <span></span>
                    <BottomSheetBoxTitle>{actionTitle}</BottomSheetBoxTitle>
                </BottomSheetBoxHeader>
                {children}
            </BottomSheetBox>
        </>
    );
};

export default BottomSheet;
