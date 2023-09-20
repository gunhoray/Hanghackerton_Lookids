import React, { ReactNode } from 'react';
import styled from 'styled-components';

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

type buttonProps = {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

const Button = ({ children, ...restProps }: buttonProps) => {
    return <ButtonStyle {...restProps}>{children}</ButtonStyle>;
};

export default Button;
