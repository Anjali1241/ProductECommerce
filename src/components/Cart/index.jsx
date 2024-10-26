import React, { useMemo, useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

function Cart() {
  const cartDetails = useSelector((state) => state.cartInfo.cartInfo);
  const [data, setData] = useState(
    cartDetails.map((ele) => ({
      ...ele,
      quantity: 1,
      subtotal: ele.price * 1,
    })),
  );

  const handleOnChange = (e, id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: e.target.value,
              subtotal: item.price * e.target.value,
            }
          : item,
      ),
    );
  };

  const columns = useMemo(
    () => [
      {
        header: 'Title',
        accessorKey: 'title',
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        header: 'Price',
        accessorKey: 'price',
        cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        header: 'Quantity',
        accessorKey: 'Quantity',
        cell: (props) => (
          <input
            type="number"
            min="1"
            value={props.row.original.quantity}
            onChange={(e) => handleOnChange(e, props.row.original.id)}
            className="w-20 rounded border p-2 text-sm"
          />
        ),
      },
      {
        header: 'Subtotal',
        accessorKey: 'subtotal',
        cell: (props) => <p>{props.row.original.subtotal.toFixed(2)}</p>,
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs aria-label="breadcrumb" className="mb-4">
        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>
        <Typography sx={{ color: 'text.primary' }}>Cart</Typography>
      </Breadcrumbs>

      <div className="overflow-x-auto my-10">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead className="bg-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border px-4 py-2 text-left">
                    {header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-between mt-8 items-center'>
        <h1 className="mt-4 text-lg font-bold">
          Total Payable Amount: $
          {data
            .map((ele) => ele.subtotal)
            .reduce((acc, curVal) => (acc += curVal), 0)
            .toFixed(2)}
        </h1>
        <button className='bg-[#DB4444] h-10 p-2 rounded-md text-white'>
          <Link to="">Proceed to Checkout</Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
