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
import { useState } from "react";
import Shower from "../components/game/gameplay/Shower";
import { Water } from "../assets/icons/GameIcon";

const TestPage = () => {
  const [showers, setShowers] = useState(false);
  const ShowerHandler = () => {
    setShowers(true);
    setTimeout(() => {
      setShowers(false);
    }, 1000);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
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
      <button onClick={ShowerHandler}>샤워</button>
      {showers && <Shower symbol={<Water />} />}

      <SpeechBubble />
      <Folwery />
      <Green1 />
      <FloweryGrow />
      <LeafyGrow />
    </>
  );
};

export default TestPage;
