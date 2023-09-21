import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toastReducer from '../modules/toastSlice';
import magicMissionReducer from '../modules/magicMissionSlice';
import userSlice from '../modules/userSlice';
import speechBubbleReducer from '../modules/speechBubbleSlice';
const rootReducer = combineReducers({
    toast: toastReducer,
    user: userSlice,
    magicMission: magicMissionReducer,
    speechBubble: speechBubbleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});
export default store;
