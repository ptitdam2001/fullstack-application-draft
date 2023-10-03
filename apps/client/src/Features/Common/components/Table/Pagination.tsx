import { useMemo } from 'react'
import { TablePaginationProps } from './types'
import classNames from 'classnames'

export const TablePagination = ({ currentPage, maxPage, onClick }: TablePaginationProps) => {
  const button = useMemo(() => 'text-gray-600 border hover:bg-gray-100', [])
  const selectedButton = useMemo(() => 'text-indigo-500 border-t border-b hover:bg-indigo-100 font-semibold', [])

  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
          onClick={() => onClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {new Array(maxPage).fill(null).map((_, index) => (
          <button
            type="button"
            className={classNames('w-full px-4 py-2 text-base bg-white', currentPage === index + 1 ? selectedButton : button)}
            disabled={currentPage === index + 1}
            onClick={() => onClick(index + 1)}
            key={`page-${index + 1}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
          onClick={() => onClick(currentPage + 1)}
          disabled={currentPage === maxPage}
        >
          <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
