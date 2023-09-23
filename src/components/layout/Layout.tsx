import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;

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

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
