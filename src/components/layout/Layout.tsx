import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
    max-width: 360px;
    height: 100vh;
    margin: auto;

    overflow: hidden;
    overflow-y: auto;
    position: relative;
    main {
        /* padding: 0 0.8rem; */
    }
`;

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutStyle>
            {children}
            <div id="modal-root"></div>
        </LayoutStyle>
    );
};

export default Layout;
