import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openCloseSnackbar } from '../slices/productSlice';

const signUpSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'must be of 6 character long'),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const defaultTheme = createTheme();

  const handleLogin = function (values) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      dispatch(
        openCloseSnackbar({
          open: true,
          message: 'User not found! Please sign up',
          severity: 'error',
          variant: 'filled',
        }),
      );
      return;
    }

    if (
      values.username === user.username &&
      values.password === user.password
    ) {
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="flex h-screen items-center justify-center bg-login-bg bg-cover bg-center">
        <div className="w-full max-w-md rounded-lg bg-gray-200 p-8 shadow-lg">
          <div className="mb-4 flex items-center justify-center">
            <Avatar sx={{ bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
          </div>
          <Typography component="h1" variant="h5" className="!my-3 text-center">
            Login to your account
          </Typography>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            {(formik) => (
              <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                <TextField
                  {...formik.getFieldProps('username')}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  required
                  fullWidth
                  name="username"
                  label="Username"
                  id="username"
                  autoComplete="given-name"
                  sx={{ marginBottom: 2 }}
                  helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                  {...formik.getFieldProps('password')}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  autoComplete="new-password"
                  type="password"
                  sx={{ marginBottom: 2 }}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
                >
                  Log In
                </Button>
                <Grid container>
                  <Grid item xs className="cursor-not-allowed opacity-30">
                    <Link to="#" variant="body2" sx={{ color: 'black' }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/signup"
                      variant="body2"
                      className="text-gray-500 underline"
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Login;
