import { Avatar, Form, TextInput } from '@feature/Common/components'
import { useCurrentUser } from '@feature/Authentication/hooks'
import { Controller, useForm } from 'react-hook-form'

type FormData = {
  userName: string
  firstName: string
}

export const MyProfileForm = () => {
  const { user } = useCurrentUser()
  const { control, handleSubmit } = useForm<FormData>({
    mode: 'all',
    defaultValues: user,
  })

  const onSubmit = handleSubmit((data) => {
    console.log('>>>>>> submit', data)
  })

  console.log('----', user)
  return (
    <Form name="profile" onSubmit={onSubmit}>
      <>
        <Avatar size={100} shape="square" imgSrc={user.avatar} />

        <Controller
          name="userName"
          control={control}
          render={({ field, fieldState: { error } }) => <TextInput {...field} error={error?.message} required label="Username" />}
        />

        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState: { error } }) => <TextInput {...field} error={error?.message} required label="First name" />}
        />
      </>
    </Form>
  )
}
