import { useState } from 'react'
import { ReactComponent as IconSearch } from '@/assets/icons/search.svg'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (query.length) {
      navigate(`/definition/english/${query}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        className="bg-gray-100 rounded-md py-4 pl-6 pr-16 w-full text-xl font-semibold focus:outline-none border focus:border-gray-300 border-gray-100"
        placeholder="Search English"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="submit"
        className="absolute top-2 right-4"
        aria-label="Search"
        disabled={query.length === 0}
      >
        <IconSearch className="fill-gray-500" />
      </button>
    </form>
  )
}

export default SearchInput
