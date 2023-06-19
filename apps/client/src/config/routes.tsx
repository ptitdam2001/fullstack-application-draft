import { NotFound } from '@feature/Common'
import { RouteObject } from 'react-router-dom'
import { DefaultLayout, ConnectedLayout } from '@front/layout'
import { Dashboard } from '@front/components'
import { AuthLayout, MyProfileForm } from '@feature/Authentication'
import { Login, ResetPassword } from '@front/pages'

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
          },
          {
            path: 'my-first-page',
            element: <span>My first page</span>,
          },
        ],
      },
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
    ],
  },
] as RouteObject[]
