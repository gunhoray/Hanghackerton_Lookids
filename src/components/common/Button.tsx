import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface buttonProps {
    disabled?: any;
}

const ButtonStyle = styled.button`
    padding: 0.8rem;
    margin: 0 auto;
    min-width: 200px;
    border: 2px solid #90ee90;
    border-radius: 12px;
    display: block;
    cursor: pointer;
    &:hover {
        background-color: #90ee9090;
    }
    &:active {
        background-color: #90ee90;
        color: #fff;
    }
    &:focus {
        background-color: #fff;
        color: #90ee90;
    }
`;

const DisabledButton = styled(ButtonStyle)`
    border: 2px solid #efefef;
    color: #777;
    &:hover,
    &:active,
    &:focus {
        background: none;
        color: #777;
    }
`;

interface buttonProps2 {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: any;
}

const Button = ({ children, disabled, ...restProps }: buttonProps2) => {
    return (
        <>
            {disabled ? (
                <DisabledButton {...restProps} disabled>
                    {children}
                </DisabledButton>
            ) : (
                <ButtonStyle {...restProps}>{children}</ButtonStyle>
            )}
        </>
    );
};

export default Button;
