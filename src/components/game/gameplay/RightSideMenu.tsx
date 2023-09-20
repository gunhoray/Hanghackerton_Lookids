import AttendanceReward from "../AttendanceReward";
import AccessThreeReward from "../AccessThreeReward";
import WaterReward from "../WaterReward";
import RewardTimer from "./RewardTimer";
import styled from "styled-components";

const RightsideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80%;
  margin-top: 5%;
  gap: 10px;
`;
const RightSideMenu = () => {
  return (
    <RightsideMenu>
      <AttendanceReward />
      <WaterReward />
      <AccessThreeReward />
      <RewardTimer />
    </RightsideMenu>
  );
};

export default RightSideMenu;
