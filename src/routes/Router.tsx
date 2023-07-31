import { createBrowserRouter } from 'react-router-dom';

// Page
import LandingPage from '../pages/LandingPage';
import Page from '../pages/Page';
import Theme from '../pages/Theme';
import Analytics from '../pages/Analytics';
import Setting from '../pages/Setting';
import RootLayout from '../pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
