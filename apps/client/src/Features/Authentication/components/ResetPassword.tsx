import { EmailInput, PrimaryButton } from '@feature/Common'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'urql'

type FormData = {
  email: string
}

const MUTATION_RESET_PASSWORD = `mutation ResetPasswordMutation($email: String!) {
  ResetPassword(email: $email) {
    sessionId
  }
}`

type Props = {
  onSuccess: () => void
}

export const ResetPassword = ({ onSuccess }: Props) => {
  const [result, doResetPassword] = useMutation(MUTATION_RESET_PASSWORD)
  const { enqueueSnackbar } = useSnackbar()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await doResetPassword(data)

      if (result.error) {
        console.log('Error Reset Password:', result.error)
        enqueueSnackbar({
          message: 'An error during reset password',
          variant: 'error',
        })
      } else {
        enqueueSnackbar({
          message: 'An email was sent to reset your password',
          variant: 'success',
        })
        onSuccess()
      }
    } catch (err) {
      console.log('Error Reset Password:', err)
      enqueueSnackbar({
        message: 'An error during reset password',
        variant: 'error',
      })
    }
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col p-2 gap-2">
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => <EmailInput {...field} placeholder="Tape your email" required error={error?.message} />}
      />

      <PrimaryButton type="submit">Reinit.</PrimaryButton>
    </form>
  )
}
