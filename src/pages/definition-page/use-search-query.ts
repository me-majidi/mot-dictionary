import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { search } from '@/api'
import { useEffect } from 'react'
import { SearchResultEntry } from '@/types'

type SearchError = {
  title: string
  message: string
}

const useSearchQuery = () => {
  const { query } = useParams()
  const info = useQuery<SearchResultEntry[], SearchError>(
    query as string,
    ({ queryKey }) => search(queryKey[0] as string),
    {
      retry: false,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  )

  const { refetch } = info
  useEffect(() => {
    if (query) {
      refetch()
    }
  }, [query, refetch])

  return { query, ...info }
}

export default useSearchQuery
