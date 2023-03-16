import BaseContainer from './base-container'
import { ReactComponent as IconBookmarks } from '@/assets/icons/bookmarks.svg'
import { Link, Outlet } from 'react-router-dom'
import SearchInput from './search-form'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <header className="border-b border-b-gray-200 py-4">
        <BaseContainer className="flex items-center justify-between">
          <Link to="/">
            MOT <b className="font-extrabold">Learner's Dictionary</b>
          </Link>
          <IconBookmarks className="fill-gray-400" />
        </BaseContainer>
      </header>

      <BaseContainer className="mt-6">
        <SearchInput />

        <main>{children ?? <Outlet />}</main>
      </BaseContainer>
    </div>
  )
}

export default BaseLayout
