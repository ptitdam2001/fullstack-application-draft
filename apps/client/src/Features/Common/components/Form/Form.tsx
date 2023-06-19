import { ReactElement } from 'react'

// type FormProps<T> = AntFormProps<T>;

type FormProps = {
  name?: string
  onSubmit?: () => void
  children: ReactElement
}

export const Form = <T,>({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>
}
// Form.Item = AntForm.Item;
