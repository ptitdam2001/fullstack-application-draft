import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useQuery } from 'urql';

type Props = {
  children: JSX.Element;
  signinPath: string;
  connectedMainPath: string;
}

const queryCurrentClient = `query GetUserInfo {
  result {
    user {
      username
      firstName
    }
  }
}`

export const AuthenticationProvider = ({ children, signinPath, connectedMainPath }: Props) => {
  const navigate = useNavigate()
  const [result, reexecuteQuery] = useQuery({
    query: queryCurrentClient,
  });
  const { data, fetching, error } = result;

  useEffect(() => {
    /** @todo - check user is authenticated - redirect to signin or main */
    if (!fetching && (error || !data)) {
      navigate(signinPath)
    }

    if (!fetching && data) {
      navigate(connectedMainPath)
    }
  }, [error, fetching, data])

  if (fetching) {return <p>Loading...</p>;}
  if (error) {return <p>Oh no... {error.message}</p>;}

  return children
}
