import { useNavigate } from "react-router-dom"

import { ResetPassword as ResetPasswordComponent } from "@feature/Authentication"

export const ResetPassword = () => {
  const navigate = useNavigate()

  const handleResetPasswordSucceed = () => {
    navigate('/auth/signin')
  }

  return <ResetPasswordComponent onSuccess={handleResetPasswordSucceed} />
}
