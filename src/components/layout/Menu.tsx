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
import { deleteUser } from '../../apis/AuthApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );

    const { id } = useSelector((state: RootState) => {
        return state.user.data;
    });
    const nav = useNavigate();

    const deleteUserHandler = () => {
        const userId = id;
        deleteUser({ userId });
        nav('/');
    };

    return (
        <>
            <IconBox onClick={onClickShowHandler}>
                <KebabMenuUI />
            </IconBox>
            {isOpen && (
                <BottomSheet
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
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
                        <MissionItem>
                            <div className="mission-item-inner">
                                <MissionIcon>
                                    <LogoutIcon />
                                </MissionIcon>
                                <MissionText>회원탈퇴</MissionText>
                                <MissionButton onClick={deleteUserHandler}>바로가기</MissionButton>
                            </div>
                        </MissionItem>
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default Menu;
