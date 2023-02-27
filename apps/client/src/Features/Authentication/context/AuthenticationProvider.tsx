import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
  signinPath: string;
  connectedMainPath: string;
}

export const AuthenticationProvider = ({ children, signinPath, connectedMainPath }: Props) => {
  const navigate = useNavigate()

  useEffect(() => {
    /** @todo - check user is authenticated - redirect to signin or main */
    navigate(connectedMainPath)
  }, [])

  return children
}
