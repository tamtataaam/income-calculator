import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formatDate } from 'utils';
import { initialData } from './fakeData';

import { IncomeForm, IncomeRootState } from './types';

const initialState: IncomeRootState = {
  incomeNow: {
    form: {
      income: '',
      source: '',
      date: null,
      description: '',
    },
    data: initialData,
  },
  plannedIncome: {
    form: {
      income: '',
      source: '',
      date: null,
      description: '',
    },
    data: initialData,
  },
};

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    changeIncomeNowForm(state, { payload }: PayloadAction<IncomeForm>) {
      state.incomeNow.form = { ...state.incomeNow.form, ...payload };
    },
    clearIncomeNowForm(state) {
      state.incomeNow.form = initialState.incomeNow.form;
    },
    submitIncomeNowForm(state) {
      const { form } = state.incomeNow;

      if (!form.income) {
        return;
      }

      const data = {
        ...form,
        id: new Date().valueOf(),
        date: formatDate(form.date!),
        income: form.income!,
      };

      state.incomeNow.data.unshift(data);
      state.incomeNow.form = initialState.incomeNow.form;
    },
    changePlannedIncomeForm(state, { payload }: PayloadAction<IncomeForm>) {
      state.plannedIncome.form = { ...state.plannedIncome.form, ...payload };
    },
    clearPlannedIncomeForm(state) {
      state.plannedIncome.form = initialState.plannedIncome.form;
    },
    submitPlannedIncomeForm(state) {
      const { form } = state.plannedIncome;

      if (!form.income) {
        return;
      }

      const data = {
        ...form,
        id: new Date().valueOf(),
        date: formatDate(form.date!),
        income: form.income!,
      };

      state.plannedIncome.data.unshift(data);
      state.plannedIncome.form = initialState.plannedIncome.form;
    },
  },
});

export const {
  changeIncomeNowForm,
  clearIncomeNowForm,
  submitIncomeNowForm,
  changePlannedIncomeForm,
  clearPlannedIncomeForm,
  submitPlannedIncomeForm,
} = incomeSlice.actions;

export default incomeSlice;
