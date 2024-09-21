import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
