import Snackbar from '@mui/material/Snackbar';
import { useDispatch } from 'react-redux';
import { openCloseSnackbar } from '../../slices/productSlice';
import { Alert } from '@mui/material';
import PropTypes from 'prop-types';

function AlertSnackbar({
  open,
  message,
  severity = 'info',
  variant = 'filled',
}) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(openCloseSnackbar({ open: false }));
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant={variant}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

AlertSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['success', 'error', 'warning', 'info', '']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard', '']),
};

export default AlertSnackbar;
