import DaytimeGreenBackground from "../../../assets/backgrounds/background.green.bright.png";
import NighttimeGreenBackground from "../../../assets/backgrounds/background.green.dark.png";
import { ReactComponent as Character1 } from "../../../assets/elemental.green.1.svg";
import styled from "styled-components";
import { GameHeader } from "../../layout/Header";
import RightSideMenu from "./RightSideMenu";
import BottomSideMenu from "./BottomSideMenu";
import MagicPowerBar from "./MagicPowerBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/config/configStore";
import { useCharacter } from "../../../hooks/useCharacter";
import ExpBar from "./ExpBar";
import { UPDATE_CURRENT_TIME } from "../../../redux/modules/heartToastSlice";

interface GamePlayPageBlockProps {
  isNightTime: boolean;
  children?: React.ReactNode;
}

const LeftSide = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const user = useSelector((state: RootState) => state.user);
  const headerName = user?.data?.fairy?.name ?? "Leafy";
  const Character = useCharacter(user);
  console.log(user);
  return (
    <GamePlayPageBlock isNightTime={isNightTime}>
      <GameHeader headerName={headerName} />
      <RightSideMenu />
      <Character />
      <ExpBar maxExp={100} />
      <BottomSideMenu />
      <LeftSide>
        <MagicPowerBar />
      </LeftSide>
    </GamePlayPageBlock>
  );
};

export default GamePlay;
