import React, { useState } from 'react';
import AttendanceReward from '../components/game/AttendanceReward';
import AccessThreeReward from '../components/game/AccessThreeReward';
import WaterReward from '../components/game/WaterReward';
import { Heart } from '../assets/icons/GameIcon';
import Menu from '../components/layout/Menu';
import LevelUp from '../components/game/LevelUp';
import MySVGComponent from '../components/gamecharcter/Pink1';
import Green1 from '../components/gamecharcter/Green1';
import FloweryGrow from '../components/gamecharcter/FloweryGrow';
import MagicpowderReward from '../components/game/MagicpowderReward';
const TestPage = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                }}
            >
                <AttendanceReward />
                {/* <AccessThreeReward /> */}
                <WaterReward />
                <MagicpowderReward />
                <LevelUp />
                <Menu />
            </div>
            <MySVGComponent />
            <Green1 />
            <FloweryGrow />
        </>
    );
};

export default TestPage;
