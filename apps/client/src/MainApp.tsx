import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from './config/routes'
import { SnackbarProvider } from 'notistack'

const router = createBrowserRouter(routes)

export const MainApp = () => (
  <SnackbarProvider>
    <RouterProvider router={router} />
  </SnackbarProvider>
)
