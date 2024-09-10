import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./pages/app/dashboard";
import { Login } from "./pages/auth/login";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { LoginAdd } from "./pages/auth/login-add";

export const router = createBrowserRouter([
    {
      path: "/",
      element:  <AppLayout/>,
      children: [{ path: "/", element: <DashBoard />}],
    },
    {
      path: "/",
      element: <AuthLayout/>,
      children: [
        { path: "/sign-in", element: <Login />},
        { path: "/sign-add", element: <LoginAdd />}
      ],
    },
])