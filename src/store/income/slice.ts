import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formatDate, getNextMonth } from 'utils';
import { pivotTableData } from './fakeData';
import { addIncome, deleteIncome, loadAllIncomes } from './thunk';
import { IncomeForm, IncomeRootState } from './types';

const initialState: IncomeRootState = {
  // selectedMonth: '', // id месяца, который мы открыли
  incomeNow: {
    form: {
      sum: '',
      source: '',
      date: null,
      description: '',
      monthId: null,
    },
    data: [],
  },
  plannedIncome: {
    form: {
      sum: '',
      source: '',
      date: null,
      description: '',
      monthId: null,
    },
    data: [],
  },
  pivotTable: {
    data: pivotTableData,
  },
};

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    // incomeNow
    changeIncomeNowForm(state, { payload }: PayloadAction<IncomeForm>) {
      state.incomeNow.form = { ...state.incomeNow.form, ...payload };
    },
    clearIncomeNowForm(state) {
      state.incomeNow.form = initialState.incomeNow.form;
    },
    deleteIncomeNowRow(state, { payload: { id } }: PayloadAction<{ id: string }>) {
      const filteredData = state.incomeNow.data.filter((item) => item.UID !== id);
      state.incomeNow.data = filteredData;
    },
    submitIncomeNowForm(state) {
      const { form } = state.incomeNow;

      if (!form.sum) {
        return;
      }

      const data = {
        ...form,
        UID: new Date().valueOf().toString(),
        date: formatDate(form.date!),
        sum: form.sum!,
        monthId: 1,
      };

      state.incomeNow.data.unshift(data);
      state.incomeNow.form = initialState.incomeNow.form;
    },

    // plannedIncome
    changePlannedIncomeForm(state, { payload }: PayloadAction<IncomeForm>) {
      state.plannedIncome.form = { ...state.plannedIncome.form, ...payload };
    },
    clearPlannedIncomeForm(state) {
      state.plannedIncome.form = initialState.plannedIncome.form;
    },
    deletePlannedIncomeRow(state, { payload: { id } }: PayloadAction<{ id: string }>) {
      const filteredData = state.plannedIncome.data.filter((item) => item.UID !== id);
      state.plannedIncome.data = filteredData;
    },
    submitPlannedIncomeForm(state) {
      const { form } = state.plannedIncome;

      if (!form.sum) {
        return;
      }

      const data = {
        ...form,
        UID: new Date().valueOf().toString(),
        date: formatDate(form.date!),
        sum: form.sum!,
        monthId: 1,
      };

      state.plannedIncome.data.unshift(data);
      state.plannedIncome.form = initialState.plannedIncome.form;
    },

    // pivotTable // TODO: разделить на две таблицы
    addNextMonth(state) {
      const lastMonth = state.pivotTable.data[0];
      state.pivotTable.data.unshift(getNextMonth(lastMonth));
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(loadAllIncomes.pending, (state, action) => {
      //   // TODO
      // })
      // .addCase(loadAllIncomes.rejected, (state, action) => {
      //   // TODO
      // })
      .addCase(loadAllIncomes.fulfilled, (state, { payload: { data } }) => {
        state.incomeNow.data = data;
      })

      // .addCase(addIncome.rejected, (state, action) => {
      //   // TODO
      // })
      .addCase(addIncome.fulfilled, (state, { payload }) => {
        state.incomeNow.data.unshift(payload);
        state.incomeNow.form = initialState.incomeNow.form;
      })

      // .addCase(deleteIncome.rejected, (state, action) => {
      //   // TODO
      // })
      .addCase(deleteIncome.fulfilled, (state, { payload }) => {
        const filteredData = state.incomeNow.data.filter((item) => item.UID !== payload);
        state.incomeNow.data = filteredData;
      });
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
  addNextMonth,
} = incomeSlice.actions;

export default incomeSlice;
