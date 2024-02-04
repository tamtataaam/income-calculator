import { IncomeData, PivotTableData } from './types';

export const initialData: IncomeData[] = [
  {
    UID: '1',
    sum: 28,
    source: 'кэшбэк',
    date: '28.01.2024 17:02',
    description: 'Неожиданно',
    monthId: 1,
  },
  {
    UID: '2',
    sum: 300,
    source: 'оплата баллами',
    date: '15.01.2024 13:15',
    description: 'Продукты',
    monthId: 1,
  },
  {
    UID: '3',
    sum: 1000,
    source: 'подарок Кати',
    date: '10.01.2024 15:15',
    description: '',
    monthId: 1,
  },
];

export const pivotTableData: PivotTableData[] = [
  {
    id: '1',
    month: 'Март',
    year: 2024,
    now: 450000,
    planned: 500000,
  },
  {
    id: '2',
    month: 'Февраль',
    year: 2024,
    now: 325000,
    planned: 470000,
  },
  {
    id: '3',
    month: 'Январь',
    year: 2024,
    now: 452600,
    planned: 350000,
  },
];
