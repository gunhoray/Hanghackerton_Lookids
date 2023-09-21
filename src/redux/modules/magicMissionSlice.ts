import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
    success: boolean | null;
}

const initialState: ToastState = {
    success: null,
};

const magicMissionSlice = createSlice({
    name: 'magicMission',
    initialState,
    reducers: {
        ADD_PAGE: (state, action: PayloadAction<string>) => {},
    },
});

export const { ADD_PAGE } = magicMissionSlice.actions;

export default magicMissionSlice.reducer;
