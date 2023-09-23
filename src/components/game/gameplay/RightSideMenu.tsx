import AttendanceReward from '../AttendanceReward';
import AccessThreeReward from '../AccessThreeReward';
import WaterReward from '../WaterReward';
import HeartRewardTimer from './HeartRewardTimer';
import styled from 'styled-components';
import ShareLink from '../../common/ShareLink';
import MagicpowderReward from '../MagicpowderReward';

const RightsideMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    gap: 8px;
    top: 72px;
    right: 16px;
`;

const RightSideMenu = () => {
    return (
        <RightsideMenu>
            <ShareLink />
            <AttendanceReward />
            <WaterReward />
            <MagicpowderReward />
            <HeartRewardTimer />
        </RightsideMenu>
    );
};

export default RightSideMenu;
