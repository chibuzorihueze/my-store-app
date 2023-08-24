import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../components/hoc/ErrorPage";

const router = createBrowserRouter({
  path: "/",
  element: <ErrorPage />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {}
  ],
});

export default router;
