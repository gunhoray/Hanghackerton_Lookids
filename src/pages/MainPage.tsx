import React from 'react';
import LookList from '../components/lookidsmain/LookList';
import TodayLookList from '../components/lookidsmain/TodayLookList';
import TabBar from '../components/lookidsmain/TabBar';
import LinksNav from '../components/lookidsmain/LinksNav';
import MobileNavTabBar from '../components/layout/MobileNavTabBar';
import { MainHeader } from '../components/layout/Header';
const MainPage = () => {
    return (
        <>
            <MainHeader />
            <TabBar />
            <LookList />
            <LinksNav />
            <TodayLookList />
            <MobileNavTabBar />
        </>
    );
};

export default MainPage;
