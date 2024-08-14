/* eslint-disable no-unused-vars */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {


  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      eCommerce
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Login() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme} sx={{ backgroundImage: "linear-gradient(black, white)" }}>
      <Container component="main" maxWidth="xs" sx={{
        border: "2px solid",
        margin: "5% auto"
      }} className='bg-gradient-to-t from-gray-500 via-gray-400 to-gray-200'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login your account
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              required
              autoFocus
              fullWidth
              name="userName"
              label="Username"
              id="userName"
              autoComplete="given-name"
              sx={{
                marginBottom: 2,
              }}
            />
            <TextField
              name="password"
              required
              fullWidth
              id="password"
              label="Password"
              autoComplete="new-password"
              type="password"
              sx={{
                marginBottom: 2,
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs >
                <Link href="#" variant="body2" sx={{ color: "black" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2" sx={{ color: "black" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Login;
