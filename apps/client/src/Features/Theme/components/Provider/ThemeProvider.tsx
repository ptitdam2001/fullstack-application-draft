import React from 'react'
import { theme } from '../../theme'
import { ConfigProvider } from 'antd'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => (
  <ConfigProvider theme={theme}>
    {children}
  </ConfigProvider>
)
