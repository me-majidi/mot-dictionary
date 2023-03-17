import SearchSkeleton from '@/pages/definition-page/components/search-skeleton'
import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import WordHeadline from './components/word-headline'
import WordMeaning from './components/word-meaning'
import useSearchQuery from './use-search-query'

const DefinitionPage = () => {
  const navigate = useNavigate()
  const { query, isLoading, isError, data, error } = useSearchQuery()

  if (!query) {
    navigate('/', { replace: true })
    return null
  }

  if (isLoading) {
    return <SearchSkeleton />
  }

  if (isError) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-xl font-semibold mb-3">{error.title}</h1>
        <h2 className="text-lg text-gray-400">{error.message}</h2>
      </div>
    )
  }

  if (Array.isArray(data) && data.length > 0) {
    const searchResult = data[0]

    return (
      <>
        <WordHeadline
          word={searchResult.word}
          phonetic={searchResult.phonetic}
          phoneticAudioSrc={searchResult.phonetics?.[0]?.audio}
        />

        <ul>
          {searchResult.meanings.map((m) => (
            <li key={m.partOfSpeech}>
              <WordMeaning {...m} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default DefinitionPage as FunctionComponent
