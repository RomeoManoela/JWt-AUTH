import { JSX } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ui/AppLayout.tsx'
import Home from './ui/Home.tsx'
import Login from './user/Login.tsx'
import Register from './user/Register.tsx'
import Guard from './services/Guard.tsx'
import Dashboard from './user/Dashboard.tsx'
import { guardLoader } from './services/loaders.ts'
import { loginAction, registerAction } from './services/actions.ts'
import Error from './ui/Error.tsx'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          element: (
            <Guard>
              <Dashboard />
            </Guard>
          ),
          path: '/dashboard',
          loader: guardLoader,
          errorElement: <Error />,
        },
        {
          path: '/',
          element: <Home />,
          loader: guardLoader,
        },
        {
          path: '/login',
          element: <Login />,
          action: loginAction,
          errorElement: <Error />,
        },
        {
          path: '/register',
          element: <Register />,
          errorElement: <Error />,
          action: registerAction,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
