import { PivotTableData } from 'store/income/types';

export const monthsList = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const getNextMonth = (lastMonth: PivotTableData) => {
  const nextMonth =
    lastMonth.month === 'Декабрь' ? 'Январь' : monthsList[monthsList.indexOf(lastMonth.month) + 1];

  const nextYear = nextMonth === 'Январь' ? lastMonth.year + 1 : lastMonth.year;

  return {
    id: new Date().valueOf().toString(),
    month: nextMonth,
    year: nextYear,
    now: 0,
    planned: 0,
  };
};
