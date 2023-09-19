import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { XmarkIcon } from '../../assets/icons/SVG';
const OverlayBG = styled.div`
    position: fixed;
    top: 0;
    /* left: 0; */
    max-width: 360px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const ModalBox = styled.div`
    background-color: #fff;
    max-width: 330px;
    width: 90%;
    min-height: 30vh;
    padding: 30px 24px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    text-align: center;
    line-height: 1.6;
`;
const ModalHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;
const ModalTitle = styled.p`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
`;

const ModalCloseButton = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    background-color: #90ee90;
    cursor: pointer;
    svg {
        transform: scale(1.2);
        path {
            fill: green;
        }
    }
`;

type modalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
    actionTitle: string;
    onClickEvent?: () => void;
};

const Modal = ({ isOpen, setIsOpen, actionTitle, children, onClickEvent }: modalProps) => {
    const onClickCloseHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
    return (
        <>
            {isOpen &&
                ReactDOM.createPortal(
                    <OverlayBG>
                        <ModalBox>
                            <ModalHeader>
                                <ModalTitle>{actionTitle}</ModalTitle>
                                <ModalCloseButton onClick={onClickCloseHandler}>
                                    <XmarkIcon />
                                </ModalCloseButton>
                            </ModalHeader>
                            {children}
                        </ModalBox>
                    </OverlayBG>,
                    document.getElementById('modal-root') as HTMLDivElement
                )}
        </>
    );
};

export default Modal;
