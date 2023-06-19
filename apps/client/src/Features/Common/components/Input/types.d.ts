import { InputHTMLAttributes } from "react"

export interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
}
