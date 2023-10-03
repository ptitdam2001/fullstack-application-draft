import { useForm, Controller } from 'react-hook-form'
import { gql, useMutation, useQuery } from 'urql'
import { setAuth } from '../helpers'
import { loginSchema } from '../config/validators'
import { joiResolver } from '@hookform/resolvers/joi'
import { PasswordInput, PrimaryButton, TextInput } from '@feature/Common'

type FormData = {
  login: string
  password: string
}

const MUTATION_LOGIN = gql`
  mutation Login($login: String!, $password: String!) {
    Login(username: $login, password: $password) {
      sessionId
    }
  }
`

type Props = {
  onConnectionDone: () => void
}

export const Signin = ({ onConnectionDone }: Props) => {
  const [result, doLogin] = useMutation(MUTATION_LOGIN)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: joiResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await doLogin(data)
      if (result.error) {
        console.log('Error Login:', result.error)
      } else {
        setAuth(result.data.login.sessionId)
        onConnectionDone()
      }
    } catch (err) {
      console.log('Error Login:', err)
    }
  })

  return (
    <form onSubmit={onSubmit} className="py-2 flex flex-col gap-2">
      <Controller
        name="login"
        control={control}
        render={({ field, fieldState: { error } }) => <TextInput {...field} error={error?.message} required label="Login" />}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState: { error } }) => <PasswordInput {...field} error={error?.message} required label="Password" />}
      />

      <PrimaryButton type="submit">Signin</PrimaryButton>
    </form>
  )
}
