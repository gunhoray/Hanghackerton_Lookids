import React, { useEffect } from 'react';
import GameCreate from '../components/game/GameCreate';
import GamePlay from '../components/game/gameplay/GamePlay';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { fetchUser } from '../apis/AuthApi';
import { fetchUserSuccess } from '../redux/modules/userSlice';

const checkFairy = (fairy: string) => {
    return fairy !== null;
};

const GamePage = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useQuery('user', fetchUser);
    // useEffect(() => {
    //     if (!isLoading && !isError) {
    //         dispatch(fetchUserSuccess(data));
    //     }
    // }, [dispatch, data, isLoading, isError]);
    if (isLoading) {
        return <span>Loading...</span>;
    }
    if (isError) {
        return <span>Error</span>;
    }
    const hasFairy = checkFairy(data.fairy);

    dispatch(fetchUserSuccess(data));

    return <>{hasFairy ? <GamePlay /> : <GameCreate />}</>;
};

export default GamePage;
