export type IncomeForm = {
  sum: number | '';
  source: string;
  date: string | null;
  description: string;
  monthId: number | null;
};

export type IncomeData = {
  UID: string;
  sum: number;
  source: string;
  date: string;
  description: string;
  monthId: number;
};

export type IncomeState = {
  form: IncomeForm;
  data: IncomeData[];
};

export type PivotTableData = {
  id: string;
  month: string;
  year: number;
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
