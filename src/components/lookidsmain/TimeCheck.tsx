import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import { TIME_INTERVAL } from '../../redux/modules/toastSlice';

const TimeCheck = () => {
    const dispatch = useDispatch();
    const { page, getReward } = useSelector((state: RootState) => {
        return state.toast;
    });
    useEffect(() => {
        let timer: any;
        if (page === 'trend') {
            timer = setInterval(() => {
                dispatch(TIME_INTERVAL());
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [page]);

    return null;
};

export default TimeCheck;
