import { useNavigate } from 'react-router-dom'

import { ResetPassword as ResetPasswordComponent } from '@feature/Authentication'
import { Card } from '@feature/Common'

export const ResetPassword = () => {
  const navigate = useNavigate()

  const handleResetPasswordSucceed = () => {
    navigate('/auth/signin')
  }

  return (
    <section role="reset-password" className="flex flex-col w-full p-4">
      <Card direction="column">
        <ResetPasswordComponent onSuccess={handleResetPasswordSucceed} />
      </Card>
    </section>
  )
}
