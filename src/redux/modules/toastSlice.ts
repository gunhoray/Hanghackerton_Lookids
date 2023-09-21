import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
    page: string | null;
    time: number;
    message: string | null;
    getReward: boolean;
}

const MISSION_TIME = 30;

const initialState: ToastState = {
    page: null,
    time: MISSION_TIME,
    message: null,
    getReward: false,
};

const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        ADD_PAGE: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
            console.log(state.page);
        },
        TIME_INTERVAL: (state) => {
            if (state.time > 0 && !state.getReward) {
                state.time -= 1;
            } else {
                state.getReward = true;
                state.message = '미션이 완료되었습니다!';
            }
        },
        CLEAR_TOAST: (state) => {
            state.message = null;
        },
        CLEAR_TIME: (state) => {
            state.getReward = false;
            state.page = null;
            state.time = MISSION_TIME;
        },
    },
});

export const { ADD_PAGE, CLEAR_TOAST, TIME_INTERVAL, CLEAR_TIME } = toastSlice.actions;

export default toastSlice.reducer;
