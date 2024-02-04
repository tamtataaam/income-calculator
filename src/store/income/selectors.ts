import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

// TODO: delete - ? 
export const incomeSelector = createSelector(
  (state: RootState) => state.income,
  (income) => income,
);

export const incomeNowSelector = createSelector(
  incomeSelector,
  ({ incomeNow }) => incomeNow,
);

export const plannedIncomeSelector = createSelector(
  incomeSelector,
  ({ plannedIncome }) => plannedIncome,
);

export const getIncomeNowForm = createSelector(
  incomeNowSelector,
  ({ form }) => form,
);

export const getIncomeNowData = createSelector(
  incomeNowSelector,
  ({ data }) => data,
);

export const getTotalIncomeNow = createSelector(
  getIncomeNowData, 
  (data) => data.reduce((acc, item) => acc + item.sum, 0),
);

