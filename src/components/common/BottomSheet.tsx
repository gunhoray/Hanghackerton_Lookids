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

type bottomSheetProps = {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
    actionTitle: string;
    onClickEvent?: () => void;
};

const BottomSheet = ({
    isShow,
    setIsShow,
    actionTitle,
    children,
    onClickEvent,
}: bottomSheetProps) => {
    const onClickCloseHandler = () => {
        setIsShow(!isShow);
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
