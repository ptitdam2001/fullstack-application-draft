import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { theme } from '../../theme'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
