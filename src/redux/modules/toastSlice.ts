import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
    page: string | null;
    time: number;
    toast: string | null;
}

const initialState: ToastState = {
    page: null,
    time: 30,
    toast: null,
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
            if (state.time > 0) {
                state.time -= 1;
            }
        },
        CLEAR_TOAST: (state) => {
            state.toast = null;
        },
    },
});

export const { ADD_PAGE, CLEAR_TOAST, TIME_INTERVAL } = toastSlice.actions;

export default toastSlice.reducer;
