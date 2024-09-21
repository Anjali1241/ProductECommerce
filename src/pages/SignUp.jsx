import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormHelperText } from '@mui/material';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email().required('Email id required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'must be of 6 character long'),
  termsAndCondition: Yup.bool().oneOf(
    [true],
    'No terms, no threads! Fashion needs rules—please accept!',
  ),
});

function SignUp() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="bg-login-bg flex items-center justify-center">
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            margin: '5% auto',
          }}
          className="rounded-lg bg-gray-200 p-8 shadow-lg"
        >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                termsAndCondition: false,
              }}
              validationSchema={signUpSchema}
            >
              {(formik) => (
                <Box
                  component="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                  sx={{ mt: 3 }}
                >
                  {console.log(formik)}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        {...formik.getFieldProps('firstName')}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        {...formik.getFieldProps('lastName')}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        {...formik.getFieldProps('email')}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        {...formik.getFieldProps('password')}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            required
                            {...formik.getFieldProps('termsAndCondition')}
                            value="termsAndCondition"
                            color="primary"
                            name="termsAndCondition"
                            id="termsAndCondition"
                            error={
                              formik.touched.termsAndCondition &&
                              Boolean(formik.errors.termsAndCondition)
                            }
                          />
                        }
                        label={
                          <>
                            I agree to the{' '}
                            <Link to="/terms-and-conditions">
                              Terms and Conditions
                            </Link>
                          </>
                        }
                      />
                      {formik.touched.termsAndCondition &&
                        formik.errors.termsAndCondition && (
                          <FormHelperText error>
                            {formik.errors.termsAndCondition}
                          </FormHelperText>
                        )}
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link
                        to="/login"
                        variant="body2"
                        className="text-gray-500 underline"
                      >
                        Already have an account? Login
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
export default SignUp;
