import React from 'react';
import styled from 'styled-components';
import baby01 from '../../assets/images/baby01.jpeg';
const Imagebox = styled.div`
    width: 100%;
    height: 40vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const BuyBar = styled.div`
    position: fixed;
    bottom: 0;
    max-width: 360px;
    width: 100%;
    height: 6vh;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0.8rem;
`;
const BuyButton = styled.button`
    padding: 0.6rem 0.8rem;
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    cursor: pointer;
`;
const Purchase = () => {
    return (
        <>
            <Imagebox>
                <img src={baby01} alt="" />
            </Imagebox>
            Purchase
            <div>판매중</div>
            <div>판매링크 복사하기</div>
            상태 좋아요 몇번 안 입어서 ㅠㅠ
            <BuyBar>
                400,000원
                <BuyButton>채팅으로 구매하기</BuyButton>
            </BuyBar>
        </>
    );
};

export default Purchase;
