import { NotFound } from "@common/components";
import { RouteObject } from "react-router-dom";
import { MainLayout } from "@front/layout";
import { Dashboard } from "@front/components";
import { AuthLayout } from "@feature/Authentication/layout";
import { Signin } from "@feature/Authentication";

export default [
  {
    path: '/',
    element: <AuthLayout signinPath="/signin" connectedPath="/app" />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'app',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
          {
            element: <Dashboard />,
            index: true,
          }
        ]
      }
    ],
  },
  {
    path: 'signin',
    element: <Signin />,
  },
] as RouteObject[]
