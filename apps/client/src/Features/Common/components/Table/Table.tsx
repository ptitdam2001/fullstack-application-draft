import { ReactElement } from 'react'
import { TablePagination } from './Pagination'
import { TableCol, TableRowAction } from './types'
import { RowActions } from './RowActions'

type TableProps<T> = {
  columns: TableCol<T>[]
  data: T[]
  title?: string | ReactElement
  rowActions?: TableRowAction<T>[]
}

const Table = <T extends { [k: string]: any }>({ columns, data, title, rowActions }: TableProps<T>) => (
  <div className="container max-w-3xl px-4 mx-auto sm:px-8">
    <div className="py-8">
      <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
        <h2 className="text-2xl leading-tight">{title}</h2>
        <div className="text-end"></div>
      </div>
      <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    id={`col-${column.key}`}
                    scope="col"
                    className="px-5 py-3 text-sm text-left font-bold text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    {column.label}
                  </th>
                ))}

                <th scope="col" className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((line, index) => (
                <tr key={index}>
                  {columns.map(({ key, render }) => (
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      {line[key] ? render?.(line) || <p className="text-gray-900 whitespace-no-wrap">{line[key]}</p> : null}
                    </td>
                  ))}
                  {/* Actions */}
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {rowActions && <RowActions<T> row={line} rowActions={rowActions} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <TablePagination />
        </div>
      </div>
    </div>
  </div>
)

export default Table
