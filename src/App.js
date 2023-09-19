import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root.js';
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage.js';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }
    ],
  },
]);

const App = () =>{
  return <RouterProvider router={router} />;
}

export default App;
