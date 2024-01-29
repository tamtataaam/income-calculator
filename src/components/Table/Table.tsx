import {
  TableContainer,
  Table as TableMUI,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIncomeNowData, getTotalIncome } from '../../store/IncomeNow/selectors';
import { FormRow } from '../FormRow/FormRow';
import { TableProps } from './types';

export const Table: FC<TableProps> = () => {
  const data = useSelector(getIncomeNowData);
  const totalIncome = useSelector(getTotalIncome);

  return (
    <TableContainer component={Paper}>
      <TableMUI>
        <TableHead sx={{ backgroundColor: 'lightgrey' }}>
          <TableRow>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              Доход
            </TableCell>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              Источник
            </TableCell>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              Дата и время
            </TableCell>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              Примечание
            </TableCell>
            <TableCell align="center" sx={{ width: '70px', padding: '10px' }} />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              sx={{ width: '22.5', padding: '10px', borderRight: '1px solid lightgrey' }}
            >
              + {totalIncome}
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>

          <FormRow />

          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
                + {row.income}
              </TableCell>
              <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
                {row.source}
              </TableCell>
              <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
                {row.date}
              </TableCell>
              <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
                {row.description}
              </TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
};
