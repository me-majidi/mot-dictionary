import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from './components/base-layout'
import DefinitionPage from './pages/definition-page'
import NotFoundPage from './pages/not-found-page'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'definition/english/:word',
        element: <DefinitionPage />,
      },
    ],
    errorElement: (
      <BaseLayout>
        <NotFoundPage />
      </BaseLayout>
    ),
  },
]

const router = createBrowserRouter(routes)

export default router
