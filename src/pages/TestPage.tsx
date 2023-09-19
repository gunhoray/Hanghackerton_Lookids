import React, { useState } from 'react';
import AttendanceReward from '../components/game/AttendanceReward';
import AccessThreeReward from '../components/game/AccessThreeReward';
import WaterReward from '../components/game/WaterReward';
import { Heart } from '../assets/icons/GameIcon';

const TestPage = () => {
    return (
        <div>
            <AttendanceReward />
            <AccessThreeReward />
            <WaterReward />
            <Heart />
        </div>
    );
};

export default TestPage;
