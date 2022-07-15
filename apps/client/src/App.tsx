import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Route, Routes } from 'react-router-dom'
import { CalendarMainPage } from './Calendar/pages/main'

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calendar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box flex={1} display="flex" flexDirection="column" p={1}>
        <Routes>
          <Route path="/" element={<CalendarMainPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
