import AttendanceReward from '../components/game/AttendanceReward';
import WaterReward from '../components/game/WaterReward';
import Menu from '../components/layout/Menu';
import LevelUp from '../components/game/LevelUp';
import Folwery from '../components/gamecharcter/Folwery';
import Green1 from '../components/gamecharcter/Leafy';
import FloweryGrow from '../components/gamecharcter/FloweryGrow';
import MagicpowderReward from '../components/game/MagicpowderReward';
import LeafyGrow from '../components/gamecharcter/LeafyGrow';
import ShareLink from '../components/common/ShareLink';
import SpeechBubble from '../components/game/gameplay/SpeechBubble';
import LastLevelUp from '../components/game/LastLevelUp';

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
                {/* <LevelUp /> */}
                <LastLevelUp />
                <Menu />
                <ShareLink />
            </div>
            <SpeechBubble />
            <Folwery />
            <Green1 />
            <FloweryGrow />
            <LeafyGrow />
        </>
    );
};

export default TestPage;
