import React from "react";

import { ThemeProvider } from "@feature/Theme/components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./config/routes";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter(routes);

export const MainApp = () => (
	<ThemeProvider>
		<SnackbarProvider>
			<RouterProvider router={router} />
		</SnackbarProvider>
	</ThemeProvider>
);
