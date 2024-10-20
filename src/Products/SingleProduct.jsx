/* eslint-disable react/prop-types */
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SingleProduct({
  individualProductDetail,
  ProductDetail,
}) {
  const [open, setOpen] = useState(individualProductDetail);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='h-auto'>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="flex h-auto">
            <img src={ProductDetail.image} className="h-[500px] w-2/4" />
            <div className="ml-5 flex flex-col">
              <div
                className="flex cursor-pointer justify-end text-xl font-extrabold"
                onClick={() => setOpen(false)}
              >
                X
              </div>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <span className="font-bold">
                  {' '}
                  {ProductDetail.title.toUpperCase()}
                </span>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <span className="font-semibold">Price:</span>{' '}
                {ProductDetail.price}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <span className="font-semibold">Description:</span>{' '}
                {ProductDetail.description}
              </Typography>
              <div className="mt-2 flex w-full justify-between">
                <button className="w-2/2 rounded-md bg-neutral-500 p-4 m-5">
                  Add to Cart
                </button>
                <button className="w-2/2 ml-3 rounded-md bg-neutral-500 p-4  m-5">
                  Buy
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
