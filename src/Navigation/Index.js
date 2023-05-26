import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Index";
import About from "../pages/About/Index";
import Javascripts from "../pages/Javascripts/Index";
import Layout from "../Layout/Index";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "action",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/javascripts",
        element: <Javascripts/>,
      },
    ],
  },
]);
