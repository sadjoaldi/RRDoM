import { createBrowserRouter } from "react-router-dom";
import DetailPage from "./DetailPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import SearchPage from "./SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/detailpage",
        element: <DetailPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
