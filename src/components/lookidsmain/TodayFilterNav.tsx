import React from 'react';
import styled from 'styled-components';
import { AngleDown } from '../../assets/icons/SVG';

const FilterNavStyle = styled.nav`
    position: sticky;
    top: 41.59px;
    width: 100%;
    display: flex;
    gap: 4px;
    padding: 0.8rem;
    background-color: #fff;
    z-index: 999;
`;

const FilterItem = styled.div`
    display: flex;
    gap: 4px;
    padding: 0.5rem 0.8rem 0.3rem;
    border-radius: 20px;
    background-color: #f5f5f5;
    color: #afafaf;
    font-size: 0.8rem;
    path {
        fill: #afafaf;
    }
`;

const filter = ['성별', '연령대', '키/몸무게', '카테고리'];

const TodayFilterNav = () => {
    return (
        <FilterNavStyle>
            {filter.map((item) => {
                return (
                    <FilterItem>
                        {item} <AngleDown />
                    </FilterItem>
                );
            })}
        </FilterNavStyle>
    );
};

export default TodayFilterNav;
