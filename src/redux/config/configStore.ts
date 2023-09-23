import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toastReducer from "../modules/toastSlice";
import magicMissionReducer from "../modules/magicMissionSlice";
import userSlice from "../modules/userSlice";
import speechBubbleReducer from "../modules/speechBubbleSlice";
import heartToastSlice from "../modules/heartToastSlice";
import dewMissionReducer from "../modules/dewSlice";
const rootReducer = combineReducers({
  toast: toastReducer,
  user: userSlice,
  magicMission: magicMissionReducer,
  speechBubble: speechBubbleReducer,
  heartToast: heartToastSlice,
  dewMission: dewMissionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});
export default store;
