import { createBrowserRouter } from 'react-router-dom';

// Page
import LandingPage from '../pages/LandingPage';
import Page from '../pages/Page';
import Layout from '../components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/page', element: <Page /> },
    ],
  },
]);

export default router;
