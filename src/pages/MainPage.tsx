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
const MainPage = () => {
    const dispatch = useDispatch();
    const { time } = useSelector((state: RootState) => {
        return state.toast;
    });
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(TIME_INTERVAL());
        }, 1000);
        console.log(time);
        return () => {
            clearInterval(timer);
        };
    }, [time]);

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
