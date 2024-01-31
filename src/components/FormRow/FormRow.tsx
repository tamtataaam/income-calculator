import { FC, ChangeEvent } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button, TableCell, TableRow, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from 'hooks';
import { FormRowProps } from './types';

import './FormRow.scss';

export const FormRow: FC<FormRowProps> = ({ form, changeForm, handleSaveInfo }) => {
  const dispatch = useAppDispatch();

  const selectedDate = form.date ? dayjs(form.date) : undefined;

  // TODO: fix date bug
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
      <TableCell align="center" sx={{ padding: '8px' }}>
        <TextField
          label="Доход"
          variant="outlined"
          size="small"
          value={form.income}
          onChange={handleChangeIncome}
        />
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        <TextField
          label="Источник"
          variant="outlined"
          size="small"
          value={form.source}
          onChange={(e) => dispatch(changeForm({ ...form, source: e.target.value }))}
        />
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            className="date-picker"
            defaultValue={selectedDate}
            label="Дата и время"
            onChange={(date) => dispatch(changeForm({ ...form, date: date!.toDate() }))}
            views={['year', 'month', 'day', 'hours', 'minutes']}
            timeSteps={{ minutes: 1 }}
            ampm={false}
          />
        </LocalizationProvider>
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        <TextField
          label="Примечание"
          variant="outlined"
          size="small"
          value={form.description}
          onChange={(e) => dispatch(changeForm({ ...form, description: e.target.value }))}
        />
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        <Button
          variant="contained"
          sx={{ borderRadius: 100, minWidth: '36px', height: '36px', padding: 0 }}
          onClick={handleSaveInfo}
          disabled={!form.income}
        >
          <AddIcon fontSize="small" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
