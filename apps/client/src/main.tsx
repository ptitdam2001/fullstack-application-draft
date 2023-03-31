import React from "react";
import ReactDOM from "react-dom/client";
import { createClient, Provider } from "urql";
import { getAuth } from "@feature/Authentication";

import "./main.css";

// For starting Mock GraphQL server
import serverMocker from "./mocks/server";
import { MainApp } from "./MainApp";

// GraphQL client
const graphQLClient = createClient({
	url: import.meta.env.VITE_GRAPHQL_URL,
	fetchOptions: () => {
		const sessionId = getAuth({});
		if (sessionId) {
			return {
				headers: { authorization: `Bearer ${sessionId}` },
			};
		}
		return {};
	},
});

await serverMocker();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<React.Suspense fallback="loading">
			<Provider value={graphQLClient}>
				<MainApp />
			</Provider>
		</React.Suspense>
	</React.StrictMode>,
);
