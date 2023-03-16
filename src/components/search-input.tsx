type SearchInputProps = React.ComponentPropsWithoutRef<'input'> & {
  isLoading?: boolean
}

const SearchInput = ({ isLoading, ...props }: SearchInputProps) => {
  return (
    <>
      <input
        {...props}
        className="bg-gray-100 rounded-md py-4 px-6 w-full text-xl font-semibold focus:outline-none border focus:border-gray-300 border-gray-100"
        placeholder="Search English"
        type="search"
      />
    </>
  )
}

export default SearchInput
