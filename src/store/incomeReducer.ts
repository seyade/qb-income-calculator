import { createSlice } from '@reduxjs/toolkit';

export const incomeSlice = createSlice({
  name: 'income',
  initialState: {
    salesIncome: 0,
    commissions: 0,
    construction: 0,
    otherIncome: 0,
    totalIncome: 0,
  },
  reducers: {
    handleSalesIncome: (state, action) => {
      state.salesIncome = parseInt(action.payload);
    },
    handleCommissions: (state, action) => {
      state.commissions = parseInt(action.payload);
    },
    handleConstruction: (state, action) => {
      state.construction = parseInt(action.payload);
    },
    handleOtherIncome: (state, action) => {
      state.otherIncome = parseInt(action.payload);
    },
    setTotalIncome: (state, action) => {
      state.totalIncome = parseInt(action.payload);
    },
  },
});

export const incomeState = (state: any) => state.income;

export const {
  handleSalesIncome,
  handleCommissions,
  handleConstruction,
  handleOtherIncome,
  setTotalIncome,
} = incomeSlice.actions;

export default incomeSlice.reducer;
