import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Foundation from './Pages/Foundation';
import Projects from './Pages/Projects';
import Team from './Pages/Team';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/aboutus",
            element: <AboutUs></AboutUs>,
          },
          {
            path: "/foundation",
            element: <Foundation></Foundation>,
          },
          {
            path: "/projects",
            element: <Projects></Projects>,
          },
          {
            path: "/team",
            element: <Team></Team>,
          },
        ]
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
