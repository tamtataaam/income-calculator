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
import { useAppDispatch, useAppSelector } from 'hooks';

import { FormRow } from 'components/FormRow';
import { IncomeTableProps } from './types';

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
    <TableContainer component={Paper}>
      <Table>
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
              +{totalIncome}
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>

          <FormRow form={form} changeForm={changeForm} handleSaveInfo={handleSaveInfo} />

          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
                +{row.income}
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
      </Table>
    </TableContainer>
  );
};
