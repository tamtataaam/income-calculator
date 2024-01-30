import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IncomeForm, IncomeRootState } from 'store/income/types';

export type IncomeTableProps = {
  tableName: keyof IncomeRootState;
  changeForm: ActionCreatorWithPayload<IncomeForm, string>;
  submitForm: ActionCreatorWithoutPayload<string>;
};
