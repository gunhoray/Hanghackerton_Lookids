import Leafy from '../components/gamecharcter/Leafy';
import LeafyGrow from '../components/gamecharcter/LeafyGrow';
import Folwery from '../components/gamecharcter/Folwery';
import FloweryGrow from '../components/gamecharcter/FloweryGrow';
import styled from 'styled-components';

export function useCharacter(user: any) {
    const fairyType = user?.data?.fairy?.type;
    const fairyLevel = user?.data?.fairy?.level;
    const fairyLevelup = user?.data?.fairy?.exp;

    if (fairyType === 'leafy') {
        return fairyLevel === 1 ? Leafy : LeafyGrow;
    }

    if (fairyType === 'flowery') {
        return fairyLevel === 1 ? Folwery : FloweryGrow;
    }

    // 기본값으로 green character level 1 반환
    return Leafy;
}
