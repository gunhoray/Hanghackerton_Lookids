import styled from 'styled-components';
export const LoginPageBlock = styled.main`
    margin: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    span {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        &.flag {
            background-color: lightblue;
            margin-bottom: -10px;
            padding: 5px;
            font-size: 10px;
            width: 150px;
        }
    }
`;
export const LoginDescription = styled.section`
    bottom: 0;
    /* max-width: 360px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    button {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 14px;
        display: flex;
    }
    @media screen and (min-width: 460px) {
        max-width: 360px;
    }
`;
