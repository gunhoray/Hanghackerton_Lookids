import React, { useEffect } from 'react';
import GameCreate from '../components/game/GameCreate';
import GamePlay from '../components/game/gameplay/GamePlay';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { fetchUser } from '../apis/AuthApi';
import { fetchUserSuccess } from '../redux/modules/userSlice';
import { RootState } from '../redux/config/configStore';
const checkFairy = (fairy: string) => {
    return fairy !== null;
};

const GamePage = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useQuery('user', fetchUser, {
        onSuccess: (data: any) => {
            dispatch(fetchUserSuccess(data));
        },
        onError: (err) => {
            alert('해당 환경은 지원하지않습니다.');
        },
    });

    if (isLoading) {
        return <span>Loading…</span>;
    }

    if (isError) {
        return <span>Error</span>;
    }

    const hasFairy = checkFairy(data.fairy);

    return <>{hasFairy ? <GamePlay /> : <GameCreate />}</>;
    // return (
    //   <>
    //     <GamePlay />
    //     {/* <GameCreate /> */}
    //   </>
    // );
};

export default GamePage;
