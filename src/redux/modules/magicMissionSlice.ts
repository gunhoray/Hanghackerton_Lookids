import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface magicMissionState {
    success: {
        share: string;
        purchase: string;
        attendance: string;
    };
    share: boolean;
}

const initialState: magicMissionState = {
    success: {
        share: 'yet',
        purchase: 'yet',
        attendance: 'yet',
    },
    share: false,
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
        FOCUS_ON_SHARE: (state) => {
            state.share = true;
        },
        FOCUS_OFF_SHARE: (state) => {
            state.share = false;
        },
    },
});

export const { SUCCESS_MISSION, GET_REWARD_MISSION, FOCUS_ON_SHARE, FOCUS_OFF_SHARE } =
    magicMissionSlice.actions;

export default magicMissionSlice.reducer;
