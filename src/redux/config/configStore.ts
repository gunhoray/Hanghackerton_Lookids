import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toastReducer from '../modules/toastSlice';

const rootReducer = combineReducers({
    toast: toastReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});
export default store;
