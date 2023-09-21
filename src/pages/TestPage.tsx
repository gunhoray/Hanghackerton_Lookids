import React from 'react';
import AttendanceReward from '../components/game/AttendanceReward';
import WaterReward from '../components/game/WaterReward';
import Menu from '../components/layout/Menu';
import LevelUp from '../components/game/LevelUp';
import MySVGComponent from '../components/gamecharcter/Folwery';
import Green1 from '../components/gamecharcter/Leafy';
import FloweryGrow from '../components/gamecharcter/FloweryGrow';
import MagicpowderReward from '../components/game/MagicpowderReward';
import LeafyGrow from '../components/gamecharcter/LeafyGrow';
import ShareLink from '../components/common/ShareLink';
const TestPage = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}
            >
                <AttendanceReward />
                {/* <AccessThreeReward /> */}
                <WaterReward />
                <MagicpowderReward />
                <LevelUp />
                <Menu />
                <ShareLink />
            </div>
            <MySVGComponent />
            <Green1 />
            <FloweryGrow />
            <LeafyGrow />
        </>
    );
};

export default TestPage;
