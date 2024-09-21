import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const signUpSchema = Yup.object().shape({
  userName: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'must be of 6 character long'),
});

function Login() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="bg-login-bg flex h-screen items-center justify-center bg-cover bg-center">
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
            initialValues={{ userName: '', password: '' }}
            validationSchema={signUpSchema}
          >
            {(formik) => (
              <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                <TextField
                  {...formik.getFieldProps('userName')}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  required
                  fullWidth
                  name="userName"
                  label="Username"
                  id="userName"
                  autoComplete="given-name"
                  sx={{ marginBottom: 2 }}
                  helperText={formik.touched.userName && formik.errors.userName}
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
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
