import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialData } from './fakeData';
import { IncomeForm, IncomeState, IncomeTableData } from './types';

const initialState: IncomeState = {
  form: {
    income: '',
    source: '',
    date: null,
    description: '',
  },
  data: initialData,
};

export const incomeNowSlice = createSlice({
  name: 'incomeNow',
  initialState,
  reducers: {
    changeForm(state, { payload }: PayloadAction<IncomeForm>) {
      state.form = { ...state.form, ...payload };
    },
    clearForm(state) {
      state.form = initialState.form;
    },
    addData(state, { payload }: PayloadAction<IncomeTableData>) {
      state.data.unshift(payload);
    },
  },
});

export const { changeForm, clearForm, addData } = incomeNowSlice.actions;

export default incomeNowSlice.reducer;
