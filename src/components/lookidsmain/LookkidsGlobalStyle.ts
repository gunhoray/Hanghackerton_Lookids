import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const LookidsGlobalStyle = createGlobalStyle`

    body {
      font-family: 'Noto Sans KR', sans-serif;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    }
`;
