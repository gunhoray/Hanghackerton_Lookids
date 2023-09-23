import React, { useRef, useState } from 'react';
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

const SHARE_LINK = 'http://101.101.218.26:3000';

const ShareLink = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const dispatch = useDispatch();

    const onShareButtonClick = () => {
        if (navigator?.share) {
            navigator
                .share({
                    title: 'WebShare API Demo',
                    url: SHARE_LINK,
                })
                .then(() => {})
                .catch(console.error);
        } else {
            setIsOpen(true);
        }
    };

    const onCopyLinkClick = async () => {
        if (textareaRef.current) {
            textareaRef.current.value = SHARE_LINK;
            textareaRef.current.select();
            try {
                document.execCommand('copy');
            } catch (err) {}
        }
    };

    return (
        <>
            <GameActionButton onClick={onShareButtonClick}>
                <Share />
                공유하기
            </GameActionButton>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} actionTitle={'공유하기'}>
                <ShareBox>
                    <ShareLinkStyle>
                        <ShareLinkBox>{SHARE_LINK}</ShareLinkBox>
                        <ShareButton onClick={onCopyLinkClick}>Copy Link</ShareButton>
                    </ShareLinkStyle>
                </ShareBox>
            </Modal>
            <textarea
                ref={textareaRef}
                style={{ position: 'absolute', left: '-9999px' }}
                readOnly
            />
        </>
    );
};

export default ShareLink;
