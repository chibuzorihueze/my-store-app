import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../components/hoc/ErrorPage";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        index: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
