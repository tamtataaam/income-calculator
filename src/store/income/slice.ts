import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formatDate } from 'utils';
import { initialData, pivotTableData } from './fakeData';
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
  pivotTable: {
    data: pivotTableData,
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
    deleteIncomeNowRow(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      const filteredData = state.incomeNow.data.filter((item) => item.id !== id);
      state.incomeNow.data = filteredData;
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
    deletePlannedIncomeRow(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      const filteredData = state.plannedIncome.data.filter((item) => item.id !== id);
      state.plannedIncome.data = filteredData;
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
  deleteIncomeNowRow,
  submitIncomeNowForm,
  changePlannedIncomeForm,
  clearPlannedIncomeForm,
  deletePlannedIncomeRow,
  submitPlannedIncomeForm,
} = incomeSlice.actions;

export default incomeSlice;
