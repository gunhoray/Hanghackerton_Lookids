import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Fairybackground from '../../assets/Fairygamebackground.png';
const LayoutStyle = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    background-color: white;
    overflow: hidden;
    overflow-y: auto;
    position: relative;

    main {
        /* padding: 0 0.8rem; */
    }
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media screen and (min-width: 460px) {
        max-width: 360px;
    }
`;

const FairyBackground = styled.div`
    background-image: url(${Fairybackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <FairyBackground>
            <LayoutStyle>{children}</LayoutStyle>
        </FairyBackground>
    );
};

export default Layout;
