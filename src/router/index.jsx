import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../page/layout.jsx';
import NotFound from '../page/NotFound.jsx';
import Plants from '../page/plants.jsx';
import Home from '../page/Home.jsx';
import Care from '../page/Care.jsx';
import Tools from '../page/Tools.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      { path: '/', element: <Home />, index: true },
      { path: 'Plants', element: <Plants /> },
      { path: 'Care', element: <Care /> },
      { path: '*', element: <NotFound /> },
      { path: 'Tools', element: <Tools /> },
    ]
  },
]);

export default router;