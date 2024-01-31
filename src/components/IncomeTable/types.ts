import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IncomeForm } from 'store/income/types';

export type IncomeTableProps = {
  tableName: 'incomeNow' | 'plannedIncome';
  changeForm: ActionCreatorWithPayload<IncomeForm, string>;
  submitForm: ActionCreatorWithoutPayload<string>;
};
