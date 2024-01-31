import { FC } from 'react';
import { TableCell, TableRow as TableRowMUI } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from 'hooks';
import { TableRowProps } from './types';

export const TableRow: FC<TableRowProps> = ({ row, onDelete }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(onDelete({ id }));
  };

  return (
    <TableRowMUI key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="center" sx={{ padding: '8px' }}>
        +{row.income}
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        {row.source}
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        {row.date}
      </TableCell>
      <TableCell align="center" sx={{ padding: '8px' }}>
        {row.description}
      </TableCell>
      <TableCell align="center">
        <ClearIcon fontSize="small" color="error" onClick={() => handleDelete(row.id)} />
      </TableCell>
    </TableRowMUI>
  );
};
