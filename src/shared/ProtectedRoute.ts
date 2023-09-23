import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchUser } from '../apis/AuthApi';
import { fetchUserSuccess } from "../redux/modules/userSlice";

interface UserRouteProps {
  element: React.ReactNode;
  path: string;
}

const UserRoute: React.FC<UserRouteProps> = ({ element, path }) => {
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const LoginStatusCheck = async () => {
      try {
        const loginStatus = await fetchUser();

        setAuthentication(loginStatus);
        // dispatch(fetchUserSuccess(loginStatus));
        console.log(loginStatus);
        if (!loginStatus) {
          // dispatch(setRedirectUrl(path));
          navigate("/login");
        }
      } catch (error) {
        console.error("Error occurred while fetching user:", error);
        navigate("/login");
      }
    };

    LoginStatusCheck();
  }, [navigate]);

  return authentication ? element : null;
};

export default UserRoute;
