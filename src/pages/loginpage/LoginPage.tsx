import React from "react";
import KakaoLogin from "../../components/lookidslogin/KakaoLogin";
import Description from "../../components/lookidslogin/Description";
import { LoginPageBlock, LoginDescription } from "./LoginPage.style";
import MobileNavTabBar from "../../components/layout/MobileNavTabBar";

const LoginPage = () => {
  return (
    <LoginPageBlock>
      <Description />
      <LoginDescription>
        <span className="flag">3.9초만에 빠른 회원가입</span>
        <KakaoLogin />
        <button>{`일단 둘러보기>`}</button>
        <span>
          회원가입을 하면 룩키즈의 서비스 이용약관, 개인정보 보호 정책에
          동의하는 것으로 간주됩니다.
        </span>
      </LoginDescription>
    </LoginPageBlock>
  );
};

export default LoginPage;
