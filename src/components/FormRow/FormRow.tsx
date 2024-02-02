import { FC, ChangeEvent } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ruRU } from '@mui/x-date-pickers/locales';
import { Button, TableCell, TableRow, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from 'hooks';
import { FormRowProps } from './types';
import 'dayjs/locale/ru';

import './FormRow.scss';

export const FormRow: FC<FormRowProps> = ({ form, changeForm, handleSaveInfo }) => {
  const dispatch = useAppDispatch();

  const handleChangeIncome = (e: ChangeEvent<HTMLInputElement>) => {
    const isNumber = /^\d*$/.test(e.target.value);

    if (!isNumber) {
      dispatch(changeForm({ ...form, income: '', date: null }));
    }

    if (isNumber) {
      if (form.date) {
        return dispatch(changeForm({ ...form, income: +e.target.value }));
      }
      dispatch(changeForm({ ...form, income: +e.target.value, date: new Date().toISOString() }));
    }
  };

  return (
    <TableRow>
      <TableCell align="center" sx={{ padding: '8px' }}>
        <TextField
          label="Доход"
          variant="outlined"
          value={form.income}
          onChange={handleChangeIncome}
        />
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        <TextField
          label="Источник"
          variant="outlined"
          value={form.source}
          onChange={(e) => dispatch(changeForm({ ...form, source: e.target.value }))}
        />
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ru"
          localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        >
          <DateTimePicker
            className="date-picker"
            value={form.date ? dayjs(form.date) : null}
            label="Дата и время"
            onChange={(date) =>
              dispatch(changeForm({ ...form, date: date!.toDate().toISOString() }))
            }
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
