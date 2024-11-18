import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Compnents/Home/Home";
import FlowerShopPage from "../Compnents/Flower/Flower";
import LoginPage from "../Compnents/Login'/Login";
import RegisterPage from "../Compnents/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <FlowerShopPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
