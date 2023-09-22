import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeartToastState {
  time: number;
  getReward: boolean;
  message: string | null;
}
const MISSION_TIME = 2 * 60;
const initialState: HeartToastState = {
  time: MISSION_TIME,
  message: null,
  getReward: false,
};

const heartToastSlice = createSlice({
  name: "heartToast",
  initialState,
  reducers: {
    DECREMENT_TIME(state) {
      if (state.time > 0 && !state.getReward) {
        state.time -= 1;
      }
    },
    REWARD_GRANTED(state) {
      if (state.time === 0) {
        state.getReward = true;
        state.message = "미션이 완료되었습니다!";
      }
    },
    RESET_STATE(state) {
      state.time = initialState.time;
      state.getReward = initialState.getReward;
      state.message = initialState.message;
    },
  },
});

export const { DECREMENT_TIME, REWARD_GRANTED, RESET_STATE } =
  heartToastSlice.actions;

export default heartToastSlice.reducer;
