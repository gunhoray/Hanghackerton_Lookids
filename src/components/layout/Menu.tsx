import React from 'react';
import BottomSheet, {
    MissionButton,
    MissionIcon,
    MissionItem,
    MissionList,
    MissionText,
    useBottomSheet,
} from '../common/BottomSheet';
import { Book, Bullhorn, KebabMenuUI, LogoutIcon } from '../../assets/icons/SVG';
import { IconBox } from './Header';

const Menu = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );
    return (
        <>
            <IconBox onClick={onClickShowHandler}>
                <KebabMenuUI />
            </IconBox>
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
                                <MissionIcon>
                                    <Book />
                                </MissionIcon>
                                <MissionText>캐릭터 수첩</MissionText>
                                <MissionButton>바로가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>
                                    <Bullhorn />
                                </MissionIcon>
                                <MissionText>공지사항</MissionText>
                                <MissionButton>바로가기</MissionButton>
                            </div>
                        </MissionItem>
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>
                                    <LogoutIcon />
                                </MissionIcon>
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
