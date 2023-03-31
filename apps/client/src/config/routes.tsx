import { NotFound } from "@common/components";
import { RouteObject } from "react-router-dom";
import { DefaultLayout, ConnectedLayout } from "@front/layout";
import { Dashboard } from "@front/components";
import { AuthLayout } from "@feature/Authentication/layout";
import { Login, ResetPassword } from "@front/pages";
import { MyProfileForm } from "@feature/Authentication";

export default [
  {
    path: '/',
    element: <AuthLayout signinPath="/auth/signin" connectedPath="/app" />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'app',
        element: <ConnectedLayout />,
        errorElement: <NotFound />,
        children: [
          {
            element: <Dashboard />,
            index: true,
          },
          {
            path: 'my-profile',
            element: <MyProfileForm />,
          }
        ]
      }
    ],
  },
  {
    path: 'auth',
    element: <DefaultLayout />,
    children: [
      {
        path: 'signin',
        element: <Login />,
        index: true,
      },
      {
        path: 'forgotten-password',
        element: <ResetPassword />,
      },

    ]
  }

] as RouteObject[]
