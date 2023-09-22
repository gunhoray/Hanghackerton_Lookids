import DaytimeGreenBackground from '../../../assets/backgrounds/background.green.bright.png';
import NighttimeGreenBackground from '../../../assets/backgrounds/background.green.dark.png';
import { ReactComponent as Character1 } from '../../../assets/elemental.green.1.svg';
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
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

const speech: string[] = [
    '안녕하세요!',
    '어떻게 지내세요?',
    '좋은 하루 되세요!',
    '무엇을 도와드릴까요?',
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
            <CharacterBox>
                <SpeechBubble />
                <div onClick={speechEvent}>
                    <Character />
                </div>
                <ExpBar maxExp={100} />
            </CharacterBox>
            <BottomSideMenu />
            <LeftSide>
                <MagicPowerBar />
            </LeftSide>
            <LevelUp />
        </GamePlayPageBlock>
    );
};

export default GamePlay;
