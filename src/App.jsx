import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Negative from "./pages/404/Negative";
import Uslugi from "./pages/Uslugi/Uslugi";
import Carier from "./pages/Carier/Carier";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import Geographi from "./pages/Geographi/Geographi";
import News from "./pages/News/News";
import Obj from "./pages/Object/Obj";
import Otzivi from "./pages/Otzivi/Otzivi";
import Technica from "./pages/Technica/Technica";
import Uslugi2 from "./pages/Uslugi2/Uslugi2";
import Technica2 from "./pages/Technica2/Technica2";
import News2 from "./pages/News2/News2";
import Obj2 from "./pages/Object2/Obj2";
import Carier2 from "./pages/Carier2/Carier2";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "uslugi",
          element: <Uslugi />,
        },
        {
          path: "uslugi2",
          element: <Uslugi2 />,
        },
        {
          path: "project",
          element: <Project />,
        },
        {
          path: "404",
          element: <Negative />,
        },
        {
          path: "carier",
          element: <Carier />,
        },
        {
          path: "carier2",
          element: <Carier2 />,
        },
        {
          path: "company",
          element: <Company />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "geographi",
          element: <Geographi />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "news2",
          element: <News2 />,
        },
        {
          path: "object",
          element: <Obj />,
        },
        {
          path: "object2",
          element: <Obj2 />,
        },
        {
          path: "otzivi",
          element: <Otzivi />,
        },
        {
          path: "technica",
          element: <Technica />,
        },
        {
          path: "technica2",
          element: <Technica2 />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Negative />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
