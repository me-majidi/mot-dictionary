const SearchSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="skeleton w-[150px] h-[48px]"></div>
          <div className="skeleton w-[50px] h-[24px] mt-2"></div>
        </div>

        <div className="w-[80px] h-[80px] !rounded-full skeleton"></div>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="w-[250px] h-[24px] skeleton "></li>
        <li className="w-[150px] h-[24px] skeleton "></li>
        <li className="w-[350px] h-[24px] skeleton "></li>
        <li className="w-[50px] h-[24px] skeleton "></li>
        <li className="w-[250px] h-[24px] skeleton "></li>
        <li className="w-[350px] h-[24px] skeleton "></li>
        <li className="w-[200px] h-[24px] skeleton "></li>
      </ul>
    </>
  )
}

export default SearchSkeleton
