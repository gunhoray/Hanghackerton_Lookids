import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import MobileNavTabBar from './MobileNavTabBar';

const LayoutStyle = styled.div`
    max-width: 360px;
    height: 100vh;
    overflow: hidden;
    margin: auto;
    background-color: #efefef;
    position: relative;
`;

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutStyle>
            <Header />
            {children}
            <MobileNavTabBar />
        </LayoutStyle>
    );
};

export default Layout;
