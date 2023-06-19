import { useNavigate } from 'react-router-dom'
import { useQuery } from 'urql'
import { unsetAuth } from '../helpers'
import { LogoutIcon } from '@feature/Common'

const QUERY_LOGOUT = `query Logout{
  result {
    logout
  }
}`

type Props = {
  redirect?: string
}

export const Signout = ({ redirect = '/' }: Props) => {
  const [result, doLogout] = useQuery<{ result: { logout: boolean } }, {}>({
    query: QUERY_LOGOUT,
  })
  const navigate = useNavigate()

  const handleDisconnect = async () => {
    try {
      await doLogout()
      if (result.error) {
        console.log('Error Login:', result.error)
      } else {
        await unsetAuth()
        navigate(redirect)
      }
    } catch (err) {
      console.log('Error Logout:', err)
    }
  }

  return (
    <button onClick={handleDisconnect}>
      <LogoutIcon className="w-6 h-6" />
    </button>
  )
}
