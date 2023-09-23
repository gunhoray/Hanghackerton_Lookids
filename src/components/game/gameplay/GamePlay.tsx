import DaytimeGreenBackground from '../../../assets/backgrounds/background.green.bright.png';
import NighttimeGreenBackground from '../../../assets/backgrounds/background.green.dark.png';
import styled from 'styled-components';
import { GameHeader } from '../../layout/Header';
import RightSideMenu from './RightSideMenu';
import BottomSideMenu from './BottomSideMenu';
import MagicPowerBar from './MagicPowerBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/config/configStore';
import { useCharacter } from '../../../hooks/useCharacter';
import ExpBar from './ExpBar';
import SpeechBubble from './SpeechBubble';
import useSpeech from '../../../hooks/useSpeech';
import LevelUp from '../LevelUp';
import LastLevelUp from '../LastLevelUp';

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

const CharacterBox = styled.div`
    width: 100%;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
`;

const GamePlayPageBlock = ({ isNightTime, children }: GamePlayPageBlockProps) => (
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

const GameUICenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100svh - 60px);
    position: relative;
`;

const speech: string[] = [
    '안녕하세요!',
    '아~ 이슬 먹고 싶다',
    '좋은 하루 되세요!',
    '레벨3 찍어보고 싶다',
    '감사합니다!',
];

const GamePlay = () => {
    const hour = new Date().getHours();
    const isNightTime = hour >= 18 || hour < 6;
    const user = useSelector((state: RootState) => state.user);
    const headerName = user?.data?.fairy?.name ?? 'Leafy';
    const Character = useCharacter(user);
    const { speechEvent } = useSpeech(speech);

    return (
        <GamePlayPageBlock isNightTime={isNightTime}>
            <GameHeader headerName={headerName} />
            <RightSideMenu />
            <GameUICenter>
                <CharacterBox>
                    <SpeechBubble />
                    <div onClick={speechEvent}>
                        <Character />
                    </div>
                    <ExpBar maxExp={100} />
                    <LastLevelUp />
                </CharacterBox>
                <BottomSideMenu />
            </GameUICenter>
            <LeftSide>
                <MagicPowerBar />
            </LeftSide>
            <LevelUp />
        </GamePlayPageBlock>
    );
};

export default GamePlay;
