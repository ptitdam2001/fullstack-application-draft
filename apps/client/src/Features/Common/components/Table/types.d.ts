import { ReactElement, ReactNode } from 'react'

export type TableCol<T> = {
  key: string
  label: string
  render?: (line: T) => ReactElement
}

export type TableRowAction<T> = {
  icon?: ReactElement
  label?: string
  onClick: (item: T) => void
  disable?: boolean | ((item: T) => boolean)
}
