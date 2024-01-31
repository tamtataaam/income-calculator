import { FC } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow as TableRowMUI,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';

import { TableRow, FormRow } from 'components';
import { IncomeTableProps } from './types';
import { deleteIncomeNowRow, deletePlannedIncomeRow } from 'store/income';

import './IncomeTable.scss';

export const IncomeTable: FC<IncomeTableProps> = ({ tableName, changeForm, submitForm }) => {
  const dispatch = useAppDispatch();

  const form = useAppSelector((store) => store.income[tableName].form);
  const data = useAppSelector((store) => store.income[tableName].data);
  const totalIncome = data.reduce((acc, item) => acc + item.income, 0);

  const handleSaveInfo = () => {
    if (!form.income || !form.date) {
      return;
    }

    dispatch(submitForm());
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 42px - 50px)' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRowMUI>
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
            <TableCell align="center" sx={{ width: '40px', padding: '10px' }} />
          </TableRowMUI>
        </TableHead>

        <TableBody>
          <TableRowMUI>
            <TableCell
              align="center"
              sx={{ width: '22.5', padding: '10px', borderRight: '1px solid lightgrey' }}
            >
              +{totalIncome}
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRowMUI>

          <FormRow form={form} changeForm={changeForm} handleSaveInfo={handleSaveInfo} />

          {data.map((row) => (
            <TableRow
              row={row}
              key={row.id}
              onDelete={tableName === 'incomeNow' ? deleteIncomeNowRow : deletePlannedIncomeRow}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
