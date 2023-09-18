import React from 'react';
import styled from 'styled-components';

const LookCard = styled.figure`
    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

type LookCardProps = {
    image: string;
};

const LookImageCard = ({ image }: LookCardProps) => {
    return (
        <LookCard>
            <img src={image} alt="look kids item" />
        </LookCard>
    );
};

export default LookImageCard;
