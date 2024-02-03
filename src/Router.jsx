import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Store from "./components/Store.jsx";
import Cart from "./components/Cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Home /> },
        { path: "store", element: <Store /> },
        { path: "cart", element: <Cart /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
