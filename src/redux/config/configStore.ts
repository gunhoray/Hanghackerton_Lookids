import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toastReducer from '../modules/toastSlice';
import magicMissionReducer from '../modules/magicMissionSlice';
import speechBubbleReducer from '../modules/speechBubbleSlice';
const rootReducer = combineReducers({
    toast: toastReducer,
    magicMission: magicMissionReducer,
    speechBubble: speechBubbleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});
export default store;
