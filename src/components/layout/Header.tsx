import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AngleLaft, Bell, Bookmark, SearchIcon } from '../../assets/icons/SVG';
import { useNavigate } from 'react-router-dom';
import Menu from '../layout/Menu';

const HeaderStyle = styled.header`
    width: 100%;
    /* height: 3rem; */
    padding: 0.4rem 0 0.4rem 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    background-color: #fff;
    h1 {
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.center {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
        }
    }
`;
const GameHeaderStyle = styled(HeaderStyle)`
    background-color: #90ee90;
    padding-left: 0;
`;

const CommonHeaderStyle = styled(HeaderStyle)`
    padding-left: 0;
`;

const HeaderIconBox = styled.nav`
    display: flex;
    gap: 0.5rem;
`;

export const IconBox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    cursor: pointer;
`;

export const MainHeader = () => {
    return (
        <HeaderStyle>
            <h1>트렌드</h1>
            <HeaderIconBox>
                <IconBox>
                    <SearchIcon />
                </IconBox>
                <IconBox>
                    <Bookmark />
                </IconBox>
                <IconBox>
                    <Bell />
                </IconBox>
            </HeaderIconBox>
        </HeaderStyle>
    );
};
interface GameHeaderProps {
    headerName: string;
}
export const GameHeader: React.FC<GameHeaderProps> = ({ headerName }) => {
    const nav = useNavigate();
    return (
        <GameHeaderStyle>
            <IconBox onClick={() => nav('/')}>
                <AngleLaft />
            </IconBox>
            <h1 className="center">{headerName}</h1>
            <Menu />
        </GameHeaderStyle>
    );
};

export const CommonHeader = () => {
    const nav = useNavigate();
    return (
        <CommonHeaderStyle>
            <IconBox onClick={() => nav('/')}>
                <AngleLaft />
            </IconBox>
            <Menu />
        </CommonHeaderStyle>
    );
};
