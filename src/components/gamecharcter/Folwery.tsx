import React from 'react';
import styled from 'styled-components';
import useSpeech from '../../hooks/useSpeech';

const Ani = styled.div`
    width: 100%;
    height: auto;
    svg {
        animation: body 3s infinite ease-in;
        transform-origin: 50% 100%;
    }
    .st0 {
        fill: #81a37b;
    }
    .st1 {
        fill: #ff9966;
        animation: head-ani-1 3s infinite ease-in;
        transform-origin: 50% 100%;
    }
    .st2 {
        fill: #ffcc99;
        animation: head-ani-2 2s infinite ease-in;
        transform-origin: 50% 100%;
    }
    .st3 {
        fill: #ffcc66;
        animation: head-ani-3 3s infinite ease-in;
        transform-origin: 100% 100%;
    }
    .st4 {
        fill: #ffffff;
    }
    .st5 {
        opacity: 0.2;
        fill: #ff00cc;
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
    @keyframes head-ani-1 {
        0% {
            transform: rotate(0deg);
        }
        40% {
            transform: translateX(10px) rotate(2deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes head-ani-2 {
        0% {
            transform: rotate(0deg);
        }
        40% {
            transform: translateX(0px) rotate(-2deg);
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

const Folwery = () => {
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
                <circle className="st0" cx="1223.7" cy="612" r="137.3" />
                <rect x="1416.3" y="63.7" className="st1" width="46" height="50.2" />
                <rect x="1425.5" y="151.5" className="st2" width="51.1" height="66.3" />
                <rect x="1457.3" y="281.4" className="st3" width="32.7" height="45.2" />
                <g id="head">
                    <path
                        className="st1"
                        d="M500,194.7c0,0-385.9,564.6,0,628.9C885.9,759.3,500,194.7,500,194.7z"
                    />
                    <path
                        className="st1"
                        d="M378.3,644.8L453.8,231c0,0-162.7,287.4-93.9,492.9C359.8,723.9,357.1,686.5,378.3,644.8z"
                    />
                    <path
                        className="st4"
                        d="M523.2,577.8c0,0-167.9-5.4-163.3,146.1c20.1,58,75.3,99.7,140.2,99.7c58.6,0,109.3-34,133.4-83.4
          C633.6,615.4,523.2,577.8,523.2,577.8z"
                    />
                    <path
                        className="st3"
                        d="M510.7,176.4l5.4,175.6c15,63.4,27.7,134,23.8,180.5c62.5,17.5,108.3,74.8,108.3,142.9c0,23.3-5.4,45.3-15,65
          C633.4,740.3,744.4,535.3,510.7,176.4z"
                    />
                    <path
                        className="st3"
                        d="M540,532.4c-1.8,21.1-6.9,37.2-16.8,45.4c0,0,110.5,37.6,110.2,162.5c9.6-19.6,15-41.7,15-65
          C648.3,607.2,602.5,549.9,540,532.4z"
                    />
                    <path
                        className="st2"
                        d="M500,527c7.4,0,14.6,0.5,21.6,1.6L516.2,352c-18.1-76.5-39.7-142.4-39.7-142.4
          c-214.8,391-116.6,514.4-116.6,514.4c-5.3-15.2-8.2-31.6-8.2-48.6C351.7,593.4,418.1,527,500,527z"
                    />
                    <path
                        className="st2"
                        d="M523.2,577.8l-1.5-49.2c-7.1-1-14.3-1.6-21.6-1.6c-81.9,0-148.3,66.4-148.3,148.3c0,17,2.9,33.4,8.2,48.6
          C355.2,572.4,523.2,577.8,523.2,577.8z"
                    />
                    <path
                        className="st2"
                        d="M540,532.4c3.9-46.4-8.8-117.1-23.8-180.5l5.5,176.6C527.9,529.5,534,530.8,540,532.4z"
                    />
                    <path
                        className="st2"
                        d="M523.2,577.8c9.9-8.1,15.1-24.3,16.8-45.4c-6-1.7-12.1-3-18.4-3.9L523.2,577.8z"
                    />
                    <g id="eyes-left">
                        <ellipse
                            transform="matrix(0.8228 -0.5683 0.5683 0.8228 -303.1026 377.4088)"
                            cx="453.8"
                            cy="674.8"
                            rx="9"
                            ry="15.7"
                        />
                        <circle className="st4" cx="453.1" cy="669.6" r="4.7" />
                    </g>
                    <g id="eyes-right">
                        <ellipse
                            transform="matrix(0.8228 -0.5683 0.5683 0.8228 -340.6155 355.2846)"
                            cx="399.5"
                            cy="723.9"
                            rx="9"
                            ry="15.7"
                        />
                        <circle className="st4" cx="398.9" cy="718.7" r="4.7" />
                    </g>
                    <g id="mouse">
                        <ellipse
                            transform="matrix(0.8228 -0.5683 0.5683 0.8228 -346.5642 395.488)"
                            cx="461"
                            cy="753.6"
                            rx="12.4"
                            ry="8.2"
                        />
                    </g>
                    <path
                        className="st5"
                        d="M651.1,507.1c-15.5-87.6-54.9-198.2-140.4-329.5l1.1,36.4c-7.4-11.6-11.8-18.1-11.8-18.1s-7.3,10.7-18.9,29.3
                    c-2.9-9.2-4.6-14.5-4.6-14.5c-10.3,18.7-19.8,36.8-28.7,54.3l6-32.8c0,0-58.7,103.8-90.7,231.2C314.7,599,300.6,747,431.9,805.2
                    c-31.8-17.6-56.5-46.5-68.6-81.3c-4.6-151.5,163.3-146.1,163.3-146.1s110.5,37.6,110.2,162.5c-8.5,17.4-20.3,32.9-34.6,45.7
                    C685.2,726.4,682.8,616.3,651.1,507.1z"
                    />
                </g>
                <path
                    className="st4"
                    d="M1771.1,98.7c0.2-100.8-89-131.1-89-131.1s-135.6-4.4-131.8,118c9.8,28.1,29.7,51.4,55.4,65.6
        c13.5,6,29,10.8,46.5,14.3c3.7,0.3,7.4,0.5,11.2,0.5c1,0,2.1,0,3.1-0.1c32-6,57.2-16.5,76.6-30.4
        C1754.7,125.2,1764.3,112.7,1771.1,98.7z"
                />
            </svg>
        </Ani>
    );
};

export default Folwery;
