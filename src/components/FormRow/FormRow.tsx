import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDatePicker from 'react-datepicker';

import { Button, TableCell, TableRow, TextField } from '@mui/material';
import { addData, changeForm, clearForm, getIncomeNowForm } from '../../store/IncomeNow';
import { formatDate } from '../../utils/formatDate';

export const FormRow = () => {
  const formData = useSelector(getIncomeNowForm);
  const dispatch = useDispatch();

  const handleSaveInfo = () => {
    if (!formData.income || !formData.date) return;

    const info = {
      ...formData,
      id: new Date().valueOf(),
      date: formatDate(formData.date),
      income: formData.income!,
    };

    dispatch(addData(info));
    dispatch(clearForm());
  };

  const handleChangeIncome = (e: ChangeEvent<HTMLInputElement>) => {
    const isNumber = /^\d*$/.test(e.target.value);

    if (isNumber) {
      dispatch(changeForm({ ...formData, income: +e.target.value, date: new Date() }));
    }

    if (!e.target.value) {
      dispatch(changeForm({ ...formData, income: '', date: null }));
    }
  };

  return (
    <TableRow>
      <TableCell align="center">
        <TextField
          label="Доход"
          variant="outlined"
          size="small"
          value={formData.income}
          onChange={handleChangeIncome}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          label="Источник"
          variant="outlined"
          size="small"
          value={formData.source}
          onChange={(e) => dispatch(changeForm({ ...formData, source: e.target.value }))}
        />
      </TableCell>
      <TableCell align="center">
        <ReactDatePicker
          showTimeSelect
          selected={formData.date}
          onChange={(date) => dispatch(changeForm({ ...formData, date }))}
          dateFormat="d.MM.yyyy hh:mm"
          placeholderText="Дата и время"
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          label="Примечание"
          variant="outlined"
          size="small"
          value={formData.description}
          onChange={(e) => dispatch(changeForm({ ...formData, description: e.target.value }))}
        />
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{ borderRadius: 100, minWidth: '36px', height: '36px', padding: '10px' }}
          onClick={handleSaveInfo}
          disabled={!formData.income}
        >
          +
        </Button>
      </TableCell>
    </TableRow>
  );
};
