import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
    success: {
        share: string;
        purchase: string;
        attendance: string;
    };
}

const initialState: ToastState = {
    success: {
        share: 'yet',
        purchase: 'yet',
        attendance: 'yet',
    },
};

export type SuccessKeys = 'share' | 'purchase' | 'attendance';

const magicMissionSlice = createSlice({
    name: 'magicMission',
    initialState,
    reducers: {
        SUCCESS_MISSION: (state, action: PayloadAction<SuccessKeys>) => {
            const keyToUpdate = action.payload;
            state.success[keyToUpdate] = 'success';
        },
        GET_REWARD_MISSION: (state, action: PayloadAction<SuccessKeys>) => {
            const keyToUpdate = action.payload;
            state.success[keyToUpdate] = 'get-reward';
        },
    },
});

export const { SUCCESS_MISSION, GET_REWARD_MISSION } = magicMissionSlice.actions;

export default magicMissionSlice.reducer;
