import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import AlertSnackbar from './common/Snackbar';
import { useSelector } from 'react-redux';
import Base from './common/Base';
import Wishlist from './pages/Wishlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  const selector = useSelector((state) => state.products.snackbar);

  return (
    <>
      <RouterProvider router={router} />
      <AlertSnackbar
        open={selector.open}
        message={selector.message}
        severity={selector.severity}
        variant={selector.variant}
      />
    </>
  );
}

export default App;
