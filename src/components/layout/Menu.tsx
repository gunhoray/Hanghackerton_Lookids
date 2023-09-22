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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RESET_STATE } from "../../redux/modules/heartToastSlice";
const Menu = () => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen, isShow, setIsShow, onClickShowHandler } =
    useBottomSheet(false, false);
  const dispatch = useDispatch();
  const deleteUserHandler = () => {
    const userId = 1235468;
    deleteUser({ userId });
  };
  const handleLogout = () => {
    // 로그아웃 시 localStorage를 비우는 코드
    localStorage.clear();
    dispatch(RESET_STATE());
    navigate("/");
    console.log("logout");
    // 로그아웃 후 페이지 리디렉션 등의 추가적인 작업이 필요하다면 이곳에 작성합니다.
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
          actionTitle={"메뉴"}
        >
          <MissionList $color={"#D6FFBB"}>
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
            <MissionItem>
              <div className="mission-item-inner">
                <MissionIcon>
                  <LogoutIcon />
                </MissionIcon>
                <MissionText>회원탈퇴</MissionText>
                <MissionButton onClick={deleteUserHandler}>
                  바로가기
                </MissionButton>
              </div>
            </MissionItem>
          </MissionList>
        </BottomSheet>
      )}
    </>
  );
};

export default Menu;
