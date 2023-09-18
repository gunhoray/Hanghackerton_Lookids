import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    width: 100%;
    height: 3rem;
    padding: 0.8rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #fff;
`;

const HeaderIconBox = styled.nav`
    display: flex;
    gap: 0.5rem;
`;

const IconBox = styled.div``;

const Header = () => {
    return (
        <HeaderStyle>
            트렌드
            <HeaderIconBox>
                <IconBox>아이콘</IconBox>
                <IconBox>아이콘</IconBox>
                <IconBox>아이콘</IconBox>
            </HeaderIconBox>
        </HeaderStyle>
    );
};

export default Header;
