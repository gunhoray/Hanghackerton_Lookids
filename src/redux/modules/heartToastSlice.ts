import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeartToastState {
  startTime: number;
  expiredTime: number;
  currentTime: number;
  getReward: boolean;
  message: string | null;
}
// const MISSION_TIME = 2 * 60;
const initialState: HeartToastState = {
  startTime: 0,
  expiredTime: 0,
  currentTime: Date.now(),
  message: null,
  getReward: false,
};

const heartToastSlice = createSlice({
  name: "heartToast",
  initialState,
  reducers: {
    SET_START_TIME(state, action: PayloadAction<number>) {
      state.startTime = action.payload;
    },
    SET_EXPIRED_TIME(state, action: PayloadAction<number>) {
      state.expiredTime = action.payload;
    },
    UPDATE_CURRENT_TIME(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;

      if (state.currentTime >= state.expiredTime) {
        state.getReward = true;
        state.message = "미션이 완료되었습니다!";
        RESET_STATE();
      }
      // console.log(state.currentTime, state.getReward);
    },
    RESTART_STATE(state, action: PayloadAction<number>) {
      state.startTime = action.payload;
      state.expiredTime = action.payload;
      // console.log(initialState);
      // 위와 같이 작성하면 모든 필드를 초기화 할 수 있습니다.
    },
    RESET_STATE(state) {
      Object.assign(state, initialState);
      // console.log(initialState);
      // 위와 같이 작성하면 모든 필드를 초기화 할 수 있습니다.
    },
  },
});

export const {
  SET_START_TIME,
  SET_EXPIRED_TIME,
  UPDATE_CURRENT_TIME,
  RESET_STATE,
  RESTART_STATE,
} = heartToastSlice.actions;
export default heartToastSlice.reducer;
