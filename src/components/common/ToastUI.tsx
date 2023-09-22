import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../../redux/config/configStore';
import { Link, useNavigate } from 'react-router-dom';
import { CLEAR_TOAST } from '../../redux/modules/toastSlice';

const AlarmContainerStyle = styled.div`
    max-width: 320px;
    width: 90%;
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1001;
`;

const AlarmBox = styled.div`
    width: 100%;
    padding: 0 16px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    margin-bottom: 12px;
    transition: all 0.3s ease-in-out;
    animation: fadeIn 1s forwards ease-in-out, fadeOut 1s forwards ease-in-out;
    animation-delay: 0s, 5s;
    p {
        text-align: center;
        font-weight: 700;
        font-size: 16px;
        padding: 16px 0;
        color: #fff;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translate(0, -100px);
        }
        100% {
            opacity: 1;
            transform: translate(0, 0);
        }
    }
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translate(0, 0);
        }
        99% {
            opacity: 0;
            transform: translate(0, -100px);
        }
        100% {
            opacity: 0;
            transform: translate(0, -100px);
            display: none;
        }
    }
    @keyframes ready-fadeOut {
        0% {
            opacity: 1;
            transform: translate(0, 0);
        }
        99% {
            opacity: 0;
            transform: translate(600%, 0);
        }
        100% {
            opacity: 0;
            transform: translate(600%, 0);
            display: none;
        }
    }
`;

const ToastButton = styled(Link)`
    background-color: #000;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 80%;
        height: 80%;
    }
`;

const FADE_OUT_INTERVAL = 5000;

type Props = {
    className?: string;
    message: string;
    // alarm: string;
    isShow?: boolean;
    setIsShow?: any;
};

const ToastUI = ({ message }: Props) => {
    return (
        <AlarmBox>
            {/* <ToastIconBox><Bell /></ToastIconBox> */}
            <p>{message}</p>
            <ToastButton to="/game">보상 받으러 가기</ToastButton>
        </AlarmBox>
    );
};

const ToastUIContainer = () => {
    const { message } = useSelector((state: RootState) => {
        return state.toast;
    });
    const dispatch = useDispatch();
    const [toastArr, setToastArr] = useState<any[]>([]);

    const addNotification = (message: any) => {
        const newNotification = {
            message,
            id: Date.now(),
        };
        setToastArr((prevArr) => [...prevArr, newNotification]);
        setTimeout(() => {
            removeNotification(newNotification.id);
        }, FADE_OUT_INTERVAL + 2000);
    };

    const removeNotification = (id: any) => {
        setToastArr((prevArr) => prevArr.filter((notification) => notification.id !== id));
        dispatch(CLEAR_TOAST());
    };

    useEffect(() => {
        if (message) {
            addNotification(message);
            // console.log(message);
        }
    }, [message]);

    return (
        <>
            {message && (
                <AlarmContainerStyle>
                    {toastArr.map((toast) => {
                        return <ToastUI message={toast.message} key={toast.id} />;
                    })}
                </AlarmContainerStyle>
            )}
        </>
    );
};

export default ToastUIContainer;
