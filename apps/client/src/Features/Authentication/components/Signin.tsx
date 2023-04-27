import { Button, Input, Space, Typography } from "antd";
import { useForm, Controller } from "react-hook-form";
import { gql, useMutation, useQuery } from "urql";
import { setAuth } from "../helpers";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { loginSchema } from "../config/validators";
import { joiResolver } from '@hookform/resolvers/joi';

type FormData = {
	login: string;
	password: string;
};

const MUTATION_LOGIN = gql`
  mutation Login($login: String!, $password: String!) {
    Login(username: $login, password: $password) {
      sessionId
    }
  }
`;

type Props = {
	onConnectionDone: () => void;
};

export const Signin = ({ onConnectionDone }: Props) => {
	const [result, doLogin] = useMutation(MUTATION_LOGIN);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
    mode: 'onBlur',
    resolver: joiResolver(loginSchema),
  });

	const onSubmit = handleSubmit(async (data) => {
		try {
			const result = await doLogin(data);
			if (result.error) {
				console.log("Error Login:", result.error);
			} else {
				setAuth(result.data.login.sessionId);
				onConnectionDone();
			}
		} catch (err) {
			console.log("Error Login:", err);
		}
	});

	return (
		<Space align="center">
			<form onSubmit={onSubmit}>
				<Space size={[8, 16]} direction="vertical">
					<Controller
						name="login"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<>
								<Input {...field} />

								{error && (
									<Typography.Text type="danger">
										{error.message}
									</Typography.Text>
								)}
							</>
						)}
					/>

					<Controller
						name="password"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<>
								<Input.Password
									{...field}
									iconRender={(visible) =>
										visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
									}
								/>

								{error && (
									<Typography.Text type="danger">
										{error.message}
									</Typography.Text>
								)}
							</>
						)}
					/>

					<Space size={[4, 8]} align="center">
						<Button type="primary" htmlType="submit">
							Signin
						</Button>
					</Space>
				</Space>
			</form>
		</Space>
	);
};
