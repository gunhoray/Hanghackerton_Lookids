import React from 'react';
import styled from 'styled-components';

const Ani = styled.div`
    width: 100%;
    height: auto;
    svg {
        /* animation: body 3s infinite ease-in; */
        /* transform-origin: 50% 100%; */
    }
    .stlg0 {
        fill: #999999;
    }
    .stlg1 {
        fill: #cccccc;
    }
    .stlg2 {
        fill: #ffffff;
    }
    .stlg3 {
        opacity: 0.4;
        fill: #cccccc;
        enable-background: new;
    }
    .stlg4 {
        opacity: 0.6;
        fill: #ff99cc;
        enable-background: new;
    }
    .stlg5 {
        fill: #9ec89b;
    }
    .stlg6 {
        fill: #81a37b;
    }
    .stlg7 {
        fill: #99ff99;
    }
    .stlg8 {
        fill: #ff99cc;
    }
    .stlg9 {
        fill: #cc3366;
    }
    .stlg10 {
        fill: #ccffcc;
    }
    .stlg11 {
        opacity: 0.5;
        fill: #81a37b;
        enable-background: new;
    }
    .stlg12 {
        opacity: 0.3;
        fill: url(#SVGID_1_);
        enable-background: new;
    }
    .stlg13 {
        fill: #33ff33;
    }
    .stlg14 {
        fill: #6f9278;
    }
    #eyes-left,
    #eyes-right {
        animation: eyes-ani 5s infinite ease-in-out;
    }
    @keyframes eyes-ani {
        0% {
            transform: translate(10px, 0px);
        }
        30% {
            transform: translate(10px, 20px);
        }
        60% {
            transform: translate(0px, 10px);
        }
        90% {
            transform: translate(0px, 0px);
        }
        100% {
            transform: translate(10px, 0px);
        }
    }
    #mouse {
        animation: mouse-ani 5s infinite ease-in-out;
    }
    @keyframes mouse-ani {
        0% {
            height: 10px;
        }
        100% {
            height: 20px;

            /* transform: scale(1.4); */
        }
    }
    .hair-left {
        animation: LG-head-ani-1 3s infinite ease-in;
        transform-origin: 50% 0%;
    }
    #head {
        animation: LG-head-ani-2 3s infinite ease-in;
        transform-origin: 50% 100%;
    }
    .hair-center {
        animation: LG-head-ani-3 3s infinite ease-in;
        transform-origin: 50% 100%;
    }
    @keyframes LG-head-ani-1 {
        0% {
            transform: rotate(0deg);
        }
        40% {
            transform: translateX(10px) rotate(3deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes LG-head-ani-2 {
        0% {
            transform: rotate(0deg);
        }
        40% {
            transform: translateX(0px) rotate(3deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes LG-head-ani-3 {
        0% {
            transform: rotate(1deg);
        }
        40% {
            transform: translateY(5px) rotate(-2deg);
        }
        100% {
            transform: rotate(1deg);
        }
    }
    .arm {
        animation: FG-arm 3s infinite ease-in;
        transform-origin: 50% 0%;
    }
    @keyframes FG-arm {
        0% {
            transform: rotate(0deg);
        }
        60% {
            transform: translateY(5px) rotate(-1deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes body {
        0% {
            transform: rotate(-2deg);
        }
        60% {
            transform: rotate(5deg);
        }
        100% {
            transform: rotate(-2deg);
        }
    }
`;
const LeafyGrow = () => {
    return (
        <Ani>
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                // style={{ enableBackground: 'new 0 0 1000 1000' }}
                xmlSpace="preserve"
            >
                <g>
                    <g id="body">
                        <path
                            className="stlg0"
                            d="M520.9,704.3c-6.8,3.7-14.5,11.1-21.5,21c4.6,1.2,9.4,2.2,14.1,3C515.6,719.5,518,711.5,520.9,704.3z"
                        />
                        <path
                            className="stlg1"
                            d="M594.1,700.4c-9.1-20.7-21.8-33.5-35.8-33.5c-14.9,0-28.2,14.4-37.4,37.4c5.2-2.8,10-3.6,13.7-1.7
		c6.5,3.3,8.2,14.1,5.7,27.9c0.1,0,0.2,0,0.3,0c14.9,0,29.4-2,43.2-5.8c-3-2.8-4.7-5.8-4.7-9C579,709.8,584.8,704.4,594.1,700.4z"
                        />
                        <path
                            className="stlg1"
                            d="M534.6,702.6c-3.7-1.9-8.5-1.1-13.7,1.7c-2.9,7.2-5.4,15.3-7.4,24c8.7,1.4,17.6,2.2,26.7,2.3
		C542.8,716.7,541.1,705.9,534.6,702.6z"
                        />
                        <path
                            className="stlg0"
                            d="M594.1,700.4c2.5,5.7,4.7,11.9,6.6,18.6c15.7-6.2,30.2-14.7,43.1-25.1c-3.3-0.3-6.6-0.4-10.1-0.4
		C618.1,693.6,604.1,696.2,594.1,700.4z"
                        />
                        <path
                            className="stlg1"
                            d="M579,715.7c0,3.2,1.7,6.2,4.7,9c5.8-1.6,11.5-3.5,17-5.7c-1.9-6.7-4.1-13-6.6-18.6
		C584.8,704.4,579,709.8,579,715.7z"
                        />
                        <path
                            className="stlg1"
                            d="M513.6,728.2c-4.8-0.8-9.5-1.8-14.1-3c-3.4,4.7-6.6,10-9.6,15.8c-7,13.6-11.1,27.1-11.9,37.8l-15.5,12.7
		c-8.7,4.5-21.4,9.8-16.9,18.5c4.5,8.7,14.8,0.4,23.5-4l39.8-8.2c-0.4-6-0.7-12.2-0.7-18.5C508.1,760.9,510.1,743.6,513.6,728.2z"
                        />
                        <path
                            className="stlg2"
                            d="M710.8,741.9l-25-33.3c-0.2-0.2-0.4-0.3-0.6-0.4c-6.5-7.3-22.1-12.8-41.3-14.3c-12.9,10.4-27.4,18.9-43.1,25.1
		c1.4,4.9,2.6,10,3.7,15.4c8.5,2.2,18.5,3.5,29.3,3.5c10.3,0,19.9-1.2,28.2-3.2c0.7,0.7,1.4,1.4,2.2,2l36.4,17.4
		c7.7,6,18,15.2,24,7.4C730.4,753.7,718.5,747.9,710.8,741.9z"
                        />
                        <path
                            className="stlg2"
                            d="M620.7,946.9L581.5,879c16.1-18.7,27.1-56.3,27.1-99.7c0-16-1.5-31.1-4.2-44.9c-1-5.3-2.3-10.5-3.7-15.4
		c-5.5,2.2-11.2,4.1-17,5.7c-13.8,3.7-28.2,5.8-43.2,5.8c-0.1,0-0.2,0-0.3,0c-9.1,0-18-0.8-26.7-2.3c-3.5,15.3-5.5,32.7-5.5,51
		c0,6.3,0.2,12.5,0.7,18.5c3,41.2,16.1,74.7,33.4,87.9l65.6,70.6c6.1,8.4,15.5,29,24.4,22.5C641.1,972.3,626.8,955.3,620.7,946.9z"
                        />
                        <path
                            className="stlg1"
                            d="M580.4,926.8l-11.7-81c-0.8-5.1-2.4-17.6-1.5-22.6c4.4-24.7,22.2-33.5,42.9-24.7
		C630,807,580.4,926.8,580.4,926.8z"
                        />
                        <path
                            className="stlg1"
                            d="M600.8,719.1c15.2-6.3,22.2-10.8,22.2-10.8s-7,4.5-4,13.2c3,8.7,42.9,13.2,42.9,13.2
		c-31,7.2-57.5-0.3-57.5-0.3L600.8,719.1z"
                        />
                        <path
                            className="stlg2"
                            d="M585.2,974.2c-12.9-1.2-5.5-25.7-4.5-37.4l-4.7-121.4c1.1-11.7,12.4-20.2,25.4-19
		c12.9,1.2,22.6,11.6,21.5,23.3l-23.4,118.8C598.5,950.2,598.2,975.3,585.2,974.2z"
                        />
                        <path
                            className="stlg1"
                            d="M542.2,885.6c0,0-29-42.2-32.6-87.1C509.6,798.5,509.7,857.5,542.2,885.6z"
                        />
                    </g>
                    <g id="head">
                        <path
                            className="stlg2"
                            d="M678,436.5c-17.6,3.2-36.4-19.2-41.9-49.9c-1.8-10-2-19.6-0.8-28.2c-20.3-11.4-43-19.1-67.5-22.2
		c-102-12.9-195.1,59.3-208,161.3c-12.9,102,59.3,195.1,161.3,208c102,12.9,195.1-59.3,208-161.3c6-47.2-6.3-92.4-31.3-128.8
		C693.8,426.9,686.9,434.9,678,436.5z"
                        />
                        <path
                            className="stlg3"
                            d="M499.6,473.3c0,0-87.5,160.6,23.5,206.3c0,0,58.1,29.1,115.4-9.4c57.3-38.4,0.9,10.7,0.9,10.7
		s-63.5,42.3-144.1,19.5C414.6,677.7,380,609.5,380,609.5S462.2,467.4,499.6,473.3z"
                        />
                        <path
                            className="stlg4"
                            d="M722,576.4c-8.6,0.6-18,2.8-27.4,6.6c-29,11.8-47,34.7-40.3,51.3c3.4,8.4,12.6,13.5,24.6,15
		C698.5,628.8,713.3,603.9,722,576.4z"
                        />
                        <path
                            className="stlg4"
                            d="M500,624.1c10-8.9,5.5-30.4-10.2-48c-15.6-17.6-36.5-24.6-46.5-15.6c-10,8.9-5.5,30.4,10.2,48
		S490,633,500,624.1z"
                        />
                        <path
                            className="stlg5 hair-left"
                            d="M391.1,625.7c-102.2-23.3-166.3-108.9-147.5-190.8c15.2-66.4,82.5-110.3,161.8-112c-3,7-5.4,14.2-7.2,21.8
		c-18.7,82,0.1,87.1,102.2,110.5L391.1,625.7z"
                        />
                        <path
                            className="stlg6"
                            d="M400.3,611.3c0,0-160.5-39.3-137.7-176.1c0,0,13,122.1,138,135.6c0,0-141.6-31.2-120-182.4
		c0,0,27.1,142.2,117.6,142c0,0-117.5-41.4-87.9-166c0,0,18.3,97.2,85.5,124.8c0,0-55.9-62.1-72.6-147.7
		c0,0,108.9,133.4,177.2,113.6L400.3,611.3z"
                        />
                        <path
                            className="stlg7"
                            d="M438.9,124.7c-3-36.7,1.9-72.2,13.2-104.6C363.2,61.7,305,158.3,313.7,265.6c11.1,136.6,126.4,238.7,257.6,228
		c79.6-6.5,146.8-53,184.8-119.1c8.2-14.3-3.7-32.9-18.6-28.9c-13.2,3.5-26.9,5.9-41,7.1C565.3,363.4,450,261.3,438.9,124.7z"
                        />
                        <path
                            className="stlg8"
                            d="M547.3,640c0,0,5.4,32.5,24.5,31c19.1-1.6,27.8-17.6,27.8-17.6L547.3,640z"
                        />
                        <path
                            className="stlg9"
                            d="M547.3,640l16-1.3c3.1-0.3,6.2,0.9,8.5,3c2.4,2.2,6.3,4.6,11.1,4.1c3.1-0.3,6.3,0.4,8.8,2.2l7.9,5.4
		C599.7,653.3,568.7,676.5,547.3,640z"
                        />
                        <path
                            className="stlg3"
                            d="M547.3,640c-5.6,1.9-49.4-26.8-26.5-28.7c7.7-0.6,8.9,14.7,8.9,14.7L547.3,640z"
                        />
                        <path
                            className="stlg3"
                            d="M599.7,653.3c0,0,18.7-3,15.4-18.9c-3.3-15.9,8,3.2,8,3.2S620.8,647.9,599.7,653.3z"
                        />
                        <path
                            className="stlg10"
                            d="M452.1,20c0,0-126.2,177.2,33.2,303C576.4,395,743,376.5,743,376.5s-97.7,188.8-302.8,88.6
		C235.2,364.9,334.4,141.8,334.4,141.8S376.3,53.2,452.1,20z"
                        />
                        <path
                            className="stlg11"
                            d="M743,376.5c0,0-229.9,81-350.4-22.3C367.3,332.4,340,239.8,340,239.8S385,600,743,376.5z"
                        />
                        <path
                            className="stlg11"
                            d="M743,376.5c0,0-36.3,80.2-169.5,84.1c-133.3,3.9-198.1-69-198.1-69S274,287.1,358.1,118.1
		c0,0-126.1,218.7,69.7,325.1c58,31.5,125.6,41.5,189.8,25.8C663.8,457.7,713.9,432.1,743,376.5z"
                        />

                        <linearGradient
                            id="SVGID_1_"
                            gradientUnits="userSpaceOnUse"
                            x1="626.4729"
                            y1="298.3578"
                            x2="626.4729"
                            y2="903.999"
                            gradientTransform="matrix(1 0 0 -1 -126 924)"
                        >
                            <stop offset="0" style={{ stopColor: '#00FF00' }} />
                            <stop
                                offset="0.125"
                                style={{ stopColor: '#04FF04', stopOpacity: '0.875' }}
                            />
                            <stop
                                offset="0.2505"
                                style={{ stopColor: '#10FF10', stopOpacity: '0.7495' }}
                            />
                            <stop
                                offset="0.3762"
                                style={{ stopColor: '#24FF24', stopOpacity: '0.6238' }}
                            />
                            <stop
                                offset="0.5023"
                                style={{ stopColor: '#40FF40', stopOpacity: '0.4977' }}
                            />
                            <stop
                                offset="0.6286"
                                style={{ stopColor: '#65FF65', stopOpacity: '0.3714' }}
                            />
                            <stop
                                offset="0.7551"
                                style={{ stopColor: '#92FF92', stopOpacity: '0.2449' }}
                            />
                            <stop
                                offset="0.8793"
                                style={{ stopColor: '#C5FFC5', stopOpacity: '0.1207' }}
                            />
                            <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: '0' }} />
                        </linearGradient>
                        <path
                            className="stlg12 hair-center"
                            d="M738.4,345.6c-13.2,3.5-26.9,5.9-41,7.1c-131.2,10.6-246.5-91.5-257.6-228c-3-36.7,1.9-72.2,13.2-104.6
		C364.2,61.7,306,158.3,314.7,265.6c2.1,25.6,7.8,50.1,16.7,72.8c-44,18.5-76.8,52.6-86.9,96.5c-18.7,82,45.4,167.5,147.5,190.8
		l91.2-142.3c28,9,58,12.8,89,10.2c79.6-6.5,146.8-53,184.8-119.1C765.2,360.2,753.3,341.6,738.4,345.6z"
                        />
                        <path
                            className="stlg13"
                            d="M712,499.5c-15.4,1.2-37,20-49.7,32.3c3.1-1.1,6.4-1.9,9.8-2.1c21.1-1.7,39.6,14,41.4,35.1
		c0.1,0.9,0.1,1.9,0.1,2.8C723.4,536.3,712,499.5,712,499.5z"
                        />
                        <path
                            className="stlg14"
                            d="M672.1,529.7c-3.4,0.3-6.7,1-9.8,2.1C656,538,652,542.5,652,542.5c-7.6,7-12.1,17.2-11.2,28.3
		c1.5,19,18.2,33.2,37.2,31.6c12.1-1,22.2-8.1,27.6-18c3.6-5.2,6.1-10.9,8-16.8c0-0.9,0-1.9-0.1-2.8
		C711.7,543.8,693.2,528,672.1,529.7z M677.9,601.1c-18.3,1.5-34.4-12.2-35.8-30.5c-1.5-18.3,12.2-34.4,30.5-35.8
		c18.3-1.5,34.4,12.2,35.8,30.5C709.8,583.6,696.2,599.6,677.9,601.1z"
                        />
                        <path
                            d="M672.5,534.8c-18.3,1.5-31.9,17.5-30.5,35.8c1.5,18.3,17.5,31.9,35.8,30.5c18.3-1.5,31.9-17.5,30.5-35.8
		C706.9,547,690.8,533.3,672.5,534.8z"
                        />
                        <path
                            className="stlg2"
                            d="M678.2,552.2c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-3.7,0-6.7,3-6.7,6.7
		C671.5,549.2,674.5,552.2,678.2,552.2z"
                        />
                        <path
                            className="stlg14"
                            d="M467.2,540.4c-0.1,0.9-0.2,1.9-0.3,2.8c1.4,6,3.6,11.8,6.7,17.3c4.6,10.3,14.2,18.1,26.2,20
		c18.8,2.9,36.5-10,39.4-28.8c1.7-11-2-21.5-9.1-29c0,0-3.7-4.8-9.5-11.3c-3-1.3-6.2-2.3-9.6-2.9C490,505.2,470.4,519.5,467.2,540.4
		z M472.2,541.2c2.8-18.2,19.8-30.6,38-27.7c18.2,2.8,30.6,19.8,27.7,38c-2.8,18.2-19.8,30.6-38,27.7
		C481.8,576.4,469.4,559.4,472.2,541.2z"
                        />
                        <path
                            className="stlg13"
                            d="M473.4,475.4c15.2,2.4,35.5,22.7,47.2,35.9c-3-1.3-6.2-2.3-9.6-2.9c-20.9-3.3-40.6,11.1-43.8,32
		c-0.1,0.9-0.2,1.9-0.3,2.8C459.4,511.3,473.4,475.4,473.4,475.4z"
                        />
                        <path
                            d="M510.2,513.5c18.2,2.8,30.6,19.8,27.7,38c-2.8,18.2-19.8,30.6-38,27.7c-18.2-2.8-30.6-19.8-27.7-38
		C475,523.1,492,510.6,510.2,513.5z"
                        />
                        <path
                            className="stlg2"
                            d="M503.7,530.4c3.7,0,6.7-3,6.7-6.7s-3-6.7-6.7-6.7s-6.7,3-6.7,6.7S500,530.4,503.7,530.4z"
                        />
                    </g>
                </g>
            </svg>
        </Ani>
    );
};

export default LeafyGrow;
