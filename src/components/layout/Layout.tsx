import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
    max-width: 360px;
    height: 100vh;
    overflow: hidden;
    margin: auto;
    background-color: #efefef;
`;

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
