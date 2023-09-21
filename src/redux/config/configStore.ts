import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toastReducer from '../modules/toastSlice';
import magicMissionReducer from '../modules/magicMissionSlice';
const rootReducer = combineReducers({
    toast: toastReducer,
    magicMission: magicMissionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});
export default store;
