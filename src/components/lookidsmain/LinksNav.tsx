import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ShoppingIcon } from '../../assets/icons/SVG';
const LinksNavStyle = styled.nav`
    width: 100%;
    padding: 0.8rem;
    display: flex;
    gap: 8px;
`;
const LinkStyle = styled(Link)`
    width: 25%;
    padding: 0.8rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 0.6rem;
    background-color: #f5f5f5;
    svg {
        height: 32px;
    }
`;
const linkList = [
    {
        name: '출석체크',
        route: '/',
    },
    {
        name: '게임',
        route: '/game',
    },
    {
        name: 'test',
        route: '/test',
    },
    {
        name: '올마트',
        route: '/',
    },
];
const LinksNav = () => {
    return (
        <LinksNavStyle>
            {linkList.map((link, index) => {
                return (
                    <LinkStyle to={link.route} key={`link-${index}`}>
                        <ShoppingIcon />
                        {link.name}
                    </LinkStyle>
                );
            })}
        </LinksNavStyle>
    );
};

export default LinksNav;
