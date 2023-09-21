import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RootState } from '../../../redux/config/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SPEECH } from '../../../redux/modules/speechBubbleSlice';

const SpeechBubbleBox = styled.div`
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
`;

const SpeechBox = styled.div`
    padding: 0.8rem;
    background-color: #fff;
    border-radius: 16px;
    /* border: 1px solid #000; */
    text-align: center;
    font-size: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const BG = styled.div`
    width: 100%;
    min-height: 5vh;
    /* background-color: #000; */
`;

const TailStyle = styled.span`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 80%);
`;

const SpeechBubble = () => {
    const { speech } = useSelector((state: RootState) => {
        return state.speechBubble;
    });

    return (
        <>
            <BG>
                {speech && (
                    <SpeechBubbleBox>
                        <SpeechBox>{speech}</SpeechBox>
                        <TailStyle>
                            <SpeechBubbleTail />
                        </TailStyle>
                    </SpeechBubbleBox>
                )}
            </BG>
        </>
    );
};

const SpeechBubbleTail = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
        >
            <path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="white" />
        </svg>
    );
};
export default SpeechBubble;
