import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserState = {
    data: {},
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserSuccess(state, action: PayloadAction<any>) {
            state.status = 'succeeded';
            state.data = action.payload;
        },

        fetchUserFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },

        fetchUserOut(state) {
            state.data = null;
        },
    },
});

export const { fetchUserSuccess, fetchUserFailure, fetchUserOut } = userSlice.actions;

export default userSlice.reducer;
