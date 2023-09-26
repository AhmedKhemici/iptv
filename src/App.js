import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root.js';
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage.js';
import './App.css';

//TODO:React app
//* i need to to learn sliders.
//* need to learn animations.
//* need to learn mobile menu button.
//? need to learn more css and scss. 
//? need to learn to structure my react code.

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
