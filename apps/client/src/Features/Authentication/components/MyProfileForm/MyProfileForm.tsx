import { Avatar, Form, TextInput } from '@feature/Common/components'
import { useCurrentUser } from '@feature/Authentication/hooks'

export const MyProfileForm = () => {
  const { user } = useCurrentUser()
  console.log('----', user)
  return (
    <Form name="profile">
      <>
        <Avatar size={100} shape="square" />
        <TextInput value={user.username} label="Username" name="username" />
        <TextInput value={user.firstName} label="First name" name="firstName" />
      </>
    </Form>
  )
}
