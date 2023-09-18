import React from 'react';
import styled from 'styled-components';

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
`;

const TabIconBox = styled.div`
    width: 20%;
    padding: 0.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-size: 9px;
    text-align: center;
`;

const MobileNavTabBar = () => {
    return (
        <NavTabBarStyle>
            <TabIconBox>트렌드</TabIconBox>
            <TabIconBox>신상마켓</TabIconBox>
            <TabIconBox>리셀마켓</TabIconBox>
            <TabIconBox>채팅</TabIconBox>
            <TabIconBox>내정보</TabIconBox>
        </NavTabBarStyle>
    );
};

export default MobileNavTabBar;
