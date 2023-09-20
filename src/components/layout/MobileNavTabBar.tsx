import React from 'react';
import styled from 'styled-components';
import { ChatIcon, RecellIcon, ShoppingIcon, TrendIcon, UserIcon } from '../../assets/icons/SVG';

const NavTabBarStyle = styled.nav`
    position: fixed;
    bottom: 0;
    max-width: 360px;
    width: 100%;
    /* height: 3rem; */
    /* padding: 0.8rem 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const TabIconBox = styled.div`
    width: 20%;
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-size: 9px;
    text-align: center;
    gap: 6px;
    svg {
        height: 24px;
        fill: none;
        stroke: #000;
        stroke-width: 30;
    }
    &.active {
        svg {
            height: 24px;
            fill: #000;
            stroke: none;
            stroke-width: 0;
        }
    }
`;

const MobileNavTabBar = () => {
    return (
        <NavTabBarStyle>
            <TabIconBox className="active">
                <TrendIcon />
                트렌드
            </TabIconBox>
            <TabIconBox>
                <ShoppingIcon />
                신상마켓
            </TabIconBox>
            <TabIconBox>
                <RecellIcon /> 리셀마켓
            </TabIconBox>
            <TabIconBox>
                <ChatIcon />
                채팅
            </TabIconBox>
            <TabIconBox>
                <UserIcon />
                내정보
            </TabIconBox>
        </NavTabBarStyle>
    );
};

export default MobileNavTabBar;
