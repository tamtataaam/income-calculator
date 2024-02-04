import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { addNextMonth } from 'store/income';

import './MonthSelect.scss';

export const MonthSelect = () => {
  const dispatch = useAppDispatch();
  const months = useAppSelector((store) => store.income.pivotTable.data);

  const [selectedMonthId, setSelectedMonthId] = useState(months[0].id);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedMonthId(event.target.value as string);
  };

  const handleAddMonth = () => {
    dispatch(addNextMonth());
  };

  return (
    <Box sx={{ minWidth: 120, padding: '12px 20px', display: 'flex', gap: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Месяц</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedMonthId}
          label="Месяц"
          onChange={handleChange}
        >
          {months.map(({ id, month, year }) => (
            <MenuItem key={id} value={id}>
              {month} {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleAddMonth}>
        <AddIcon fontSize="small" /> Добавить
      </Button>
    </Box>
  );
};
