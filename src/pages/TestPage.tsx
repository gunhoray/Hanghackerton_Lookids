import React, { useState } from 'react';
import AttendanceReward from '../components/game/AttendanceReward';
import AccessThreeReward from '../components/game/AccessThreeReward';
import WaterReward from '../components/game/WaterReward';
import { Heart } from '../assets/icons/GameIcon';
import Menu from '../components/layout/Menu';
import LevelUp from '../components/game/LevelUp';
const TestPage = () => {
    return (
        <div>
            <AttendanceReward />
            <AccessThreeReward />
            <WaterReward />
            <Menu />
            <Heart />
            <LevelUp />
        </div>
    );
};

export default TestPage;
