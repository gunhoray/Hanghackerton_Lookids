import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface magicMissionState {
    success: {
        trend: string;
        event: string;
        newItem: string;
        resell: string;
    };
}

const initialState: magicMissionState = {
    success: {
        trend: 'yet',
        event: 'success',
        newItem: 'success',
        resell: 'success',
    },
};

export type dewSuccessKeys = 'trend' | 'event' | 'newItem' | 'resell';

const dewMissionSlice = createSlice({
    name: 'dewMission',
    initialState,
    reducers: {
        DEW_TIME_MISSION: (state, action: PayloadAction<dewSuccessKeys>) => {
            const keyToUpdate = action.payload;
            state.success[keyToUpdate] = 'time';
        },
        DEW_SUCCESS_MISSION: (state, action: PayloadAction<dewSuccessKeys>) => {
            const keyToUpdate = action.payload;
            state.success[keyToUpdate] = 'success';
        },
        DEW_GET_REWARD_MISSION: (state, action: PayloadAction<dewSuccessKeys>) => {
            const keyToUpdate = action.payload;
            state.success[keyToUpdate] = 'get-reward';
        },
    },
});

export const { DEW_TIME_MISSION, DEW_SUCCESS_MISSION, DEW_GET_REWARD_MISSION } =
    dewMissionSlice.actions;

export default dewMissionSlice.reducer;
