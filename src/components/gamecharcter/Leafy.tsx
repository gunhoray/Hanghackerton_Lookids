import React from 'react';
import styled from 'styled-components';

const Ani = styled.div`
    width: 100%;
    height: auto;
    svg {
        /* animation: body 3s infinite ease-in;
        transform-origin: 50% 100%; */
    }
    .stg0 {
        fill: url(#SVGID_1_);
    }
    .stg1 {
        opacity: 0.3;
        fill: #00ff00;
    }
    .stg2 {
        fill: #ffffff;
    }
    .stg3 {
        fill: url(#SVGID_00000126298780453412386840000006527918043964906627_);
    }
    .stg4 {
        opacity: 0.4;
        fill: #81a37b;
        &.left {
            animation: leaves-left-1 3s infinite ease-out;
            transform-origin: 50% 100%;
        }
    }
    .stg5 {
        fill: url(#SVGID_00000022527145978993971850000011615640626812795559_);
    }
    .stg6 {
        opacity: 0.2;
        fill: #00ff00;
    }
    #green1-eyes-left,
    #green1-eyes-right {
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
            transform: translate(-10px, 10px);
        }
        90% {
            transform: translate(-10px, 0px);
        }
        100% {
            transform: translate(10px, 0px);
        }
    }
    #leaves-left {
        animation: leaves-left-1 3s infinite ease-out;
        transform-origin: 50% 100%;
    }
    #leaves-right {
        animation: leaves-right-1 3s infinite ease-out;
        transform-origin: 50% 100%;
    }

    @keyframes leaves-left-1 {
        0% {
            transform: rotate(0deg);
        }
        60% {
            transform: translateX(10px) rotate(2deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes leaves-right-1 {
        0% {
            transform: rotate(0deg);
        }
        60% {
            transform: translateX(-10px) rotate(-2deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes head-ani-3 {
        0% {
            transform: rotate(0deg);
        }
        60% {
            transform: translateX(0px) rotate(1deg);
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
const Leafy = () => {
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
                xmlSpace="preserve"
            >
                <style type="text/css"></style>
                <g>
                    <linearGradient
                        id="SVGID_1_"
                        gradientUnits="userSpaceOnUse"
                        x1="299.7904"
                        y1="477.2664"
                        x2="644.7487"
                        y2="477.2664"
                    >
                        <stop offset="0" style={{ stopColor: '#6F9278' }} />
                        <stop offset="3.072398e-03" style={{ stopColor: '#6F9278' }} />
                        <stop offset="0.3691" style={{ stopColor: '#91B991' }} />
                        <stop offset="0.5605" style={{ stopColor: '#9EC89B' }} />
                        <stop offset="0.6759" style={{ stopColor: '#97BF95' }} />
                        <stop offset="0.8605" style={{ stopColor: '#82A886' }} />
                        <stop offset="1" style={{ stopColor: '#6F9278' }} />
                    </linearGradient>
                    <path
                        className="stg0"
                        d="M644.7,670.8c0,0-193.8,173.5-310,0s94.9-355.9,94.9-355.9s61.8-48.1,53.2-108.2c0,0,127.5,61.3,127.3,208
		C609.9,561.3,644.7,670.8,644.7,670.8z"
                    />
                    <path
                        className="stg1"
                        d="M644.7,668.5c0,0-193.8,173.5-310,0s94.9-355.9,94.9-355.9s61.8-48.1,53.2-108.2c0,0,127.5,61.3,127.3,208
		C609.9,559,644.7,668.5,644.7,668.5z"
                    />
                    <circle className="stg2" cx="500" cy="475" r="127.3" />

                    <linearGradient
                        id="SVGID_00000024700838757848004610000006050831986644340383_"
                        gradientUnits="userSpaceOnUse"
                        x1="346.1265"
                        y1="505.4773"
                        x2="743.7358"
                        y2="505.4773"
                    >
                        <stop offset="0" style={{ stopColor: '#6F9278' }} />
                        <stop offset="0.5621" style={{ stopColor: '#99FF99' }} />
                        <stop offset="0.724" style={{ stopColor: '#98FD98' }} />
                        <stop offset="0.7987" style={{ stopColor: '#95F596' }} />
                        <stop offset="0.8554" style={{ stopColor: '#90E992' }} />
                        <stop offset="0.9032" style={{ stopColor: '#89D68D' }} />
                        <stop offset="0.9452" style={{ stopColor: '#80BF86' }} />
                        <stop offset="0.9826" style={{ stopColor: '#75A27D' }} />
                        <stop offset="1" style={{ stopColor: '#6F9278' }} />
                    </linearGradient>
                    <path
                        id="leaves-left"
                        style={{
                            fill: 'url(#SVGID_00000024700838757848004610000006050831986644340383_)',
                        }}
                        d="M346.1,656.6c0-47,27.3-88.5,68.7-112.9
		c54.2-40.4,184.2-145.3,187-224.3c3.9-109.8-65.7-98.5-65.7-98.5s38.6-18.7,102.5,45.9c7.4,7.5,14.9,15.4,22.2,23.7
		c104.2,118.8,111.3,283.2,15,407c-26.2,33.6-59.6,63.7-101.3,78.8c-21.8,10.3-46.8,16.1-73.3,16.1c-1.9,0-3.7,0-5.6-0.1
		c-37.5,0.7-55.9-11-55.9-11v0C384.7,760.6,346.1,712.6,346.1,656.6z"
                    />
                    <path
                        className="stg4 "
                        d="M673.3,323c0,0,111.9,241.2-61.6,415.6l-17.5,21.7C594.2,760.4,810.4,607.9,673.3,323z"
                    />
                    <path
                        className="stg4 "
                        d="M549.7,475c0,0,83.5-24.7,98.2,228l13.2-19C661.1,684.1,636.9,455.4,549.7,475z"
                    />

                    <linearGradient
                        id="SVGID_00000028305358179833154980000000852587805357417391_"
                        gradientUnits="userSpaceOnUse"
                        x1="261.8135"
                        y1="566.9153"
                        x2="608.6406"
                        y2="473.9833"
                    >
                        <stop offset="0" style={{ stopColor: '#6F9278' }} />
                        <stop offset="2.231992e-02" style={{ stopColor: '#78A97F' }} />
                        <stop offset="5.505095e-02" style={{ stopColor: '#82C487' }} />
                        <stop offset="9.265747e-02" style={{ stopColor: '#8BDA8E' }} />
                        <stop offset="0.1366" style={{ stopColor: '#91EB93' }} />
                        <stop offset="0.1909" style={{ stopColor: '#96F696' }} />
                        <stop offset="0.2671" style={{ stopColor: '#98FD98' }} />
                        <stop offset="0.4788" style={{ stopColor: '#99FF99' }} />
                        <stop offset="0.6103" style={{ stopColor: '#9AF799' }} />
                        <stop offset="0.8109" style={{ stopColor: '#9CE29A' }} />
                        <stop offset="1" style={{ stopColor: '#9EC89B' }} />
                    </linearGradient>
                    <path
                        id="leaves-right"
                        style={{
                            fill: 'url(#SVGID_00000028305358179833154980000000852587805357417391_)',
                        }}
                        d="M653.9,658.7c0-47-27.3-88.5-68.7-112.9
		c-54.2-40.4-184.2-145.3-187-224.3c-3.9-109.8,65.7-98.5,65.7-98.5s-38.6-18.7-102.5,45.9c-7.4,7.5-14.9,15.4-22.2,23.7
		c-104.2,118.8-111.3,283.2-15,407c26.2,33.6,59.6,63.7,101.3,78.8c21.8,10.3,46.8,16.1,73.3,16.1c1.9,0,3.7,0,5.6-0.1
		c37.5,0.7,55.9-11,55.9-11v0C615.3,762.6,653.9,714.6,653.9,658.7z"
                    />
                    <g id="green1-eyes-left">
                        <ellipse cx="529.5" cy="392.8" rx="7.3" ry="12.7" />
                        <circle className="stg2" cx="531.5" cy="389" r="3.8" />
                    </g>
                    <g id="green1-eyes-right">
                        <ellipse cx="472.3" cy="392.8" rx="7.3" ry="12.7" />
                        <circle className="stg2" cx="474.3" cy="389" r="3.8" />
                    </g>
                    <path
                        className="stg4 "
                        d="M431.6,764.8C366,734.5,306.1,647.8,278.4,477.7c0,0,11.3,261.8,161.9,306.8c0,0,101.3,40.9,171.4-34.2
		l-24.5,14.2C542.4,780.7,474.8,784.8,431.6,764.8z"
                    />
                    <path
                        className="stg4 "
                        d="M343.7,679.9c0,0-53.7-212.3,56.8-264.6c0,0-116.8,59.5-38.2,292.3L343.7,679.9z"
                    />
                    <path
                        className="stg4 "
                        d="M420.1,758.9c0,0-43.2-277,34.9-258.6c0,0-67.4-10.4-27.6,262.5L420.1,758.9z"
                    />
                    <path
                        className="stg4 "
                        d="M496.3,778.2c0,0-24-185.8,66.9-192.6c0,0-83,3.2-52.1,192.6H496.3z"
                    />
                    <path
                        className="stg4 "
                        d="M691.9,608.4c0,0,9.2-183.5-86.5-202.9c0,0,92.3,4.5,90.4,190L691.9,608.4z"
                    />
                    <path
                        className="stg6"
                        d="M660.8,289.5c-7.3-8.3-14.7-16.2-22.2-23.7c-63.9-64.5-102.5-45.9-102.5-45.9s69.6-11.3,65.7,98.5
		c-1.7,48.8-52,107.5-103,154.7c-50.2-46.9-99.1-104.6-100.8-152.7c-3.9-109.8,65.7-98.5,65.7-98.5s-38.6-18.7-102.5,45.9
		c-7.4,7.5-14.9,15.4-22.2,23.7c-104.2,118.8-111.3,283.2-15,407c26.2,33.6,59.6,63.7,101.3,78.8c21.8,10.3,46.8,16.1,73.3,16.1
		c1.9,0,3.7,0,5.6-0.1c37.5,0.7,55.9-11,55.9-11v0c7.3-2.8,14.3-6,21-9.7c38.6-15.8,69.8-44.4,94.5-76.1
		C772.1,572.8,765,408.4,660.8,289.5z"
                    />
                </g>
            </svg>
        </Ani>
    );
};

export default Leafy;
