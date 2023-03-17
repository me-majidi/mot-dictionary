import { lazy, Suspense } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from './components/base-layout'
import SearchSkeleton from './pages/definition-page/components/search-skeleton'
import NotFoundPage from './pages/not-found-page'

const LazyDefinitionPage = lazy(() => import('./pages/definition-page'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'definition/english/:query',
        element: (
          <Suspense fallback={<SearchSkeleton />}>
            <LazyDefinitionPage />
          </Suspense>
        ),
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
