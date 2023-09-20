import React from 'react';
import styled from 'styled-components';
import { Bookmark } from '../../assets/icons/SVG';

type styleProps = {
    $width?: string;
};

const LookCard = styled.li<styleProps>`
    width: ${(props) => (props.$width ? props.$width : `200px`)};
    position: relative;
    height: auto;

    .tag-style {
        padding: 0.2rem 0.3rem;
        line-height: 1.6;
        font-size: 0.9rem;
    }
`;
const OverlayBG = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.5) 100%
    );
`;
const ImageWapper = styled.figure<styleProps>`
    width: ${(props) => (props.$width ? `100%` : `200px`)};
    height: ${(props) => (props.$width ? `auto` : `200px`)};
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    img {
        width: 100%;
        height: ${(props) => (props.$width ? `auto` : `100%`)};
        object-fit: ${(props) => (props.$width ? `contain` : `cover`)};
    }
`;

const IconButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 900;
    svg {
        transform: scale(1.2);
    }
    path {
        fill: #fff;
    }
`;

type LookCardProps = {
    image: string;
    tags: string;
    userName: string;
    $width?: string;
};

const LookImageCard = ({ image, tags, userName, $width }: LookCardProps) => {
    return (
        <LookCard $width={$width}>
            <IconButton>
                <Bookmark />
            </IconButton>
            <ImageWapper $width={$width}>
                <img src={image} alt="look kids item" />
                <OverlayBG></OverlayBG>
            </ImageWapper>
            <p className="tag-style">{tags}</p>
        </LookCard>
    );
};

export default LookImageCard;
