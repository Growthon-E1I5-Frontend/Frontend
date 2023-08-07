import { createBrowserRouter } from 'react-router-dom';

// Page
import LandingPage from '../pages/Landing';
import Page from '../pages/Page';
import Layout from '../components/layout/Layout';
import LoginPage from '../pages/Login';
import SignUp from '../pages/Signup';
import Congrats from '../pages/Congrats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/page', element: <Page /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/congrats',
    element: <Congrats />,
  },
]);

export default router;
