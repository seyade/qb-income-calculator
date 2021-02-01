import { configureStore, combineReducers } from '@reduxjs/toolkit';
import incomeSlice from './incomeReducer';

const rootReducer = combineReducers({
  income: incomeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
