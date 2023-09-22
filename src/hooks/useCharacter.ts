import Leafy from '../components/gamecharcter/Leafy';
import LeafyGrow from '../components/gamecharcter/LeafyGrow';
import Folwery from '../components/gamecharcter/Folwery';
import FloweryGrow from '../components/gamecharcter/FloweryGrow';
import styled from 'styled-components';

export function useCharacter(user: any) {
    const fairyType = user?.data?.fairy?.type;
    const fairyLevel = user?.data?.fairy?.level;

    if (fairyType === 'leafy') {
        return fairyLevel === 2 ? LeafyGrow : Leafy;
    }

    if (fairyType === 'flowery') {
        return fairyLevel === 2 ? FloweryGrow : Folwery;
    }

    // 기본값으로 green character level 1 반환
    return Leafy;
}
