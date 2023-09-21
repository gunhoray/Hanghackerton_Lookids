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
const InfoBox = styled.div`
    padding: 1.2rem 0.8rem 0.4rem;
`;
const PurchaseTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 6px;
    font-weight: 700;
    /* padding: 1.2rem 0.8rem 0.4rem; */
`;

const DateInfo = styled.span`
    font-size: 10px;
    color: #333;
`;

const ProductState = styled.div`
    display: flex;
    gap: 16px;
    margin: 20px 0;
`;

const StateTag = styled.div`
    padding: 0.6rem 0.8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 8px;
    cursor: pointer;
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
                <img src={baby01} alt="purchase" />
            </Imagebox>
            <InfoBox>
                <PurchaseTitle>Purchase</PurchaseTitle>
                <DateInfo>2023년 9월 1일 올림</DateInfo>
                <ProductState>
                    <StateTag>판매중</StateTag>
                    <StateTag>판매링크 복사하기</StateTag>
                </ProductState>
                상태 좋아요 몇번 안 입어서 ㅠㅠ
            </InfoBox>
            <BuyBar>
                400,000원
                <BuyButton>채팅으로 구매하기</BuyButton>
            </BuyBar>
        </>
    );
};

export default Purchase;
