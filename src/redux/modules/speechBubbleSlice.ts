import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface speechBubbleState {
    speech: string | null;
}

const initialState: speechBubbleState = {
    speech: '성장하면 좋은 게 있을지도~',
};

export type SuccessKeys = 'share' | 'purchase' | 'attendance';

const speechBubbleSlice = createSlice({
    name: 'speechBubble',
    initialState,
    reducers: {
        ADD_SPEECH: (state, action: PayloadAction<string>) => {
            state.speech = action.payload;
        },
        CLEAR_SPEECH: (state) => {
            state.speech = null;
        },
    },
});

export const { ADD_SPEECH, CLEAR_SPEECH } = speechBubbleSlice.actions;

export default speechBubbleSlice.reducer;
