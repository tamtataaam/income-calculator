export type IncomeForm = {
  income: number | '';
  source: string;
  date: string | null;
  description: string;
};

export type IncomeData = {
  id: number;
  income: number;
  source: string;
  date: string;
  description: string;
};

export type IncomeState = {
  form: IncomeForm;
  data: IncomeData[];
};

export type PivotTableData = {
  id: number;
  month: string;
  now: number;
  planned: number;
};

export type IncomeRootState = {
  incomeNow: IncomeState;
  plannedIncome: IncomeState;
  pivotTable: {
    data: PivotTableData[];
  };
};
