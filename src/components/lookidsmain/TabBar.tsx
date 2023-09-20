import React from 'react';
import styled from 'styled-components';

const TabBarStyle = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    gap: 8px;
    padding: 0.8rem 0;
    background-color: #fff;
    z-index: 999;
`;

const Tab = styled.div`
    width: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ActiveBar = styled.span`
    height: 3px;
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: black;
`;
const TabBar = () => {
    return (
        <TabBarStyle>
            <Tab>데일리룩</Tab>
            <Tab>이벤트</Tab>
            <ActiveBar></ActiveBar>
        </TabBarStyle>
    );
};

export default TabBar;
