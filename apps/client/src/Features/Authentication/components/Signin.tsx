import { gql, useMutation } from 'urql'
import { setAuth } from '../helpers'
import { loginSchema } from '../config/validators'
import { Form, FormField, PasswordInput, PrimaryButton, TextInput } from '@feature/Common'

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
  const [, doLogin] = useMutation(MUTATION_LOGIN)

  const onSubmit = async (data: Partial<FormData>) => {
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
  }

  return (
    <Form<FormData> name="signin" onSubmit={onSubmit} className="py-2 flex flex-col gap-2" validation={loginSchema} mode="all">
      <>
        <FormField name="login">
          {({ field, fieldState: { error } }) => <TextInput {...field} error={error?.message} label="Login" required />}
        </FormField>

        <FormField name="password">
          {({ field, fieldState: { error } }) => <PasswordInput {...field} error={error?.message} label="Password" />}
        </FormField>

        <PrimaryButton type="submit">Signin</PrimaryButton>
      </>
    </Form>
  )
}
