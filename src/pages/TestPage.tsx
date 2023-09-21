import React, { useState } from 'react';
import AttendanceReward from '../components/game/AttendanceReward';
import AccessThreeReward from '../components/game/AccessThreeReward';
import WaterReward from '../components/game/WaterReward';
import { Heart } from '../assets/icons/GameIcon';
import Menu from '../components/layout/Menu';
import LevelUp from '../components/game/LevelUp';
import MySVGComponent from '../components/gamecharcter/Folwery';
import Green1 from '../components/gamecharcter/Leafy';
import FloweryGrow from '../components/gamecharcter/FloweryGrow';
import MagicpowderReward from '../components/game/MagicpowderReward';
import LeafyGrow from '../components/gamecharcter/LeafyGrow';
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
            <LeafyGrow />
        </>
    );
};

export default TestPage;
