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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { fetchUserOut } from '../../redux/modules/userSlice';
const Menu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } = useBottomSheet(
        false,
        false
    );

    const { id } = useSelector((state: RootState) => {
        return state.user.data;
    });
    // const queryClient = useQueryClient();

    // const mutation = useMutation((userId: number) => deleteUser(userId), {
    //     onSuccess: (data) => {
    //         queryClient.invalidateQueries('user');
    //     },
    // });
    const deleteUserHandler = () => {
        // const userId = id;
        localStorage.clear();
        // mutation.mutate(id);
        dispatch(fetchUserOut());
        deleteUser(id);
        navigate('/');
    };

    const handleLogout = () => {
        localStorage.clear();
        dispatch(fetchUserOut());
        navigate('/');
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
                                <MissionButton onClick={handleLogout}>바로가기</MissionButton>
                            </div>
                        </MissionItem>
                        {/* <MissionItem>
              <div className="mission-item-inner">
                <MissionIcon>
                  <LogoutIcon />
                </MissionIcon>
                <MissionText>회원탈퇴</MissionText>
                <MissionButton onClick={deleteUserHandler}>
                  바로가기
                </MissionButton>
              </div>
            </MissionItem> */}
                    </MissionList>
                </BottomSheet>
            )}
        </>
    );
};

export default Menu;
