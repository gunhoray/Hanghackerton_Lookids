import React, { useEffect } from 'react';
import LookList from '../components/lookidsmain/LookList';
import TodayLookList from '../components/lookidsmain/TodayLookList';
import TabBar from '../components/lookidsmain/TabBar';
import LinksNav from '../components/lookidsmain/LinksNav';
import MobileNavTabBar from '../components/layout/MobileNavTabBar';
import { MainHeader } from '../components/layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { TIME_INTERVAL } from '../redux/modules/toastSlice';
import { RootState } from '../redux/config/configStore';
import { LookidsGlobalStyle } from '../components/lookidsmain/LookkidsGlobalStyle';
import ToastUIContainer from '../components/common/ToastUI';
import TimeCheck from '../components/lookidsmain/TimeCheck';
const MainPage = () => {
    return (
        <>
            <TimeCheck />
            <LookidsGlobalStyle />
            <MainHeader />
            <ToastUIContainer />
            <TabBar />
            <LookList />
            <LinksNav />
            <TodayLookList />
            <MobileNavTabBar />
        </>
    );
};

export default MainPage;
