import { Signin } from "@feature/Authentication";
import { Button, Card, Divider, Layout, Space } from "antd";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();

	const handleConnected = () => {
		navigate("/app");
	};

	return (
		<Space
			style={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Card
				style={{
					height: "auto",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Space direction="vertical">
					<Signin onConnectionDone={handleConnected} />
					<Divider />
					<Button href="/auth/forgotten-password">Forgotten password?</Button>
				</Space>
			</Card>
		</Space>
	);
};
