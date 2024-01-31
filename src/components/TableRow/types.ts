import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IncomeData } from 'store/income/types';

export type TableRowProps = {
  row: IncomeData;
  onDelete: ActionCreatorWithPayload<{ id: number }, string>;
};
