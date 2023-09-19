import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AngleLaft, Bell, Bookmark, SearchIcon } from '../../assets/icons/SVG';

const HeaderStyle = styled.header`
    width: 100%;
    /* height: 3rem; */
    padding: 0.4rem 0 0.4rem 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    background-color: #fff;
    h1 {
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.center {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
        }
    }
`;
const GameHeaderStyle = styled(HeaderStyle)`
    background-color: #90ee90;
    padding-left: 0;
`;
const HeaderIconBox = styled.nav`
    display: flex;
    gap: 0.5rem;
`;

const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
`;

export const MainHeader = () => {
    return (
        <HeaderStyle>
            <h1>트렌드</h1>
            <HeaderIconBox>
                <IconBox>
                    <SearchIcon />
                </IconBox>
                <IconBox>
                    <Bookmark />
                </IconBox>
                <IconBox>
                    <Bell />
                </IconBox>
            </HeaderIconBox>
        </HeaderStyle>
    );
};

export const GameHeader = () => {
    return (
        <GameHeaderStyle>
            <IconBox>
                <AngleLaft />
            </IconBox>
            <h1 className="center">캐릭터 생성</h1>
        </GameHeaderStyle>
    );
};

// const Header = () => {
//     const [pathname, setPathname] = useState<string>('/');
//     useEffect(() => {
//         const currentPathname = window.location.pathname;
//         if (currentPathname) {
//             setPathname(currentPathname);
//         }
//     }, []);

//     console.log(pathname);
//     switch (pathname) {
//         case '/':
//             return <MainHeader />;
//         case '/game':
//             return <GameHeader />;
//         default:
//             return <MainHeader />;
//     }
// };

// export default Header;
