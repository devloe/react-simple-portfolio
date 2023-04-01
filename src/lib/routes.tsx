import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { suspenseComponent } from "./util";
import App from "../App";

const ContactPage = React.lazy(() => import('../pages/contact/ContactPage'));
const AboutPage = React.lazy(() => import('../pages/about/AboutPage'));
const TechPage = React.lazy(() => import('../pages/tech/TechPage'));

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      
      children: [
        {
          path: "/",
          element: suspenseComponent(<AboutPage />),
        },
        {
          path: "/tech",
          element: suspenseComponent(<TechPage />),
        },
        {
          path: "/contact",
          element: suspenseComponent(<ContactPage />),
        },
      ]
    }
  ]);

export {router};