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
    const { isOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(false, false);
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
                <BottomSheet isShow={isShow} setIsShow={setIsShow} actionTitle={'메뉴'}>
                    <MissionList $color={'#D6FFBB'}>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText $width={'calc(100% - 52px)'}>캐릭터 수첩</MissionText>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText $width={'calc(100% - 52px)'}>공지사항</MissionText>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>d</MissionIcon>
                                <MissionText $width={'calc(100% - 52px)'}>로그아웃</MissionText>
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default Menu;
