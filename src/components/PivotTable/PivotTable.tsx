import { FC } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { useAppSelector } from 'hooks';
import { PivotTableProps } from './types';

export const PivotTable: FC<PivotTableProps> = () => {
  // TODO: use createSelector
  const { data } = useAppSelector((store) => store.income.pivotTable);

  const totalIncomeNow = data.reduce((acc, month) => {
    acc += month.now;
    return acc;
  }, 0);

  const totalPlannedIncome = data.reduce((acc, month) => {
    acc += month.planned;
    return acc;
  }, 0);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: 'lightgrey' }}>
          <TableRow>
            <TableCell align="center" />
            <TableCell align="center" sx={{ padding: '10px' }}>
              Сейчас
              <br />
              <b>+{totalIncomeNow}</b>
            </TableCell>
            <TableCell align="center" sx={{ padding: '10px' }}>
              Планируемый
              <br />
              <b>+{totalPlannedIncome}</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((month) => (
            <TableRow key={month.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left" sx={{ fontWeight: '700' }}>
                {month.month} {month.year}
              </TableCell>
              <TableCell align="center" sx={{ padding: '10px' }}>
                +{month.now}
              </TableCell>
              <TableCell align="center" sx={{ padding: '10px' }}>
                +{month.planned}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
