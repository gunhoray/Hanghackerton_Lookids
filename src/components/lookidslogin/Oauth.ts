import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();
    const startTime = Date.now();
    const expirationTime = startTime + 1 * 60 * 1000;

    useEffect(() => {
        (async () => {
            try {
                const res: CustomAxiosResponse = await axios.post(
                    `${process.env.REACT_APP_SERVER}/users/sign-in/kakao`,
                    {
                        code: code,
                        redirectUri: `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`,
                    },
                    {
                        withCredentials: true,
                    }
                );
                const access = res.data.accessToken;
                const refresh = res.data.refreshToken;
                localStorage.setItem('Access', access);
                localStorage.setItem('Refresh', refresh);
                if (access && refresh !== '') {
                    localStorage.setItem('RewardStartTime', startTime.toString());
                    localStorage.setItem('RewardExpiredTime', expirationTime.toString());
                }
                navigate('/');
            } catch (e) {
                navigate('/');
            }
        })();
    }, [code, navigate]);
    return null;
};

export default Oauth;
