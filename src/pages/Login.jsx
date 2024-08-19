import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
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
    <ThemeProvider theme={defaultTheme}>
      <div className="bg-login-bg h-screen bg-cover bg-center flex items-center justify-center">
        <div className="bg-gray-200 w-full max-w-md p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Avatar className="m-2 bg-black">
              <LockOutlinedIcon />
            </Avatar>
          </div>
          <Typography component="h1" variant="h5" className="text-center mb-6">
            Login to your account
          </Typography>
          <Box component="form" noValidate>
            <TextField
              required
              fullWidth
              name="userName"
              label="Username"
              id="userName"
              autoComplete="given-name"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              name="password"
              required
              fullWidth
              id="password"
              label="Password"
              autoComplete="new-password"
              type="password"
              sx={{ marginBottom: 2 }}
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
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: 'black' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2" sx={{ color: 'black' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Login;
