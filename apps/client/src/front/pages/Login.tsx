import { Signin } from '@feature/Authentication'
import { Avatar, BarChartOutlined, Card, IconButton, PrimaryButton } from '@feature/Common'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`
  ${tw`
    bg-transparent
    rounded-sm
    border
    border-blue-500
    text-blue-500
    border-solid
    m-1
    px-4
    py-1
  `}
`

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
