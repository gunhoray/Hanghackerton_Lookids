import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    // 로그아웃 시 localStorage를 비우는 코드
    localStorage.clear();
    console.log("logout");
    // 로그아웃 후 페이지 리디렉션 등의 추가적인 작업이 필요하다면 이곳에 작성합니다.
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
