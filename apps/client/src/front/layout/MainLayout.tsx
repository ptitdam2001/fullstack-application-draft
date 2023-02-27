import { Box, CssBaseline } from "@mui/material"
import { ApplicationBar } from "../components"
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <CssBaseline />
      <ApplicationBar />
      <Box flex={1} display="flex" flexDirection="column" p={1}>
        <Outlet />
      </Box>
    </>
  )
}
