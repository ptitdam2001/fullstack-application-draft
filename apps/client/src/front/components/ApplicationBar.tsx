import { MyProfilMenu, Signout } from "@feature/Authentication";
import { Row, Col, Typography } from "antd";

export const ApplicationBar = () => {
	return (
		<Row wrap={false} justify={"center"} align="middle">
			<Col flex="auto">
				<Typography.Title type="danger" level={2} style={{ marginTop: 0 }}>
					Main
				</Typography.Title>
			</Col>
			<Col flex="none">
				<MyProfilMenu
					otherMenuElements={[<Signout redirect="/auth/signin" />]}
				/>
			</Col>
		</Row>
	);
};
