export type IncomeForm = {
  income: number | '';
  source: string;
  date: Date | null;
  description: string;
};

export type IncomeTableData = {
  id: number;
  income: number;
  source: string;
  date: string;
  description: string;
};

export type IncomeState = {
  form: IncomeForm;
  data: IncomeTableData[];
};
