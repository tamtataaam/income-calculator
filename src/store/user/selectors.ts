import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const incomeSelector = createSelector(
  (state: RootState) => state.income,
  (income) => income,
);
