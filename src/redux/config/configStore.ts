import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toastReducer from '../modules/toastSlice';
import userSlice from "../modules/userSlice";

const rootReducer = combineReducers({
  toast: toastReducer,
  user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});
export default store;
