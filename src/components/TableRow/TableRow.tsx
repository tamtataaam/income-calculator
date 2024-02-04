import { FC } from 'react';
import { TableCell, TableRow as TableRowMUI } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from 'hooks';
import { TableRowProps } from './types';
import { formatDate } from 'utils';

export const TableRow: FC<TableRowProps> = ({ row, onDelete }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(onDelete({ id }));
  };

  const income = new Intl.NumberFormat('ru-RU').format(row.sum);

  return (
    <TableRowMUI key={row.UID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="center" sx={{ padding: '8px' }}>
        +{income}
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        {row.source}
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        {formatDate(row.date)}
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        {row.description}
      </TableCell>
      <TableCell align="center">
        <ClearIcon fontSize="small" color="error" onClick={() => handleDelete(row.UID)} />
      </TableCell>
    </TableRowMUI>
  );
};
