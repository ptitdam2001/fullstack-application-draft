import { graphql } from "msw";

export const handlers = [
	// Handles a "Login" mutation
	graphql.mutation("Login", (req, res, ctx) => {
		const { login } = req.variables;

		sessionStorage.setItem("is-authenticated", login);
		return res(
			ctx.data({
				login: {
					sessionId: "abc-123",
				},
			}),
		);
	}),

	graphql.query("Logout", (req, res, ctx) => {
		sessionStorage.removeItem("is-authenticated");
		return res(
			ctx.data({
				logout: true,
			}),
		);
	}),

	// Handles a "GetUserInfo" query
	graphql.query("GetUserInfo", (req, res, ctx) => {
		const authenticatedUser = sessionStorage.getItem("is-authenticated");
		if (!authenticatedUser) {
			// When not authenticated, respond with an error
			return res(
				ctx.errors([
					{
						message: "Not authenticated",
						errorType: "AuthenticationError",
					},
				]),
			);
		}
		// When authenticated, respond with a query payload
		return res(
			ctx.data({
				user: {
					username: authenticatedUser,
					firstName: "John",
				},
			}),
		);
	}),

	graphql.mutation("ResetPasswordMutation", (req, res, ctx) => {
		return res(
			ctx.data({
				redirection: "/reset-paswword/auth_token_123",
				status: "email_sent",
			}),
		);
	}),
];
