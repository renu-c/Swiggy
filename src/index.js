import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/About'
import App from './App';
import Contact from './components/Contact';
import Error from './components/Error';
import Body from './components/Body';
import {
  createBrowserRouter,
  RouterProvider} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';

  const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,  
    children: [ 
      {
        path:"/",
        element:<Body/>
      },
      {
      path: "/about",
      element: <About/>,
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ],
    errorElement:<Error/>,

  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
  );


