import { FC, ChangeEvent } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Button, TableCell, TableRow, TextField } from '@mui/material';
import { useAppDispatch } from 'hooks';
import { FormRowProps } from './types';

import './FormRow.scss';

export const FormRow: FC<FormRowProps> = ({ form, changeForm, handleSaveInfo }) => {
  const dispatch = useAppDispatch();

  const handleChangeIncome = (e: ChangeEvent<HTMLInputElement>) => {
    const isNumber = /^\d*$/.test(e.target.value);

    if (!isNumber) {
      dispatch(changeForm({ ...form, income: '', date: null }));
    }

    if (isNumber) {
      dispatch(changeForm({ ...form, income: +e.target.value, date: new Date() }));
    }

    // if (!e.target.value) {
    //   dispatch(changeForm({ ...form, income: '', date: null }));
    // }
  };

  return (
    <TableRow>
      <TableCell align="center">
        <TextField
          label="Доход"
          variant="outlined"
          size="small"
          value={form.income}
          onChange={handleChangeIncome}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          label="Источник"
          variant="outlined"
          size="small"
          value={form.source}
          onChange={(e) => dispatch(changeForm({ ...form, source: e.target.value }))}
        />
      </TableCell>
      <TableCell align="center">
        <ReactDatePicker
          showTimeSelect
          selected={form.date}
          onChange={(date) => dispatch(changeForm({ ...form, date }))}
          dateFormat="d.MM.yyyy hh:mm"
          placeholderText="Дата и время"
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          label="Примечание"
          variant="outlined"
          size="small"
          value={form.description}
          onChange={(e) => dispatch(changeForm({ ...form, description: e.target.value }))}
        />
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{ borderRadius: 100, minWidth: '36px', height: '36px', padding: '10px' }}
          onClick={handleSaveInfo}
          disabled={!form.income}
        >
          +
        </Button>
      </TableCell>
    </TableRow>
  );
};
