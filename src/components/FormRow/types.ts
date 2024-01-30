import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IncomeForm } from 'store/income/types';

export type FormRowProps = {
  form: IncomeForm;
  changeForm: ActionCreatorWithPayload<IncomeForm, string>;
  handleSaveInfo: () => void;
};
