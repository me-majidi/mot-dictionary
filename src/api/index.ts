import { SearchResultEntry } from '@/types'

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2'

export const search = (query: string): Promise<SearchResultEntry[]> => {
  return fetch(`${BASE_URL}/entries/en/${query}`).then((response) => {
    if (!response.ok) {
      return response.json().then((errBody) => {
        return Promise.reject(errBody)
      })
    }

    return response.json()
  })
}
