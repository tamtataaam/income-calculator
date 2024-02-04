import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'api';
import { IncomeData, IncomeForm } from './types';

type loadAllIncomesResponse = {
  data: IncomeData[];
};
export const loadAllIncomes = createAsyncThunk<loadAllIncomesResponse>(
  'income/loadAllIncomes',
  async () => {
    const response = await fetch(`${BASE_URL}/incomes`, {
      credentials: 'include',
    });
    if (response.status >= 400) {
      const data = await response.json();
      throw new Error(data);
    } else {
      return await response.json();
    }
  },
);

export const addIncome = createAsyncThunk<IncomeData, IncomeForm>(
  'income/addIncome',
  async (body) => {
    const response = await fetch(`${BASE_URL}/incomes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    if (response.status >= 400) {
      const data = await response.json();
      throw new Error(data);
    } else {
      return await response.json();
    }
  },
);

export const deleteIncome = createAsyncThunk<string, { id: string }>(
  'income/deleteIncome',
  async ({ id }) => {
    const response = await fetch(`${BASE_URL}/incomes/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    if (response.status >= 400) {
      const data = await response.json();
      throw new Error(data);
    } else {
      return id;
    }
  },
);
