import React from 'react';
import { CommonHeader } from '../components/layout/Header';
import Purchase from '../components/lookidsmain/Purchase';
import { LookidsGlobalStyle } from '../components/lookidsmain/LookkidsGlobalStyle';
const PurchasePage = () => {
    return (
        <div>
            <LookidsGlobalStyle />
            <CommonHeader />
            <Purchase />
        </div>
    );
};

export default PurchasePage;
