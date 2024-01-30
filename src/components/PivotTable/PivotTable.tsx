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
import { PivotTableProps } from './types';

export const PivotTable: FC<PivotTableProps> = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: 'lightgrey' }}>
          <TableRow>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              Сейчас
            </TableCell>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              +435345
            </TableCell>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              Планируемый
            </TableCell>
            <TableCell align="center" sx={{ width: '22.5vw', padding: '10px' }}>
              +576453
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* {data.map((row) => (
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
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
