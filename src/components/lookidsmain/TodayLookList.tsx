import React from 'react';
import styled from 'styled-components';
import LookImageCard from './LookImageCard';

import baby04 from '../../assets/images/baby04.jpeg';
import baby05 from '../../assets/images/baby05.jpeg';
import baby06 from '../../assets/images/baby06.jpeg';
import baby07 from '../../assets/images/baby07.jpeg';
import baby08 from '../../assets/images/baby08.jpeg';
import baby09 from '../../assets/images/baby09.jpeg';
import baby10 from '../../assets/images/baby10.jpeg';
import baby11 from '../../assets/images/baby11.jpeg';
import baby12 from '../../assets/images/baby12.jpeg';
import baby13 from '../../assets/images/baby13.jpeg';
import baby14 from '../../assets/images/baby14.jpeg';
import baby15 from '../../assets/images/baby15.jpeg';

import TodayFilterNav from './TodayFilterNav';

export const mockData = [
    {
        image: baby04,
        tags: '#3~4세 #리미떼두두',
        user: '열두달',
    },
    {
        image: baby05,
        tags: '#3~4세 #리미떼두두 #모이몰른',
        user: '열두달',
    },
    {
        image: baby06,
        tags: '#13~24개월 #버버리',
        user: '열두달',
    },
    {
        image: baby07,
        tags: '13~24개월 #버버리',
        user: '열두달',
    },
    {
        image: baby08,
        tags: '13~24개월 #보세',
        user: '열두달',
    },
    {
        image: baby09,
        tags: '#3~4세 #리미떼두두 #모이몰른',
        user: '열두달',
    },
];
export const mockData2 = [
    {
        image: baby10,
        tags: '#13~24개월 #버버리',
        user: '열두달',
    },
    {
        image: baby11,
        tags: '#로다제이 #메론스위치',
        user: '열두달',
    },
    {
        image: baby12,
        tags: '#3~4세 #리미떼두두 #모이몰른',
        user: '열두달',
    },
    {
        image: baby13,
        tags: '#13~24개월 #상의 #로다제이 #메론스위치',
        user: '열두달',
    },
    {
        image: baby14,
        tags: '#3~4세 #리미떼두두 #모이몰른',
        user: '열두달',
    },
    {
        image: baby15,
        tags: '#3~4세 #리미떼두두 #모이몰른',
        user: '열두달',
    },
];
const SectionTitle = styled.h2`
    padding: 0.8rem;
    font-weight: bold;
    font-size: 20px;
`;

const LookListBox = styled.div`
    display: flex;
    gap: 12px;
    padding: 0 0.8rem 0.8rem;
`;

const TodayLookListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: calc(50% - 6px);
`;

const TodayLookList = () => {
    return (
        <>
            <SectionTitle>오늘 뭐입지?</SectionTitle>
            <TodayFilterNav />
            <LookListBox>
                <TodayLookListStyle>
                    {mockData.map((item, index) => {
                        return (
                            <LookImageCard
                                image={item.image}
                                tags={item.tags}
                                userName={item.user}
                                $width={`100%`}
                                key={`img-list1-${index}`}
                            />
                        );
                    })}
                </TodayLookListStyle>
                <TodayLookListStyle>
                    {mockData2.map((item, index) => {
                        return (
                            <LookImageCard
                                image={item.image}
                                tags={item.tags}
                                userName={item.user}
                                $width={`100%`}
                                key={`img-list2-${index}`}
                            />
                        );
                    })}
                </TodayLookListStyle>
            </LookListBox>
        </>
    );
};

export default TodayLookList;
