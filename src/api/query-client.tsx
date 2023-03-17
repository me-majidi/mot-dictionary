import { QueryClient } from 'react-query'
import { persistWithIndexedDB } from './indexed-db-persistor'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

persistWithIndexedDB(queryClient)
export default queryClient
