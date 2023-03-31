import { Card } from "antd";
import { useRouteError } from "react-router-dom";

export const NotFound = () => {
	const error = useRouteError();

	return (
		<Card>
			<p>Page not found!</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</Card>
	);
};
