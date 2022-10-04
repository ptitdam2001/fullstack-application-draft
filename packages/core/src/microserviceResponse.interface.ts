export interface MicroserviceResponse<T> {
  status: number
  message: string
  user: T | null
  errors?: { [key: string]: any } | null
}
