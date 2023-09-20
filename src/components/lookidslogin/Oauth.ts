import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AxiosCustomHeaders {
  access: string;
  refresh: string;
  [header: string]: string;
}

interface CustomAxiosResponse extends AxiosResponse {
  headers: AxiosCustomHeaders;
}

// accessToken
// : 
// isSignUp
// : 
// refreshToken
// :

const Oauth: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res: CustomAxiosResponse = await axios.post(
          `${process.env.REACT_APP_SERVER}/users/sign-in/kakao`,
          {
            code: code,
            redirectUri: "http://localhost:3000/oauth",
          },
          {
            withCredentials: true,
          }
        );
        const access = res.data.accessToken;
        const refresh = res.data.refreshToken;
        localStorage.setItem("Access", access);
        localStorage.setItem("Refresh", refresh);
        // console.log(res);
        navigate("/");
      } catch (e) {
        // console.error(e);
        navigate("/");
      }
    })();
  }, [code, navigate]);
  return null;
};

export default Oauth;
