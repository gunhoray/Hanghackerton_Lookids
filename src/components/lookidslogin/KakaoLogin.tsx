import { KakaoLinkWrapper } from "./KakaoLogin.style";
interface SNSLoginProps {}

const KakaoLogin: React.FC<SNSLoginProps> = () => {
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY2;
  const KAKAO_AUTH_URI = `${process.env.REACT_APP_KAKAO_AUTH_URI}?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <KakaoLinkWrapper href={KAKAO_AUTH_URI}>
      카카오로 로그인 하기
    </KakaoLinkWrapper>
  );
};

export default KakaoLogin;
