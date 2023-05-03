import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ChefRecipes from '../pages/ChefRecipes';
import PrivateRoute from './PrivateRoute';
import Error from '../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/chef-recipes/:id',
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
      },
      {
        path: '/404',
        element: <Error />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
