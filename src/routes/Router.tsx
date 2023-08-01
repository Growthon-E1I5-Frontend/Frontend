import { createBrowserRouter } from 'react-router-dom';

// Page
import LandingPage from '../pages/LandingPage';
import Page from '../pages/Page';
import Theme from '../pages/Theme';
import Analytics from '../pages/Analytics';
import Setting from '../pages/Setting';
import Layout from '../components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/page', element: <Page /> },
      { path: '/theme', element: <Theme /> },
      { path: '/analytics', element: <Analytics /> },
      { path: '/setting', element: <Setting /> },
    ],
  },
]);

export default router;
