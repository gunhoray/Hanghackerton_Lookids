import React from 'react';
import BottomSheet, {
    MissionButton,
    MissionIcon,
    MissionItem,
    MissionList,
    MissionText,
    useBottomSheet,
} from '../common/BottomSheet';
import { KebabMenuUI } from '../../assets/icons/SVG';

const Menu = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );
    return (
        <>
            <button
                onClick={onClickShowHandler}
                style={{
                    width: '36px',
                    height: '36px',
                }}
            >
                <KebabMenuUI />
            </button>
            {isOpen && (
                <BottomSheet
                    isOpen={isOpen}
                    setIsOpen={setIsShow}
                    isShow={isShow}
                    setIsShow={setIsShow}
                    actionTitle={'메뉴'}
                >
                    <MissionList $color={'#D6FFBB'}>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>캐릭터 수첩</MissionText>
                                <MissionButton>바로가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>공지사항</MissionText>
                                <MissionButton>바로가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText>로그아웃</MissionText>
                                <MissionButton>바로가기</MissionButton>
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default Menu;
