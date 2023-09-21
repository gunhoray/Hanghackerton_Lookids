import React, { useState } from 'react';
import styled from 'styled-components';
import { Share } from '../../assets/icons/SVG';
import { GameActionButton } from '../game/GameUI.style';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { SUCCESS_MISSION } from '../../redux/modules/magicMissionSlice';

const ShareLinkStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    background-color: #eee;
    border-radius: 16px;
`;

const ShareLinkBox = styled.div`
    margin-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ShareBox = styled.div`
    /* display: none; */
    width: 100%;
    /* z-index: -1; */
    /* &.is-open { */
    display: block;
    z-index: 2;
    /* } */
`;

const ShareButton = styled.button`
    width: 50%;
    padding: 8px;
    background-color: #fff;
    border-radius: 16px;
    cursor: pointer;
`;

const SHARE_LINK = 'https://codepen.io/ayoisaiah/pen/YbNazJ';

const ShareLink = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onShareButtonClick = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: 'WebShare API Demo',
                    url: SHARE_LINK,
                })
                .then(() => {
                    console.log('Thanks for sharing!');
                })
                .catch(console.error);
        } else {
            setIsOpen(true);
        }
    };

    const onCopyLinkClick = async () => {
        try {
            await navigator.clipboard.writeText(SHARE_LINK);
            dispatch(SUCCESS_MISSION('share'));
        } catch (err) {
            console.error('Failed to copy link: ', err);
        }
    };

    return (
        <>
            <GameActionButton onClick={onShareButtonClick}>
                <Share />
            </GameActionButton>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'공유하기'}>
                <ShareBox>
                    <ShareLinkStyle>
                        <ShareLinkBox>{SHARE_LINK}</ShareLinkBox>
                        <ShareButton onClick={onCopyLinkClick}>Copy Link</ShareButton>
                    </ShareLinkStyle>
                </ShareBox>
            </Modal>
        </>
    );
};

export default ShareLink;
