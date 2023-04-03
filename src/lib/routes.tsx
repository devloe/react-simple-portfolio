import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { suspenseComponent } from "./util";
import App from "../App";

const ContactPage = React.lazy(() => import('../components/contactPage/ContactPage'));
const AboutPage = React.lazy(() => import('../components/aboutPage/AboutPage'));
const TechPage = React.lazy(() => import('../components/techPage/TechPage'));
const CreditsPage = React.lazy(() => import('../components/creditsPage/CreditsPage'));

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
        {
          path: "/credits",
          element: suspenseComponent(<CreditsPage />),
        },
      ]
    }
  ]);

export {router};