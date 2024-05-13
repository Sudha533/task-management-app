import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'log-in',
        element:<LogIn/>
      },
      {
        path:'sign-up',
        element:<SignUp/>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <RouterProvider router={router}/>
);

