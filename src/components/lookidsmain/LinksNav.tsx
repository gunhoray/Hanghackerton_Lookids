import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ShoppingIcon } from '../../assets/icons/SVG';
import FairyIcon from '../../assets/Fairyicon.svg';
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

const LinkStyle2 = styled(Link)`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        border-radius: 20px;
        border: 2px solid lightblue;
    }
    p {
        color: white;
        position: absolute;
        margin-top: 42px;
        border-color: orange;
        font-size: 11px;
        font-weight: bold;
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
        name: '패션페어',
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
                if (link.name === '게임') {
                    return (
                        <LinkStyle2 to={link.route} key={`link-${index}`}>
                            <img src={FairyIcon} alt="Fairy Icon" />
                            <p>페어리 키우기</p>
                        </LinkStyle2>
                    );
                }
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
