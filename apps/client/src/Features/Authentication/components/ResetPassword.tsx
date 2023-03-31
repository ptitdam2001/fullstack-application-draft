import { Button, Grid, Input, Space } from "antd";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "urql";

type FormData = {
	email: string;
};

const MUTATION_RESET_PASSWORD = `mutation ResetPasswordMutation($email: String!) {
  ResetPassword(email: $email) {
    sessionId
  }
}`;

type Props = {
	onSuccess: () => void;
};

export const ResetPassword = ({ onSuccess }: Props) => {
	const [result, doResetPassword] = useMutation(MUTATION_RESET_PASSWORD);
	const { enqueueSnackbar } = useSnackbar();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = handleSubmit(async (data) => {
		try {
			const result = await doResetPassword(data);

			if (result.error) {
				console.log("Error Reset Password:", result.error);
				enqueueSnackbar({
					message: "An error during reset password",
					variant: "error",
				});
			} else {
				enqueueSnackbar({
					message: "An email was sent to reset your password",
					variant: "success",
				});
				onSuccess();
			}
		} catch (err) {
			console.log("Error Reset Password:", err);
			enqueueSnackbar({
				message: "An error during reset password",
				variant: "error",
			});
		}
	});

	return (
		<form onSubmit={onSubmit}>
			<Space>
				<Controller
					name="email"
					rules={{ required: true }}
					control={control}
					render={({ field }) => (
						<Input {...field} type='email' placeholder="Tape your email" />
					)}
				/>

				<Button htmlType="submit" type="primary">
					Reinit.
				</Button>
			</Space>
		</form>
	);
};
