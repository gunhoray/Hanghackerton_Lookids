import React from 'react';
import styled from 'styled-components';
import LookImageCard from './LookImageCard';
import Image from '../../assets/images/baby01.jpeg';
//TODO : 이미지 데이터 목업 만들기
// import { mockData } from '../../assets/mockData';
import baby01 from '../../assets/images/baby01.jpeg';
import baby02 from '../../assets/images/baby02.jpeg';
import baby03 from '../../assets/images/baby03.jpeg';

export const mockData = [
    {
        image: baby01,
        tags: '13~24개월,#상의,#로다제이,#메론스위치',
        user: '열두달',
    },
    {
        image: baby02,
        tags: '13~24개월,#상의,#로다제이,#메론스위치',
        user: '열두달',
    },
    {
        image: baby03,
        tags: '13~24개월,#상의,#로다제이,#메론스위치',
        user: '열두달',
    },
];

const PopularLookList = styled.ul`
    display: flex;
    gap: 16px;
    overflow-x: scroll;
    padding: 0 0.8rem 0.8rem;
`;

const SectionTitle = styled.h2`
    padding: 0.8rem;
    font-weight: bold;
    font-size: 20px;
`;

const LookList = () => {
    return (
        <>
            <SectionTitle>인기 급상승템</SectionTitle>
            <PopularLookList>
                {mockData.map((item, index) => {
                    return (
                        <LookImageCard
                            image={item.image}
                            tags={item.tags}
                            userName={item.tags}
                            key={`lookimg-${index}`}
                        />
                    );
                })}
            </PopularLookList>
        </>
    );
};

export default LookList;
