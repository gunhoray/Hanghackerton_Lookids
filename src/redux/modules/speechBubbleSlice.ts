import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface speechBubbleState {
    speech: string | null;
}

const initialState: speechBubbleState = {
    speech: '아~ 이슬 먹고 싶다',
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
            console.log('지우기');
        },
    },
});

export const { ADD_SPEECH, CLEAR_SPEECH } = speechBubbleSlice.actions;

export default speechBubbleSlice.reducer;
