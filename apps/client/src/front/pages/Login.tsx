import { Signin } from '@feature/Authentication'
import { Card, PrimaryButton } from '@feature/Common'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const handleConnected = () => {
    navigate('/app')
  }

  return (
    <section role="login" className="w-full p-4">
      <Card direction="column">
        <Signin onConnectionDone={handleConnected} />
        <PrimaryButton to="/auth/forgotten-password">Forgotten password?</PrimaryButton>
      </Card>
    </section>
  )
}
