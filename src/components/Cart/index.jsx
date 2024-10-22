import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NumberInputIntroduction from './QuantityChecker';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, "$24"),
  createData('Ice cream sandwich', 237, 9.0, "$37"),
  createData('Eclair', 262, 16.0, "$24"),
  createData('Cupcake', 305, 3.7, "$67"),
  createData('Gingerbread', 356, 16.0, "$49"),
];

function Cart() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>

        <Typography sx={{ color: 'text.primary' }}>Cart</Typography>
      </Breadcrumbs>
      <TableContainer component={Paper} className="my-10 w-7">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="w-64">
                  {row.name}
                </TableCell>
                <TableCell align="left" className="w-64">{row.calories}</TableCell>
                <TableCell align="left" className="w-64">
                  <NumberInputIntroduction />
                </TableCell>
                <TableCell align="left" className="w-64">{row.carbs}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Cart;
