import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Share } from '../../assets/icons/SVG';
import { GameActionButton } from '../game/GameUI.style';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { FOCUS_OFF_SHARE, SUCCESS_MISSION } from '../../redux/modules/magicMissionSlice';
import { RootState } from '../../redux/config/configStore';

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
    // const [focus, setFocus] = useState<boolean>(true);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const dispatch = useDispatch();
    const { share } = useSelector((state: RootState) => {
        return state.magicMission;
    });
    // console.log(share);
    useEffect(() => {
        if (share) {
            setTimeout(() => dispatch(FOCUS_OFF_SHARE()), 2000);
            // setFocus(share);
        }
    }, [share]);

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
                dispatch(SUCCESS_MISSION('share'));
                setIsOpen(false);
                alert('링크가 복사되었습니다');
            } catch (err) {
                alert('링크 복사 실패했습니다.');
            }
        }
    };

    return (
        <>
            <GameActionButton onClick={onShareButtonClick} id={share ? 'shareButton' : ''}>
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
