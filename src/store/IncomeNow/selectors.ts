import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const getIncomeNowData = createSelector(
  (state: RootState) => state.incomeNowReducer,
  ({ data }) => data,
);

export const getTotalIncome = createSelector(getIncomeNowData, (data) => {
  return data.reduce((acc, data) => acc + data.income, 0);
});

export const getIncomeNowForm = createSelector(
  (state: RootState) => state.incomeNowReducer,
  ({ form }) => form,
);
