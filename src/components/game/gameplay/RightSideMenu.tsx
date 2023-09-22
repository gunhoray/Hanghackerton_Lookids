import AttendanceReward from "../AttendanceReward";
import AccessThreeReward from "../AccessThreeReward";
import WaterReward from "../WaterReward";
import HeartRewardTimer from "./HeartRewardTimer";
import styled from "styled-components";

const RightsideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 75%;
  margin-top: 5%;
  gap: 10px;
`;
const RightSideMenu = () => {
  return (
    <RightsideMenu>
      <AttendanceReward />
      <WaterReward />
      <AccessThreeReward />
      <HeartRewardTimer />
    </RightsideMenu>
  );
};

export default RightSideMenu;
