import styled from 'styled-components';

type styleColor = {
    $color: string;
};

export const GameActionButton = styled.button<styleColor>`
    width: 60px;
    height: 60px;
    background-color: #f0f0f0;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 12px;
    color: ${(props) => props.$color || '#000'};
`;
export const RewardList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const RewardItem = styled.li`
    background-color: #efefef;
    width: calc(50% - 4px);
    padding: 1rem;
    border-radius: 16px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    &.half {
        width: calc(25% - 6px);
    }
    &.three {
        width: calc(33.33% - 6px);
        margin-bottom: 26px;
        svg {
            padding: 10px 0;
            box-sizing: content-box;
        }
    }
`;

export const RewordBox = styled.div`
    display: flex;
    gap: 16px;
`;

export const RewordText = styled.p`
    font-size: 12px;
    color: #777;
`;
