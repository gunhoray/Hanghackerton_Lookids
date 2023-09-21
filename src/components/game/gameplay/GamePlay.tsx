import DaytimeGreenBackground from "../../../assets/backgrounds/background.green.bright.png";
import NighttimeGreenBackground from "../../../assets/backgrounds/background.green.dark.png";
import { ReactComponent as Character1 } from "../../../assets/elemental.green.1.svg";
import styled from "styled-components";

import { GameHeader } from "../../layout/Header";
import RightSideMenu from "./RightSideMenu";
import BottomSideMenu from "./BottomSideMenu";
import MagicPowerBar from "./MagicPowerBar";

interface GamePlayPageBlockProps {
  isNightTime: boolean;
  children?: React.ReactNode;
}

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const StyledCharacter = styled(Character1)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* This will center the character */
`;

const GamePlayPageBlock = ({
  isNightTime,
  children,
}: GamePlayPageBlockProps) => (
  <StyledDiv
    style={{
      backgroundImage: `url(${
        isNightTime ? NighttimeGreenBackground : DaytimeGreenBackground
      })`,
    }}
  >
    {children}
  </StyledDiv>
);

const GamePlay = () => {
  const hour = new Date().getHours();
  const isNightTime = hour >= 18 || hour < 6;

  return (
    <GamePlayPageBlock isNightTime={isNightTime}>
      <GameHeader />
      <RightSideMenu />
      <StyledCharacter />
      <BottomSideMenu />
      <MagicPowerBar />
    </GamePlayPageBlock>
  );
};

export default GamePlay;
