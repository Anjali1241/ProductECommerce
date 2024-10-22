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
import { useSelector } from 'react-redux';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


function Cart() {
  const cartDetails = useSelector((state) => state.cartInfo.cartInfo);
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
            {cartDetails?.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="w-64">
                  {row.title}
                </TableCell>
                <TableCell align="left" className="w-64">
                  {row.price}
                </TableCell>
                <TableCell align="left" className="w-64">
                  <NumberInputIntroduction />
                </TableCell>
                <TableCell align="left" className="w-64">
                  {row.carbs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Cart;
